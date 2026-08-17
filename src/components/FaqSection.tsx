"use client";

import React from "react";
import { FAQS } from "@/data/faqs";
import AccordionItem from "@/components/AccordionItem";
import AnimatedSection from "@/components/AnimatedSection";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

export default function FaqSection() {
  return (
    <SectionWrapper id="faq" className="pt-12 md:pt-16 pb-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <AnimatedSection>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-on-surface">
              Frequently Asked Questions
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-base sm:text-lg text-on-surface-variant max-w-xl mx-auto">
              Everything you need to know about our process, pricing, and how
              we forge digital products.
            </p>
          </AnimatedSection>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <AnimatedSection key={faq.id} delay={index * 0.06}>
              <AccordionItem
                question={faq.question}
                answer={faq.answer}
                defaultOpen={faq.defaultOpen}
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-outline-variant/60 text-center space-y-4 shadow-xs">
            <h3 className="font-display text-2xl font-bold text-on-surface">
              Still have questions?
            </h3>
            <p className="text-sm sm:text-base text-on-surface-variant max-w-md mx-auto">
              We&apos;re here to help. Reach out to our team for a detailed
              consultation regarding your specific project needs.
            </p>
            <div className="pt-2">
              <Button
                onClick={() => {
                  document
                    .getElementById("contact-form")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                variant="secondary"
                size="md"
              >
                Contact Support
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
