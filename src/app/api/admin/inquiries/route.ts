import { NextRequest, NextResponse } from "next/server";
import { dataStore } from "@/lib/store";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const statusFilter = searchParams.get("status");
    const search = searchParams.get("search")?.toLowerCase();

    let list = await dataStore.getInquiries();

    if (statusFilter && statusFilter !== "All") {
      list = list.filter((i) => i.status.toLowerCase() === statusFilter.toLowerCase());
    }

    if (search) {
      list = list.filter(
        (i) =>
          i.fullName.toLowerCase().includes(search) ||
          i.businessEmail.toLowerCase().includes(search) ||
          (i.companyName || "").toLowerCase().includes(search) ||
          i.serviceRequired.toLowerCase().includes(search)
      );
    }

    return NextResponse.json({ inquiries: list });
  } catch (err: any) {
    return NextResponse.json({ error: "Failed to fetch inquiries." }, { status: 500 });
  }
}
