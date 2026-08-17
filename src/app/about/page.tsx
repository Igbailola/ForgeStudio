import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Flame, Compass, Users } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import AnimatedSection from "@/components/AnimatedSection";
import StatCounter from "@/components/StatCounter";

export const metadata: Metadata = {
  title: "About Us — Forge Studio",
  description:
    "Learn about Forge Studio's story, values, leadership team, and multidisciplinary approach to digital excellence.",
};

const TEAM_MEMBERS = [
  {
    name: "Sarah Jenkins",
    role: "Design Director",
    image: "/images/team-sarah.jpg",
    bio: "Obsessed with grid systems, typography, and human-centered design principles that endure.",
  },
  {
    name: "Marcus Chen",
    role: "Lead Engineer",
    image: "/images/team-marcus.jpg",
    bio: "Architecting high-concurrency frontends, micro-interactions, and accessible web experiences.",
  },
  {
    name: "Elena Rodriguez",
    role: "Strategy Lead",
    image: "/images/team-elena.jpg",
    bio: "Uniting product analytics, market positioning, and brand narratives for venture-backed startups.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* ────────────────── 1. HERO ────────────────── */}
      <SectionWrapper className="pt-12 md:pt-16 pb-12">
        <div className="space-y-8 max-w-4xl">
          <AnimatedSection>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[hsl(180,2%,11%)] leading-[1.1]">
              Forging digital excellence through precision and heat.
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-base sm:text-lg md:text-xl text-[hsl(180,1%,27%)] leading-relaxed max-w-3xl">
              We are a collective of designers, engineers, and strategists dedicated
              to crafting industrial-strength digital products with fluid, modern
              aesthetics.
            </p>
          </AnimatedSection>
        </div>

        {/* Studio Photo Showcase */}
        <AnimatedSection delay={0.2} className="pt-10">
          <div className="relative w-full aspect-[16/8] sm:aspect-[16/7] rounded-3xl overflow-hidden border border-[hsl(240,1%,78%)]/60 shadow-sm">
            {/* PLACEHOLDER: Replace with authentic studio team photograph */}
            <Image
              src="/images/office-hero.jpg"
              alt="Forge Studio collaborative loft environment"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </AnimatedSection>
      </SectionWrapper>

      {/* ────────────────── 2. MISSION & VALUES BENTO ────────────────── */}
      <SectionWrapper className="bg-white border-y border-[hsl(240,1%,78%)]/40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bento Item 1: Our Mission */}
          <AnimatedSection className="md:col-span-8 bg-[hsl(0,20%,98%)] rounded-3xl p-8 sm:p-10 border border-[hsl(240,1%,78%)]/60 flex flex-col justify-center space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[hsl(180,2%,11%)]">
              Our Mission
            </h2>
            <p className="text-sm sm:text-base text-[hsl(180,1%,27%)] leading-relaxed">
              To bridge the gap between visionary ideas and functional reality. We
              believe that great design is not just about aesthetics, but about
              engineering robust solutions that perform under pressure while remaining
              elegant to the user.
            </p>
          </AnimatedSection>

          {/* Bento Item 2: Precision */}
          <AnimatedSection
            delay={0.1}
            className="md:col-span-4 bg-[hsl(0,20%,98%)] rounded-3xl p-8 sm:p-10 border border-[hsl(240,1%,78%)]/60 flex flex-col justify-between space-y-4"
          >
            <div className="w-10 h-10 rounded-xl bg-[#b3390c]/10 text-[#b3390c] flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-xl font-bold text-[hsl(180,2%,11%)]">
                Precision
              </h3>
              <p className="text-xs sm:text-sm text-[hsl(180,1%,27%)] leading-relaxed">
                Every pixel, every line of code matters.
              </p>
            </div>
          </AnimatedSection>

          {/* Bento Item 3: Heat */}
          <AnimatedSection
            delay={0.15}
            className="md:col-span-4 bg-[hsl(0,20%,98%)] rounded-3xl p-8 sm:p-10 border border-[hsl(240,1%,78%)]/60 flex flex-col justify-between space-y-4"
          >
            <div className="w-10 h-10 rounded-xl bg-[#b3390c]/10 text-[#b3390c] flex items-center justify-center">
              <Flame className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-xl font-bold text-[hsl(180,2%,11%)]">
                Heat
              </h3>
              <p className="text-xs sm:text-sm text-[hsl(180,1%,27%)] leading-relaxed">
                Passion fuels our iterative process.
              </p>
            </div>
          </AnimatedSection>

          {/* Bento Item 4: Our Story */}
          <AnimatedSection
            delay={0.2}
            className="md:col-span-8 bg-[hsl(0,20%,98%)] rounded-3xl p-8 sm:p-10 border border-[hsl(240,1%,78%)]/60 flex flex-col justify-center space-y-4"
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[hsl(180,2%,11%)]">
              Our Story
            </h2>
            <p className="text-sm sm:text-base text-[hsl(180,1%,27%)] leading-relaxed">
              Founded in 2024, Forge Studio began with a simple premise: digital
              products should be built to last. We assembled a team of specialists who
              share a commitment to high-end minimalism and industrial-strength
              engineering, creating an agency that doesn&apos;t just design, but
              forges.
            </p>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* ────────────────── 3. STATS STRIP ────────────────── */}
      <section className="w-full bg-[hsl(0,9%,96%)] py-16 border-b border-[hsl(240,1%,78%)]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
            <StatCounter value="150+" label="Projects Completed" />
            <StatCounter value="42" label="Industry Awards" delay={0.1} />
            <StatCounter value="99%" label="Client Retention" delay={0.2} />
            <StatCounter value="24/7" label="Dedication" delay={0.3} />
          </div>
        </div>
      </section>

      {/* ────────────────── 4. MEET THE TEAM ────────────────── */}
      <SectionWrapper>
        <div className="space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[hsl(180,2%,11%)]">
              Meet the Team
            </h2>
            <p className="text-sm sm:text-base text-[hsl(180,1%,27%)]">
              The multidisciplinary leaders forging your next breakthrough.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <AnimatedSection
                key={member.name}
                delay={index * 0.1}
                className="group bg-white rounded-3xl overflow-hidden border border-[hsl(240,1%,78%)]/60 hover:border-[#b3390c]/40 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Photo */}
                <div className="relative w-full aspect-square bg-[hsl(0,9%,96%)] overflow-hidden">
                  {/* PLACEHOLDER: Replace with real team photograph */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Details */}
                <div className="p-6 space-y-2">
                  <h3 className="font-display text-xl font-bold text-[hsl(180,2%,11%)] group-hover:text-[#b3390c] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#b3390c]">
                    {member.role}
                  </p>
                  <p className="text-xs sm:text-sm text-[hsl(180,1%,27%)] leading-relaxed pt-1">
                    {member.bio}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
