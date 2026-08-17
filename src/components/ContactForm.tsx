"use client";

import React from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";
import { INQUIRY_TYPES } from "@/config/navigation";
import FormField from "@/components/FormField";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";

const INPUT_CLASSES =
  "w-full px-4 py-3 rounded-xl bg-white border border-outline-variant/80 text-on-surface text-sm focus:outline-hidden focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all placeholder:text-outline";

export default function ContactForm() {
  const { formStatus, errorMessage, formData, handleChange, handleSubmit } =
    useContactForm();

  return (
    <AnimatedSection
      delay={0.15}
      className="lg:col-span-7 bg-background rounded-3xl p-8 sm:p-10 border border-outline-variant/60 shadow-sm"
    >
      <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot field for spam protection */}
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField label="Full Name" htmlFor="name">
            <input
              type="text"
              id="name"
              name="name"
              required
              maxLength={100}
              value={formData.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              className={INPUT_CLASSES}
            />
          </FormField>

          <FormField label="Email Address" htmlFor="email">
            <input
              type="email"
              id="email"
              name="email"
              required
              maxLength={254}
              value={formData.email}
              onChange={handleChange}
              placeholder="jane@example.com"
              className={INPUT_CLASSES}
            />
          </FormField>
        </div>

        <FormField label="Subject / Service Interest" htmlFor="subject">
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`${INPUT_CLASSES} cursor-pointer`}
          >
            {INQUIRY_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </FormField>

        <FormField label="Project Details" htmlFor="message">
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            maxLength={5000}
            minLength={10}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your goals, timeline, and budget..."
            className={`${INPUT_CLASSES} resize-y`}
          />
        </FormField>

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
  );
}
