"use client";

import { useState } from "react";
import { ArrowDown, Download, Mail, FileText } from "lucide-react";
import { site } from "@/data/site";
import { button } from "./ui";
import { Profile3D } from "./Profile3D";
import { ResumeModal } from "./ResumeModal";
import { GitHubIcon, LinkedInIcon } from "./icons";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section id="home" aria-label="Introduction" className="scroll-mt-16 relative">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-28 sm:px-8 sm:pt-36 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:pb-24 lg:pt-24">
        <div>
          {/* Welcome & Status Indicator Badges */}
          <div className="rise mb-5 flex flex-wrap items-center gap-2.5" style={delay(0)}>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/35 bg-gradient-to-r from-cyan-500/15 via-[#0E1422] to-sky-500/15 px-3.5 py-1.5 font-mono text-xs text-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.18)] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F0FF]" />
              </span>
              <span className="font-bold text-white tracking-wide">👋 Welcome</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-200">Meet Vignesh Sugunathan</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-800 bg-[#0E1422] px-3 py-1 font-mono text-[11px] text-slate-400">
              <span>📍 Chennai, India</span>
            </div>
          </div>

          {/* Main Heading: VIGNESH */}
          <div className="rise relative" style={delay(100)}>
            {/* Background Ambient Glow specifically highlighting the unique Name */}
            <div className="absolute -left-6 -top-10 -bottom-6 w-80 sm:w-96 bg-gradient-to-r from-cyan-500/20 via-sky-500/15 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />

            <div className="flex items-center gap-2 mb-2">
              <span className="h-px w-5 bg-gradient-to-r from-transparent to-cyan-400" />
              <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-200">
                WELCOME TO THE ENGINEERING PORTFOLIO OF
              </span>
              <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-transparent" />
            </div>

            <div className="flex flex-wrap items-baseline gap-3">
              <h1 className="text-6xl font-black tracking-tight sm:text-8xl lg:text-9xl tracking-tight bg-gradient-to-br from-white via-[#F8FAFC] to-[#38BDF8] bg-clip-text text-transparent filter drop-shadow-[0_4px_35px_rgba(56,189,248,0.35)]">
                VIGNESH<span className="text-cyan-400 drop-shadow-[0_0_20px_#00F0FF] animate-pulse">.</span>
              </h1>
              <span className="align-middle inline-flex items-center gap-1.5 rounded-md border border-cyan-400/40 bg-cyan-950/40 px-2.5 py-1 font-mono text-[10px] sm:text-xs font-bold text-cyan-300 tracking-wider shadow-[0_0_14px_rgba(0,240,255,0.25)]">
                <span className="size-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span>DEV // LAB</span>
              </span>
            </div>
          </div>

          {/* Professional Designation & Supporting Headline */}
          <div className="rise mt-4 space-y-3" style={delay(180)}>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-sky-200">
                {site.role}
              </span>
            </h2>

            {/* Interactive Domain Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-0.5 font-mono text-xs">
              {[
                "Firmware Development",
                "Hardware Integration",
                "IoT",
                "Robotics",
              ].map((domain) => (
                <span
                  key={domain}
                  className="group inline-flex items-center gap-2 rounded-xl border border-sky-400/25 bg-[#0E1422]/90 px-3.5 py-1.5 text-xs text-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.3)] hover:border-cyan-400 hover:bg-[#131B2E] hover:text-white hover:shadow-[0_0_16px_rgba(0,240,255,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-default"
                >
                  <span className="size-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F0FF] group-hover:scale-125 transition-transform" />
                  <span className="font-semibold tracking-wide text-slate-200 group-hover:text-cyan-200 transition-colors">
                    {domain}
                  </span>
                </span>
              ))}
            </div>
          </div>

          {/* Exact Introduction Quote */}
          <p
            className="rise mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base"
            style={delay(260)}
          >
            &ldquo;{site.intro}&rdquo;
          </p>

          {/* Primary Action Buttons */}
          <div className="rise mt-8 flex flex-wrap gap-3" style={delay(340)}>
            <a href="#projects" className={button.primary}>
              <ArrowDown className="size-4" aria-hidden="true" />
              Explore My Work
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold border border-cyan-400/60 bg-gradient-to-r from-cyan-500/20 to-sky-500/20 text-cyan-300 hover:bg-cyan-400 hover:text-slate-950 transition-all shadow-[0_0_18px_rgba(6,182,212,0.3)] cursor-pointer group"
            >
              <span className="text-base group-hover:scale-125 transition-transform">✉️</span>
              <span>Get in Touch</span>
            </a>

            <a
              href={site.resume.href}
              download={site.resume.downloadName}
              className={button.secondary}
            >
              <Download className="size-4 text-sky-400" aria-hidden="true" />
              Download Resume
            </a>

            <button
              type="button"
              onClick={() => setResumeOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium border border-slate-700 bg-[#070A11] text-slate-300 hover:text-white hover:border-sky-400 transition-all cursor-pointer"
            >
              <FileText className="size-4 text-sky-400" aria-hidden="true" />
              View ATS Resume
            </button>
          </div>

          {/* Secondary Quick Links (GitHub, LinkedIn, Email) */}
          <div
            className="rise mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs text-slate-400"
            style={delay(420)}
          >
            <a
              href={site.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-sky-400 transition-colors"
            >
              <GitHubIcon className="size-4 text-slate-300" />
              <span>GitHub</span>
            </a>

            <a
              href={site.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-sky-400 transition-colors"
            >
              <LinkedInIcon className="size-4 text-slate-300" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${site.contact.email}`}
              className="inline-flex items-center gap-2 hover:text-sky-400 transition-colors"
            >
              <Mail className="size-4 text-slate-300" />
              <span>Email Direct</span>
            </a>
          </div>
        </div>

        {/* Right side: 3D Profile Frame */}
        <div className="rise flex justify-center lg:justify-end" style={delay(200)}>
          <Profile3D />
        </div>
      </div>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
}
