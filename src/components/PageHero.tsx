import React from "react";
import AnimatedSection from "./AnimatedSection";

interface PageHeroProps {
  title: string;
  description: string;
  centered?: boolean;
  className?: string;
}

export default function PageHero({
  title,
  description,
  centered = false,
  className = "",
}: PageHeroProps) {
  return (
    <div
      className={`max-w-3xl space-y-4 ${centered ? "mx-auto text-center" : ""} ${className}`}
    >
      <AnimatedSection>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-on-surface">
          {title}
        </h1>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
          {description}
        </p>
      </AnimatedSection>
    </div>
  );
}
