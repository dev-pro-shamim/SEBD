import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken } from "./lib/session";

export const config = {
  matcher: [
    "/admin",
    "/admin/:path*",
    "/dashboard",
    "/dashboard/:path*",
    "/api/admin/:path*",
  ],
};

export async function middleware(req: NextRequest) {
  // Allow Next.js build phase to collect page components without redirecting
  if (process.env.NEXT_PHASE === "phase-production-build") {
    return NextResponse.next();
  }

  const { pathname } = req.nextUrl;

  // 1. Allow login API and logout API
  if (pathname === "/api/admin/login" || pathname === "/api/admin/logout") {
    return NextResponse.next();
  }

  // 2. Extract session token from cookie or Authorization header
  const sessionCookie = req.cookies.get("smartedge_admin_session")?.value;
  const authHeader = req.headers.get("authorization");
  const bearerToken = authHeader?.startsWith("Bearer ")
    ? authHeader.substring(7).trim()
    : null;

  const token = sessionCookie || bearerToken;
  const session = await verifySessionToken(token);

  // 3. Handle /admin/login page
  if (pathname === "/admin/login" || pathname.startsWith("/admin/login")) {
    // If visitor is already authenticated, redirect to /admin dashboard
    if (session) {
      const redirectRes = NextResponse.redirect(new URL("/admin", req.url));
      redirectRes.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive, nosnippet");
      return redirectRes;
    }
    // If NOT authenticated, allow them to view the login form immediately
    const loginRes = NextResponse.next();
    loginRes.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive, nosnippet");
    return loginRes;
  }

  // 4. Handle all other /api/admin/* endpoints
  if (pathname.startsWith("/api/admin")) {
    if (!session) {
      const unauthRes = NextResponse.json(
        { error: "Unauthorized. Admin session required." },
        { status: 401 }
      );
      unauthRes.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive, nosnippet");
      return unauthRes;
    }
    const apiRes = NextResponse.next();
    apiRes.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive, nosnippet");
    return apiRes;
  }

  // 5. Handle /dashboard routes
  if (pathname === "/dashboard" || pathname.startsWith("/dashboard")) {
    const dest = session ? "/admin" : "/admin/login";
    const dashRes = NextResponse.redirect(new URL(dest, req.url));
    dashRes.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive, nosnippet");
    return dashRes;
  }

  // 6. Handle all /admin and /admin/* routes
  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    if (!session) {
      const loginRedirect = NextResponse.redirect(new URL("/admin/login", req.url));
      loginRedirect.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive, nosnippet");
      return loginRedirect;
    }
    const adminRes = NextResponse.next();
    adminRes.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive, nosnippet");
    return adminRes;
  }

  return NextResponse.next();
}
