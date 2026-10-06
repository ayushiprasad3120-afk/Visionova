"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { Field, inputClass } from "./field";
import { submitForm } from "@/lib/form-submit";

const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await submitForm(ENDPOINT, e.currentTarget, { _subject: "New VisionovaHQ Contact Message" });
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl card-surface p-10 text-center"
      >
        <CheckCircle2 className="mx-auto text-wine" size={40} />
        <h3 className="mt-5 font-display text-2xl text-charcoal dark:text-cream">Message sent</h3>
        <p className="mt-2 text-sm text-charcoal/65 dark:text-cream/65 max-w-sm mx-auto">
          Thanks for reaching out — our team will respond within one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl card-surface p-6 md:p-10 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Full Name">
          <input required name="fullName" className={inputClass} placeholder="Jane Doe" />
        </Field>
        <Field label="Email">
          <input required type="email" name="email" className={inputClass} placeholder="jane@company.com" />
        </Field>
      </div>
      <Field label="Subject">
        <input name="subject" className={inputClass} placeholder="How can we help?" />
      </Field>
      <Field label="Message">
        <textarea required name="message" rows={5} className={inputClass} placeholder="Tell us more..." />
      </Field>

      {error && (
        <div className="flex items-start gap-2.5 rounded-xl bg-wine/5 border border-wine/20 px-4 py-3 text-sm text-wine">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto rounded-full bg-wine text-cream px-8 py-3.5 text-sm font-medium hover:bg-burgundy transition-colors disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
