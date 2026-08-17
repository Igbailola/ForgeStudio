import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  ChevronDown,
  Wrench,
  Code2,
  Sparkles,
  Smartphone,
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import StatCounter from "@/components/StatCounter";
import PortfolioCard from "@/components/PortfolioCard";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* ────────────────── 1. HERO SECTION ────────────────── */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-12 pb-20 overflow-hidden">
        {/* Subtle Warm Radial Glow Background */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] sm:h-[600px] bg-gradient-to-tr from-[#b3390c]/10 via-[#e07a5f]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
          aria-hidden="true"
        />

        <AnimatedSection className="max-w-4xl mx-auto flex flex-col items-center space-y-8">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[hsl(240,1%,78%)]/60 shadow-xs text-xs font-semibold tracking-wider uppercase text-[hsl(180,2%,11%)]">
            <span className="w-2 h-2 rounded-full bg-[#b3390c] animate-pulse" />
            Forging Digital Futures
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[hsl(180,2%,11%)] leading-[1.08]">
            Precision in <br className="hidden sm:inline" />
            Every Pixel.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[hsl(180,1%,27%)] max-w-2xl leading-relaxed">
            We are an elite digital agency crafting high-end, uncompromising
            digital products that blend industrial-strength logic with fluid,
            modern aesthetics to elevate your brand&apos;s digital presence.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Let&apos;s Forge
            </Button>
            <Button href="/portfolio" variant="outline" size="lg">
              View Portfolio
            </Button>
          </div>
        </AnimatedSection>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[11px] font-semibold tracking-widest uppercase text-[hsl(180,0%,46%)] animate-bounce">
          <span>Scroll</span>
          <ChevronDown className="w-3.5 h-3.5" />
        </div>
      </section>

      {/* ────────────────── 2. ABOUT / PHILOSOPHY PREVIEW ────────────────── */}
      <SectionWrapper className="bg-white border-y border-[hsl(240,1%,78%)]/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Office Image */}
          <AnimatedSection
            direction="left"
            className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden border border-[hsl(240,1%,78%)]/60 shadow-sm"
          >
            {/* PLACEHOLDER: Replace with authentic studio photography */}
            <Image
              src="/images/office-hero.jpg"
              alt="Forge Studio collaborative loft team workspace"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </AnimatedSection>

          {/* Right Column: Narrative & Stats */}
          <AnimatedSection
            direction="right"
            delay={0.1}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[hsl(180,2%,11%)]">
                The Alchemy of Logic and Art.
              </h2>
              <p className="text-sm sm:text-base text-[hsl(180,1%,27%)] leading-relaxed">
                Forge Studio is not just another design agency. We view digital creation
                as industrial design for the screen. Every layout, every interaction,
                and every line of code is meticulously considered to serve a precise
                function while maintaining an elegant, uncompromising aesthetic.
              </p>
              <p className="text-sm sm:text-base text-[hsl(180,1%,27%)] leading-relaxed">
                Our team of senior strategists, designers, and engineers work in tight
                unison to deliver products that perform flawlessly and leave a lasting
                impression.
              </p>
            </div>

            {/* Stats Counter Bar */}
            <div className="pt-4 grid grid-cols-2 gap-8 border-t border-[hsl(240,1%,78%)]/60">
              <StatCounter value="50+" label="Products Forged" />
              <StatCounter value="12" label="Industry Awards" delay={0.1} />
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* ────────────────── 3. CAPABILITIES / SERVICES PREVIEW ────────────────── */}
      <SectionWrapper>
        <div className="space-y-12">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[hsl(180,2%,11%)]">
                Capabilities
              </h2>
              <p className="text-sm sm:text-base text-[hsl(180,1%,27%)] max-w-xl">
                Our multidisciplinary approach ensures complete cohesion across every
                touchpoint of your digital ecosystem.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[hsl(180,2%,11%)] hover:text-[#b3390c] transition-colors"
            >
              <span>All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 2x2 Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <AnimatedSection delay={0.05}>
              <div className="h-full bg-white rounded-2xl sm:rounded-3xl p-8 border border-[hsl(240,1%,78%)]/60 hover:border-[#b3390c]/40 hover:shadow-md transition-all duration-300 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#b3390c]/10 text-[#b3390c] flex items-center justify-center">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[hsl(180,2%,11%)]">
                  Digital Product Design
                </h3>
                <p className="text-sm sm:text-base text-[hsl(180,1%,27%)] leading-relaxed">
                  End-to-end UI/UX design focusing on intuitive user flows,
                  high-fidelity prototyping, and rigorous design systems that scale.
                </p>
              </div>
            </AnimatedSection>

            {/* Card 2 */}
            <AnimatedSection delay={0.1}>
              <div className="h-full bg-white rounded-2xl sm:rounded-3xl p-8 border border-[hsl(240,1%,78%)]/60 hover:border-[#b3390c]/40 hover:shadow-md transition-all duration-300 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#b3390c]/10 text-[#b3390c] flex items-center justify-center">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[hsl(180,2%,11%)]">
                  Front-End Engineering
                </h3>
                <p className="text-sm sm:text-base text-[hsl(180,1%,27%)] leading-relaxed">
                  Performant, accessible, and responsive code architectures tailored
                  for fast interactions and modern user experiences.
                </p>
              </div>
            </AnimatedSection>

            {/* Card 3 */}
            <AnimatedSection delay={0.15}>
              <div className="h-full bg-white rounded-2xl sm:rounded-3xl p-8 border border-[hsl(240,1%,78%)]/60 hover:border-[#b3390c]/40 hover:shadow-md transition-all duration-300 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#b3390c]/10 text-[#b3390c] flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[hsl(180,2%,11%)]">
                  Brand Strategy
                </h3>
                <p className="text-sm sm:text-base text-[hsl(180,1%,27%)] leading-relaxed">
                  Positioning, messaging, and visual identity systems tailored for
                  the modern digital realm.
                </p>
              </div>
            </AnimatedSection>

            {/* Card 4 - Dark aesthetic showcase card matching Stitch reference */}
            <AnimatedSection delay={0.2}>
              <div className="h-full bg-[hsl(240,1%,19%)] text-white rounded-2xl sm:rounded-3xl p-8 border border-[hsl(180,1%,27%)]/50 hover:border-[#b3390c]/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    Mobile Architecture
                  </h3>
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                    Native and cross-platform applications forged for optimal
                    performance and native feel across mobile ecosystems.
                  </p>
                </div>
                <div
                  className="absolute -right-8 -bottom-8 w-40 h-40 bg-[#b3390c]/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"
                  aria-hidden="true"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </SectionWrapper>

      {/* ────────────────── 4. SELECTED WORKS PREVIEW ────────────────── */}
      <SectionWrapper className="bg-white border-t border-[hsl(240,1%,78%)]/40">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[hsl(180,2%,11%)]">
              Selected Works
            </h2>
            <p className="text-sm sm:text-base text-[hsl(180,1%,27%)]">
              A glimpse into recent digital transformations forged for forward-thinking brands.
            </p>
          </div>

          {/* 2-Column Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Project 1 */}
            {/* PLACEHOLDER: Replace with real case study */}
            <PortfolioCard
              title="Nexus Fintech Platform"
              description="A comprehensive dashboard redesign for high-volume traders, focusing on data clarity and execution speed."
              imageSrc="/images/project-fintech.jpg"
              categoryTags={["UI/UX", "WEB"]}
              aspectRatio="video"
            />

            {/* Project 2 */}
            {/* PLACEHOLDER: Replace with real case study */}
            <PortfolioCard
              title="Aura Editorial Commerce"
              description="An immersive, editorial-first shopping experience blending content and commerce seamlessly."
              imageSrc="/images/project-commerce.jpg"
              categoryTags={["E-COMMERCE", "BRANDING"]}
              aspectRatio="video"
              delay={0.1}
            />
          </div>

          {/* View Full Archive Button */}
          <div className="flex justify-center pt-4">
            <Button href="/portfolio" variant="outline" size="md">
              View Full Archive
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
