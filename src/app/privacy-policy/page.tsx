import type { Metadata } from "next";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata: Metadata = {
  title: "Privacy Policy | EstateIQ Global",
  description:
    "Privacy policy for EstateIQ Global, a brand of Florens Consulting Services Private Limited.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section-padding">
      <div className="container-site max-w-3xl">
        <FadeIn>
          <div className="border-l-4 border-primary pl-stack-sm">
            <span className="block font-sans text-label-lg text-primary">LEGAL</span>
            <h1 className="mt-2 font-serif text-display-md text-on-surface">Privacy Policy</h1>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-10 space-y-6 font-sans text-body-md text-secondary">
            <p>
              EstateIQ Global (a brand of Florens Consulting Services Private Limited) is committed
              to protecting your privacy. This Privacy Policy explains how we collect, use, and
              safeguard your personal information when you visit our website or use our contact
              form.
            </p>

            <h2 className="font-serif text-headline-md text-on-surface">Information We Collect</h2>
            <p>
              When you submit the contact form, we collect your name, email address, phone number
              (if provided), and message. We may also collect standard technical information such
              as your IP address and browser type through server logs.
            </p>

            <h2 className="font-serif text-headline-md text-on-surface">How We Use Your Information</h2>
            <p>
              We use the information you provide to respond to your inquiry, schedule consultations,
              and communicate with you about our services. We do not sell or rent your personal
              information to third parties.
            </p>

            <h2 className="font-serif text-headline-md text-on-surface">Data Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information.
              However, no method of transmission over the internet is completely secure, and we
              cannot guarantee absolute security.
            </p>

            <h2 className="font-serif text-headline-md text-on-surface">Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal data by
              contacting us at{" "}
              <a
                href="mailto:Business@florensservices.com"
                className="text-primary underline underline-offset-4"
              >
                Business@florensservices.com
              </a>
              .
            </p>

            <h2 className="font-serif text-headline-md text-on-surface">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be
              posted on this page with the effective date.
            </p>

            <p className="pt-4 font-sans text-caption text-on-surface-variant">
              Effective date: July 2024
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
