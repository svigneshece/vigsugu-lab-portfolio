"use client";

import { useState } from "react";
import {
  Cpu,
  CircuitBoard,
  Radio,
  Bot,
  Wrench,
  GraduationCap,
  Sparkles,
  Presentation,
  Compass,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { services } from "@/data/site";
import { Section } from "./Section";

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "embedded-firmware": Cpu,
  "pcb-prototyping": CircuitBoard,
  "iot-wireless": Radio,
  "robotics-automation": Bot,
  "hardware-integration": Wrench,
  "technical-training": GraduationCap,
  "stem-robotics-education": Sparkles,
  "public-speaking": Presentation,
  "technical-mentoring": Compass,
  "career-guidance": Briefcase,
};

export function Services() {
  const [filter, setFilter] = useState<"all" | "engineering" | "knowledge">("all");

  const filteredServices = services.filter((s) => {
    if (filter === "all") return true;
    return s.category === filter;
  });

  return (
    <Section
      id="services"
      badge="PROFESSIONAL OFFERINGS"
      title="What I Bring to the Table"
      description="Engineering Innovation · Silicon Bring-Up · Technical Training · Student Mentorship."
    >
      {/* Category Filter Tabs */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 font-mono text-xs font-semibold transition-all cursor-pointer ${
              filter === "all"
                ? "border-sky-400 bg-sky-500/20 text-sky-200 shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                : "border-slate-800 bg-[#0E1422] text-slate-400 hover:border-slate-700 hover:text-white"
            }`}
          >
            <span>All Offerings</span>
            <span className="rounded bg-[#070A11] px-1.5 py-0.2 text-[10px] text-sky-400">
              {services.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setFilter("engineering")}
            className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 font-mono text-xs font-semibold transition-all cursor-pointer ${
              filter === "engineering"
                ? "border-sky-400 bg-sky-500/20 text-sky-200 shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                : "border-slate-800 bg-[#0E1422] text-slate-400 hover:border-slate-700 hover:text-white"
            }`}
          >
            <Cpu className="size-3.5 text-sky-400" />
            <span>Core Engineering &amp; Firmware</span>
            <span className="rounded bg-[#070A11] px-1.5 py-0.2 text-[10px] text-sky-400">
              {services.filter((s) => s.category === "engineering").length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setFilter("knowledge")}
            className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 font-mono text-xs font-semibold transition-all cursor-pointer ${
              filter === "knowledge"
                ? "border-cyan-400 bg-cyan-500/20 text-cyan-200 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                : "border-slate-800 bg-[#0E1422] text-slate-400 hover:border-slate-700 hover:text-white"
            }`}
          >
            <GraduationCap className="size-3.5 text-cyan-400" />
            <span>Training &amp; STEM Mentorship</span>
            <span className="rounded bg-[#070A11] px-1.5 py-0.2 text-[10px] text-cyan-400">
              {services.filter((s) => s.category === "knowledge").length}
            </span>
          </button>
        </div>

        <span className="font-mono text-xs text-slate-500 hidden sm:inline">
          {filter === "all"
            ? "10 Specialized Engineering & Training Tracks"
            : filter === "engineering"
            ? "Silicon Bring-Up · Firmware · Hardware Prototyping"
            : "Workshops · Tech Talks · Student Mentorship"}
        </span>
      </div>

      {/* Uniform Service Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredServices.map((service) => {
          const Icon = serviceIcons[service.id] || Cpu;
          const isEngineering = service.category === "engineering";

          return (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800 bg-[#0E1422] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/80 hover:shadow-[0_14px_40px_rgba(56,189,248,0.2)]"
            >
              {/* Dynamic Top Edge Glow on Hover */}
              <div
                className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent ${
                  isEngineering ? "via-sky-400" : "via-cyan-400"
                } to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10`}
              />

              <div>
                <div className="flex items-center justify-between">
                  <div
                    className={`flex size-11 items-center justify-center rounded-xl border ${
                      isEngineering
                        ? "border-sky-400/30 bg-sky-500/10 text-sky-400"
                        : "border-cyan-400/30 bg-cyan-500/10 text-cyan-400"
                    } transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.35)]`}
                  >
                    <Icon className="size-5.5" />
                  </div>

                  <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-[#070A11] px-2.5 py-1 font-mono text-[10px] font-bold tracking-wider text-slate-400">
                    <span
                      className={`size-1.5 rounded-full ${
                        isEngineering ? "bg-sky-400" : "bg-cyan-400"
                      } animate-pulse`}
                    />
                    {service.tag}
                  </span>
                </div>

                <h4 className="mt-5 text-lg font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-sky-300">
                  {service.title}
                </h4>

                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 border-t border-slate-800/80 pt-4">
                <div className="mb-4 flex flex-wrap gap-1.5 min-h-[30px]">
                  {service.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="rounded-md border border-slate-800 bg-[#070A11] px-2 py-0.5 font-mono text-[10px] text-slate-300 transition-colors group-hover:border-slate-700"
                    >
                      {kw}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-sky-400 transition-colors hover:text-cyan-300 group/link"
                >
                  <span>{isEngineering ? "Inquire About This" : "Connect for Mentorship"}</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
