import { NextResponse } from "next/server";

const SLACK_WEBHOOK = process.env.SLACK_WEBHOOK_URL;
const DISCORD_WEBHOOK = process.env.DISCORD_WEBHOOK_URL;

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const payload = {
      text: `🚀 New Lead!\n\n👤 Name: ${name}\n📧 Email: ${email}\n💬 Message: ${message}`,
    };

    // Send to Slack
    if (SLACK_WEBHOOK) {
      await fetch(SLACK_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    }

    // Send to Discord
    if (DISCORD_WEBHOOK) {
      await fetch(DISCORD_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: payload.text }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}