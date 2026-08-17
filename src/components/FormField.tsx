import React from "react";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}

export default function FormField({
  label,
  htmlFor,
  children,
  className = "",
}: FormFieldProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <label
        htmlFor={htmlFor}
        className="block text-xs sm:text-sm font-semibold text-on-surface"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
