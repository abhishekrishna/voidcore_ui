import { NextResponse } from "next/server";
import { google } from "googleapis";
import type { JWT } from "google-auth-library";
import { Readable } from "stream";

export async function POST(req: Request) {
  const formData = await req.formData();

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const role = formData.get("role") as string;
  const resume = formData.get("resume") as File;

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GDRIVE_CLIENT_EMAIL,
      private_key: process.env.GDRIVE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/drive.file"],
  });

  const authClient = (await auth.getClient()) as JWT;

  const drive = google.drive({
    version: "v3",
    auth: authClient,
  });

const buffer = Buffer.from(await resume.arrayBuffer());

const stream = Readable.from(buffer);

const uploaded = await drive.files.create({
  supportsAllDrives: true,
  requestBody: {
    name: `${name}-${role}-${resume.name}`,
    parents: [process.env.GDRIVE_FOLDER_ID!],
  },
  media: {
    mimeType: resume.type,
    body: stream,
  },
});
  

  return NextResponse.json({
    success: true,
    fileId: uploaded.data.id,
  });
}