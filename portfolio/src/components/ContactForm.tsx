"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Lock,
  Sparkles,
  RotateCcw,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { site } from "@/data/site";

// Web3Forms access key configuration
// Preconfigured with your provided access key, also overridable via NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
  "ed23aa91-1ed5-41aa-855a-aee7eeb4890f";

const SUBJECT_OPTIONS = [
  "Job Opportunity",
  "Embedded Systems / Firmware",
  "Robotics / ROS 2",
  "Project Collaboration",
  "Technical Training / Workshops",
  "Other",
] as const;

type SubjectType = (typeof SUBJECT_OPTIONS)[number];

interface FormState {
  name: string;
  email: string;
  subject: SubjectType;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const inputClass = (hasError?: boolean) =>
  `mt-1.5 w-full rounded-xl border ${
    hasError
      ? "border-rose-500/80 focus:border-rose-400 focus:ring-rose-400/30"
      : "border-slate-800 focus:border-sky-400 focus:ring-sky-400/40"
  } bg-[#070A11] px-4 py-3 font-mono text-sm sm:text-xs text-slate-200 placeholder:text-slate-500 focus:ring-1 focus:outline-none transition-colors`;

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    subject: "Job Opportunity",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submittedDetails, setSubmittedDetails] = useState<{
    name: string;
    email: string;
    subject: string;
  } | null>(null);

  // Field change handler with error clearing
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (errorMsg) setErrorMsg(null);
  };

  // Client-side validation
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formState.name.trim() || formState.name.trim().length < 2) {
      newErrors.name = "Please enter your full name (minimum 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formState.email.trim() || !emailRegex.test(formState.email.trim())) {
      newErrors.email = "Please provide a valid email address.";
    }

    if (!formState.subject.trim()) {
      newErrors.subject = "Please select an inquiry subject.";
    }

    if (!formState.message.trim() || formState.message.trim().length < 10) {
      newErrors.message = "Please write a message with at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission handler using official Web3Forms API
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!validate()) return;

    setSubmitting(true);

    try {
      const formEl = e.currentTarget;
      const formData = new FormData(formEl);

      // Check honeypot spam field
      const botcheck = formData.get("botcheck");
      if (botcheck) {
        // Silently mark as successful if bot detected
        setIsSuccess(true);
        setSubmitting(false);
        return;
      }

      // Prepare official Web3Forms payload
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        name: formState.name.trim(),
        email: formState.email.trim(),
        replyto: formState.email.trim(),
        subject: `New Portfolio Contact – Vignesh Sugunathan: ${formState.subject}`,
        category: formState.subject,
        message: formState.message.trim(),
        from_name: "Vignesh Sugunathan Portfolio",
        botcheck: "",
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmittedDetails({
          name: formState.name.trim(),
          email: formState.email.trim(),
          subject: formState.subject,
        });
        setIsSuccess(true);
        setFormState({
          name: "",
          email: "",
          subject: "Job Opportunity",
          message: "",
        });
      } else {
        throw new Error(
          result.message ||
            "Unable to deliver message through Web3Forms. Please try again."
        );
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Network error: Unable to submit inquiry. Please check your connection or send a direct email.";
      setErrorMsg(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setErrorMsg(null);
    setErrors({});
  };

  // Mailto fallback in case of connection failure
  const fallbackMailto = `mailto:${site.contact.email}?subject=${encodeURIComponent(
    `New Portfolio Contact – Vignesh Sugunathan: ${formState.subject}`
  )}&body=${encodeURIComponent(
    `Name: ${formState.name}\nEmail: ${formState.email}\nSubject: ${formState.subject}\n\nMessage:\n${formState.message}`
  )}`;

  return (
    <div className="rounded-2xl border border-slate-800/80 bg-[#0E1422]/90 p-6 sm:p-8 shadow-xl relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/70 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F0FF]" />
            <h3 className="font-bold text-white tracking-tight text-base sm:text-lg">
              Direct Engineering Dispatch
            </h3>
          </div>
          <p className="font-mono text-xs text-slate-400 mt-0.5">
            Verified instant delivery directly to Vignesh Sugunathan
          </p>
        </div>

        <div className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/20 bg-sky-500/5 px-2.5 py-1 font-mono text-[11px] text-sky-300">
          <Sparkles className="size-3 text-cyan-400" />
          <span>Web3Forms API</span>
        </div>
      </div>

      {isSuccess ? (
        /* Premium Success State */
        <div className="space-y-5 py-4 animate-fade-in">
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-5 sm:p-6 space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 shrink-0">
                <CheckCircle2 className="size-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Message Delivered Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Thank you{submittedDetails?.name ? `, ${submittedDetails.name}` : ""}! Your message has been routed directly to Vignesh&apos;s verified inbox.
                </p>
              </div>
            </div>

            {submittedDetails && (
              <div className="rounded-lg border border-slate-800 bg-[#070A11] p-3.5 font-mono text-xs text-slate-400 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">Subject:</span>
                  <span className="text-sky-300 font-medium">
                    {submittedDetails.subject}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Reply-To:</span>
                  <span className="text-slate-300">
                    {submittedDetails.email}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Routing:</span>
                  <span className="text-emerald-400">Direct Delivery</span>
                </div>
              </div>
            )}

            <p className="font-mono text-xs text-slate-400">
              Vignesh typically responds to engineering opportunities and technical collaboration inquiries within 24–48 hours.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-400 px-5 py-2.5 font-mono text-xs font-bold text-slate-950 hover:from-sky-300 hover:to-cyan-300 active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-[0_0_20px_rgba(56,189,248,0.25)]"
            >
              <RotateCcw className="size-3.5" />
              <span>Send Another Message</span>
            </button>

            <a
              href={site.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-sky-400/30 bg-[#070A11] px-5 py-2.5 font-mono text-xs font-medium text-slate-200 hover:border-sky-400 hover:text-sky-300 active:scale-[0.98] transition-all duration-200"
            >
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </div>
      ) : (
        /* Form State */
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Honeypot Spam Protection Field - Hidden from real users */}
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            style={{ display: "none" }}
          />

          {/* Name & Email Fields */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block font-mono text-xs uppercase tracking-wider text-sky-400 font-semibold"
              >
                Full Name <span className="text-rose-400">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formState.name}
                onChange={handleChange}
                autoComplete="name"
                className={inputClass(!!errors.name)}
                placeholder="e.g. Dr. Alex Vance / Recruiter"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p
                  id="name-error"
                  className="font-mono text-[11px] text-rose-400 mt-1 flex items-center gap-1"
                >
                  <AlertCircle className="size-3 shrink-0" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-mono text-xs uppercase tracking-wider text-sky-400 font-semibold"
              >
                Email Address <span className="text-rose-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formState.email}
                onChange={handleChange}
                autoComplete="email"
                className={inputClass(!!errors.email)}
                placeholder="alex@company.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p
                  id="email-error"
                  className="font-mono text-[11px] text-rose-400 mt-1 flex items-center gap-1"
                >
                  <AlertCircle className="size-3 shrink-0" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>
          </div>

          {/* Subject Dropdown */}
          <div>
            <label
              htmlFor="subject"
              className="block font-mono text-xs uppercase tracking-wider text-sky-400 font-semibold"
            >
              Subject <span className="text-rose-400">*</span>
            </label>
            <select
              id="subject"
              name="subject"
              required
              value={formState.subject}
              onChange={handleChange}
              className={`${inputClass(!!errors.subject)} cursor-pointer`}
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject ? "subject-error" : undefined}
            >
              {SUBJECT_OPTIONS.map((opt) => (
                <option
                  key={opt}
                  value={opt}
                  className="bg-[#0E1422] text-slate-200 py-1.5"
                >
                  {opt}
                </option>
              ))}
            </select>
            {errors.subject && (
              <p
                id="subject-error"
                className="font-mono text-[11px] text-rose-400 mt-1 flex items-center gap-1"
              >
                <AlertCircle className="size-3 shrink-0" />
                <span>{errors.subject}</span>
              </p>
            )}
          </div>

          {/* Message Textarea */}
          <div>
            <label
              htmlFor="message"
              className="block font-mono text-xs uppercase tracking-wider text-sky-400 font-semibold"
            >
              Message <span className="text-rose-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formState.message}
              onChange={handleChange}
              className={`${inputClass(!!errors.message)} resize-y`}
              placeholder="Describe role requirements, firmware project scope, or technical collaboration details..."
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p
                id="message-error"
                className="font-mono text-[11px] text-rose-400 mt-1 flex items-center gap-1"
              >
                <AlertCircle className="size-3 shrink-0" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Error Banner with Retry & Direct Email Fallback */}
          {errorMsg && (
            <div className="rounded-xl border border-rose-500/40 bg-rose-950/20 p-4 font-mono text-xs text-rose-300 space-y-2">
              <div className="flex items-center gap-2 font-bold text-rose-200">
                <AlertCircle className="size-4 text-rose-400 shrink-0" />
                <span>Submission Issue</span>
              </div>
              <p className="text-slate-300">{errorMsg}</p>
              <div className="pt-1 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-rose-500/40 bg-rose-500/10 px-3 py-1.5 text-xs text-rose-200 hover:bg-rose-500/20 transition-colors cursor-pointer"
                >
                  <RotateCcw className="size-3" />
                  <span>Retry Submission</span>
                </button>
                <a
                  href={fallbackMailto}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-[#070A11] px-3 py-1.5 text-xs text-slate-300 hover:text-sky-300 hover:border-sky-400 transition-colors"
                >
                  <Mail className="size-3 text-sky-400" />
                  <span>Open in Mail App</span>
                </a>
              </div>
            </div>
          )}

          {/* Submit Button & Privacy Note */}
          <div className="pt-2 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-400 px-6 py-3 font-mono text-xs font-bold text-slate-950 uppercase tracking-wider hover:from-sky-300 hover:to-cyan-300 active:scale-[0.98] transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_24px_rgba(56,189,248,0.25)]"
              >
                {submitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin text-slate-950" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="size-3.5" aria-hidden="true" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <span className="font-mono text-[11px] text-slate-500">
                Direct to verified inbox
              </span>
            </div>

            {/* Privacy Note */}
            <div className="flex items-center gap-2 font-mono text-[11px] text-slate-500 border-t border-slate-800/60 pt-3">
              <Lock className="size-3 text-sky-400 shrink-0" />
              <span>
                Your information will only be used to respond to your inquiry.
              </span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
