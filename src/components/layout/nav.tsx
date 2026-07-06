"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 border-b border-outline-variant bg-background/95 backdrop-blur-sm">
      <nav className="container-site flex h-full items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-headline-md font-bold text-primary"
        >
          EstateIQ Global
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-stack-md md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "font-sans text-label-lg uppercase tracking-[0.05em] transition-colors duration-200 hover:text-primary",
                    isActive
                      ? "border-b-2 border-primary pb-1 text-primary"
                      : "text-secondary"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Button asChild>
            <Link href="/contact">Free Consultation</Link>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="absolute left-0 right-0 top-20 border-b border-outline-variant bg-background md:hidden">
          <div className="container-site flex flex-col gap-6 py-8">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block py-2 font-sans text-label-lg uppercase tracking-[0.05em]",
                        isActive
                          ? "text-primary"
                          : "text-secondary hover:text-primary"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Button asChild className="w-full">
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
