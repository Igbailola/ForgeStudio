"use client";

import React from "react";
import { motion } from "framer-motion";

interface StatCounterProps {
  value: string;
  label: string;
  delay?: number;
  className?: string;
}

export default function StatCounter({
  value,
  label,
  delay = 0,
  className = "",
}: StatCounterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className={`space-y-1 ${className}`}
    >
      <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[hsl(180,2%,11%)]">
        {value}
      </div>
      <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[hsl(180,1%,27%)]">
        {label}
      </div>
    </motion.div>
  );
}
