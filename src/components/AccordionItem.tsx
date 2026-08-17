"use client";

import React, { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
  className?: string;
}

export default function AccordionItem({
  question,
  answer,
  defaultOpen = false,
  className = "",
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div
      className={`bg-white rounded-2xl border border-outline-variant/60 transition-colors ${
        isOpen ? "border-brand/40 shadow-xs" : "hover:border-outline"
      } ${className}`}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left gap-4 focus:outline-hidden cursor-pointer"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="font-display text-base sm:text-lg font-bold text-on-surface">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={`accordion-btn-${panelId}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 sm:px-8 pb-6 text-sm sm:text-base text-on-surface-variant leading-relaxed border-t border-outline-variant/30 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
