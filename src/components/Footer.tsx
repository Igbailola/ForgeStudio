import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[hsl(0,9%,96%)] border-t border-[hsl(240,1%,78%)]/60 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-[hsl(240,1%,78%)]/40">
          {/* Brand Wordmark & Tagline */}
          <div className="space-y-2">
            <Link
              href="/"
              className="font-display text-2xl font-extrabold tracking-tight text-[hsl(180,2%,11%)] hover:text-[#b3390c] transition-colors"
            >
              Forge Studio
            </Link>
            <p className="text-xs sm:text-sm text-[hsl(180,1%,27%)] max-w-sm">
              Crafting high-end, uncompromising digital products with industrial-strength logic and fluid, modern aesthetics.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-[hsl(180,1%,27%)]">
            <Link
              href="/testimonials"
              className="hover:text-[hsl(180,2%,11%)] transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="/contact#faq"
              className="hover:text-[hsl(180,2%,11%)] transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/about"
              className="hover:text-[hsl(180,2%,11%)] transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="hover:text-[hsl(180,2%,11%)] transition-colors"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="hover:text-[hsl(180,2%,11%)] transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="hover:text-[hsl(180,2%,11%)] transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Copyright & Meta */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[hsl(180,0%,46%)]">
          <p>© {currentYear} Forge Studio. Precision in every pixel.</p>
          <div className="flex items-center gap-6">
            <span>Crafted for startups &amp; visionaries</span>
            <Link
              href="/contact"
              className="hover:text-[hsl(180,2%,11%)] underline underline-offset-4"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
