import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendLeadEmail(name: string, email: string, message: string) {
  return await resend.emails.send({
    from: process.env.MAIL_FROM!,
    to: process.env.MAIL_TO!,
    subject: "New Lead from Voidcore",
    text: `${name} (${email}) says: ${message}`,
  });
}