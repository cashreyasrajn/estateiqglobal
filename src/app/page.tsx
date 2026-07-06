import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  ShieldCheck,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";

const services = [
  {
    title: "Estate Tax Planning",
    description:
      "Strategic structural optimization for Indian residents holding overseas assets. We minimize US federal estate tax exposure while ensuring maximum fiscal efficiency through architectural tax design aligned with your long-term objectives.",
    icon: Building2,
    tags: ["DTAA Strategy", "Trust Structures", "Nexus Audits"],
    variant: "light",
    wide: true,
  },
  {
    title: "Compliance & Filing",
    description:
      "In an era of shifting regulations, we provide the bedrock of certainty. Our compliance team ensures every filing is a testament to precision and legal integrity.",
    icon: ShieldCheck,
    variant: "dark",
    wide: false,
  },
  {
    title: "International Strategy",
    description:
      "Navigating cross-border complexities with global insight. We specialize in treaty interpretation, transfer pricing, and FEMA compliance for international growth.",
    icon: Globe,
    variant: "light",
    wide: false,
  },
  {
    title: "Wealth Management",
    description:
      "Private counsel for high-net-worth individuals focusing on multi-generational legacy preservation and tax-advantaged investment structures.",
    icon: Building2,
    tags: ["Estate Trusts", "Philanthropy"],
    variant: "image",
    wide: true,
  },
];

const methodology = [
  {
    number: "01",
    title: "DISCOVERY",
    description: "Deep analysis of current structures and future objectives.",
  },
  {
    number: "02",
    title: "ARCHITECTURE",
    description: "Designing the most tax-efficient path forward.",
  },
  {
    number: "03",
    title: "EXECUTION",
    description: "Precision implementation of legal and financial strategies.",
  },
  {
    number: "04",
    title: "OVERSIGHT",
    description: "Continuous monitoring and compliance verification.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid-12 items-center">
            <FadeIn className="col-span-12 md:col-span-7" direction="left">
              <h1 className="font-serif text-display-lg text-on-surface">
                Precision in Every Provision.
              </h1>
              <p className="mt-6 max-w-xl font-sans text-body-xl text-secondary">
                Our specialized cross-border estate tax strategies are designed for high-net-worth
                Indian residents and corporate entities who demand absolute clarity and rigorous
                integrity in their financial planning.
              </p>
            </FadeIn>
            <FadeIn
              className="col-span-12 md:col-span-5"
              direction="right"
              delay={0.15}
            >
              <div className="group relative aspect-square overflow-hidden border border-outline-variant bg-surface-container">
                <Image
                  src="/images/hero.jpg"
                  alt="Modern high-rise office building with clean horizontal lines and reflective glass"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Services Bento ── */}
      <section className="section-padding bg-surface-container-low">
        <div className="container-site">
          <FadeIn>
            <div className="mb-stack-lg border-l-4 border-primary pl-stack-sm">
              <span className="block font-sans text-label-lg text-primary">OUR EXPERTISE</span>
              <h2 className="mt-2 font-serif text-headline-xl text-on-surface">
                Specialized Offerings
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer
            className="grid grid-cols-1 gap-stack-md md:grid-cols-3"
            staggerDelay={0.1}
          >
            {services.map((service) => {
              const Icon = service.icon;
              const isDark = service.variant === "dark";
              const isImage = service.variant === "image";

              return (
                <StaggerItem
                  key={service.title}
                  className={service.wide ? "md:col-span-2" : ""}
                >
                  <div
                    className={`group relative flex h-full min-h-[260px] flex-col justify-between p-stack-lg transition-colors duration-300 ${
                      isImage
                        ? "overflow-hidden text-on-primary"
                        : isDark
                          ? "bg-primary text-on-primary"
                          : "border border-outline-variant bg-surface hover:bg-surface-container-highest"
                    }`}
                  >
                    {/* Image background for wealth card */}
                    {isImage && (
                      <>
                        <Image
                          src="/images/wealth.jpg"
                          alt="Intricate analog clock mechanism symbolizing wealth preservation"
                          fill
                          className="absolute inset-0 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, 66vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      </>
                    )}

                    <div className="relative z-10">
                      <Icon
                        className="mb-stack-md size-10"
                        strokeWidth={1}
                      />
                      <h3
                        className={`mb-4 font-serif ${
                          service.wide && !isImage
                            ? "text-headline-lg"
                            : isImage
                              ? "text-headline-lg"
                              : "text-headline-md"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`font-sans text-body-lg ${
                          isDark || isImage
                            ? "text-on-primary-container"
                            : "text-secondary"
                        }`}
                      >
                        {service.description}
                      </p>
                    </div>

                    {service.tags && (
                      <div
                        className={`relative z-10 mt-stack-md flex flex-wrap gap-2 pt-stack-sm ${
                          isImage ? "" : "border-t border-outline-variant"
                        }`}
                      >
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`font-sans text-label-md border px-3 py-1 ${
                              isDark || isImage
                                ? "border-surface-variant text-on-primary"
                                : "border-outline text-on-surface-variant"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {!service.tags && isDark && (
                      <Link
                        href="/services"
                        className="relative z-10 mt-auto flex items-center gap-2 font-sans text-label-lg text-on-primary"
                      >
                        LEARN MORE{" "}
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    )}
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Methodology ── */}
      <section className="section-padding">
        <div className="container-site">
          <FadeIn className="mb-stack-lg text-center">
            <h2 className="mb-4 font-serif text-headline-xl text-on-surface">
              The Methodology
            </h2>
            <div className="mx-auto h-[3px] w-24 bg-primary" />
          </FadeIn>

          <StaggerContainer
            className="grid grid-cols-1 gap-gutter md:grid-cols-4"
            staggerDelay={0.1}
          >
            {methodology.map((step) => (
              <StaggerItem key={step.number}>
                <div className="text-center">
                  <span className="mb-2 block font-serif text-display-lg font-semibold text-surface-container-highest">
                    {step.number}
                  </span>
                  <h4 className="mb-2 font-sans text-label-lg text-on-surface">
                    {step.title}
                  </h4>
                  <p className="font-sans text-body-md text-secondary">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-primary text-on-primary">
        <div className="container-site">
          <FadeIn>
            <div className="flex flex-col items-center justify-between gap-stack-lg md:flex-row">
              <div>
                <h2 className="mb-4 font-serif text-headline-xl">
                  Ready for a Strategic Audit?
                </h2>
                <p className="max-w-xl font-sans text-body-lg text-on-primary-container">
                  Schedule a confidential consultation with our lead tax architects to evaluate your
                  current positioning and identify areas for structural improvement.
                </p>
              </div>
              <Button asChild variant="inverse" size="lg" className="whitespace-nowrap px-10 py-5">
                <Link href="/contact">SECURE CONSULTATION</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
