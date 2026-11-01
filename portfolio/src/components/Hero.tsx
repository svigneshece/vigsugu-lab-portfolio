"use client";

import { useState } from "react";
import { ArrowDown, Briefcase, Download, GraduationCap, MapPin, Mail, Check, Copy, FileText, Globe } from "lucide-react";
import { site } from "@/data/site";
import { button } from "./ui";
import { Profile3D } from "./Profile3D";
import { ResumeModal } from "./ResumeModal";
import { GitHubIcon, LinkedInIcon } from "./icons";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export function Hero() {
  const [copied, setCopied] = useState<string | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="home" aria-label="Introduction" className="scroll-mt-16 relative">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-28 sm:px-8 sm:pt-36 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:pb-24 lg:pt-24">
        <div>
          {/* Status Indicator Badge */}
          <div className="rise mb-6 flex flex-wrap items-center gap-3" style={delay(0)}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#38BDF8]/30 bg-[#0E1422] px-3.5 py-1.5 font-mono text-xs text-[#F8FAFC]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#38BDF8] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#38BDF8]" />
              </span>
              <span>Embedded Systems | Chennai, India</span>
            </div>
          </div>

          {/* Name in Bold Headline */}
          <h1
            className="rise text-4xl font-extrabold tracking-tight text-[#F8FAFC] sm:text-6xl lg:text-7xl uppercase"
            style={delay(100)}
          >
            Vignesh <span className="text-[#38BDF8]">Sugunathan</span>
          </h1>

          {/* Professional Title & Subtitle */}
          <div className="rise mt-3 space-y-1.5" style={delay(180)}>
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Embedded Systems Engineer
            </h2>
            <p className="font-mono text-xs uppercase tracking-wider text-[#38BDF8] sm:text-sm font-semibold">
              Firmware Development · Hardware Integration · Electronics R&amp;D
            </p>
          </div>

          {/* Introduction */}
          <p
            className="rise mt-5 max-w-xl text-sm leading-relaxed text-[#94A3B8] sm:text-base"
            style={delay(260)}
          >
            Electronics and embedded systems enthusiast focused on developing practical hardware-software solutions using microcontrollers, embedded C, wireless communication and real-time hardware integration.
          </p>

          {/* Primary Action Buttons */}
          <div className="rise mt-8 flex flex-wrap gap-3" style={delay(340)}>
            <a href="#projects" className={button.primary}>
              <ArrowDown className="size-4" aria-hidden="true" />
              Explore My Projects
            </a>

            <a
              href={site.resume.href}
              download={site.resume.downloadName}
              className={button.secondary}
            >
              <Download className="size-4 text-[#38BDF8]" aria-hidden="true" />
              Download Resume
            </a>

            <button
              type="button"
              onClick={() => setResumeOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium border border-[#38BDF8]/20 bg-[#070A11] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#38BDF8]/50 transition-all cursor-pointer"
            >
              <FileText className="size-4 text-[#38BDF8]" aria-hidden="true" />
              View ATS Resume
            </button>
          </div>

          {/* Secondary Quick Links (GitHub, LinkedIn, Email) */}
          <div
            className="rise mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs text-[#94A3B8]"
            style={delay(420)}
          >
            <a
              href={site.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#38BDF8] transition-colors"
            >
              <GitHubIcon className="size-3.5 text-[#38BDF8]" />
              <span>GitHub</span>
            </a>

            <a
              href={site.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#38BDF8] transition-colors"
            >
              <LinkedInIcon className="size-3.5 text-[#38BDF8]" />
              <span>LinkedIn</span>
            </a>

            <div className="inline-flex items-center gap-2">
              <Mail className="size-3.5 text-[#38BDF8]" />
              <a href={`mailto:${site.contact.email}`} className="hover:text-white transition-colors">
                {site.contact.email}
              </a>
              <button
                type="button"
                onClick={() => copyToClipboard(site.contact.email, "email")}
                className="text-[#64748B] hover:text-[#38BDF8] transition-colors p-1 cursor-pointer"
                aria-label="Copy email address"
                title="Copy email"
              >
                {copied === "email" ? (
                  <Check className="size-3 text-emerald-400" />
                ) : (
                  <Copy className="size-3" />
                )}
              </button>
            </div>
          </div>

          {/* Meta footer strip */}
          <ul
            className="rise mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-[#38BDF8]/15 pt-5 font-mono text-xs text-[#94A3B8]"
            style={delay(500)}
          >
            <li className="inline-flex items-center gap-2">
              <Briefcase className="size-3.5 text-[#38BDF8]" />
              {site.currentPosition}
            </li>
            <li className="inline-flex items-center gap-2">
              <GraduationCap className="size-3.5 text-[#38BDF8]" />
              B.E. ECE · Agni College (Anna Univ) · CGPA 8.2
            </li>
          </ul>
        </div>

        {/* Profile 3D Card with Studio Portrait */}
        <div className="rise relative mx-auto w-full max-w-[480px]" style={delay(260)}>
          <Profile3D />
        </div>
      </div>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
}
