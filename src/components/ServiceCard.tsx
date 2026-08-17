"use client";

import React from "react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags?: string[];
  className?: string;
  delay?: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  tags = [],
  className = "",
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -4 }}
      className={`group bg-white rounded-2xl p-8 border border-[hsl(240,1%,78%)]/60 hover:border-[#b3390c]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between ${className}`}
    >
      <div className="space-y-5">
        {/* Icon Squircle */}
        <div className="w-12 h-12 rounded-xl bg-[#b3390c]/10 text-[#b3390c] flex items-center justify-center transition-transform group-hover:scale-105">
          {icon}
        </div>

        {/* Title & Description */}
        <div className="space-y-2.5">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-[hsl(180,2%,11%)] group-hover:text-[#b3390c] transition-colors">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-[hsl(180,1%,27%)] leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Tech / Competency Tags */}
      {tags.length > 0 && (
        <div className="pt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1 rounded-full bg-[hsl(0,9%,96%)] text-[hsl(180,2%,11%)]/80 border border-[hsl(240,1%,78%)]/40 group-hover:bg-[#b3390c]/5 group-hover:border-[#b3390c]/20 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
