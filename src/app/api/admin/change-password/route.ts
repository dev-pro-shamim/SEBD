import { NextRequest, NextResponse } from "next/server";
import {
  verifyAdminPassword,
  saveAdminPassword,
  getAdminCredentials,
} from "@/lib/admin-auth";
import { verifySessionToken } from "@/lib/session";

export async function POST(req: NextRequest) {
  try {
    // 1. Verify active administrator session
    const token = req.cookies.get("smartedge_admin_session")?.value;
    const session = await verifySessionToken(token);

    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized. Valid administrator session required." },
        { status: 401 }
      );
    }

    const currentCreds = getAdminCredentials();
    if (session.tokenVersion < currentCreds.tokenVersion) {
      return NextResponse.json(
        { error: "Session expired or invalidated. Please log in again." },
        { status: 401 }
      );
    }

    const { currentPassword, newPassword } = await req.json();

    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { error: "Both current password and new password are required." },
        { status: 400 }
      );
    }

    if (newPassword.length < 8) {
      return NextResponse.json(
        { error: "New password must be at least 8 characters long." },
        { status: 400 }
      );
    }

    // 2. Verify current password strictly against stored bcrypt hash
    const isCurrentValid = verifyAdminPassword(currentPassword);
    if (!isCurrentValid) {
      return NextResponse.json(
        { error: "Current password does not match our records." },
        { status: 401 }
      );
    }

    if (currentPassword === newPassword) {
      return NextResponse.json(
        { error: "New password must be different from current password." },
        { status: 400 }
      );
    }

    // 3. Save new password: hashes with bcrypt, updates file, increments tokenVersion
    const saved = saveAdminPassword(newPassword);
    if (!saved) {
      return NextResponse.json(
        { error: "Failed to persist new credentials to storage." },
        { status: 500 }
      );
    }

    // 4. Invalidate current session cookie and force re-login
    const response = NextResponse.json({
      success: true,
      requiresLogin: true,
      message:
        "Admin password successfully updated. All active sessions have been invalidated. Please log in again using your new password.",
    });

    response.cookies.set({
      name: "smartedge_admin_session",
      value: "",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 0,
      path: "/",
    });

    return response;
  } catch (err: any) {
    console.error("[Auth] Password change error:", err);
    return NextResponse.json({ error: "Failed to update password." }, { status: 500 });
  }
}
