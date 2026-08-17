import React from "react";

interface IconBadgeProps {
  children: React.ReactNode;
  size?: "sm" | "md";
  className?: string;
}

export default function IconBadge({
  children,
  size = "md",
  className = "",
}: IconBadgeProps) {
  const sizeClasses = {
    sm: "w-10 h-10 rounded-xl",
    md: "w-12 h-12 rounded-xl",
  };

  return (
    <div
      className={`${sizeClasses[size]} bg-brand-light text-brand flex items-center justify-center transition-transform group-hover:scale-105 ${className}`}
    >
      {children}
    </div>
  );
}
