"use client";

import { useState } from "react";
import { Award, CheckCircle2, ChevronRight, ExternalLink, ShieldCheck, Trophy, Sparkles } from "lucide-react";
import { certifications } from "@/data/site";
import { Section } from "./Section";

export function Certifications() {
  const [activeCertIdx, setActiveCertIdx] = useState(0);

  return (
    <Section
      id="certifications"
      badge="VERIFIED CREDENTIALS"
      title="Certifications &amp; Honors"
      description="National engineering competition awards, proctored embedded systems credentials, and academic recognitions."
    >
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
                  ? "border-[#38BDF8] bg-[#0E1422] shadow-[0_0_20px_rgba(56,189,248,0.15)] ring-1 ring-[#38BDF8]/50"
                  : "border-[#38BDF8]/15 bg-[#070A11]/80 hover:border-[#38BDF8]/40 hover:bg-[#0E1422]"
              }`}
            >
              <div className="mb-2 flex w-full items-center justify-between">
                <span
                  className={`flex size-7 items-center justify-center rounded-lg border text-xs font-mono font-bold transition-all ${
                    isActive
                      ? "border-[#38BDF8] bg-[#38BDF8] text-[#070A11]"
                      : "border-[#1E293B] bg-[#070A11] text-[#94A3B8] group-hover:text-[#38BDF8]"
                  }`}
                >
                  {cert.number}
                </span>
                <span className="font-mono text-[10px] text-[#64748B]">{cert.year}</span>
              </div>

              <h4
                className={`line-clamp-2 text-xs font-bold leading-snug transition-colors ${
                  isActive ? "text-white" : "text-[#CBD5E1] group-hover:text-white"
                }`}
              >
                {cert.title}
              </h4>
              <p className="mt-1 line-clamp-1 text-[11px] text-[#64748B]">{cert.organization}</p>
            </button>
          );
        })}
      </div>

      {/* Active Featured Credential Card */}
      {(() => {
        const current = certifications[activeCertIdx];
        return (
          <div className="overflow-hidden rounded-2xl border border-[#38BDF8]/30 bg-[#0E1422] p-6 shadow-2xl transition-all md:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              {/* Left Column: Details */}
              <div className="space-y-4 lg:max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#38BDF8]/40 bg-[#38BDF8]/10 px-2.5 py-1 font-mono text-xs font-bold text-[#38BDF8]">
                    <Award className="size-3.5" />
                    CREDENTIAL {current.number} OF 05
                  </span>
                  <span className="rounded-md border border-[#1E293B] bg-[#070A11] px-2.5 py-1 font-mono text-xs text-[#94A3B8]">
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
                  <p className="mt-1 font-mono text-sm font-semibold text-[#38BDF8]">
                    {current.organization} · {current.year}
                  </p>
                  <p className="mt-0.5 text-xs text-[#94A3B8]">{current.field}</p>
                </div>

                <p className="text-xs leading-relaxed text-[#CBD5E1] sm:text-sm">
                  {current.description}
                </p>

                {current.linkHref && (
                  <div className="pt-2">
                    <a
                      href={current.linkHref}
                      className="inline-flex items-center gap-2 rounded-lg border border-[#38BDF8]/40 bg-[#070A11] px-4 py-2 font-mono text-xs font-semibold text-[#38BDF8] transition-all hover:border-[#38BDF8] hover:bg-[#38BDF8]/10"
                    >
                      {current.linkText || "View Details"}
                      <ExternalLink className="size-3.5" />
                    </a>
                  </div>
                )}
              </div>

              {/* Right Column: Credential Specs Box */}
              <div className="flex flex-col justify-between rounded-xl border border-[#38BDF8]/15 bg-[#070A11] p-5 lg:w-80 space-y-4">
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between border-b border-[#1E293B] pb-2 text-[#64748B]">
                    <span>STATUS:</span>
                    <span className="font-semibold text-emerald-400">ACCREDITED</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-[#1E293B] pb-2 text-[#64748B]">
                    <span>ISSUING BODY:</span>
                    <span className="text-right font-semibold text-[#F8FAFC] truncate max-w-[150px]">
                      {current.organization}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-[#1E293B] pb-2 text-[#64748B]">
                    <span>TRACK ID:</span>
                    <span className="font-semibold text-[#38BDF8]">{current.id.toUpperCase()}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#64748B]">
                    <span>VERIFICATION:</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-emerald-400">
                      <span className="size-2 rounded-full bg-emerald-400" />
                      AUTHENTICATED
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-[#1E293B] pt-4">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveCertIdx((prev) => (prev > 0 ? prev - 1 : certifications.length - 1))
                    }
                    className="rounded-md border border-[#1E293B] px-3 py-1 font-mono text-xs text-[#94A3B8] hover:border-[#38BDF8] hover:text-[#38BDF8]"
                  >
                    ← Prev
                  </button>
                  <span className="font-mono text-xs text-[#64748B]">
                    {activeCertIdx + 1} / {certifications.length}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveCertIdx((prev) => (prev < certifications.length - 1 ? prev + 1 : 0))
                    }
                    className="inline-flex items-center gap-1 rounded-md border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-3 py-1 font-mono text-xs font-semibold text-[#38BDF8] hover:bg-[#38BDF8]/20"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Grid of All Credentials */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <div
            key={cert.id}
            onClick={() => setActiveCertIdx(index)}
            className={`cursor-pointer rounded-xl border p-5 transition-all duration-300 ${
              index === activeCertIdx
                ? "border-[#38BDF8] bg-[#0E1422] shadow-lg"
                : "border-[#38BDF8]/15 bg-[#070A11] hover:border-[#38BDF8]/40 hover:bg-[#0E1422]"
            }`}
          >
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono font-bold text-[#38BDF8]">CREDENTIAL {cert.number}</span>
              <span className="font-mono text-[11px] text-[#64748B]">{cert.year}</span>
            </div>
            <h4 className="mt-2 font-bold text-white text-sm leading-snug">{cert.title}</h4>
            <p className="mt-1 font-mono text-xs text-[#38BDF8]">{cert.organization}</p>
            <p className="mt-2 text-xs text-[#94A3B8] line-clamp-2">{cert.description}</p>
            <div className="mt-3 flex items-center justify-between border-t border-[#1E293B] pt-2 text-[11px]">
              <span className="text-[#64748B]">{cert.badge}</span>
              <span className="inline-flex items-center gap-0.5 font-mono text-[#38BDF8]">
                Inspect <ChevronRight className="size-3" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
