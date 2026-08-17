"use client";

import React from "react";
import SectionWrapper from "@/components/SectionWrapper";
import FaqSection from "@/components/FaqSection";
import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      <FaqSection />

      <SectionWrapper
        id="contact"
        className="bg-white border-y border-outline-variant/40"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <ContactDetails />
          <ContactForm />
        </div>
      </SectionWrapper>
    </div>
  );
}
