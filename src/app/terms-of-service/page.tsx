import type { Metadata } from "next";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata: Metadata = {
  title: "Terms of Service | EstateIQ Global",
  description:
    "Terms of service for EstateIQ Global, a brand of Florens Consulting Services Private Limited.",
};

export default function TermsOfServicePage() {
  return (
    <section className="section-padding">
      <div className="container-site max-w-3xl">
        <FadeIn>
          <div className="border-l-4 border-primary pl-stack-sm">
            <span className="block font-sans text-label-lg text-primary">LEGAL</span>
            <h1 className="mt-2 font-serif text-display-md text-on-surface">
              Terms of Service
            </h1>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-10 space-y-6 font-sans text-body-md text-secondary">
            <p>
              By accessing and using the EstateIQ Global website (operated by Florens Consulting
              Services Private Limited), you accept and agree to be bound by these Terms of Service.
              If you do not agree, please do not use this website.
            </p>

            <h2 className="font-serif text-headline-md text-on-surface">Use of Website</h2>
            <p>
              The content on this website is for general informational purposes only. You may use
              the website for lawful purposes only and in a way that does not infringe the rights of
              others or restrict their use of the website.
            </p>

            <h2 className="font-serif text-headline-md text-on-surface">Intellectual Property</h2>
            <p>
              All content, including text, graphics, logos, and images, is the property of Florens
              Consulting Services Private Limited or its licensors and is protected by applicable
              intellectual property laws. You may not reproduce, distribute, or transmit any content
              without prior written permission.
            </p>

            <h2 className="font-serif text-headline-md text-on-surface">No Professional Advice</h2>
            <p>
              Information on this website does not constitute tax, legal, accounting, or investment
              advice. Engagements for professional services are governed by separate engagement
              letters signed between you and Florens Consulting Services Private Limited.
            </p>

            <h2 className="font-serif text-headline-md text-on-surface">Limitation of Liability</h2>
            <p>
              Florens Consulting Services Private Limited shall not be liable for any direct,
              indirect, incidental, or consequential damages arising from your use of, or inability
              to use, this website.
            </p>

            <h2 className="font-serif text-headline-md text-on-surface">Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India.
              Any disputes shall be subject to the exclusive jurisdiction of the courts in
              Bengaluru, Karnataka.
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
