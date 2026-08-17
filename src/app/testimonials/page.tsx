import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import TestimonialCard from "@/components/TestimonialCard";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Client Testimonials — Forge Studio",
  description:
    "Hear what founders, CTOs, and product leaders have to say about partnering with Forge Studio.",
};

const TESTIMONIALS = [
  {
    id: "marcus",
    author: "Marcus Thorne",
    role: "VP Engineering",
    company: "Apex Financial",
    quote:
      "The level of clarity they brought to our complex dashboard architecture was astounding. They stripped away the noise and left us with a highly functional, elegant interface that our power users adore.",
    initials: "MT",
  },
  {
    id: "sarah",
    author: "Sarah Jenkins",
    role: "Founder",
    company: "Aura Retail",
    quote:
      "They lived up to their name. Forge took our fragmented ideas and hammered them into a cohesive, beautiful brand identity. The subtle interactions and speed set us apart in luxury commerce.",
    initials: "SJ",
  },
  {
    id: "david",
    author: "David Chen",
    role: "Director of Operations",
    company: "Shift Logistics",
    quote:
      "We needed a technical partner who understood both scale and design. Forge delivered an enterprise-grade platform wrapped in a stunningly minimalist UI that reduced our dispatch latency by 40%.",
    initials: "DC",
  },
  {
    id: "amara",
    author: "Amara Okonjo",
    role: "Head of Product",
    company: "Kuro Health",
    quote:
      "Working with Forge felt like having an elite SWAT team embedded inside our startup. They moved at breakneck speed without cutting a single corner on accessibility or craft.",
    initials: "AO",
  },
  {
    id: "julian",
    author: "Julian Vance",
    role: "Managing Partner",
    company: "Founders Guild",
    quote:
      "Whenever our portfolio companies need to redefine their category with an uncompromising digital flagship, Forge Studio is our singular recommendation.",
    initials: "JV",
  },
  {
    id: "claire",
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
      <SectionWrapper className="pt-12 md:pt-16 pb-8 text-center">
        <PageHero
          title="Words forged by fire."
          description="We don't just build digital products; we forge lasting partnerships. Read what industry leaders say about the precision, heat, and clarity we bring to every project."
          centered
        />
      </SectionWrapper>

      <SectionWrapper className="pt-0">
        <AnimatedSection>
          <div className="bg-white rounded-3xl overflow-hidden border border-outline-variant/60 shadow-lg grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-5 relative min-h-[340px] sm:min-h-[420px] bg-surface-container-low">
              <Image
                src="/images/testimonial-eleanor.jpg"
                alt="Eleanor Vance, CTO at Nexus Dynamics"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div
                  className="font-display text-5xl sm:text-6xl font-black text-brand/40 leading-none select-none"
                  aria-hidden="true"
                >
                  &ldquo;&ldquo;
                </div>
                <blockquote className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-on-surface leading-snug">
                  &ldquo;Forge Studio didn&apos;t just redesign our platform; they
                  redefined our entire digital strategy. Their balance of
                  industrial precision and modern aesthetic resulted in a product
                  that is not only visually stunning but fundamentally superior in
                  performance.&rdquo;
                </blockquote>
              </div>

              <div className="pt-6 border-t border-outline-variant/60 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-light text-brand font-display font-bold text-sm flex items-center justify-center border border-brand/20">
                  EV
                </div>
                <div>
                  <div className="font-display text-base font-bold text-on-surface">
                    Eleanor Vance
                  </div>
                  <div className="text-xs sm:text-sm text-on-surface-variant">
                    CTO, Nexus Dynamics
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </SectionWrapper>

      <SectionWrapper className="bg-white border-y border-outline-variant/40">
        <div className="space-y-12">
          <SectionHeader
            title="Partner Feedback"
            subtitle="Real outcomes from our multidisciplinary engagements."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
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

      <SectionWrapper className="text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-on-surface">
            Ready to forge your next milestone?
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant">
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
