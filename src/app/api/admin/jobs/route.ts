import { NextRequest, NextResponse } from "next/server";
import { dataStore } from "@/lib/store";
import { openPositions } from "@/data/careers";

export async function GET() {
  try {
    const applications = await dataStore.getJobApplications();
    return NextResponse.json({
      jobs: openPositions,
      applications,
    });
  } catch (err: any) {
    return NextResponse.json({ error: "Failed to fetch job data." }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const { id, status, notes } = await req.json();
    if (!id || !status) {
      return NextResponse.json({ error: "Missing required parameters." }, { status: 400 });
    }
    await dataStore.updateJobApplicationStatus(id, status, notes);
    return NextResponse.json({ success: true, message: "Application updated." });
  } catch (err: any) {
    return NextResponse.json({ error: "Failed to update application." }, { status: 500 });
  }
}
