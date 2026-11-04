import { NextRequest, NextResponse } from "next/server";
import { cmsStore } from "@/lib/cms-store";

interface RouteProps {
  params: { module: string };
}

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
        return NextResponse.json({ error: `Unknown CMS module '${module}'` }, { status: 404 });
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Failed to fetch CMS data." }, { status: 500 });
  }
}

export async function POST(req: NextRequest, { params }: RouteProps) {
  try {
    const { module } = params;
    const body = await req.json();

    switch (module) {
      case "homepage": {
        const updated = cmsStore.updateHomepage(body);
        return NextResponse.json({ success: true, data: updated, message: "Homepage content updated." });
      }
      case "company": {
        const updated = cmsStore.updateCompany(body);
        return NextResponse.json({ success: true, data: updated, message: "Company profile updated." });
      }
      case "services": {
        const saved = cmsStore.saveService(body);
        return NextResponse.json({ success: true, data: saved, message: "Service saved successfully." });
      }
      case "portfolio": {
        const saved = cmsStore.savePortfolio(body);
        return NextResponse.json({ success: true, data: saved, message: "Portfolio project saved successfully." });
      }
      case "cases": {
        const saved = cmsStore.saveCase(body);
        return NextResponse.json({ success: true, data: saved, message: "Case study saved successfully." });
      }
      case "blogs": {
        const saved = cmsStore.saveBlog(body);
        return NextResponse.json({ success: true, data: saved, message: "Blog article saved successfully." });
      }
      case "testimonials": {
        const saved = cmsStore.saveTestimonial(body);
        return NextResponse.json({ success: true, data: saved, message: "Testimonial saved successfully." });
      }
      case "team": {
        const saved = cmsStore.saveTeamMember(body);
        return NextResponse.json({ success: true, data: saved, message: "Team member saved successfully." });
      }
      case "navigation": {
        const saved = cmsStore.updateNavigation(Array.isArray(body) ? body : body.items || []);
        return NextResponse.json({ success: true, data: saved, message: "Navigation menu updated successfully." });
      }
      case "footer": {
        const saved = cmsStore.updateFooter(body);
        return NextResponse.json({ success: true, data: saved, message: "Footer content updated successfully." });
      }
      case "settings": {
        const saved = cmsStore.updateSettings(body);
        return NextResponse.json({ success: true, data: saved, message: "Global settings updated successfully." });
      }
      default:
        return NextResponse.json({ error: `Unknown CMS module '${module}'` }, { status: 404 });
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Failed to save CMS data." }, { status: 500 });
  }
}
