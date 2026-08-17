import React from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/config/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-surface-container-low border-t border-outline-variant/60 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-outline-variant/40">
          <div className="space-y-2">
            <Link
              href="/"
              className="font-display text-2xl font-extrabold tracking-tight text-on-surface hover:text-brand transition-colors"
            >
              Forge Studio
            </Link>
            <p className="text-xs sm:text-sm text-on-surface-variant max-w-sm">
              Crafting high-end, uncompromising digital products with industrial-strength logic and fluid, modern aesthetics.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-on-surface-variant">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-on-surface transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-outline">
          <p>&copy; {currentYear} Forge Studio. Precision in every pixel.</p>
          <div className="flex items-center gap-6">
            <span>Crafted for startups &amp; visionaries</span>
            <Link
              href="/contact"
              className="hover:text-on-surface underline underline-offset-4"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
