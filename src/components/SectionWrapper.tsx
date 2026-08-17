import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  size?: "default" | "narrow" | "wide" | "full";
}

export default function SectionWrapper({
  children,
  id,
  className = "",
  containerClassName = "",
  size = "default",
}: SectionWrapperProps) {
  const sizeClasses = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-(--breakpoint-2xl)",
    full: "max-w-full",
  };

  return (
    <section id={id} className={`w-full py-16 md:py-24 ${className}`}>
      <div
        className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
