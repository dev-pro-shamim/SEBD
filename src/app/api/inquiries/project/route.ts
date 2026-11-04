import { NextRequest, NextResponse } from "next/server";
import { projectInquirySchema } from "@/lib/validations/inquiry";
import { sendProjectInquiryEmails } from "@/lib/email";
import { dataStore } from "@/lib/store";

// Simple in-memory rate limiting map for basic spam suppression
const rateLimitMap = new Map<string, number>();

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();
    const lastRequestTime = rateLimitMap.get(ip) || 0;

    // Reject requests made within 3 seconds of previous from same IP
    if (now - lastRequestTime < 3000) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a few moments before trying again." },
        { status: 429 }
      );
    }
    rateLimitMap.set(ip, now);

    const body = await req.json();

    // 1. Zod Validation
    const validationResult = projectInquirySchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Validation failed. Please review your inputs.",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // 2. Honeypot check (bot trap)
    if (data.botField && data.botField.length > 0) {
      return NextResponse.json({ success: true, message: "Inquiry received successfully." });
    }

    // 3. Dispatch Email Notification & Customer Confirmation
    const emailResult = await sendProjectInquiryEmails({
      fullName: data.fullName,
      businessEmail: data.businessEmail,
      phoneNumber: data.phoneNumber,
      companyName: data.companyName,
      websiteUrl: data.websiteUrl,
      country: data.country,
      serviceRequired: data.serviceRequired,
      projectBudget: data.projectBudget,
      projectTimeline: data.projectTimeline,
      projectDescription: data.projectDescription,
      additionalRequirements: data.additionalRequirements,
    });

    // 4. Connect to Data Store (MongoDB with resilient fallback)
    const storedRecord = await dataStore.addInquiry({
      fullName: data.fullName,
      businessEmail: data.businessEmail,
      phoneNumber: data.phoneNumber,
      companyName: data.companyName,
      websiteUrl: data.websiteUrl || undefined,
      country: data.country,
      serviceRequired: data.serviceRequired,
      projectBudget: data.projectBudget,
      projectTimeline: data.projectTimeline,
      projectDescription: data.projectDescription,
      additionalRequirements: data.additionalRequirements || undefined,
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
          "Thank you! Your project inquiry has been received. Our senior engineering team will contact you within 24 hours.",
        inquiryId: storedRecord._id,
        emailStatus: {
          adminNotified: emailResult.adminDelivered,
          confirmationSent: emailResult.customerDelivered,
          note: emailResult.error || undefined,
        },
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("[Project Inquiry API] Unhandled server error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your inquiry. Please try again." },
      { status: 500 }
    );
  }
}
