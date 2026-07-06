"use client";

import * as React from "react";
import { useActionState } from "react";
import { Check, AlertCircle, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { submitContact, type ContactFormState } from "@/app/actions/contact";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState<ContactFormState, FormData>(
    submitContact,
    null
  );

  return (
    <form action={formAction} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your full name"
            required
            aria-invalid={state && !state.ok && state.errors?.name ? "true" : undefined}
          />
          {state && !state.ok && state.errors?.name && (
            <p className="flex items-center gap-1.5 text-body-sm text-on-surface-variant">
              <AlertCircle className="size-3.5" />
              {state.errors.name[0]}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            aria-invalid={state && !state.ok && state.errors?.email ? "true" : undefined}
          />
          {state && !state.ok && state.errors?.email && (
            <p className="flex items-center gap-1.5 text-body-sm text-on-surface-variant">
              <AlertCircle className="size-3.5" />
              {state.errors.email[0]}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone (optional)</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+91 9xxxx xxxxx"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your cross-border estate planning needs..."
          required
          aria-invalid={state && !state.ok && state.errors?.message ? "true" : undefined}
        />
        {state && !state.ok && state.errors?.message && (
          <p className="flex items-center gap-1.5 text-body-sm text-on-surface-variant">
            <AlertCircle className="size-3.5" />
            {state.errors.message[0]}
          </p>
        )}
      </div>

      <Button type="submit" disabled={isPending} className="min-w-[160px]">
        {isPending ? (
          <>
            <Loader2 className="mr-2 size-4 animate-spin" /> Sending
          </>
        ) : (
          "Send Message"
        )}
      </Button>

      {state && !state.ok && state.errors?.root && (
        <p className="flex items-start gap-2 font-sans text-body-md font-medium text-on-surface">
          <AlertCircle className="mt-1 size-4 shrink-0" />
          {state.errors.root[0]}
        </p>
      )}

      {state && state.ok && (
        <p className="flex items-start gap-2 font-sans text-body-md font-medium text-on-surface">
          <Check className="mt-1 size-4 shrink-0" />
          {state.message}
        </p>
      )}
    </form>
  );
}
