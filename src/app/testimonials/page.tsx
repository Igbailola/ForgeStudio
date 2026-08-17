import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import TestimonialCard from "@/components/TestimonialCard";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Testimonials — Forge Studio",
  description:
    "Hear what founders, CTOs, and product leaders have to say about partnering with Forge Studio.",
};

const TESTIMONIALS = [
  {
    author: "Marcus Thorne",
    role: "VP Engineering",
    company: "Apex Financial",
    quote:
      "The level of clarity they brought to our complex dashboard architecture was astounding. They stripped away the noise and left us with a highly functional, elegant interface that our power users adore.",
    initials: "MT",
  },
  {
    author: "Sarah Jenkins",
    role: "Founder",
    company: "Aura Retail",
    quote:
      "They lived up to their name. Forge took our fragmented ideas and hammered them into a cohesive, beautiful brand identity. The subtle interactions and speed set us apart in luxury commerce.",
    initials: "SJ",
  },
  {
    author: "David Chen",
    role: "Director of Operations",
    company: "Shift Logistics",
    quote:
      "We needed a technical partner who understood both scale and design. Forge delivered an enterprise-grade platform wrapped in a stunningly minimalist UI that reduced our dispatch latency by 40%.",
    initials: "DC",
  },
  {
    author: "Amara Okonjo",
    role: "Head of Product",
    company: "Kuro Health",
    quote:
      "Working with Forge felt like having an elite SWAT team embedded inside our startup. They moved at breakneck speed without cutting a single corner on accessibility or craft.",
    initials: "AO",
  },
  {
    author: "Julian Vance",
    role: "Managing Partner",
    company: "Founders Guild",
    quote:
      "Whenever our portfolio companies need to redefine their category with an uncompromising digital flagship, Forge Studio is our singular recommendation.",
    initials: "JV",
  },
  {
    author: "Claire Sterling",
    role: "Chief Marketing Officer",
    company: "Verve Mobility",
    quote:
      "From typography selection to high-converting interactive flows, their attention to craft is peerless. They turn complex technical products into objects of desire.",
    initials: "CS",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* ────────────────── 1. HERO ────────────────── */}
      <SectionWrapper className="pt-12 md:pt-16 pb-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <AnimatedSection>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[hsl(180,2%,11%)]">
              Words forged by fire.
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-base sm:text-lg text-[hsl(180,1%,27%)] leading-relaxed">
              We don&apos;t just build digital products; we forge lasting
              partnerships. Read what industry leaders say about the precision,
              heat, and clarity we bring to every project.
            </p>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* ────────────────── 2. FEATURED HERO TESTIMONIAL ────────────────── */}
      <SectionWrapper className="pt-0">
        <AnimatedSection>
          <div className="bg-white rounded-3xl overflow-hidden border border-[hsl(240,1%,78%)]/60 shadow-lg grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left: Client Photo */}
            <div className="lg:col-span-5 relative min-h-[340px] sm:min-h-[420px] bg-[hsl(0,9%,96%)]">
              {/* PLACEHOLDER: Replace with real client portrait */}
              <Image
                src="/images/testimonial-eleanor.jpg"
                alt="Eleanor Vance, CTO at Nexus Dynamics"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            {/* Right: Large Featured Quote */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                {/* Decorative 99 quote mark */}
                <div
                  className="font-display text-5xl sm:text-6xl font-black text-[#b3390c]/40 leading-none select-none"
                  aria-hidden="true"
                >
                  &ldquo;&ldquo;
                </div>
                <blockquote className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-[hsl(180,2%,11%)] leading-snug">
                  &ldquo;Forge Studio didn&apos;t just redesign our platform; they
                  redefined our entire digital strategy. Their balance of
                  industrial precision and modern aesthetic resulted in a product
                  that is not only visually stunning but fundamentally superior in
                  performance.&rdquo;
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-[hsl(240,1%,78%)]/60 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#b3390c]/10 text-[#b3390c] font-display font-bold text-sm flex items-center justify-center border border-[#b3390c]/20">
                  EV
                </div>
                <div>
                  <div className="font-display text-base font-bold text-[hsl(180,2%,11%)]">
                    Eleanor Vance
                  </div>
                  <div className="text-xs sm:text-sm text-[hsl(180,1%,27%)]">
                    CTO, Nexus Dynamics
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </SectionWrapper>

      {/* ────────────────── 3. TESTIMONIALS GRID ────────────────── */}
      <SectionWrapper className="bg-white border-y border-[hsl(240,1%,78%)]/40">
        <div className="space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[hsl(180,2%,11%)]">
              Partner Feedback
            </h2>
            <p className="text-sm sm:text-base text-[hsl(180,1%,27%)]">
              Real outcomes from our multidisciplinary engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.author}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                initials={testimonial.initials}
                delay={index * 0.08}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ────────────────── 4. BOTTOM CTA ────────────────── */}
      <SectionWrapper className="text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[hsl(180,2%,11%)]">
            Ready to forge your next milestone?
          </h2>
          <p className="text-sm sm:text-base text-[hsl(180,1%,27%)]">
            Join the founders and engineering leaders creating category-defining
            experiences.
          </p>
          <div className="pt-2">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Start the Conversation
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
