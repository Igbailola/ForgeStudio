import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "dark";
}

export default function Card({
  children,
  className = "",
  variant = "default",
}: CardProps) {
  const variantClasses = {
    default:
      "bg-white rounded-2xl sm:rounded-3xl border border-outline-variant/60 hover:border-brand/40 hover:shadow-lg transition-all duration-300",
    dark: "bg-inverse-surface text-white rounded-2xl sm:rounded-3xl border border-on-surface-variant/50 hover:border-brand/60 hover:shadow-xl transition-all duration-300",
  };

  return (
    <div className={`${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}
