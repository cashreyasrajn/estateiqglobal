import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Briefcase,
  TrendingDown,
  Users,
  Check,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";

export const metadata: Metadata = {
  title: "Services | EstateIQ Global",
  description:
    "Specialized estate tax, deal structuring, federal tax savings, and succession planning services for Indian residents with overseas assets.",
};

const services = [
  {
    icon: Building2,
    title: "Estate Tax Planning for Overseas Holdings",
    description:
      "Indian residents holding US-listed stocks, real estate, or other assets can face US federal estate tax of up to 40%. We structure your holdings to maximize treaty relief and minimize exposure through architectural tax design.",
    bullets: [
      "US federal estate tax analysis and mitigation",
      "India-US DTAA relief and credit optimization",
      "Trust structures for cross-border assets",
      "Annual exclusion and lifetime gifting strategies",
    ],
  },
  {
    icon: Briefcase,
    title: "Deal Structuring & Cross-Border Transactions",
    description:
      "Whether you are acquiring overseas assets, restructuring a family business, or executing a cross-border sale, we design transactions that align tax outcomes with your long-term corporate objectives.",
    bullets: [
      "M&A and asset transfer structuring",
      "FEMA compliance and RBI reporting alignment",
      "Entity selection across jurisdictions",
      "Step-plan documentation and execution support",
    ],
  },
  {
    icon: TrendingDown,
    title: "Federal Tax Savings Strategies",
    description:
      "We apply US federal tax strategies tailored to non-resident and non-citizen asset holders, preserving capital for the next generation while remaining fully compliant with evolving regulations.",
    bullets: [
      "Step-up basis and basis planning",
      "Grantor Retained Annuity Trusts (GRATs)",
      "Family limited partnerships and valuation planning",
      "Charitable and philanthropic structures",
    ],
  },
  {
    icon: Users,
    title: "Succession Planning & Legacy Preservation",
    description:
      "Transfer wealth across generations with clarity. We combine trust law, family governance, and tax efficiency to protect your legacy in India and abroad, ensuring continuity and institutional memory.",
    bullets: [
      "Multi-generational wealth transfer design",
      "Family governance and decision frameworks",
      "Private trust structuring in India and overseas",
      "Philanthropy and family foundation planning",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="section-padding border-b border-outline-variant">
        <div className="container-site">
          <FadeIn>
            <div className="border-l-4 border-primary pl-stack-sm">
              <span className="block font-sans text-label-lg text-primary">
                OUR EXPERTISE
              </span>
              <h1 className="mt-2 max-w-4xl font-serif text-display-md text-on-surface">
                Specialized Offerings
              </h1>
            </div>
            <p className="mt-6 max-w-2xl font-sans text-body-xl text-secondary">
              We specialize in the intersection of US federal estate tax, Indian regulatory
              frameworks, and multi-jurisdictional succession planning.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Service detail blocks */}
      <section className="section-padding">
        <div className="container-site">
          <StaggerContainer staggerDelay={0.1}>
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <StaggerItem key={service.title}>
                  <div className="grid gap-8 border-b border-outline-variant py-stack-lg lg:grid-cols-12 lg:gap-12">
                    <div className="lg:col-span-1">
                      <Icon className="size-10 stroke-1 text-primary" />
                    </div>
                    <div className="lg:col-span-7">
                      <span className="font-sans text-label-md text-on-surface-variant">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="mt-2 font-serif text-headline-lg text-on-surface">
                        {service.title}
                      </h2>
                      <p className="mt-4 font-sans text-body-lg text-secondary">
                        {service.description}
                      </p>
                    </div>
                    <div className="lg:col-span-4">
                      <ul className="space-y-3">
                        {service.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-3 font-sans text-body-md text-on-surface-variant"
                          >
                            <span className="mt-2 size-1.5 shrink-0 bg-primary" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface-container-low">
        <div className="container-site">
          <FadeIn>
            <div className="flex flex-col items-start justify-between gap-8 border border-outline-variant bg-surface p-8 lg:flex-row lg:items-center lg:p-12">
              <div>
                <h2 className="font-serif text-headline-lg text-on-surface">
                  Not sure where to start?
                </h2>
                <p className="mt-2 font-sans text-body-md text-secondary">
                  Book a confidential consultation and we will map the right service mix for your
                  situation.
                </p>
              </div>
              <Button asChild size="lg" className="whitespace-nowrap">
                <Link href="/contact">
                  SCHEDULE A CONSULTATION
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
