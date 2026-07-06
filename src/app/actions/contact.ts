// TODO: Wire to Resend when user provides RESEND_API_KEY.
"use server";

import { z } from "zod";

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

  // Log the submission for now; wire to email service later.
  // eslint-disable-next-line no-console
  console.log("Contact form submission:", parsed.data);

  return {
    ok: true,
    message:
      "Thank you. We have received your message and will respond within two business days.",
  };
}
