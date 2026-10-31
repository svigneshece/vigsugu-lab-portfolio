"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, CheckCircle2, ChevronRight, ExternalLink, Milestone, Sparkles } from "lucide-react";
import { certifications } from "@/data/site";
import { Section } from "./Section";

export function Certifications() {
  const [activeStation, setActiveStation] = useState(0);

  return (
    <Section
      id="certifications"
      badge="CREDENTIAL MILESTONES"
      title="Certifications & Recognition"
      description="Professional technical credentials, national engineering competition awards, and academic milestones mapped across my journey."
    >
      {/* Train Track Visual Header */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#B6E778]/15 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-lg border border-[#B6E778]/30 bg-[#1B211D] text-[#B6E778]">
            <Milestone className="size-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#B6E778]">
                RAILWAY MILESTONE TRACK
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#B6E778]/30 bg-[#B6E778]/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-[#B6E778]">
                <span className="size-1.5 animate-pulse rounded-full bg-[#B6E778]" />
                TRACK CLEAR · 5 STATIONS
              </span>
            </div>
            <p className="text-xs text-[#9EAA9A]">
              Click any station along the line to inspect certified competencies and issuing bodies.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-[#9EAA9A]">
          <span className="text-[#B6E778] font-bold">TERMINUS:</span> LTTS TECHGIUM® ➔ VIT/SSN IEEE
        </div>
      </div>

      {/* The Train Track Stepper (Horizontal on Desktop, Scrollable) */}
      <div className="relative mb-10 overflow-hidden rounded-2xl border border-[#B6E778]/20 bg-[#161C18] p-6 shadow-2xl">
        {/* Railway Track Bed & Sleepers (Cross-ties) Background */}
        <div className="absolute inset-x-0 top-12 -z-0 hidden md:block">
          {/* Top Rail */}
          <div className="h-1 w-full bg-[#2C3830]" />
          {/* Cross ties (Sleepers) */}
          <div
            className="my-1.5 h-6 w-full opacity-60"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, #37463C 0px, #37463C 5px, transparent 5px, transparent 24px)",
            }}
          />
          {/* Bottom Rail */}
          <div className="h-1 w-full bg-[#2C3830]" />
          {/* Active Track Highlight Segment */}
          <div
            className="absolute top-0 h-1 bg-gradient-to-r from-[#B6E778] via-[#B6E778] to-[#B6E778]/40 transition-all duration-500"
            style={{ width: `${((activeStation + 1) / certifications.length) * 100}%` }}
          />
        </div>

        {/* Stations Navigation Row */}
        <div className="relative z-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-4">
          {certifications.map((cert, idx) => {
            const isActive = idx === activeStation;
            return (
              <button
                key={cert.id}
                type="button"
                onClick={() => setActiveStation(idx)}
                className={`group flex flex-col items-start rounded-xl border p-4 text-left transition-all duration-300 ${
                  isActive
                    ? "border-[#B6E778] bg-[#1B211D] shadow-[0_0_20px_rgba(182,231,120,0.15)] ring-1 ring-[#B6E778]/50"
                    : "border-[#B6E778]/15 bg-[#101310]/80 hover:border-[#B6E778]/40 hover:bg-[#1B211D]"
                }`}
              >
                {/* Station Node Indicator */}
                <div className="mb-3 flex w-full items-center justify-between">
                  <div
                    className={`flex size-8 items-center justify-center rounded-full border text-xs font-bold transition-all ${
                      isActive
                        ? "border-[#B6E778] bg-[#B6E778] text-[#101310] shadow-[0_0_12px_#B6E778]"
                        : "border-[#3A4B3F] bg-[#121613] text-[#8EA091] group-hover:border-[#B6E778]/60 group-hover:text-[#B6E778]"
                    }`}
                  >
                    0{idx + 1}
                  </div>
                  <span
                    className={`font-mono text-[10px] font-semibold tracking-wider ${
                      isActive ? "text-[#B6E778]" : "text-[#738576]"
                    }`}
                  >
                    {cert.year}
                  </span>
                </div>

                <div className="font-mono text-[10px] uppercase tracking-wider text-[#B6E778]/80">
                  {cert.stationNumber}
                </div>
                <h4
                  className={`mt-1 line-clamp-2 text-xs font-bold leading-snug transition-colors ${
                    isActive ? "text-white" : "text-[#C8D3C8] group-hover:text-white"
                  }`}
                >
                  {cert.title}
                </h4>
                <p className="mt-1 line-clamp-1 text-[11px] text-[#8B9B8E]">{cert.organization}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Station Spotlight Platform (Detailed Card) */}
      {(() => {
        const current = certifications[activeStation];
        return (
          <div className="overflow-hidden rounded-2xl border border-[#B6E778]/30 bg-[#1B211D] p-6 shadow-2xl transition-all md:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              {/* Left Column: Station Badge & Title */}
              <div className="space-y-4 lg:max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#B6E778]/40 bg-[#B6E778]/10 px-2.5 py-1 font-mono text-xs font-bold text-[#B6E778]">
                    <Award className="size-3.5" />
                    {current.stationNumber}
                  </span>
                  <span className="rounded-md border border-[#2D3A31] bg-[#101310] px-2.5 py-1 font-mono text-xs text-[#9EAA9A]">
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
                  <p className="mt-1 font-mono text-sm font-semibold text-[#B6E778]">
                    {current.organization} · {current.year}
                  </p>
                  <p className="mt-0.5 text-xs text-[#8EA091]">{current.field}</p>
                </div>

                <p className="text-sm leading-relaxed text-[#D2DDD3] sm:text-base">
                  {current.description}
                </p>

                {current.linkHref && (
                  <div className="pt-2">
                    <a
                      href={current.linkHref}
                      className="inline-flex items-center gap-2 rounded-lg border border-[#B6E778]/40 bg-[#101310] px-4 py-2 font-mono text-xs font-semibold text-[#B6E778] transition-all hover:border-[#B6E778] hover:bg-[#B6E778]/10"
                    >
                      {current.linkText || "View Publication"}
                      <ExternalLink className="size-3.5" />
                    </a>
                  </div>
                )}
              </div>

              {/* Right Column: Station Technical Specs Pill Box */}
              <div className="flex flex-col justify-between rounded-xl border border-[#B6E778]/15 bg-[#101310] p-5 lg:w-80">
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between border-b border-[#232F26] pb-2 text-[#889B8C]">
                    <span>STATUS:</span>
                    <span className="font-semibold text-[#B6E778]">ACCREDITED</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-[#232F26] pb-2 text-[#889B8C]">
                    <span>DOMAIN:</span>
                    <span className="text-right font-semibold text-[#F1F4EF]">
                      {activeStation === 0
                        ? "Innovation"
                        : activeStation === 1
                        ? "Embedded Architecture"
                        : activeStation === 2
                        ? "AI & Vision"
                        : activeStation === 3
                        ? "IoT & Cloud"
                        : "IEEE Research"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-[#232F26] pb-2 text-[#889B8C]">
                    <span>STATION ID:</span>
                    <span className="font-semibold text-[#B6E778]">{current.id.toUpperCase()}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#889B8C]">
                    <span>SIGNAL:</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-emerald-400">
                      <span className="size-2 rounded-full bg-emerald-400" />
                      TRACK CLEAR
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between pt-4 border-t border-[#232F26]">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveStation((prev) => (prev > 0 ? prev - 1 : certifications.length - 1))
                    }
                    className="rounded-md border border-[#2D3A31] px-2.5 py-1 font-mono text-[11px] text-[#A6B8A9] hover:border-[#B6E778] hover:text-[#B6E778]"
                  >
                    ← PREV
                  </button>
                  <span className="font-mono text-xs text-[#7E8E81]">
                    {activeStation + 1} / {certifications.length}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveStation((prev) => (prev < certifications.length - 1 ? prev + 1 : 0))
                    }
                    className="inline-flex items-center gap-1 rounded-md border border-[#B6E778]/30 bg-[#B6E778]/10 px-2.5 py-1 font-mono text-[11px] font-semibold text-[#B6E778] hover:bg-[#B6E778]/20"
                  >
                    NEXT →
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Grid of all 5 Station Cards for Quick Reference */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <div
            key={cert.id}
            onClick={() => setActiveStation(index)}
            className={`cursor-pointer rounded-xl border p-5 transition-all duration-300 ${
              index === activeStation
                ? "border-[#B6E778] bg-[#1B211D]"
                : "border-[#B6E778]/15 bg-[#141A16]/90 hover:border-[#B6E778]/40 hover:bg-[#1B211D]"
            }`}
          >
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono font-bold text-[#B6E778]">{cert.stationNumber}</span>
              <span className="font-mono text-[11px] text-[#819284]">{cert.year}</span>
            </div>
            <h4 className="mt-2 font-bold text-white leading-snug">{cert.title}</h4>
            <p className="mt-1 font-mono text-xs text-[#B6E778]/90">{cert.organization}</p>
            <p className="mt-2 text-xs text-[#9EAA9A] line-clamp-2">{cert.description}</p>
            <div className="mt-3 flex items-center justify-between border-t border-[#232F26] pt-2 text-[11px]">
              <span className="text-[#819284]">{cert.badge}</span>
              <span className="inline-flex items-center gap-0.5 font-mono text-[#B6E778]">
                Inspect <ChevronRight className="size-3" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}