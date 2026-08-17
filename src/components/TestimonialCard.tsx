"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatarUrl?: string;
  initials?: string;
  delay?: number;
  className?: string;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatarUrl,
  initials,
  delay = 0,
  className = "",
}: TestimonialCardProps) {
  const displayInitials =
    initials ||
    author
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -3 }}
      className={`bg-white rounded-2xl p-7 sm:p-8 border border-[hsl(240,1%,78%)]/60 hover:border-[#b3390c]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between ${className}`}
    >
      <div className="space-y-4">
        {/* Quote Icon or Author Top Bar */}
        <div className="flex items-center gap-3.5">
          {avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={avatarUrl}
              alt={author}
              className="w-10 h-10 rounded-full object-cover border border-[hsl(240,1%,78%)]"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-[hsl(0,9%,96%)] text-[hsl(180,2%,11%)] font-semibold text-xs flex items-center justify-center border border-[hsl(240,1%,78%)]">
              {displayInitials}
            </div>
          )}
          <div>
            <h4 className="font-display text-sm sm:text-base font-bold text-[hsl(180,2%,11%)]">
              {author}
            </h4>
            <p className="text-xs text-[hsl(180,1%,27%)]">
              {role}
              {company ? `, ${company}` : ""}
            </p>
          </div>
        </div>

        {/* Quote Content */}
        <p className="text-sm sm:text-base text-[hsl(180,1%,27%)] leading-relaxed italic">
          &ldquo;{quote}&rdquo;
        </p>
      </div>
    </motion.div>
  );
}
