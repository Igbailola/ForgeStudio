"use client";

import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import IconBadge from "@/components/IconBadge";

interface ContactDetail {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

const CONTACT_DETAILS: ContactDetail[] = [
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Studio Headquarters",
    value: "1200 Pixel Avenue, Suite 404\nSan Francisco, CA 94103",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "General Inquiries",
    href: "mailto:hello@forgestudio.design",
    value: "hello@forgestudio.design",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Direct Line",
    href: "tel:+14155550198",
    value: "+1 (415) 555-0198",
  },
];

export default function ContactDetails() {
  return (
    <AnimatedSection className="lg:col-span-5 space-y-8">
      <div className="space-y-4">
        <h2 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-on-surface">
          Get in Touch
        </h2>
        <p className="text-base text-on-surface-variant leading-relaxed">
          Ready to forge something extraordinary? Reach out to discuss your
          next digital product, high-end web experience, or branding project.
        </p>
      </div>

      <div className="space-y-6 pt-2">
        {CONTACT_DETAILS.map((detail) => (
          <div key={detail.label} className="flex items-start gap-4">
            <IconBadge size="sm">{detail.icon}</IconBadge>
            <div className="space-y-1">
              <h4 className="font-display text-sm font-bold text-on-surface">
                {detail.label}
              </h4>
              {detail.href ? (
                <a
                  href={detail.href}
                  className="text-sm text-on-surface-variant hover:text-brand transition-colors"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="text-sm text-on-surface-variant leading-relaxed whitespace-pre-line">
                  {detail.value}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
