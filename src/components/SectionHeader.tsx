import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`text-center space-y-2 max-w-2xl mx-auto ${className}`}>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface">
        {title}
      </h2>
      <p className="text-sm sm:text-base text-on-surface-variant">{subtitle}</p>
    </div>
  );
}
