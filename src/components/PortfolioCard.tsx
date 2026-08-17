"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface PortfolioCardProps {
  title: string;
  description: string;
  imageSrc: string;
  categoryTags: string[];
  aspectRatio?: "video" | "square" | "portrait" | "wide";
  delay?: number;
  className?: string;
  onClick?: () => void;
}

export default function PortfolioCard({
  title,
  description,
  imageSrc,
  categoryTags,
  aspectRatio = "video",
  delay = 0,
  className = "",
  onClick,
}: PortfolioCardProps) {
  const aspectClasses = {
    video: "aspect-[16/10]",
    square: "aspect-square",
    portrait: "aspect-[4/5]",
    wide: "aspect-[2/1]",
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      className={`group cursor-pointer flex flex-col space-y-4 ${className}`}
      onClick={onClick}
    >
      {/* Image Container with Floating Tags */}
      <div
        className={`relative w-full ${aspectClasses[aspectRatio]} overflow-hidden rounded-2xl sm:rounded-3xl bg-[hsl(0,9%,96%)] border border-[hsl(240,1%,78%)]/60`}
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Floating Category Pills */}
        <div className="absolute top-4 right-4 flex flex-wrap gap-1.5 z-10">
          {categoryTags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[hsl(180,2%,11%)] shadow-xs border border-white/40"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Title & Description */}
      <div className="space-y-1.5 px-1">
        <h3 className="font-display text-xl sm:text-2xl font-bold text-[hsl(180,2%,11%)] group-hover:text-[#b3390c] transition-colors">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-[hsl(180,1%,27%)] leading-relaxed">
          {description}
        </p>
      </div>
    </motion.article>
  );
}
