"use client";

import { useState } from "react";
import { Award, CheckCircle2, ChevronRight, ExternalLink, ShieldCheck, Trophy, Sparkles } from "lucide-react";
import { certifications } from "@/data/site";
import { Section } from "./Section";

export function Certifications() {
  const [activeCertIdx, setActiveCertIdx] = useState(0);

  return (
    <Section
      id="achievements"
      badge="VERIFIED CREDENTIALS"
      title="Certifications &amp; Achievements"
      description="National engineering competition awards, proctored embedded systems credentials, and academic recognitions."
    >
      <div id="certifications" className="scroll-mt-24" />

      {/* Credential Navigation Tabs / Stepper */}
      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {certifications.map((cert, idx) => {
          const isActive = idx === activeCertIdx;
          return (
            <button
              key={cert.id}
              type="button"
              onClick={() => setActiveCertIdx(idx)}
              className={`group flex flex-col items-start rounded-xl border p-4 text-left transition-all duration-300 cursor-pointer ${
                isActive
                  ? "border-sky-400 bg-[#0E1422] shadow-[0_0_20px_rgba(56,189,248,0.15)] ring-1 ring-sky-400/50"
                  : "border-slate-800 bg-[#070A11]/80 hover:border-sky-400/40 hover:bg-[#0E1422]"
              }`}
            >
              <div className="mb-2 flex w-full items-center justify-between">
                <span
                  className={`flex size-7 items-center justify-center rounded-lg border text-xs font-mono font-bold transition-all ${
                    isActive
                      ? "border-sky-400 bg-sky-400 text-slate-950"
                      : "border-slate-800 bg-[#070A11] text-slate-400 group-hover:text-sky-400"
                  }`}
                >
                  0{idx + 1}
                </span>
                <span className="font-mono text-[10px] text-slate-500">{cert.year}</span>
              </div>

              <h4
                className={`line-clamp-2 text-xs font-bold leading-snug transition-colors ${
                  isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                }`}
              >
                {cert.title}
              </h4>
              <p className="mt-1 line-clamp-1 text-[11px] text-slate-500">{cert.organization}</p>
            </button>
          );
        })}
      </div>

      {/* Active Featured Credential Card */}
      {(() => {
        const current = certifications[activeCertIdx];
        const currentAny = current as Record<string, unknown>;
        return (
          <div className="overflow-hidden rounded-2xl border border-sky-400/30 bg-[#0E1422] p-6 shadow-2xl transition-all md:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              {/* Left Column: Details */}
              <div className="space-y-4 lg:max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-sky-400/40 bg-sky-500/10 px-2.5 py-1 font-mono text-xs font-bold text-sky-400">
                    <Award className="size-3.5" />
                    CREDENTIAL 0{activeCertIdx + 1} OF 05
                  </span>
                  <span className="rounded-md border border-slate-800 bg-[#070A11] px-2.5 py-1 font-mono text-xs text-slate-400">
                    {current.badge}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-xs text-emerald-400">
                    <CheckCircle2 className="size-3.5" />
                    Verified Credential
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {current.title}
                  </h3>
                  <p className="mt-1 font-mono text-sm font-semibold text-sky-400">
                    {current.organization} · {current.year}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">{current.field}</p>
                </div>

                <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {current.description}
                </p>

                {Boolean(currentAny.linkHref) && (
                  <div className="pt-2">
                    <a
                      href={String(currentAny.linkHref)}
                      className="inline-flex items-center gap-2 rounded-lg border border-sky-400/40 bg-[#070A11] px-4 py-2 font-mono text-xs font-semibold text-sky-400 transition-all hover:border-sky-400 hover:bg-sky-500/10"
                    >
                      {String(currentAny.linkText || "View Details")}
                      <ExternalLink className="size-3.5" />
                    </a>
                  </div>
                )}
              </div>

              {/* Right Column: Credential Specs Box */}
              <div className="flex flex-col justify-between rounded-xl border border-sky-400/15 bg-[#070A11] p-5 lg:w-80 space-y-4">
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-slate-400">
                    <span>STATUS:</span>
                    <span className="font-semibold text-emerald-400">ACCREDITED</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-slate-400">
                    <span>ISSUING BODY:</span>
                    <span className="text-right font-semibold text-white truncate max-w-[150px]">
                      {current.organization}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-slate-400">
                    <span>TIMELINE:</span>
                    <span className="font-semibold text-sky-400">{current.year}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>CREDENTIAL ID:</span>
                    <span className="font-semibold text-slate-300">
                      {current.id.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="rounded-lg border border-sky-400/20 bg-sky-500/5 p-3">
                  <div className="flex items-center gap-2 font-mono text-[11px] text-sky-300">
                    <ShieldCheck className="size-4 text-emerald-400" />
                    <span>Tamper-Proof Verification</span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-400 leading-normal">
                    This milestone reflects certified theoretical coursework and demonstrated practical engineering delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* Stepper Navigation Buttons */}
            <div className="mt-8 flex items-center justify-between border-t border-slate-800 pt-5">
              <button
                type="button"
                disabled={activeCertIdx === 0}
                onClick={() => setActiveCertIdx((prev) => Math.max(0, prev - 1))}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-[#070A11] px-3.5 py-1.5 font-mono text-xs text-slate-400 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
              >
                <span>← Previous Milestone</span>
              </button>

              <div className="flex items-center gap-1.5">
                {certifications.map((_, dotIdx) => (
                  <span
                    key={dotIdx}
                    onClick={() => setActiveCertIdx(dotIdx)}
                    className={`size-2 rounded-full cursor-pointer transition-all ${
                      dotIdx === activeCertIdx ? "w-6 bg-sky-400" : "bg-slate-700 hover:bg-slate-500"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                disabled={activeCertIdx === certifications.length - 1}
                onClick={() => setActiveCertIdx((prev) => Math.min(certifications.length - 1, prev + 1))}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-[#070A11] px-3.5 py-1.5 font-mono text-xs text-slate-400 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
              >
                <span>Next Milestone →</span>
              </button>
            </div>
          </div>
        );
      })()}
    </Section>
  );
}
