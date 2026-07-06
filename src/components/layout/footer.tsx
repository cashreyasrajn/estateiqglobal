// TODO: Update legal links and newsletter backend when ready.

import * as React from "react";
import Link from "next/link";
import { NewsletterForm } from "./newsletter-form";

export function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant bg-surface-container">
      <div className="container-site grid grid-cols-1 gap-stack-md py-stack-lg md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="mb-stack-sm font-serif text-headline-md font-bold text-primary">
            EstateIQ Global
          </div>
          <p className="font-sans text-caption text-on-surface-variant">
            Cross-border estate tax planning and strategic advisory for global Indian families and
            private wealth.
          </p>
          <p className="mt-3 font-sans text-caption text-on-surface-variant">
            A brand of Florens Consulting Services Private Limited.
          </p>
        </div>

        {/* Offices */}
        <div>
          <h5 className="mb-4 font-sans text-label-lg text-primary">OFFICES</h5>
          <address className="not-italic font-sans text-caption text-on-surface-variant">
            <p>Bangalore, India</p>
          </address>
        </div>

        {/* Legal */}
        <div>
          <h5 className="mb-4 font-sans text-label-lg text-primary">LEGAL</h5>
          <div className="flex flex-col gap-2">
            <Link
              href="/privacy-policy"
              className="font-sans text-caption text-on-surface-variant transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="font-sans text-caption text-on-surface-variant transition-colors hover:text-primary"
            >
              Terms of Service
            </Link>
            <Link
              href="/disclaimer"
              className="font-sans text-caption text-on-surface-variant transition-colors hover:text-primary"
            >
              Disclaimer
            </Link>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h5 className="mb-4 font-sans text-label-lg text-primary">NEWSLETTER</h5>
          <NewsletterForm />
          <p className="mt-stack-md font-sans text-caption text-on-surface-variant">
            &copy; 2024 Florens Consulting Services Private Limited. All rights reserved.
          </p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-outline-variant">
        <div className="container-site py-stack-md">
          <p className="font-sans text-caption leading-relaxed text-on-surface-variant">
            Florens Consulting Services Private Limited is a corporate advisory firm registered in
            India. EstateIQ Global is a brand of Florens Consulting Services Private Limited. We are
            not registered with SEBI as a merchant banker, investment adviser, research analyst, or
            stock broker. Our engagements are advisory in nature and are governed by formal
            engagement letters. Information on this website is general in nature and does not
            constitute tax, legal, accounting, or investment advice. Readers should obtain advice
            tailored to their specific circumstances before acting. Past performance is not
            indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  );
}
