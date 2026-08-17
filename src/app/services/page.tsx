import React from "react";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import ServiceCard from "@/components/ServiceCard";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Services & Process — Forge Studio",
  description:
    "Explore our core digital capabilities in Web Design, Branding, Digital Strategy, and UI/UX Design, backed by our 4-step Forge Process.",
};

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
      <SectionWrapper className="pt-12 md:pt-16 pb-8 text-center">
        <PageHero
          title="Our Capabilities"
          description="We transform complex challenges into elegant digital solutions. Our multidisciplinary team is equipped to handle every stage of your product's lifecycle."
          centered
        />
      </SectionWrapper>

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

      <SectionWrapper className="bg-white border-t border-outline-variant/40">
        <div className="space-y-16">
          <SectionHeader
            title="The Forge Process"
            subtitle="A battle-tested 4-step framework engineered for certainty and speed."
          />

          <div className="relative">
            <div
              className="hidden md:block absolute top-6 left-[12%] right-[12%] h-0.5 bg-outline-variant -z-0"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 relative z-10">
              {PROCESS_STEPS.map((step, index) => (
                <AnimatedSection
                  key={step.step}
                  delay={index * 0.1}
                  className="flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-brand text-brand font-display font-bold text-lg flex items-center justify-center shadow-xs">
                    {step.step}
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-on-surface">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

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
