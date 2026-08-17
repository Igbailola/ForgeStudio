"use client";

import React from "react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  initials: string;
  delay?: number;
  className?: string;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  company,
  initials,
  delay = 0,
  className = "",
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -3 }}
      className={`bg-white rounded-2xl p-7 sm:p-8 border border-outline-variant/60 hover:border-brand/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between ${className}`}
    >
      <div className="space-y-4">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-full bg-surface-container-low text-on-surface font-semibold text-xs flex items-center justify-center border border-outline-variant">
            {initials}
          </div>
          <div>
            <h4 className="font-display text-sm sm:text-base font-bold text-on-surface">
              {author}
            </h4>
            <p className="text-xs text-on-surface-variant">
              {role}
              {company ? `, ${company}` : ""}
            </p>
          </div>
        </div>

        <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed italic">
          &ldquo;{quote}&rdquo;
        </p>
      </div>
    </motion.div>
  );
}
