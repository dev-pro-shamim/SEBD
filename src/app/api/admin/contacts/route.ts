import { NextRequest, NextResponse } from "next/server";
import { dataStore } from "@/lib/store";

export async function GET() {
  try {
    const contacts = await dataStore.getContacts();
    return NextResponse.json({ contacts });
  } catch (err: any) {
    return NextResponse.json({ error: "Failed to fetch contact messages." }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const { id, status, notes } = await req.json();
    if (!id || !status) {
      return NextResponse.json({ error: "Missing required parameters." }, { status: 400 });
    }
    await dataStore.updateContactStatus(id, status, notes);
    return NextResponse.json({ success: true, message: "Contact updated." });
  } catch (err: any) {
    return NextResponse.json({ error: "Failed to update contact." }, { status: 500 });
  }
}
