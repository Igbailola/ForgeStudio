"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type ButtonBaseProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: React.ReactNode;
};

type LinkButtonProps = ButtonBaseProps & {
  href: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: never;
  disabled?: never;
};

type ActionButtonProps = ButtonBaseProps & {
  href?: never;
  onClick?: (e: React.MouseEvent) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

type ButtonProps = LinkButtonProps | ActionButtonProps;

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
    secondary:
      "bg-brand hover:bg-brand-hover text-white shadow-sm hover:shadow active:scale-[0.98]",
    primary:
      "bg-[hsl(218,100%,50%)] hover:bg-[hsl(218,100%,44%)] text-white shadow-sm hover:shadow active:scale-[0.98]",
    outline:
      "border border-outline-variant hover:border-outline bg-white text-on-surface hover:bg-surface-container-low active:scale-[0.98]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex"
      >
        <Link href={href} className={combinedClasses} onClick={onClick}>
          <span>{children}</span>
          {icon && <span className="inline-flex items-center">{icon}</span>}
        </Link>
      </motion.div>
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
