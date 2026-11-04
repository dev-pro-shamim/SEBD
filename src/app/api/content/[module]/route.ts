import { NextRequest, NextResponse } from "next/server";
import { cmsStore } from "@/lib/cms-store";

interface RouteProps {
  params: { module: string };
}

// Public read-only content endpoint for frontend website components
export async function GET(req: NextRequest, { params }: RouteProps) {
  try {
    const { module } = params;

    switch (module) {
      case "homepage":
        return NextResponse.json({ success: true, data: cmsStore.getHomepage() });
      case "company":
        return NextResponse.json({ success: true, data: cmsStore.getCompany() });
      case "services":
        return NextResponse.json({ success: true, data: cmsStore.getServices() });
      case "portfolio":
        return NextResponse.json({ success: true, data: cmsStore.getPortfolio() });
      case "cases":
        return NextResponse.json({ success: true, data: cmsStore.getCases() });
      case "blogs":
        return NextResponse.json({ success: true, data: cmsStore.getBlogs() });
      case "testimonials":
        return NextResponse.json({ success: true, data: cmsStore.getTestimonials() });
      case "team":
        return NextResponse.json({ success: true, data: cmsStore.getTeam() });
      case "navigation":
        return NextResponse.json({ success: true, data: cmsStore.getNavigation() });
      case "footer":
        return NextResponse.json({ success: true, data: cmsStore.getFooter() });
      case "settings":
        return NextResponse.json({ success: true, data: cmsStore.getSettings() });
      default:
        return NextResponse.json(
          { error: `Unknown content module '${module}'` },
          { status: 404 }
        );
    }
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Failed to fetch content." },
      { status: 500 }
    );
  }
}
