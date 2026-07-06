import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronDown,
  Building2,
  Globe,
  Scale,
  Briefcase,
  Users,
  ShieldCheck,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/fade-in";

const valueBadges = [
  { label: "Partner-Led", sub: "Every Engagement" },
  { label: "US + India", sub: "Cross-Border Focus" },
  { label: "Tax + Legal", sub: "Integrated Advice" },
  { label: "End-to-End", sub: "Full Lifecycle" },
];

const strengths = [
  {
    icon: Building2,
    title: "Institutional Pedigree",
    description:
      "Our team has advised on estate structures at leading accounting firms and understands the discipline of institutional practice.",
  },
  {
    icon: Globe,
    title: "Cross-Border Depth",
    description:
      "Deep expertise in US federal estate tax, DTAA relief, foreign asset reporting, and cross-border holding structures for Indian families.",
  },
  {
    icon: Users,
    title: "Partner-Led Advisory",
    description:
      "Every engagement is led by a partner. Direct access, clear accountability, and faster decisions on complex estate matters.",
  },
  {
    icon: Scale,
    title: "End-to-End Execution",
    description:
      "From discovery and architecture to filing and ongoing oversight — we manage the full lifecycle of your estate plan.",
  },
];

const credentials = ["US Estate Tax", "India Tax", "Trust Structures", "FEMA Compliance"];

const services = [
  {
    number: "01",
    title: "Estate Tax Planning",
    description:
      "Mitigate US federal estate tax exposure on overseas holdings through treaty-aware structures, trusts, and gifting strategies.",
  },
  {
    number: "02",
    title: "Cross-Border Compliance",
    description:
      "Align reporting across FEMA, FATCA, and IRS disclosure requirements so every filing is precise and defensible.",
  },
  {
    number: "03",
    title: "Succession & Wealth",
    description:
      "Multi-generational succession planning, family governance, and tax-advantaged structures that preserve capital across borders.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex min-h-[85vh] flex-col justify-center section-padding">
        <div className="container-site">
          <FadeIn>
            <h1 className="max-w-4xl font-serif text-display-lg text-on-surface md:text-[5rem]">
              Estate. <span className="italic">Tax.</span> Structure.
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-2xl font-sans text-body-xl text-secondary">
              Precision estate planning for Indian residents with overseas assets. We navigate US
              federal estate tax, DTAA optimization, and multi-generational succession with
              institutional discipline.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact">CONSULTATION</Link>
              </Button>
            </div>
          </FadeIn>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-1 font-sans text-caption uppercase tracking-widest text-secondary">
          <span>Scroll</span>
          <ChevronDown className="size-4 animate-bounce" />
        </div>
      </section>

      {/* ── Value Badges ── */}
      <section className="border-y border-outline-variant bg-surface-container-low py-stack-md">
        <div className="container-site">
          <StaggerContainer
            className="grid grid-cols-2 gap-px bg-outline-variant md:grid-cols-4"
            staggerDelay={0.05}
          >
            {valueBadges.map((badge) => (
              <StaggerItem key={badge.label}>
                <div className="flex h-full flex-col items-center justify-center bg-surface-container-low p-6 text-center">
                  <span className="font-sans text-label-lg text-primary">{badge.label}</span>
                  <span className="mt-1 font-sans text-caption text-on-surface-variant">
                    {badge.sub}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Mission Quote ── */}
      <section className="section-padding">
        <div className="container-site">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="font-serif text-headline-lg text-on-surface">
              We advise on the estate and succession decisions that shape long-term family wealth.
            </p>
            <p className="mt-4 font-sans text-body-lg text-secondary">
              Every engagement is partner-led. Every recommendation is grounded in rigorous analysis,
              regulatory clarity, and a clear understanding of the client&apos;s objectives.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Why EstateIQ ── */}
      <section className="section-padding bg-surface-container-low">
        <div className="container-site">
          <FadeIn>
            <div className="mb-stack-lg border-l-4 border-primary pl-stack-sm">
              <span className="block font-sans text-label-lg text-primary">WHY ESTATEIQ</span>
              <h2 className="mt-2 font-serif text-headline-xl text-on-surface">
                Built for cross-border complexity.
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer
            className="grid grid-cols-1 gap-stack-md md:grid-cols-2"
            staggerDelay={0.1}
          >
            {strengths.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <div className="flex h-full gap-6 border border-outline-variant bg-surface p-stack-lg">
                    <div className="flex size-12 shrink-0 items-center justify-center border border-outline-variant bg-surface-container-low">
                      <Icon className="size-6 stroke-1 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-headline-md text-on-surface">
                        {item.title}
                      </h3>
                      <p className="mt-2 font-sans text-body-md text-secondary">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ── About ── */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid gap-stack-lg lg:grid-cols-2 lg:items-center">
            <FadeIn direction="left">
              <div className="group relative aspect-[4/5] overflow-hidden border border-outline-variant bg-surface-container">
                <Image
                  src="/images/about.jpg"
                  alt="Modern corporate office"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.15}>
              <div className="border-l-4 border-primary pl-stack-sm">
                <span className="block font-sans text-label-lg text-primary">WHO WE ARE</span>
                <h2 className="mt-2 font-serif text-headline-xl text-on-surface">
                  Precision Execution.
                </h2>
              </div>
              <p className="mt-6 font-sans text-body-lg text-secondary">
                EstateIQ Global is a brand of Florens Consulting Services Private Limited. We advise
                Indian families and individuals with overseas assets on estate tax, succession, and
                cross-border structuring.
              </p>
              <p className="mt-4 font-sans text-body-lg text-secondary">
                Based in Bengaluru, we serve clients with interests across India and international
                jurisdictions. Every plan is tailored, documented, and designed to evolve with your
                family.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {credentials.map((cred) => (
                  <div
                    key={cred}
                    className="border border-outline-variant px-3 py-2 text-center font-sans text-label-md text-on-surface"
                  >
                    {cred}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section-padding bg-surface-container-low">
        <div className="container-site">
          <FadeIn>
            <div className="mb-stack-lg border-l-4 border-primary pl-stack-sm">
              <span className="block font-sans text-label-lg text-primary">WHAT WE DO</span>
              <h2 className="mt-2 font-serif text-headline-xl text-on-surface">
                Three verticals. One standard.
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid gap-px bg-outline-variant md:grid-cols-3" staggerDelay={0.1}>
            {services.map((service) => (
              <StaggerItem key={service.number}>
                <Link
                  href="/services"
                  className="group flex h-full flex-col bg-surface p-stack-lg transition-colors duration-300 hover:bg-surface-container-highest"
                >
                  <span className="font-serif text-display-lg font-semibold text-surface-container-highest">
                    {service.number}
                  </span>
                  <h3 className="mt-4 font-serif text-headline-md text-on-surface">
                    {service.title}
                  </h3>
                  <p className="mt-3 font-sans text-body-md text-secondary">
                    {service.description}
                  </p>
                  <span className="mt-auto flex items-center gap-2 pt-stack-md font-sans text-label-lg text-primary">
                    Learn More{" "}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="section-padding bg-primary text-on-primary">
        <div className="container-site">
          <FadeIn>
            <div className="grid gap-stack-lg lg:grid-cols-2">
              <div>
                <h2 className="font-serif text-headline-xl">Start a Conversation</h2>
                <p className="mt-4 max-w-xl font-sans text-body-lg text-on-primary-container">
                  For confidential discussions on estate tax, succession, or cross-border
                  structuring, write to us directly.
                </p>
                <a
                  href="mailto:Business@florensservices.com"
                  className="mt-6 inline-block font-serif text-headline-md underline underline-offset-4 transition-opacity hover:opacity-80"
                >
                  Business@florensservices.com
                </a>
              </div>

              <div className="grid gap-stack-md sm:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-sans text-label-lg text-on-primary">PHONE</h4>
                  <p className="font-sans text-body-md text-on-primary-container">
                    +91 — Available on request
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-sans text-label-lg text-on-primary">ADDRESS</h4>
                  <address className="not-italic font-sans text-body-md text-on-primary-container">
                    Bengaluru, Karnataka
                    <br />
                    India
                  </address>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
