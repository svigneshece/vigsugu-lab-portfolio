import { Target, GraduationCap, Award, BookOpen, Users } from "lucide-react";
import { about } from "@/data/site";
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
            <div className="mb-4 flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="flex size-9 items-center justify-center rounded-xl border border-sky-400/30 bg-[#070A11] text-sky-400">
                  <GraduationCap className="size-4" />
                </div>
                <div>
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-sky-400">
                    ACADEMIC FOUNDATION
                  </h3>
                  <p className="text-xs text-slate-400">Electronics &amp; Communication</p>
                </div>
              </div>
              <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-xs font-bold text-emerald-400">
                CGPA 8.2 / 10
              </span>
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

          {/* Core Competency Quick Summary */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-slate-800 bg-[#0E1422] p-4">
              <span className="font-mono text-2xl font-black text-sky-400">100+</span>
              <p className="mt-1 font-mono text-xs font-semibold text-white">Projects</p>
              <p className="mt-0.5 text-[10px] text-slate-400">Developed, supported &amp; mentored</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-[#0E1422] p-4">
              <span className="font-mono text-2xl font-black text-cyan-400">10k+</span>
              <p className="mt-1 font-mono text-xs font-semibold text-white">Learners Mentored</p>
              <p className="mt-0.5 text-[10px] text-slate-400">Across STEM &amp; robotics workshops</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
