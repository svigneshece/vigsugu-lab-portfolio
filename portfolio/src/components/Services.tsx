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
  Activity,
  Award,
} from "lucide-react";
import { services } from "@/data/site";
import { Section } from "./Section";

// Distinct visual themes for each of the 10 services
interface ServiceTheme {
  icon: React.ComponentType<{ className?: string }>;
  domain: string;
  glowColor: string;
  borderHover: string;
  iconStyle: string;
  badgeStyle: string;
  beacon: string;
  textColor: string;
  linkHover: string;
}

const serviceThemes: Record<string, ServiceTheme> = {
  "embedded-firmware": {
    icon: Cpu,
    domain: "FIRMWARE · ARM & MCU",
    glowColor: "via-cyan-400",
    borderHover: "hover:border-cyan-400/80 hover:shadow-[0_10px_35px_rgba(6,182,212,0.25)]",
    iconStyle: "border-cyan-400/35 bg-cyan-500/10 text-cyan-300",
    badgeStyle: "border-cyan-400/30 bg-cyan-950/40 text-cyan-300",
    beacon: "bg-cyan-400",
    textColor: "group-hover:text-cyan-300",
    linkHover: "text-cyan-400 hover:text-cyan-200",
  },
  "pcb-prototyping": {
    icon: CircuitBoard,
    domain: "HARDWARE · PCB LAYOUT",
    glowColor: "via-amber-400",
    borderHover: "hover:border-amber-400/80 hover:shadow-[0_10px_35px_rgba(245,158,11,0.25)]",
    iconStyle: "border-amber-400/35 bg-amber-500/10 text-amber-300",
    badgeStyle: "border-amber-400/30 bg-amber-950/40 text-amber-300",
    beacon: "bg-amber-400",
    textColor: "group-hover:text-amber-300",
    linkHover: "text-amber-400 hover:text-amber-200",
  },
  "iot-wireless": {
    icon: Radio,
    domain: "RF EDGE · LORA TELEMETRY",
    glowColor: "via-purple-400",
    borderHover: "hover:border-purple-400/80 hover:shadow-[0_10px_35px_rgba(168,85,247,0.25)]",
    iconStyle: "border-purple-400/35 bg-purple-500/10 text-purple-300",
    badgeStyle: "border-purple-400/30 bg-purple-950/40 text-purple-300",
    beacon: "bg-purple-400",
    textColor: "group-hover:text-purple-300",
    linkHover: "text-purple-400 hover:text-purple-200",
  },
  "robotics-automation": {
    icon: Bot,
    domain: "ROBOTICS · SENSOR FUSION",
    glowColor: "via-emerald-400",
    borderHover: "hover:border-emerald-400/80 hover:shadow-[0_10px_35px_rgba(16,185,129,0.25)]",
    iconStyle: "border-emerald-400/35 bg-emerald-500/10 text-emerald-300",
    badgeStyle: "border-emerald-400/30 bg-emerald-950/40 text-emerald-300",
    beacon: "bg-emerald-400",
    textColor: "group-hover:text-emerald-300",
    linkHover: "text-emerald-400 hover:text-emerald-200",
  },
  "hardware-integration": {
    icon: Activity,
    domain: "BRING-UP · BUS PROBING",
    glowColor: "via-rose-400",
    borderHover: "hover:border-rose-400/80 hover:shadow-[0_10px_35px_rgba(244,63,94,0.25)]",
    iconStyle: "border-rose-400/35 bg-rose-500/10 text-rose-300",
    badgeStyle: "border-rose-400/30 bg-rose-950/40 text-rose-300",
    beacon: "bg-rose-400",
    textColor: "group-hover:text-rose-300",
    linkHover: "text-rose-400 hover:text-rose-200",
  },
  "technical-training": {
    icon: GraduationCap,
    domain: "ACADEMY · HANDS-ON LABS",
    glowColor: "via-sky-400",
    borderHover: "hover:border-sky-400/80 hover:shadow-[0_10px_35px_rgba(56,189,248,0.25)]",
    iconStyle: "border-sky-400/35 bg-sky-500/10 text-sky-300",
    badgeStyle: "border-sky-400/30 bg-sky-950/40 text-sky-300",
    beacon: "bg-sky-400",
    textColor: "group-hover:text-sky-300",
    linkHover: "text-sky-400 hover:text-sky-200",
  },
  "stem-robotics-education": {
    icon: Sparkles,
    domain: "STEM · YOUTH INNOVATION",
    glowColor: "via-teal-400",
    borderHover: "hover:border-teal-400/80 hover:shadow-[0_10px_35px_rgba(20,184,166,0.25)]",
    iconStyle: "border-teal-400/35 bg-teal-500/10 text-teal-300",
    badgeStyle: "border-teal-400/30 bg-teal-950/40 text-teal-300",
    beacon: "bg-teal-400",
    textColor: "group-hover:text-teal-300",
    linkHover: "text-teal-400 hover:text-teal-200",
  },
  "public-speaking": {
    icon: Presentation,
    domain: "KEYNOTES · TECH TALKS",
    glowColor: "via-fuchsia-400",
    borderHover: "hover:border-fuchsia-400/80 hover:shadow-[0_10px_35px_rgba(217,70,239,0.25)]",
    iconStyle: "border-fuchsia-400/35 bg-fuchsia-500/10 text-fuchsia-300",
    badgeStyle: "border-fuchsia-400/30 bg-fuchsia-950/40 text-fuchsia-300",
    beacon: "bg-fuchsia-400",
    textColor: "group-hover:text-fuchsia-300",
    linkHover: "text-fuchsia-400 hover:text-fuchsia-200",
  },
  "technical-mentoring": {
    icon: Compass,
    domain: "CAPSTONE · CODE REVIEW",
    glowColor: "via-indigo-400",
    borderHover: "hover:border-indigo-400/80 hover:shadow-[0_10px_35px_rgba(99,102,241,0.25)]",
    iconStyle: "border-indigo-400/35 bg-indigo-500/10 text-indigo-300",
    badgeStyle: "border-indigo-400/30 bg-indigo-950/40 text-indigo-300",
    beacon: "bg-indigo-400",
    textColor: "group-hover:text-indigo-300",
    linkHover: "text-indigo-400 hover:text-indigo-200",
  },
  "career-guidance": {
    icon: Briefcase,
    domain: "ROADMAP · INDUSTRY PATH",
    glowColor: "via-orange-400",
    borderHover: "hover:border-orange-400/80 hover:shadow-[0_10px_35px_rgba(249,115,22,0.25)]",
    iconStyle: "border-orange-400/35 bg-orange-500/10 text-orange-300",
    badgeStyle: "border-orange-400/30 bg-orange-950/40 text-orange-300",
    beacon: "bg-orange-400",
    textColor: "group-hover:text-orange-300",
    linkHover: "text-orange-400 hover:text-orange-200",
  },
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
      badge="SPECIALIZED CAPABILITIES"
      title="Engineering & Mentorship Services"
      description="Silicon Bring-Up · Firmware Architectures · Practical STEM Training · Student Mentorship."
    >
      {/* Category Filter Tabs - Compact Spacing */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3.5">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 font-mono text-xs font-semibold transition-all cursor-pointer ${
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
            className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 font-mono text-xs font-semibold transition-all cursor-pointer ${
              filter === "engineering"
                ? "border-sky-400 bg-sky-500/20 text-sky-200 shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                : "border-slate-800 bg-[#0E1422] text-slate-400 hover:border-slate-700 hover:text-white"
            }`}
          >
            <Cpu className="size-3.5 text-sky-400" />
            <span>Core Engineering &amp; Hardware</span>
            <span className="rounded bg-[#070A11] px-1.5 py-0.2 text-[10px] text-sky-400">
              {services.filter((s) => s.category === "engineering").length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setFilter("knowledge")}
            className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 font-mono text-xs font-semibold transition-all cursor-pointer ${
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

        <span className="font-mono text-[11px] text-slate-400 hidden sm:inline">
          {filter === "all"
            ? "10 Specialized Engineering & Training Tracks"
            : filter === "engineering"
            ? "Silicon Bring-Up · Firmware · Hardware Prototyping"
            : "Workshops · Tech Talks · Student Mentorship"}
        </span>
      </div>

      {/* High-Density Short-View Grid with Unique Styles */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredServices.map((service, index) => {
          const theme =
            serviceThemes[service.id] || {
              icon: Cpu,
              domain: "SPECIALIZED DOMAIN",
              glowColor: "via-sky-400",
              borderHover: "hover:border-sky-400/80 hover:shadow-[0_10px_35px_rgba(56,189,248,0.25)]",
              iconStyle: "border-sky-400/35 bg-sky-500/10 text-sky-300",
              badgeStyle: "border-sky-400/30 bg-sky-950/40 text-sky-300",
              beacon: "bg-sky-400",
              textColor: "group-hover:text-sky-300",
              linkHover: "text-sky-400 hover:text-sky-200",
            };
          const Icon = theme.icon;
          const isEngineering = service.category === "engineering";

          return (
            <div
              key={service.id}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800 bg-[#0E1422] p-5 transition-all duration-300 hover:-translate-y-1.5 ${theme.borderHover}`}
            >
              {/* Dynamic Top Edge Accent Glow on Hover */}
              <div
                className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent ${theme.glowColor} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10`}
              />

              <div>
                {/* Header: Themed Icon Box + Domain Pill + Index Beacon */}
                <div className="flex items-center justify-between gap-2">
                  <div
                    className={`flex size-10 items-center justify-center rounded-xl border ${theme.iconStyle} transition-all duration-300 group-hover:scale-110 shadow-sm`}
                  >
                    <Icon className="size-5" />
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider ${theme.badgeStyle}`}
                    >
                      <span className={`size-1.5 rounded-full ${theme.beacon} animate-pulse`} />
                      {theme.domain}
                    </span>

                    <span className="font-mono text-[10px] font-bold text-slate-400">
                      {service.tag.split("·")[0]?.trim() || `0${index + 1}`}
                    </span>
                  </div>
                </div>

                {/* Title in Unique Typography */}
                <h4
                  className={`mt-3.5 text-base font-bold tracking-tight text-white transition-colors duration-200 ${theme.textColor}`}
                >
                  {service.title}
                </h4>

                {/* Short-View Crisp Description */}
                <p className="mt-1.5 text-xs leading-relaxed text-slate-300 line-clamp-3">
                  {service.description}
                </p>
              </div>

              {/* Bottom: Compact Keyword Chips + Quick Action Link */}
              <div className="mt-4 border-t border-slate-800/80 pt-3">
                <div className="mb-3 flex flex-wrap gap-1.5 min-h-[26px]">
                  {service.keywords.slice(0, 4).map((kw) => (
                    <span
                      key={kw}
                      className="rounded-md border border-slate-800/90 bg-[#070A11] px-2 py-0.5 font-mono text-[10px] text-slate-300 transition-colors group-hover:border-slate-700"
                    >
                      {kw}
                    </span>
                  ))}
                  {service.keywords.length > 4 && (
                    <span className="rounded-md border border-slate-800/60 bg-[#070A11]/60 px-1.5 py-0.5 font-mono text-[9px] text-slate-500">
                      +{service.keywords.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-0.5">
                  <a
                    href="#contact-form"
                    className={`inline-flex items-center gap-1.5 font-mono text-xs font-bold transition-colors group/link ${theme.linkHover}`}
                  >
                    <span>{isEngineering ? "Inquire Capability" : "Connect for Mentorship"}</span>
                    <ArrowRight className="size-3.5 transition-transform group-hover/link:translate-x-1" />
                  </a>

                  <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest">
                    READY
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
