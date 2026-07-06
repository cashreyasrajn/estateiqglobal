"use server";

import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(5, "Message must be at least 5 characters"),
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

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
  const toEmail = process.env.CONTACT_EMAIL || "Business@florensservices.com";

  if (!apiKey) {
    // eslint-disable-next-line no-console
    console.log("Contact form submission (Resend API key not configured):", parsed.data);
    return {
      ok: false,
      errors: {
        root: [
          "Email sending is not configured yet. Please add RESEND_API_KEY to your environment variables.",
        ],
      },
    };
  }

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    if (error) {
      // eslint-disable-next-line no-console
      console.error("Resend API error:", error);
      return {
        ok: false,
        errors: {
          root: [
            error.message ||
              "Sorry, we couldn't send your message right now. Please email us directly at Business@florensservices.com.",
          ],
        },
      };
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Failed to send contact email via Resend:", error);
    return {
      ok: false,
      errors: {
        root: [
          "Sorry, we couldn't send your message right now. Please email us directly at Business@florensservices.com.",
        ],
      },
    };
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
