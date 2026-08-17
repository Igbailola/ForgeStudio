import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, ChevronDown } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import StatCounter from "@/components/StatCounter";
import PortfolioCard from "@/components/PortfolioCard";
import ServiceCard from "@/components/ServiceCard";
import SectionHeader from "@/components/SectionHeader";
import { CAPABILITIES } from "@/data/capabilities";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-12 pb-20 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] sm:h-[600px] bg-gradient-to-tr from-brand/10 via-[#e07a5f]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
          aria-hidden="true"
        />

        <AnimatedSection className="max-w-4xl mx-auto flex flex-col items-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-outline-variant/60 shadow-xs text-xs font-semibold tracking-wider uppercase text-on-surface">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            Forging Digital Futures
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-on-surface leading-[1.08]">
            Precision in <br className="hidden sm:inline" />
            Every Pixel.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            We are an elite digital agency crafting high-end, uncompromising
            digital products that blend industrial-strength logic with fluid,
            modern aesthetics to elevate your brand&apos;s digital presence.
          </p>

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

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[11px] font-semibold tracking-widest uppercase text-outline animate-bounce">
          <span>Scroll</span>
          <ChevronDown className="w-3.5 h-3.5" />
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <SectionWrapper className="bg-white border-y border-outline-variant/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <AnimatedSection
            direction="left"
            className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden border border-outline-variant/60 shadow-sm"
          >
            <Image
              src="/images/office-hero.jpg"
              alt="Forge Studio collaborative loft team workspace"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </AnimatedSection>

          <AnimatedSection
            direction="right"
            delay={0.1}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface">
                The Alchemy of Logic and Art.
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Forge Studio is not just another design agency. We view digital creation
                as industrial design for the screen. Every layout, every interaction,
                and every line of code is meticulously considered to serve a precise
                function while maintaining an elegant, uncompromising aesthetic.
              </p>
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Our team of senior strategists, designers, and engineers work in tight
                unison to deliver products that perform flawlessly and leave a lasting
                impression.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-2 gap-8 border-t border-outline-variant/60">
              <StatCounter value="50+" label="Products Forged" />
              <StatCounter value="12" label="Industry Awards" delay={0.1} />
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* CAPABILITIES */}
      <SectionWrapper>
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface">
                Capabilities
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant max-w-xl">
                Our multidisciplinary approach ensures complete cohesion across every
                touchpoint of your digital ecosystem.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-on-surface hover:text-brand transition-colors"
            >
              <span>All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CAPABILITIES.map((cap, index) => {
              if (cap.variant === "dark") {
                return (
                  <AnimatedSection key={cap.id} delay={index * 0.05}>
                    <div className="h-full bg-inverse-surface text-white rounded-2xl sm:rounded-3xl p-8 border border-on-surface-variant/50 hover:border-brand/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
                      <div className="space-y-4 relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center">
                          {cap.icon}
                        </div>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                          {cap.title}
                        </h3>
                        <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                          {cap.description}
                        </p>
                      </div>
                      <div
                        className="absolute -right-8 -bottom-8 w-40 h-40 bg-brand/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"
                        aria-hidden="true"
                      />
                    </div>
                  </AnimatedSection>
                );
              }

              return (
                <ServiceCard
                  key={cap.id}
                  icon={cap.icon}
                  title={cap.title}
                  description={cap.description}
                  delay={index * 0.05}
                />
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* SELECTED WORKS */}
      <SectionWrapper className="bg-white border-t border-outline-variant/40">
        <div className="space-y-12">
          <SectionHeader
            title="Selected Works"
            subtitle="A glimpse into recent digital transformations forged for forward-thinking brands."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            <PortfolioCard
              title="Nexus Fintech Platform"
              description="A comprehensive dashboard redesign for high-volume traders, focusing on data clarity and execution speed."
              imageSrc="/images/project-fintech.jpg"
              categoryTags={["UI/UX", "WEB"]}
              aspectRatio="video"
            />
            <PortfolioCard
              title="Aura Editorial Commerce"
              description="An immersive, editorial-first shopping experience blending content and commerce seamlessly."
              imageSrc="/images/project-commerce.jpg"
              categoryTags={["E-COMMERCE", "BRANDING"]}
              aspectRatio="video"
              delay={0.1}
            />
          </div>

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
