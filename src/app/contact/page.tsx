"use client";

import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import AccordionItem from "@/components/AccordionItem";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";

const FAQS = [
  {
    question: "What is your typical project timeline?",
    answer:
      "Our average engagement spans 4 to 12 weeks depending on scope and complexity. Sprint 1 is dedicated to Discovery & Strategy, followed by rapid 2-week agile design and engineering iterations with continuous stakeholder demos.",
    defaultOpen: true,
  },
  {
    question: "How do you structure your pricing?",
    answer:
      "We operate on fixed-scope project milestones for well-defined builds, or dedicated monthly retainer sprints for ongoing product engineering. Every engagement receives a transparent, line-item proposal before kickoff.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. Every build includes 30 days of post-launch hypercare and bug-fix warranty. We also offer dedicated ongoing growth retainers for continuous feature shipping and optimization.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in modern frontend and full-stack architectures: Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Node.js, and headless CMS/API integrations.",
  },
  {
    question: "Who owns the code and design assets?",
    answer:
      "You retain 100% intellectual property ownership of all Figma design systems, tokens, code repositories, and brand assets upon project completion.",
  },
];

export default function ContactAndFaqPage() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "New Project Inquiry",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    setErrorMessage("");

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    if (!endpoint || endpoint.includes("your_form_id_here")) {
      setFormStatus("error");
      setErrorMessage(
        "Form submission is currently in demo mode: NEXT_PUBLIC_FORMSPREE_ENDPOINT environment variable is not configured. Please add your Formspree endpoint in .env.local."
      );
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "New Project Inquiry",
          message: "",
        });
      } else {
        const data = await response.json().catch(() => ({}));
        setFormStatus("error");
        setErrorMessage(
          data?.error ||
            "Unable to submit message. Please try again or email us directly at hello@forgestudio.design."
        );
      }
    } catch {
      setFormStatus("error");
      setErrorMessage(
        "Network connection issue. Please verify your internet and try again."
      );
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* ────────────────── 1. FAQ SECTION ────────────────── */}
      <SectionWrapper id="faq" className="pt-12 md:pt-16 pb-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* FAQ Header */}
          <div className="text-center space-y-3">
            <AnimatedSection>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[hsl(180,2%,11%)]">
                Frequently Asked Questions
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-base sm:text-lg text-[hsl(180,1%,27%)] max-w-xl mx-auto">
                Everything you need to know about our process, pricing, and how
                we forge digital products.
              </p>
            </AnimatedSection>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <AnimatedSection key={faq.question} delay={index * 0.06}>
                <AccordionItem
                  question={faq.question}
                  answer={faq.answer}
                  defaultOpen={faq.defaultOpen}
                />
              </AnimatedSection>
            ))}
          </div>

          {/* Still Have Questions CTA Bridge */}
          <AnimatedSection delay={0.3}>
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[hsl(240,1%,78%)]/60 text-center space-y-4 shadow-xs">
              <h3 className="font-display text-2xl font-bold text-[hsl(180,2%,11%)]">
                Still have questions?
              </h3>
              <p className="text-sm sm:text-base text-[hsl(180,1%,27%)] max-w-md mx-auto">
                We&apos;re here to help. Reach out to our team for a detailed
                consultation regarding your specific project needs.
              </p>
              <div className="pt-2">
                <Button
                  onClick={() => {
                    const formElement = document.getElementById("contact-form");
                    formElement?.scrollIntoView({ behavior: "smooth" });
                  }}
                  variant="primary"
                  size="md"
                >
                  Contact Support
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* ────────────────── 2. CONTACT SECTION ────────────────── */}
      <SectionWrapper
        id="contact"
        className="bg-white border-y border-[hsl(240,1%,78%)]/40"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Details */}
          <AnimatedSection className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-[hsl(180,2%,11%)]">
                Get in Touch
              </h2>
              <p className="text-base text-[hsl(180,1%,27%)] leading-relaxed">
                Ready to forge something extraordinary? Reach out to discuss your
                next digital product, high-end web experience, or branding project.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-6 pt-2">
              {/* Studio HQ */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#b3390c]/10 text-[#b3390c] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display text-sm font-bold text-[hsl(180,2%,11%)]">
                    Studio Headquarters
                  </h4>
                  <p className="text-sm text-[hsl(180,1%,27%)] leading-relaxed">
                    1200 Pixel Avenue, Suite 404
                    <br />
                    San Francisco, CA 94103
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#b3390c]/10 text-[#b3390c] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display text-sm font-bold text-[hsl(180,2%,11%)]">
                    General Inquiries
                  </h4>
                  <a
                    href="mailto:hello@forgestudio.design"
                    className="text-sm text-[hsl(180,1%,27%)] hover:text-[#b3390c] transition-colors"
                  >
                    hello@forgestudio.design
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#b3390c]/10 text-[#b3390c] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display text-sm font-bold text-[hsl(180,2%,11%)]">
                    Direct Line
                  </h4>
                  <a
                    href="tel:+14155550198"
                    className="text-sm text-[hsl(180,1%,27%)] hover:text-[#b3390c] transition-colors"
                  >
                    +1 (415) 555-0198
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column: Lead Form */}
          <AnimatedSection
            delay={0.15}
            className="lg:col-span-7 bg-[hsl(0,20%,98%)] rounded-3xl p-8 sm:p-10 border border-[hsl(240,1%,78%)]/60 shadow-sm"
          >
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-semibold text-[hsl(180,2%,11%)]"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[hsl(240,1%,78%)]/80 text-[hsl(180,2%,11%)] text-sm focus:outline-hidden focus:border-[#b3390c] focus:ring-2 focus:ring-[#b3390c]/20 transition-all placeholder:text-[hsl(180,0%,46%)]"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-semibold text-[hsl(180,2%,11%)]"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[hsl(240,1%,78%)]/80 text-[hsl(180,2%,11%)] text-sm focus:outline-hidden focus:border-[#b3390c] focus:ring-2 focus:ring-[#b3390c]/20 transition-all placeholder:text-[hsl(180,0%,46%)]"
                  />
                </div>
              </div>

              {/* Row 2: Subject Dropdown */}
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="block text-xs sm:text-sm font-semibold text-[hsl(180,2%,11%)]"
                >
                  Subject / Service Interest
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[hsl(240,1%,78%)]/80 text-[hsl(180,2%,11%)] text-sm focus:outline-hidden focus:border-[#b3390c] focus:ring-2 focus:ring-[#b3390c]/20 transition-all cursor-pointer"
                >
                  <option value="New Project Inquiry">New Project Inquiry</option>
                  <option value="UI/UX & Product Design">UI/UX &amp; Product Design</option>
                  <option value="Web Development & Architecture">
                    Web Development &amp; Architecture
                  </option>
                  <option value="Brand Identity & Strategy">
                    Brand Identity &amp; Strategy
                  </option>
                  <option value="General Question">General Question</option>
                </select>
              </div>

              {/* Row 3: Project Details Textarea */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-semibold text-[hsl(180,2%,11%)]"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your goals, timeline, and budget..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[hsl(240,1%,78%)]/80 text-[hsl(180,2%,11%)] text-sm focus:outline-hidden focus:border-[#b3390c] focus:ring-2 focus:ring-[#b3390c]/20 transition-all placeholder:text-[hsl(180,0%,46%)] resize-y"
                />
              </div>

              {/* Status Notifications */}
              {formStatus === "success" && (
                <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-xs text-green-700 mt-0.5">
                      Thank you for reaching out. A partner from Forge Studio will
                      respond within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              {formStatus === "error" && (
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0 text-amber-600 mt-0.5" />
                  <div>
                    <p className="font-semibold">Notice</p>
                    <p className="text-xs text-amber-800 mt-0.5 leading-relaxed">
                      {errorMessage}
                    </p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-end pt-2">
                <Button
                  type="submit"
                  variant="secondary"
                  size="md"
                  disabled={formStatus === "submitting"}
                  icon={
                    formStatus === "submitting" ? (
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )
                  }
                >
                  {formStatus === "submitting" ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* ────────────────── 3. MAP SHOWCASE ────────────────── */}
      <SectionWrapper className="pt-0">
        <AnimatedSection>
          <div className="relative w-full aspect-[21/9] sm:aspect-[21/7] rounded-3xl overflow-hidden border border-[hsl(240,1%,78%)]/60 bg-[hsl(0,9%,96%)] flex items-center justify-center">
            {/* Styled Map Graphic Background */}
            <div className="absolute inset-0 bg-radial from-[hsl(0,9%,96%)] to-[hsl(0,0%,89%)] flex items-center justify-center">
              <div className="text-center space-y-2 select-none pointer-events-none opacity-40">
                <span className="font-display text-4xl sm:text-6xl font-black tracking-widest text-[hsl(180,2%,11%)]">
                  SAN FRANCISCO
                </span>
                <p className="text-xs tracking-widest uppercase text-[hsl(180,1%,27%)]">
                  37.7749° N, 122.4194° W
                </p>
              </div>
            </div>

            {/* Floating Location Card */}
            <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/60 shadow-lg flex items-center gap-4 max-w-sm mx-4">
              <div className="w-10 h-10 rounded-xl bg-[#b3390c] text-white flex items-center justify-center shrink-0 shadow-xs">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-display text-sm font-bold text-[hsl(180,2%,11%)]">
                  Forge Studio SF
                </h4>
                <p className="text-xs text-[hsl(180,1%,27%)]">
                  Drop by for a pour-over coffee and design critique.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </SectionWrapper>
    </div>
  );
}
