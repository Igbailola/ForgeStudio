import React from "react";
import type { Metadata } from "next";
import { Layout, Palette, TrendingUp, PenTool, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import ServiceCard from "@/components/ServiceCard";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Services & Process — Forge Studio",
  description:
    "Explore our core digital capabilities in Web Design, Branding, Digital Strategy, and UI/UX Design, backed by our 4-step Forge Process.",
};

const SERVICES = [
  {
    icon: <Layout className="w-5 h-5" />,
    title: "Web Design",
    description:
      "We build fast, responsive, and aesthetically striking websites that command attention. Our designs are rooted in modern principles, ensuring a flawless experience across all devices.",
    tags: ["React", "Tailwind", "Next.js"],
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: "Branding",
    description:
      "We forge memorable brand identities that resonate deeply with your audience. From logo design to comprehensive brand guidelines, we establish your unique voice in the market.",
    tags: ["Identity", "Strategy", "Guidelines"],
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Digital Strategy",
    description:
      "We map out comprehensive digital roadmaps to achieve your business objectives. Our data-driven approach ensures every initiative delivers measurable impact and ROI.",
    tags: ["SEO", "Analytics", "Growth"],
  },
  {
    icon: <PenTool className="w-5 h-5" />,
    title: "UI/UX Design",
    description:
      "We design intuitive, user-centric interfaces that engage and convert. We focus on seamless interactions and elegant visual hierarchies to elevate the user journey.",
    tags: ["Wireframing", "Prototyping", "Testing"],
  },
];

const PROCESS_STEPS = [
  {
    step: "1",
    title: "Discovery",
    description:
      "We immerse ourselves in your business, understanding your goals, audience, and market landscape.",
  },
  {
    step: "2",
    title: "Strategy",
    description:
      "We blueprint the solution, defining the architecture, technology stack, and creative direction.",
  },
  {
    step: "3",
    title: "Execution",
    description:
      "Our team meticulously crafts the design and code, bringing the strategic vision to life with precision.",
  },
  {
    step: "4",
    title: "Launch",
    description:
      "We deploy the solution, monitor performance, and ensure a seamless handover and ongoing support.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* ────────────────── 1. HERO ────────────────── */}
      <SectionWrapper className="pt-12 md:pt-16 pb-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <AnimatedSection>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[hsl(180,2%,11%)]">
              Our Capabilities
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-base sm:text-lg text-[hsl(180,1%,27%)] leading-relaxed">
              We transform complex challenges into elegant digital solutions. Our
              multidisciplinary team is equipped to handle every stage of your
              product&apos;s lifecycle.
            </p>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* ────────────────── 2. SERVICES 2x2 GRID ────────────────── */}
      <SectionWrapper className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              tags={service.tags}
              delay={index * 0.1}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* ────────────────── 3. THE FORGE PROCESS ────────────────── */}
      <SectionWrapper className="bg-white border-t border-[hsl(240,1%,78%)]/40">
        <div className="space-y-16">
          {/* Heading */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[hsl(180,2%,11%)]">
              The Forge Process
            </h2>
            <p className="text-sm sm:text-base text-[hsl(180,1%,27%)]">
              A battle-tested 4-step framework engineered for certainty and speed.
            </p>
          </div>

          {/* 4-Step Process Timeline */}
          <div className="relative">
            {/* Horizontal Connecting Line (Desktop) */}
            <div
              className="hidden md:block absolute top-6 left-[12%] right-[12%] h-0.5 bg-[hsl(240,1%,78%)] -z-0"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 relative z-10">
              {PROCESS_STEPS.map((step, index) => (
                <AnimatedSection
                  key={step.step}
                  delay={index * 0.1}
                  className="flex flex-col items-center text-center space-y-4"
                >
                  {/* Number Badge */}
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-[#b3390c] text-[#b3390c] font-display font-bold text-lg flex items-center justify-center shadow-xs">
                    {step.step}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-[hsl(180,2%,11%)]">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[hsl(180,1%,27%)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <div className="pt-8 flex justify-center">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Start a Project with Us
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
