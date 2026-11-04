import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken } from "@/lib/session";
import { getAdminCredentials } from "@/lib/admin-auth";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("smartedge_admin_session")?.value;
    const session = await verifySessionToken(token);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const creds = getAdminCredentials();
    if (session.tokenVersion < creds.tokenVersion) {
      return NextResponse.json(
        { error: "Session invalidated. Please log in again." },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      user: {
        email: creds.email,
        role: "super_admin",
      },
    });
  } catch {
    return NextResponse.json({ error: "Session check failed." }, { status: 500 });
  }
}
