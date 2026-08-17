"use client";

import React from "react";
import AnimatedSection from "./AnimatedSection";
import IconBadge from "./IconBadge";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags?: string[];
  className?: string;
  delay?: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  tags = [],
  className = "",
  delay = 0,
}: ServiceCardProps) {
  return (
    <AnimatedSection delay={delay}>
      <div
        className={`group h-full bg-white rounded-2xl p-8 border border-outline-variant/60 hover:border-brand/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between ${className}`}
      >
        <div className="space-y-5">
          <IconBadge>{icon}</IconBadge>

          <div className="space-y-2.5">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-on-surface group-hover:text-brand transition-colors">
              {title}
            </h3>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {tags.length > 0 && (
          <div className="pt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-3 py-1 rounded-full bg-surface-container-low text-on-surface/80 border border-outline-variant/40 group-hover:bg-brand/5 group-hover:border-brand/20 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}
