"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/config/navigation";
import Button from "./Button";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen]);

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-xs border-b border-outline-variant/50 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-1.5 focus:outline-hidden"
          aria-label="Forge Studio Home"
        >
          <span className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-on-surface group-hover:text-brand transition-colors">
            Forge Studio
          </span>
        </Link>

        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  isActive
                    ? "text-brand font-semibold"
                    : "text-on-surface/80 hover:text-on-surface"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center">
          <Button
            href="/contact"
            variant="secondary"
            size="sm"
            icon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            Let&apos;s Forge
          </Button>
        </div>

        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-on-surface hover:bg-black/5 focus:outline-hidden"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-outline-variant bg-white/95 backdrop-blur-lg px-4 pt-3 pb-6 space-y-3"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <nav className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "bg-brand-light text-brand font-semibold"
                        : "text-on-surface hover:bg-black/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="pt-2">
              <Button
                href="/contact"
                variant="secondary"
                size="md"
                className="w-full justify-center"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Let&apos;s Forge
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
