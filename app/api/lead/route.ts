import { sendLeadEmail } from "@/lib/mailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return Response.json({ success: false, error: "Missing fields" }, { status: 400 });
  }

  try {
    await sendLeadEmail(name, email, message);
    return Response.json({ success: true }, { status: 200 });
  } catch (err: unknown) {
    // Optional: type narrowing to get message
    const errorMessage =
      err instanceof Error ? err.message : "Unknown error";
    console.error("Error sending mail:", errorMessage);

    return Response.json({ success: false, error: "Failed to send" }, { status: 500 });
  }
}