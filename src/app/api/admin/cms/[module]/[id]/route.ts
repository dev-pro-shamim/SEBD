import { NextRequest, NextResponse } from "next/server";
import { cmsStore } from "@/lib/cms-store";

interface RouteProps {
  params: { module: string; id: string };
}

export async function GET(req: NextRequest, { params }: RouteProps) {
  try {
    const { module, id } = params;

    switch (module) {
      case "services": {
        const item = cmsStore.getServiceBySlug(id);
        if (!item) return NextResponse.json({ error: "Service not found" }, { status: 404 });
        return NextResponse.json({ success: true, data: item });
      }
      case "portfolio": {
        const item = cmsStore.getPortfolioBySlug(id);
        if (!item) return NextResponse.json({ error: "Project not found" }, { status: 404 });
        return NextResponse.json({ success: true, data: item });
      }
      case "cases": {
        const item = cmsStore.getCaseBySlug(id);
        if (!item) return NextResponse.json({ error: "Case study not found" }, { status: 404 });
        return NextResponse.json({ success: true, data: item });
      }
      case "blogs": {
        const item = cmsStore.getBlogBySlug(id);
        if (!item) return NextResponse.json({ error: "Blog not found" }, { status: 404 });
        return NextResponse.json({ success: true, data: item });
      }
      case "testimonials": {
        const item = cmsStore.getTestimonials().find((t) => t.id === id);
        if (!item) return NextResponse.json({ error: "Testimonial not found" }, { status: 404 });
        return NextResponse.json({ success: true, data: item });
      }
      case "team": {
        const item = cmsStore.getTeam().find((m) => m.id === id);
        if (!item) return NextResponse.json({ error: "Team member not found" }, { status: 404 });
        return NextResponse.json({ success: true, data: item });
      }
      default:
        return NextResponse.json({ error: `Not supported for module ${module}` }, { status: 400 });
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Failed to fetch item." }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: RouteProps) {
  try {
    const { module, id } = params;

    let success = false;
    switch (module) {
      case "services":
        success = cmsStore.deleteService(id);
        break;
      case "portfolio":
        success = cmsStore.deletePortfolio(id);
        break;
      case "cases":
        success = cmsStore.deleteCase(id);
        break;
      case "blogs":
        success = cmsStore.deleteBlog(id);
        break;
      case "testimonials":
        success = cmsStore.deleteTestimonial(id);
        break;
      case "team":
        success = cmsStore.deleteTeamMember(id);
        break;
      default:
        return NextResponse.json({ error: `Cannot delete from module ${module}` }, { status: 400 });
    }

    if (!success) {
      return NextResponse.json({ error: "Item not found or could not be deleted." }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Item deleted successfully." });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Failed to delete item." }, { status: 500 });
  }
}
