import { NextRequest, NextResponse } from "next/server";
import { quoteLeadSchema } from "@/lib/validations/quote";
import { sendQuoteLeadEmails } from "@/lib/email";
import { dataStore } from "@/lib/store";

// Rate limiting map to prevent rapid spam or bot abuse
const rateLimitMap = new Map<string, number>();

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
    const now = Date.now();
    const lastRequestTime = rateLimitMap.get(ip) || 0;

    // Rate limit: 1 request every 3 seconds per IP
    if (now - lastRequestTime < 3000) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment before resubmitting." },
        { status: 429 }
      );
    }
    rateLimitMap.set(ip, now);

    const body = await req.json();

    // 1. Zod Validation
    const validationResult = quoteLeadSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Please complete all required fields correctly.",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // 2. Honeypot check (catches automated spam scripts)
    if (data.botField && data.botField.length > 0) {
      return NextResponse.json({
        success: true,
        message: "Your inquiry has been received successfully.",
      });
    }

    // 3. Dispatch Email Notification directly to official company email
    const emailResult = await sendQuoteLeadEmails({
      fullName: data.fullName,
      phoneNumber: data.phoneNumber,
      email: data.email,
      companyName: data.companyName,
      companyAddress: data.companyAddress,
      websiteType: data.websiteType,
      projectDescription: data.projectDescription,
      projectBudget: data.projectBudget,
      projectTimeline: data.projectTimeline,
      meetingDate: data.meetingDate,
      meetingTime: data.meetingTime,
      meetingType: data.meetingType,
    });

    // 4. Save to Unified Store (MongoDB + resilient fallback)
    const storedRecord = await dataStore.addInquiry({
      fullName: data.fullName,
      businessEmail: data.email,
      phoneNumber: data.phoneNumber,
      companyName: data.companyName || "Not specified",
      companyAddress: data.companyAddress || undefined,
      websiteType: data.websiteType,
      country: "Bangladesh",
      serviceRequired: `${data.websiteType} Development`,
      projectBudget: data.projectBudget,
      projectTimeline: data.projectTimeline,
      projectDescription: `[Website Type: ${data.websiteType}]\n[Preferred Meeting: ${data.meetingDate} at ${data.meetingTime} (${data.meetingType})]\n[Company Address: ${data.companyAddress || "N/A"}]\n\n${data.projectDescription}`,
      meetingDate: data.meetingDate,
      meetingTime: data.meetingTime,
      meetingType: data.meetingType,
      status: "New",
      emailNotificationSent: emailResult.adminDelivered,
      customerConfirmationSent: emailResult.customerDelivered,
      notificationStatus: emailResult.adminDelivered ? "sent" : "pending_retry",
      ipAddress: ip,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Your project inquiry has been received. Our solutions team will get in touch with you to discuss the best solution.",
        leadId: storedRecord._id,
        emailStatus: {
          adminNotified: emailResult.adminDelivered,
          confirmationSent: emailResult.customerDelivered,
          note: emailResult.error || undefined,
        },
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("[Quote Lead API Error]:", err);
    return NextResponse.json(
      {
        error:
          "An unexpected server error occurred while processing your request. Please try again or reach out directly on WhatsApp.",
      },
      { status: 500 }
    );
  }
}
