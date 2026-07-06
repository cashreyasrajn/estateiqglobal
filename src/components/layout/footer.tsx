// TODO: User will provide real details for offices, legal links, and newsletter handling.

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
            Architectural cross-border estate tax planning for the modern global Indian family and
            private wealth sectors.
          </p>
        </div>

        {/* Offices */}
        <div>
          <h5 className="mb-4 font-sans text-label-lg text-primary">OFFICES</h5>
          <address className="not-italic font-sans text-caption text-on-surface-variant">
            <p>TBD — Mumbai, India</p>
            <p>TBD — Dubai, UAE</p>
            <p>TBD — Singapore</p>
          </address>
        </div>

        {/* Legal */}
        <div>
          <h5 className="mb-4 font-sans text-label-lg text-primary">LEGAL</h5>
          <div className="flex flex-col gap-2">
            <Link
              href="#"
              className="font-sans text-caption text-on-surface-variant transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="font-sans text-caption text-on-surface-variant transition-colors hover:text-primary"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
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
          {/* TODO: Update year when user provides real details. */}
          <p className="mt-stack-md font-sans text-caption text-on-surface-variant">
            &copy; 2024 EstateIQ Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
