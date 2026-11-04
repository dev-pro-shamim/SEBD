import { NextRequest, NextResponse } from "next/server";
import { dataStore } from "@/lib/store";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      phone,
      positionSlug,
      positionTitle,
      portfolioUrl,
      linkedinUrl,
      resumeFileName,
      coverLetter,
    } = body;

    if (!fullName || !email || !phone || !positionSlug) {
      return NextResponse.json(
        { error: "Full name, email, phone, and position are required." },
        { status: 400 }
      );
    }

    const application = await dataStore.addJobApplication({
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      positionSlug,
      positionTitle: positionTitle || positionSlug,
      portfolioUrl: portfolioUrl?.trim() || undefined,
      linkedinUrl: linkedinUrl?.trim() || undefined,
      resumeFileName: resumeFileName?.trim() || undefined,
      coverLetter: coverLetter?.trim() || undefined,
      status: "New",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your application has been received! Our talent acquisition team will review your profile.",
        applicationId: application._id,
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("[Careers Apply API Error]:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while submitting your application." },
      { status: 500 }
    );
  }
}
