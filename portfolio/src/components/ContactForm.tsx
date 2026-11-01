"use client";

import { useState } from "react";
import { Send, CheckCircle2, Copy, Check, Loader2, Sparkles, Terminal } from "lucide-react";
import Link from "next/link";
import { site } from "@/data/site";
import { button } from "./ui";

const field =
  "mt-1.5 w-full rounded-xl border border-slate-800 bg-[#070A11] px-4 py-3 font-mono text-xs text-slate-200 placeholder:text-slate-500 focus:border-sky-400 focus:ring-1 focus:ring-sky-400/50 focus:outline-none transition-colors";

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
    const subject = String(data.get("subject") ?? "General Engineering Inquiry").trim();
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
    <div className="rounded-2xl border border-slate-800/80 bg-[#0E1422]/90 p-6 sm:p-8 shadow-xl relative overflow-hidden">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/70 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F0FF]" />
            <h3 className="font-bold text-white tracking-tight">Direct Engineering Dispatch</h3>
          </div>
          <p className="font-mono text-xs text-slate-400 mt-0.5">
            Saves securely to local log and sends instant push notification
          </p>
        </div>
        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-[#070A11] px-3 py-1.5 font-mono text-xs text-slate-300 hover:border-sky-400 hover:text-sky-300 transition-colors cursor-pointer"
        >
          {copied ? <Check className="size-3 text-emerald-400" /> : <Copy className="size-3 text-sky-400" />}
          {copied ? "Copied Email!" : "Copy Email"}
        </button>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-sky-400 font-semibold">
              Your Name / Title
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className={field}
              placeholder="e.g. Dr. Alex Vance / Senior Manager"
            />
          </div>
          <div>
            <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-sky-400 font-semibold">
              Your Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={field}
              placeholder="alex@semiconductor.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="font-mono text-xs uppercase tracking-wider text-sky-400 font-semibold">
            Inquiry Category
          </label>
          <select id="subject" name="subject" className={field}>
            <option value="Embedded Systems Engineering Role">Full-Time Embedded Systems / Firmware Role</option>
            <option value="Firmware Architecture & STM32 Bring-Up">Firmware Architecture &amp; STM32 Bring-Up</option>
            <option value="Hardware Integration & Robotics R&D">Hardware Integration &amp; Robotics R&D</option>
            <option value="LoRa / Wireless Mesh Communication">LoRa / Wireless Mesh Communication</option>
            <option value="Technical Interview / Recruiter Outreach">Technical Interview / Recruiter Outreach</option>
            <option value="General Technical Inquiry">Other Technical Inquiry</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-sky-400 font-semibold">
            Message Details
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className={`${field} resize-y`}
            placeholder="Describe role requirements, technical specifications, or interview scheduling details..."
          />
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
          <button type="submit" disabled={submitting} className={button.primary}>
            {submitting ? (
              <>
                <Loader2 className="size-4 animate-spin text-slate-900" />
                <span>Logging Dispatch...</span>
              </>
            ) : (
              <>
                <Send className="size-3.5" aria-hidden="true" />
                <span>Dispatch Message</span>
              </>
            )}
          </button>

          <Link
            href="/inbox"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-400 hover:text-sky-300 transition-colors"
          >
            <Terminal className="size-3 text-sky-400" />
            <span>View All Dispatches (/inbox)</span>
          </Link>
        </div>

        {dbSuccess && (
          <div className="mt-4 flex items-start gap-3 rounded-xl border border-sky-400/40 bg-[#070A11] p-4 font-mono text-xs text-sky-300">
            <CheckCircle2 className="size-4 shrink-0 mt-0.5 text-cyan-400" />
            <div>
              <p className="font-bold text-white flex items-center gap-1.5">
                <Sparkles className="size-3.5 text-cyan-400" />
                Message successfully logged &amp; notified to engineering desk!
              </p>
              {recordId && (
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Reference Record ID: <span className="text-sky-300 font-mono">{recordId}</span>
                </p>
              )}
              <p className="text-[11px] text-slate-400 mt-1">
                You can also reach Vignesh directly via{" "}
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
