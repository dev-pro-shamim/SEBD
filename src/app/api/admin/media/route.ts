import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const UPLOADS_DIR = path.join(process.cwd(), "public", "uploads");

function ensureUploadsDir() {
  if (!fs.existsSync(UPLOADS_DIR)) {
    fs.mkdirSync(UPLOADS_DIR, { recursive: true });
  }
}

export async function GET() {
  try {
    ensureUploadsDir();
    const files = fs.readdirSync(UPLOADS_DIR);

    const mediaList = files
      .filter((file) => !file.startsWith("."))
      .map((file) => {
        const filePath = path.join(UPLOADS_DIR, file);
        const stat = fs.statSync(filePath);
        const ext = path.extname(file).toLowerCase();
        let mimeType = "application/octet-stream";
        if (ext === ".jpg" || ext === ".jpeg") mimeType = "image/jpeg";
        else if (ext === ".png") mimeType = "image/png";
        else if (ext === ".webp") mimeType = "image/webp";
        else if (ext === ".svg") mimeType = "image/svg+xml";
        else if (ext === ".gif") mimeType = "image/gif";
        else if (ext === ".pdf") mimeType = "application/pdf";

        return {
          id: file,
          fileName: file,
          url: `/uploads/${file}`,
          fileSize: stat.size,
          mimeType,
          uploadedAt: stat.mtime.toISOString(),
        };
      })
      .sort((a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime());

    return NextResponse.json({ success: true, data: mediaList });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Failed to retrieve media library." }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    ensureUploadsDir();
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided in upload." }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Sanitize filename & prevent collision
    const originalExt = path.extname(file.name) || ".png";
    const cleanBase = path
      .basename(file.name, originalExt)
      .toLowerCase()
      .replace(/[^a-z0-9_-]/g, "-")
      .slice(0, 40);

    const uniqueFileName = `${cleanBase}-${Date.now()}${originalExt}`;
    const destinationPath = path.join(UPLOADS_DIR, uniqueFileName);

    fs.writeFileSync(destinationPath, buffer);

    const publicUrl = `/uploads/${uniqueFileName}`;

    return NextResponse.json({
      success: true,
      message: "File uploaded successfully.",
      data: {
        id: uniqueFileName,
        fileName: uniqueFileName,
        url: publicUrl,
        fileSize: buffer.length,
        uploadedAt: new Date().toISOString(),
      },
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Failed to process upload." }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const fileName = searchParams.get("fileName");

    if (!fileName) {
      return NextResponse.json({ error: "fileName parameter required." }, { status: 400 });
    }

    // Safety: prevent path traversal attacks
    const sanitizedName = path.basename(fileName);
    const targetPath = path.join(UPLOADS_DIR, sanitizedName);

    if (fs.existsSync(targetPath)) {
      fs.unlinkSync(targetPath);
      return NextResponse.json({ success: true, message: `File ${sanitizedName} deleted successfully.` });
    } else {
      return NextResponse.json({ error: "File not found." }, { status: 404 });
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Failed to delete file." }, { status: 500 });
  }
}
