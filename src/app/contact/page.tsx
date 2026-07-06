import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "./contact-form";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata: Metadata = {
  title: "Contact | EstateIQ Global",
  description:
    "Get in touch with EstateIQ Global for a confidential consultation on cross-border estate planning.",
};

export default function ContactPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-site">
          <FadeIn>
            <div className="border-l-4 border-primary pl-stack-sm">
              <span className="block font-sans text-label-lg text-primary">
                GET IN TOUCH
              </span>
              <h1 className="mt-2 max-w-3xl font-serif text-display-md text-on-surface">
                Start the conversation.
              </h1>
            </div>
            <p className="mt-6 max-w-2xl font-sans text-body-xl text-secondary">
              Complete the form below and we will respond within two business days. All inquiries
              are treated as strictly confidential.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding border-t border-outline-variant">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            <FadeIn className="lg:col-span-2">
              <ContactForm />
            </FadeIn>

            <FadeIn className="lg:col-span-1" delay={0.15}>
              <div className="border border-outline-variant bg-surface-container-low p-stack-lg">
                <h2 className="font-serif text-headline-md text-on-surface">
                  Our Office
                </h2>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 size-5 shrink-0 stroke-1 text-primary" />
                    <div>
                      <p className="font-sans text-label-lg text-on-surface">
                        Bangalore, India
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-outline-variant pt-6">
                    <div className="flex items-center gap-4">
                      <Phone className="size-5 shrink-0 stroke-1 text-primary" />
                      <div>
                        <p className="font-sans text-label-lg text-on-surface">
                          Phone
                        </p>
                        <a
                          href="tel:+917338292383"
                          className="mt-1 block font-sans text-body-sm text-on-surface-variant hover:text-primary"
                        >
                          +91 733 829 2383
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-outline-variant pt-6">
                    <div className="flex items-center gap-4">
                      <Mail className="size-5 shrink-0 stroke-1 text-primary" />
                      <div>
                        <p className="font-sans text-label-lg text-on-surface">
                          Email
                        </p>
                        <a
                          href="mailto:Business@florensservices.com"
                          className="mt-1 block font-sans text-body-sm text-on-surface-variant hover:text-primary"
                        >
                          Business@florensservices.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}

