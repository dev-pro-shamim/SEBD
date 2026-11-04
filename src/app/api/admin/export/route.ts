import { NextResponse } from "next/server";
import { dataStore } from "@/lib/store";

export async function GET() {
  try {
    const inquiries = await dataStore.getInquiries();

    // Generate CSV string
    const headers = [
      "ID",
      "Full Name",
      "Business Email",
      "Phone",
      "Company",
      "Country",
      "Service Required",
      "Budget",
      "Timeline",
      "Status",
      "Created At",
      "Internal Notes",
    ];

    const rows = inquiries.map((i) => [
      `"${i._id}"`,
      `"${i.fullName.replace(/"/g, '""')}"`,
      `"${i.businessEmail}"`,
      `"${i.phoneNumber}"`,
      `"${(i.companyName || "").replace(/"/g, '""')}"`,
      `"${i.country}"`,
      `"${i.serviceRequired.replace(/"/g, '""')}"`,
      `"${i.projectBudget}"`,
      `"${i.projectTimeline}"`,
      `"${i.status}"`,
      `"${i.createdAt}"`,
      `"${(i.internalNotes || "").replace(/"/g, '""')}"`,
    ]);

    const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\r\n");

    return new NextResponse(csvContent, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="smartedge_inquiries_${new Date().toISOString().slice(0, 10)}.csv"`,
      },
    });
  } catch (err: any) {
    return NextResponse.json({ error: "CSV export failed." }, { status: 500 });
  }
}
