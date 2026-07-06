"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";

export function NewsletterForm() {
  return (
    <div className="flex items-center gap-2 border-b border-primary py-2">
      <input
        type="email"
        placeholder="Email Address"
        aria-label="Email address"
        className="w-full border-none bg-transparent font-sans text-caption text-on-surface outline-none placeholder:text-on-surface-variant"
      />
      <button type="button" aria-label="Subscribe" className="text-primary">
        <ArrowRight className="size-4" />
      </button>
    </div>
  );
}
