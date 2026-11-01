import Image from "next/image";
import { Target, Terminal, GraduationCap, Cpu, Layers, ShieldCheck } from "lucide-react";
import { about, site } from "@/data/site";
import { Section } from "./Section";

export function About() {
  return (
    <Section
      id="about"
      badge="PROFILE &amp; BACKGROUND"
      title="About Me"
      description="Electronics and communication engineer dedicated to practical embedded firmware and hardware systems."
    >
      <div className="grid items-start gap-10 lg:grid-cols-12">
        {/* Left Column: Narrative & Objective */}
        <div className="space-y-6 text-sm leading-relaxed text-[#94A3B8] sm:text-base lg:col-span-7">
          {about.paragraphs.map((p) => (
            <p key={p} className="text-[#CBD5E1]">
              {p}
            </p>
          ))}

          {/* Professional Objective Card */}
          <div className="rounded-xl border border-[#38BDF8]/25 bg-[#0E1422] p-5 shadow-lg transition-colors hover:border-[#38BDF8]/50">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
              <Target className="size-4" />
              <span>Professional Objective</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-[#F8FAFC] sm:text-sm">
              {about.objective}
            </p>
          </div>
        </div>

        {/* Right Column: Compact Education & Credentials Card */}
        <div className="space-y-4 lg:col-span-5">
          {/* Compact Education Card */}
          <div className="rounded-2xl border border-[#38BDF8]/25 bg-[#0E1422] p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between border-b border-[#38BDF8]/15 pb-3">
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-lg border border-[#38BDF8]/30 bg-[#070A11] text-[#38BDF8]">
                  <GraduationCap className="size-4" />
                </div>
                <div>
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                    ACADEMIC FOUNDATION
                  </h3>
                  <p className="text-xs text-[#94A3B8]">Electronics &amp; Communication Engineering</p>
                </div>
              </div>
              <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-400">
                CGPA 8.2 / 10
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div>
                <span className="text-[10px] uppercase text-[#64748B]">Degree &amp; Major</span>
                <p className="font-bold text-[#F8FAFC] text-sm">B.E. Electronics &amp; Communication</p>
              </div>
              <div>
                <span className="text-[10px] uppercase text-[#64748B]">College &amp; Affiliation</span>
                <p className="text-[#CBD5E1]">Agni College of Technology, Chennai</p>
                <p className="text-[11px] text-[#64748B]">Anna University Affiliated · 2026 Grad</p>
              </div>
              <div className="border-t border-[#1E293B] pt-2.5">
                <span className="text-[10px] uppercase text-[#64748B]">Key Engineering Coursework</span>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {[
                    "Microprocessors & Microcontrollers",
                    "VLSI & Embedded System Design",
                    "Digital Signal Processing",
                    "Control Systems Engineering",
                    "Wireless Communication",
                    "Electronic Circuits & PCB",
                  ].map((c) => (
                    <span
                      key={c}
                      className="rounded border border-[#38BDF8]/15 bg-[#070A11] px-2 py-0.5 text-[10px] text-[#94A3B8]"
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
            <div className="rounded-xl border border-[#38BDF8]/15 bg-[#0E1422] p-4">
              <span className="font-mono text-xl font-extrabold text-[#38BDF8]">06+</span>
              <p className="mt-1 font-mono text-[11px] font-semibold text-white">Hardware Projects</p>
              <p className="mt-0.5 text-[10px] text-[#64748B]">Real prototypes with physical silicon</p>
            </div>
            <div className="rounded-xl border border-[#38BDF8]/15 bg-[#0E1422] p-4">
              <span className="font-mono text-xl font-extrabold text-[#00F0FF]">02</span>
              <p className="mt-1 font-mono text-[11px] font-semibold text-white">IEEE Research Papers</p>
              <p className="mt-0.5 text-[10px] text-[#64748B]">ICRIDET Best Paper Award</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
