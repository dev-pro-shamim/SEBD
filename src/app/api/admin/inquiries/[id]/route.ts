import { NextRequest, NextResponse } from "next/server";
import { dataStore } from "@/lib/store";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const body = await req.json();
    const { status, internalNotes } = body;

    if (!id) {
      return NextResponse.json({ error: "Missing inquiry ID." }, { status: 400 });
    }

    await dataStore.updateInquiryStatus(id, status, internalNotes);

    return NextResponse.json({ success: true, message: "Inquiry updated successfully." });
  } catch (err: any) {
    return NextResponse.json({ error: "Failed to update inquiry." }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    if (!id) {
      return NextResponse.json({ error: "Missing inquiry ID." }, { status: 400 });
    }
    await dataStore.deleteInquiry(id);
    return NextResponse.json({ success: true, message: "Inquiry deleted successfully." });
  } catch (err: any) {
    return NextResponse.json({ error: "Failed to delete inquiry." }, { status: 500 });
  }
}
