"use client";

import { useState, useRef, useCallback } from "react";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

const COOLDOWN_MS = 5000;

export function useContactForm() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "New Project Inquiry",
    message: "",
  });

  const abortRef = useRef<AbortController | null>(null);
  const cooldownRef = useRef(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    []
  );

  const resetForm = useCallback(() => {
    setFormStatus("idle");
    setFormData({
      name: "",
      email: "",
      subject: "New Project Inquiry",
      message: "",
    });
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (cooldownRef.current) return;

      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

      if (!endpoint || endpoint.includes("your_form_id_here")) {
        setFormStatus("error");
        setErrorMessage(
          "Form submission is currently in demo mode: NEXT_PUBLIC_FORMSPREE_ENDPOINT is not configured."
        );
        return;
      }

      setFormStatus("submitting");
      setErrorMessage("");
      cooldownRef.current = true;

      abortRef.current?.abort();
      abortRef.current = new AbortController();

      try {
        const trimmedData = {
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject,
          message: formData.message.trim(),
        };

        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(trimmedData),
          signal: abortRef.current.signal,
        });

        if (response.ok) {
          setFormStatus("success");
          resetForm();
        } else {
          const data = await response.json().catch(() => ({}));
          setFormStatus("error");
          setErrorMessage(
            data?.error ||
              "Unable to submit message. Please try again or email us directly."
          );
        }
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setFormStatus("error");
        setErrorMessage(
          "Network connection issue. Please verify your internet and try again."
        );
      } finally {
        setTimeout(() => {
          cooldownRef.current = false;
        }, COOLDOWN_MS);
      }
    },
    [formData, resetForm]
  );

  return {
    formStatus,
    errorMessage,
    formData,
    handleChange,
    handleSubmit,
    resetForm,
  };
}
