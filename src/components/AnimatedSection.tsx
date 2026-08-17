"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const getInitial = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -24 };
      case "right":
        return { opacity: 0, x: 24 };
      case "up":
      default:
        return { opacity: 0, y: 24 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
