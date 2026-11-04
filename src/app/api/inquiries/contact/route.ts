import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/inquiry";
import { sendContactInquiryEmails } from "@/lib/email";
import { dataStore } from "@/lib/store";

const contactRateMap = new Map<string, number>();

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();
    const lastTime = contactRateMap.get(ip) || 0;

    if (now - lastTime < 3000) {
      return NextResponse.json(
        { error: "Too many submissions. Please wait a moment before sending another message." },
        { status: 429 }
      );
    }
    contactRateMap.set(ip, now);

    const body = await req.json();

    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Invalid input. Please correct form fields.",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Honeypot trap check
    if (data.botField && data.botField.length > 0) {
      return NextResponse.json({ success: true, message: "Message dispatched." });
    }

    // Send email notification
    const emailRes = await sendContactInquiryEmails({
      fullName: data.fullName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      companyName: data.companyName,
      subject: data.subject,
      serviceInterest: data.serviceInterest,
      message: data.message,
    });

    // Store in dataStore (MongoDB with fallback)
    const stored = await dataStore.addContact({
      fullName: data.fullName,
      email: data.email,
      phoneNumber: data.phoneNumber || undefined,
      companyName: data.companyName || undefined,
      subject: data.subject || undefined,
      serviceInterest: data.serviceInterest || undefined,
      message: data.message,
      status: "New",
      emailNotificationSent: emailRes.adminDelivered,
      notificationStatus: emailRes.adminDelivered ? "sent" : "pending_retry",
      ipAddress: ip,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! Your message has been received.",
        contactId: stored._id,
        emailStatus: {
          adminNotified: emailRes.adminDelivered,
          confirmationSent: emailRes.customerDelivered,
        },
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("[Contact API] Unhandled server error:", err);
    return NextResponse.json(
      { error: "Could not send message. Please try again later." },
      { status: 500 }
    );
  }
}
