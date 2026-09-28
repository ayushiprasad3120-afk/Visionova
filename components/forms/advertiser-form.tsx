"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { Field, inputClass } from "./field";
import { submitForm } from "@/lib/form-submit";

const ENDPOINT = process.env.NEXT_PUBLIC_ADVERTISER_FORM_ENDPOINT;

export function AdvertiserForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await submitForm(ENDPOINT, e.currentTarget, { _subject: "New VisionovaHQ Advertiser Application" });
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
        <h3 className="mt-5 font-display text-2xl text-charcoal dark:text-cream">Application received</h3>
        <p className="mt-2 text-sm text-charcoal/65 dark:text-cream/65 max-w-sm mx-auto">
          A dedicated account manager will reach out within one business day. In the meantime, feel free to email us directly at info@visionovahq.com.
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
        <Field label="Company">
          <input required name="company" className={inputClass} placeholder="Acme Inc." />
        </Field>
        <Field label="Email">
          <input required type="email" name="email" className={inputClass} placeholder="jane@acme.com" />
        </Field>
        <Field label="Country">
          <input required name="country" className={inputClass} placeholder="United States" />
        </Field>
        <Field label="Traffic Requirement">
          <input name="trafficRequirement" className={inputClass} placeholder="e.g. 500K clicks/mo" />
        </Field>
        <Field label="Campaign Type">
          <select name="campaignType" className={inputClass} defaultValue="CPA">
            <option>CPA</option>
            <option>CPL</option>
            <option>CPS</option>
            <option>Pay Per Call</option>
            <option>App Installs</option>
          </select>
        </Field>
        <Field label="Budget">
          <input name="budget" className={inputClass} placeholder="e.g. $10,000/mo" />
        </Field>
      </div>
      <Field label="Message">
        <textarea name="message" rows={4} className={inputClass} placeholder="Tell us about your campaign goals..." />
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
        {loading ? "Submitting..." : "Submit Advertiser Application"}
      </button>
    </form>
  );
}
