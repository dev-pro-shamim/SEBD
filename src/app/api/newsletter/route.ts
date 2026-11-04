import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { NewsletterSubscriber } from "@/lib/models/NewsletterSubscriber";
import { newsletterSchema } from "@/lib/validations/inquiry";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = newsletterSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    try {
      const db = await connectToDatabase();
      if (db) {
        await NewsletterSubscriber.findOneAndUpdate(
          { email: parsed.data.email },
          { email: parsed.data.email, active: true, subscribedAt: new Date() },
          { upsert: true }
        );
      }
    } catch (e) {
      console.warn("[Newsletter] Database operation note:", e);
    }

    return NextResponse.json({
      success: true,
      message: "You have been subscribed to SmartEdge Bangladesh insights.",
    });
  } catch (err: any) {
    return NextResponse.json({ error: "Could not complete subscription." }, { status: 500 });
  }
}
