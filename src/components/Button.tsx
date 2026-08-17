"use client";

import React from "react";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: React.ReactNode;
}

export default function Button({
  children,
  href,
  variant = "secondary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  icon,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-center";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-2.5 gap-2",
    lg: "text-base px-8 py-3.5 gap-2.5",
  };

  const variantStyles = {
    // Secondary is the signature Forge terracotta / burnt-orange CTA
    secondary:
      "bg-[#b3390c] hover:bg-[#9c3008] text-white shadow-sm hover:shadow active:scale-[0.98]",
    primary:
      "bg-[hsl(218,100%,50%)] hover:bg-[hsl(218,100%,44%)] text-white shadow-sm hover:shadow active:scale-[0.98]",
    outline:
      "border border-[hsl(240,1%,78%)] hover:border-[hsl(180,0%,46%)] bg-white text-[hsl(180,2%,11%)] hover:bg-[hsl(0,9%,96%)] active:scale-[0.98]",
    ghost:
      "bg-transparent hover:bg-black/5 text-[hsl(180,2%,11%)] active:scale-[0.98]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        <span>{children}</span>
        {icon && <span className="inline-flex items-center">{icon}</span>}
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{children}</span>
      {icon && <span className="inline-flex items-center">{icon}</span>}
    </motion.button>
  );
}
