"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import PortfolioCard from "@/components/PortfolioCard";
import PageHero from "@/components/PageHero";

type Category = "All" | "Web" | "Brand" | "Strategy";

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  categoryTags: string[];
  filterCategory: ("Web" | "Brand" | "Strategy")[];
  aspectRatio: "video" | "square" | "portrait" | "wide";
}

const ALL_PROJECTS: ProjectItem[] = [
  {
    id: "nexus-fintech",
    title: "Nexus Fintech Platform",
    description:
      "A comprehensive dashboard redesign for high-volume traders, focusing on data clarity, sub-second latency, and execution speed.",
    imageSrc: "/images/project-fintech.jpg",
    categoryTags: ["UI/UX", "WEB"],
    filterCategory: ["Web"],
    aspectRatio: "video",
  },
  {
    id: "aura-commerce",
    title: "Aura Editorial Commerce",
    description:
      "An immersive, editorial-first luxury shopping experience blending rich storytelling and frictionless checkout.",
    imageSrc: "/images/project-commerce.jpg",
    categoryTags: ["E-COMMERCE", "BRANDING"],
    filterCategory: ["Web", "Brand"],
    aspectRatio: "video",
  },
  {
    id: "kinetic-watch",
    title: "Kinetic 3D Watch Configurator",
    description:
      "Interactive WebGL component customizer enabling bespoke luxury horology customization with real-time pricing.",
    imageSrc: "/images/project-fintech.jpg",
    categoryTags: ["WEB", "3D"],
    filterCategory: ["Web"],
    aspectRatio: "video",
  },
  {
    id: "forge-identity",
    title: "Verve Brand Identity System",
    description:
      "Full spectrum visual language, typographic scales, and digital design system for an enterprise logistics leader.",
    imageSrc: "/images/office-hero.jpg",
    categoryTags: ["BRANDING", "IDENTITY"],
    filterCategory: ["Brand"],
    aspectRatio: "video",
  },
  {
    id: "pulse-mobile",
    title: "Pulse Healthcare Architecture",
    description:
      "Cross-platform clinical companion app designed for zero-cognitive-overload telemetry monitoring.",
    imageSrc: "/images/project-commerce.jpg",
    categoryTags: ["MOBILE", "STRATEGY"],
    filterCategory: ["Strategy", "Web"],
    aspectRatio: "video",
  },
  {
    id: "arcane-monograph",
    title: "Arcane Architecture Monograph",
    description:
      "Digital publication and spatial showcase highlighting monumental modern brutalist and industrial architecture.",
    imageSrc: "/images/office-hero.jpg",
    categoryTags: ["EDITORIAL", "BRANDING"],
    filterCategory: ["Brand", "Strategy"],
    aspectRatio: "video",
  },
];

const CATEGORIES: Category[] = ["All", "Web", "Brand", "Strategy"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProjects =
    activeCategory === "All"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((project) =>
          project.filterCategory.includes(
            activeCategory as "Web" | "Brand" | "Strategy"
          )
        );

  return (
    <div className="flex flex-col w-full">
      <SectionWrapper className="pt-12 md:pt-16 pb-8">
        <PageHero
          title="Selected Work"
          description="We forge digital experiences that combine industrial strength with elegant functionality. Explore our recent projects across web, brand, and strategy."
        />

        <div className="pt-4">
          <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Portfolio categories">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="portfolio-grid"
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-on-surface text-white shadow-xs"
                      : "bg-white text-on-surface border border-outline-variant/60 hover:bg-surface-container-low hover:border-outline"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="pt-0">
        <motion.div
          id="portfolio-grid"
          role="tabpanel"
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <PortfolioCard
                  title={project.title}
                  description={project.description}
                  imageSrc={project.imageSrc}
                  categoryTags={project.categoryTags}
                  aspectRatio={project.aspectRatio}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </SectionWrapper>
    </div>
  );
}
