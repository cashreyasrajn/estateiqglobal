import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";

export const metadata: Metadata = {
  title: "About | EstateIQ Global",
  description:
    "Learn about EstateIQ Global's mission to simplify cross-border estate planning for Indian residents with overseas assets.",
};

const team = [
  {
    initials: "SR",
    name: "Shreyas Raj",
    title: "Co-Founder, Estate Tax Strategist",
    bio: "Shreyas advises Indian families on the interplay of US federal estate tax, DTAA provisions, and India-centric trust structures. He focuses on translating complex cross-border regulations into actionable succession plans.",
  },
  {
    initials: "MT",
    name: "Munzir Tandel",
    title: "Co-Founder, Estate Tax Strategist",
    bio: "Munzir specializes in structuring cross-border transactions and multi-generational wealth transfers. His work centers on compliance-first planning across US, Indian, and Middle Eastern jurisdictions.",
  },
];

const values = [
  {
    title: "Precision",
    description:
      "Every recommendation is grounded in current tax law, treaty language, and your specific asset map.",
  },
  {
    title: "Transparency",
    description:
      "We explain complex structures in plain language so every family member understands the plan.",
  },
  {
    title: "Longevity",
    description:
      "Our strategies are designed to adapt as regulations, family circumstances, and markets evolve.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid-12 items-center">
            <FadeIn className="col-span-12 md:col-span-7" direction="left">
              <div className="border-l-4 border-primary pl-stack-sm">
                <span className="block font-sans text-label-lg text-primary">
                  WHO WE ARE
                </span>
                <h1 className="mt-2 font-serif text-display-md text-on-surface">
                  Clarity across borders.
                </h1>
              </div>
              <p className="mt-6 max-w-xl font-sans text-body-xl text-secondary">
                EstateIQ Global was founded to address a growing challenge: Indian residents are
                accumulating overseas assets faster than traditional advisory models can keep pace.
              </p>
            </FadeIn>
            <FadeIn
              className="col-span-12 md:col-span-5"
              direction="right"
              delay={0.15}
            >
              <div className="group relative aspect-[4/5] overflow-hidden border border-outline-variant bg-surface-container">
                <Image
                  src="/images/about.jpg"
                  alt="Modern corporate office space representing professional estate planning"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Story detail */}
      <section className="section-padding bg-surface-container-low">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn delay={0.1}>
              <p className="font-sans text-body-lg text-on-surface-variant">
                US stocks, foreign real estate, and international business interests create
                overlapping tax and regulatory obligations that demand specialized expertise.
                Traditional wealth advisors rarely understand both sides of the border — the
                nuances of US federal estate tax as it applies to non-residents, and the Indian
                regulatory framework that governs how those assets flow back home.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="font-sans text-body-lg text-on-surface-variant">
                We combine deep knowledge of US federal estate tax with Indian regulatory
                frameworks to help families preserve capital, optimize cross-border transfers, and
                build lasting legacies. Every plan we create is tailored, documented, and designed
                to evolve with your family and the jurisdictions in which you operate.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-site">
          <FadeIn>
            <div className="mb-stack-lg border-l-4 border-primary pl-stack-sm">
              <span className="block font-sans text-label-lg text-primary">
                OUR TEAM
              </span>
              <h2 className="mt-2 font-serif text-headline-xl text-on-surface">
                Advisors who understand both sides of the border.
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer
            className="grid gap-stack-md md:grid-cols-2"
            staggerDelay={0.15}
          >
            {team.map((member) => (
              <StaggerItem key={member.initials}>
                <div className="border border-outline-variant bg-surface p-stack-lg">
                  <div className="flex items-start gap-6">
                    <div className="flex size-20 shrink-0 items-center justify-center border border-outline-variant bg-surface-container-low">
                      <span className="font-serif text-2xl font-medium text-on-surface">
                        {member.initials}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-serif text-headline-md text-on-surface">
                        {member.name}
                      </h3>
                      <p className="mt-1 font-sans text-label-md text-on-surface-variant">
                        {member.title}
                      </p>
                    </div>
                  </div>
                  <p className="mt-8 font-sans text-body-md text-on-surface-variant">
                    {member.bio}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-surface-container-low">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <div className="border-l-4 border-primary pl-stack-sm">
                <span className="block font-sans text-label-lg text-primary">
                  OUR VALUES
                </span>
                <h2 className="mt-2 font-serif text-headline-xl text-on-surface">
                  Built on precision, trust, and long-term thinking.
                </h2>
              </div>
            </FadeIn>
            <StaggerContainer className="space-y-8" staggerDelay={0.1}>
              {values.map((value) => (
                <StaggerItem key={value.title}>
                  <div className="border-l-2 border-primary pl-6">
                    <h3 className="font-serif text-headline-md text-on-surface">
                      {value.title}
                    </h3>
                    <p className="mt-2 font-sans text-body-md text-on-surface-variant">
                      {value.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>
    </>
  );
}
