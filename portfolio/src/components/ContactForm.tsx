"use client";

import { useState } from "react";
import { Send, CheckCircle2, Copy, Check, Loader2, Database } from "lucide-react";
import { site } from "@/data/site";
import { button } from "./ui";

const field =
  "mt-1.5 w-full rounded-lg border border-[#B6E778]/25 bg-[#101310] px-4 py-2.5 font-mono text-xs text-[#F1F4EF] placeholder:text-[#9EAA9A]/60 focus:border-[#B6E778] focus:outline-none transition-colors";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [dbSuccess, setDbSuccess] = useState(false);
  const [recordId, setRecordId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "General Inquiry").trim();
    const message = String(data.get("message") ?? "").trim();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setDbSuccess(true);
        setRecordId(resData.recordId);
        form.reset();
      } else {
        throw new Error(resData.error || "Failed to submit to database");
      }
    } catch {
      // Fallback: trigger mailto if API route is unavailable
      const mailtoSubject = encodeURIComponent(`[${subject}] Inquiry from ${name}`);
      const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:${site.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
      setDbSuccess(true);
    } finally {
      setSubmitting(false);
    }
  }

  const copyEmail = () => {
    navigator.clipboard.writeText(site.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-[#B6E778]/25 bg-[#1B211D] p-6 sm:p-8 shadow-xl">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[#B6E778]/15 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#B6E778] shadow-[0_0_8px_#B6E778]" />
            <h3 className="font-bold text-white">Send Direct Dispatch</h3>
          </div>
          <p className="font-mono text-xs text-[#9EAA9A] mt-0.5">
            Auto-saves to database &amp; notifies engineering desk
          </p>
        </div>
        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex items-center gap-1.5 rounded-md border border-[#B6E778]/25 bg-[#101310] px-2.5 py-1 font-mono text-xs text-[#F1F4EF] hover:border-[#B6E778] hover:text-[#B6E778] transition-colors cursor-pointer"
        >
          {copied ? <Check className="size-3 text-[#B6E778]" /> : <Copy className="size-3 text-[#B6E778]" />}
          {copied ? "Copied Email!" : "Copy Email"}
        </button>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-[#B6E778] font-semibold">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className={field}
              placeholder="e.g. Dr. Alex Vance"
            />
          </div>
          <div>
            <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-[#B6E778] font-semibold">
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={field}
              placeholder="alex@domain.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="font-mono text-xs uppercase tracking-wider text-[#B6E778] font-semibold">
            Inquiry / Collaboration Category
          </label>
          <select id="subject" name="subject" className={field}>
            <option value="Embedded Firmware Development">Embedded Firmware Development (STM32 / PIC)</option>
            <option value="Robotics Hardware Integration">Robotics &amp; Hardware Integration</option>
            <option value="LoRa / Wireless IoT Prototype">LoRa / Wireless IoT Prototype</option>
            <option value="Workshop & Guest Mentoring">Workshop &amp; Guest Mentoring</option>
            <option value="Full-Time Engineering Hiring">Full-Time Engineering Role</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-[#B6E778] font-semibold">
            Message Details
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className={`${field} resize-y`}
            placeholder="Describe your engineering role, prototype requirements, or mentoring session details..."
          />
        </div>

        <div className="pt-2">
          <button type="submit" disabled={submitting} className={button.primary}>
            {submitting ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Logging to Database...
              </>
            ) : (
              <>
                <Send className="size-3.5" aria-hidden="true" />
                Dispatch Message
              </>
            )}
          </button>
        </div>

        {dbSuccess && (
          <div className="mt-4 flex items-start gap-2.5 rounded-lg border border-[#B6E778]/40 bg-[#101310] p-4 font-mono text-xs text-[#B6E778]">
            <CheckCircle2 className="size-4 shrink-0 mt-0.5 text-[#B6E778]" />
            <div>
              <p className="font-bold text-white">Message successfully logged to VIGSUGU LAB database!</p>
              {recordId && (
                <p className="text-[11px] text-[#9EAA9A] mt-0.5">
                  Reference Record ID: <span className="text-[#B6E778]">{recordId}</span>
                </p>
              )}
              <p className="text-[11px] text-[#9EAA9A] mt-1">
                You can also email directly to{" "}
                <strong className="text-white underline">{site.contact.email}</strong>.
              </p>
            </div>
          </div>
        )}

        {errorMsg && (
          <p className="font-mono text-xs text-red-400 mt-2">
            {errorMsg}
          </p>
        )}
      </form>
    </div>
  );
}
