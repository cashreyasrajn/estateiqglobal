"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormState =
  | { ok: true; message: string }
  | { ok: false; errors: Record<string, string[]> }
  | null;

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    return { ok: false, errors: parsed.error.flatten().fieldErrors };
  }

  const { name, email, phone, message } = parsed.data;
  const toEmail = process.env.CONTACT_EMAIL || "Business@florensservices.com";

  // Build the email body
  const emailBody = [
    "New contact form submission from Florens Consulting website",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const htmlBody = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
  `;

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (smtpHost && smtpUser && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"EstateIQ Global Website" <${smtpUser}>`,
        to: toEmail,
        replyTo: email,
        subject: `New contact form submission from ${name}`,
        text: emailBody,
        html: htmlBody,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Failed to send contact email:", error);
      return {
        ok: false,
        errors: {
          root: [
            "Sorry, we couldn't send your message right now. Please email us directly at Business@florensservices.com.",
          ],
        },
      };
    }
  } else {
    // Log when SMTP is not configured so the form can still be tested.
    // eslint-disable-next-line no-console
    console.log("Contact form submission (SMTP not configured):", parsed.data);
    console.log("Email that would be sent:", emailBody);
  }

  return {
    ok: true,
    message:
      "Thank you for reaching out. We have received your message and will respond within two business days.",
  };
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
