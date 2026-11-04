import { NextRequest, NextResponse } from "next/server";
import {
  getAdminCredentials,
  verifyAdminPassword,
  checkLoginRateLimit,
  recordFailedLogin,
  resetLoginRateLimit,
} from "@/lib/admin-auth";
import { createSessionToken } from "@/lib/session";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;

    // Determine client identifier for rate limiting
    const forwarded = req.headers.get("x-forwarded-for");
    const clientIp = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";
    const rateLimitKey = `${clientIp}_${(email || "").trim().toLowerCase()}`;

    // 1. Rate Limit / Brute-Force Check
    const rateLimit = checkLoginRateLimit(rateLimitKey);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: `Too many failed login attempts. Please try again after ${rateLimit.retryAfterSec || 900} seconds.`,
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateLimit.retryAfterSec || 900),
          },
        }
      );
    }

    if (!email || !password) {
      return NextResponse.json(
        { error: "Both email and password are required." },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();
    const creds = getAdminCredentials();

    const allowedEmails = [
      creds.email.toLowerCase(),
      (process.env.ADMIN_EMAIL || "").toLowerCase(),
    ].filter(Boolean);

    const isEmailValid = allowedEmails.includes(normalizedEmail);
    const isPasswordValid = verifyAdminPassword(password);

    if (!isEmailValid || !isPasswordValid) {
      const failStatus = recordFailedLogin(rateLimitKey);
      const remainingMsg = failStatus.locked
        ? "Account temporarily locked for 15 minutes due to consecutive failed attempts."
        : "Invalid admin email or password.";

      return NextResponse.json({ error: remainingMsg }, { status: 401 });
    }

    // Reset rate limit counter on successful credentials verification
    resetLoginRateLimit(rateLimitKey);

    // 2. Generate cryptographically signed HMAC-SHA256 session token with current tokenVersion
    const sessionToken = await createSessionToken(creds.email, creds.tokenVersion, 24);

    const response = NextResponse.json({
      success: true,
      user: {
        email: creds.email,
        name: "SmartEdge Administrator",
        role: "super_admin",
      },
    });

    // 3. Set secure, HTTP-only, SameSite session cookie
    response.cookies.set({
      name: "smartedge_admin_session",
      value: sessionToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/",
    });

    return response;
  } catch (err: any) {
    console.error("[Auth] Login error:", err);
    return NextResponse.json({ error: "Authentication system failure." }, { status: 500 });
  }
}
