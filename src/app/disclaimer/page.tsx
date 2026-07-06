import type { Metadata } from "next";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata: Metadata = {
  title: "Disclaimer | EstateIQ Global",
  description:
    "Disclaimer for EstateIQ Global, a brand of Florens Consulting Services Private Limited.",
};

export default function DisclaimerPage() {
  return (
    <section className="section-padding">
      <div className="container-site max-w-3xl">
        <FadeIn>
          <div className="border-l-4 border-primary pl-stack-sm">
            <span className="block font-sans text-label-lg text-primary">LEGAL</span>
            <h1 className="mt-2 font-serif text-display-md text-on-surface">Disclaimer</h1>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-10 space-y-6 font-sans text-body-md text-secondary">
            <p>
              Florens Consulting Services Private Limited is a corporate advisory firm registered in
              India. EstateIQ Global is a brand of Florens Consulting Services Private Limited. We
              are not registered with SEBI as a merchant banker, investment adviser, research
              analyst, or stock broker.
            </p>

            <p>
              Our engagements are advisory in nature and are governed by formal engagement letters.
              Information on this website is general in nature and does not constitute tax, legal,
              accounting, or investment advice.
            </p>

            <p>
              Readers should obtain advice tailored to their specific circumstances before acting on
              any information contained on this website. Past performance is not indicative of
              future results.
            </p>

            <p>
              For confidential discussions, please contact us at{" "}
              <a
                href="mailto:Business@florensservices.com"
                className="text-primary underline underline-offset-4"
              >
                Business@florensservices.com
              </a>
              .
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
