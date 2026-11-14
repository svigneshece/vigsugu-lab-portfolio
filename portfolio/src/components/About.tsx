import Image from "next/image";
import { Target, GraduationCap } from "lucide-react";
import { about, site } from "@/data/site";
import { Section } from "./Section";

export function About() {
  return (
    <Section
      id="about"
      badge="ABOUT ME"
      title={about.heading}
      description="Electronics and communication engineer dedicated to practical embedded firmware, hardware systems, and technical education."
    >
      <div className="grid items-start gap-10 lg:grid-cols-12">
        {/* Left Column: Narrative & Dual Identity */}
        <div className="space-y-6 text-sm leading-relaxed text-slate-300 sm:text-base lg:col-span-7">
          {about.paragraphs.map((p) => (
            <p key={p} className="text-slate-200">
              {p}
            </p>
          ))}

          {/* Professional Objective Card */}
          <div className="rounded-2xl border border-sky-400/25 bg-[#0E1422] p-5 shadow-lg transition-colors hover:border-sky-400/50">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-sky-400">
              <Target className="size-4" />
              <span>Professional Objective</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-slate-200 sm:text-sm">
              {about.objective}
            </p>
          </div>
        </div>

        {/* Right Column: Compact Education & Credentials Card */}
        <div className="space-y-4 lg:col-span-5">
          {/* Compact Education Card */}
          <div className="rounded-2xl border border-sky-400/25 bg-[#0E1422] p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between gap-3 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-sky-400/30 bg-[#070A11] text-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
                  <GraduationCap className="size-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-sky-400 truncate">
                    ACADEMIC FOUNDATION
                  </h3>
                  <p className="text-xs text-slate-400 truncate">Electronics &amp; Communication</p>
                </div>
              </div>

              {/* Attractive Single-Line Academic Score Badge */}
              <div className="shrink-0 whitespace-nowrap rounded-xl border border-emerald-400/40 bg-gradient-to-r from-emerald-500/15 via-[#070A11] to-emerald-500/10 px-3 py-1.5 font-mono shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <div className="flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">CGPA</span>
                  <span className="text-xs font-black text-white">8.2</span>
                  <span className="text-[10px] font-semibold text-emerald-400/80">/ 10</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div>
                <span className="text-[10px] uppercase text-slate-500">Degree &amp; Major</span>
                <p className="font-bold text-white text-sm">B.E. Electronics &amp; Communication Engineering</p>
              </div>
              <div>
                <span className="text-[10px] uppercase text-slate-500">College &amp; Affiliation</span>
                <p className="text-slate-200">Agni College of Technology, Chennai</p>
                <p className="text-[11px] text-slate-400">Affiliated to Anna University · 2026 Batch</p>
              </div>
              <div className="border-t border-slate-800/80 pt-2.5">
                <span className="text-[10px] uppercase text-slate-500">Engineering Domains</span>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {[
                    "Microcontrollers & Embedded C",
                    "Sensor & Hardware Integration",
                    "Wireless Mesh & LoRa Telemetry",
                    "Robotics & Motor Control",
                    "Technical STEM Mentorship",
                  ].map((c) => (
                    <span
                      key={c}
                      className="rounded-md border border-sky-400/15 bg-[#070A11] px-2.5 py-1 text-[10px] text-slate-300"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Engineering Mentor & Speaker Action Card */}
          <div className="group overflow-hidden rounded-2xl border border-sky-400/25 bg-[#0E1422] p-3 shadow-xl transition-all duration-300 hover:border-sky-400/50">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-800 bg-[#070A11]">
              <Image
                src={site.presentationImage}
                alt="Vignesh Sugunathan delivering an interactive technical session at a podium in front of a coding display"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070A11] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-2.5 left-3 right-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-slate-900/90 px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-sky-300 backdrop-blur-md">
                  <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  Live Technical Presentation &amp; Workshop Session
                </span>
                <p className="mt-1 font-mono text-[11px] font-semibold text-white">
                  Vignesh Sugunathan · Speaker &amp; Instructor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
