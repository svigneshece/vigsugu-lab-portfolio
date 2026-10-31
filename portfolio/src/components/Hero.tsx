"use client";

import { useState } from "react";
import { ArrowDown, Briefcase, Download, GraduationCap, MapPin, Mail, Check, Copy, FileText, Globe } from "lucide-react";
import { site } from "@/data/site";
import { button } from "./ui";
import { Profile3D } from "./Profile3D";
import { ResumeModal } from "./ResumeModal";

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
          {/* Status Pill in Lime Green Accent */}
          <div className="rise mb-6 flex flex-wrap items-center gap-3" style={delay(0)}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#B6E778]/30 bg-[#1B211D] px-3.5 py-1.5 font-mono text-xs text-[#F1F4EF]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B6E778] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#B6E778]" />
              </span>
              AVAILABLE FOR EMBEDDED &amp; FIRMWARE ROLES
            </div>
          </div>

          {/* Headline in Geist Sans */}
          <h1
            className="rise text-5xl font-bold tracking-tight text-[#F1F4EF] sm:text-6xl lg:text-7xl"
            style={delay(100)}
          >
            Vignesh <span className="text-[#B6E778]">Sugunathan</span>
          </h1>

          {/* Subheading in Geist Mono */}
          <p
            className="rise mt-4 font-mono text-sm uppercase tracking-wider text-[#B6E778] sm:text-base font-semibold"
            style={delay(180)}
          >
            Embedded Systems <span className="text-[#6D786A]">·</span> Firmware Engineering <span className="text-[#6D786A]">·</span> Hardware Bring-Up
          </p>

          {/* Intro Description */}
          <p
            className="rise mt-5 max-w-xl text-base leading-relaxed text-[#9EAA9A] sm:text-lg"
            style={delay(260)}
          >
            {site.intro}
          </p>

          {/* Action Buttons: TWO Resume Options (View & Download) + Projects */}
          <div className="rise mt-8 flex flex-wrap gap-3" style={delay(340)}>
            <a href="#projects" className={button.primary}>
              <ArrowDown className="size-4" aria-hidden="true" />
              Explore Projects
            </a>

            <button
              type="button"
              onClick={() => setResumeOpen(true)}
              className={button.secondary}
            >
              <FileText className="size-4 text-[#B6E778]" aria-hidden="true" />
              View ATS Resume
            </button>

            <a
              href={site.resume.href}
              download={site.resume.downloadName}
              className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium border border-[#B6E778]/20 bg-[#101310] text-[#9EAA9A] hover:text-[#F1F4EF] hover:border-[#B6E778]/50 transition-all cursor-pointer"
            >
              <Download className="size-4 text-[#B6E778]" aria-hidden="true" />
              Download PDF
            </a>
          </div>

          {/* Contact Strip */}
          <div className="rise mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs text-[#9EAA9A]" style={delay(420)}>
            <div className="inline-flex items-center gap-2">
              <Mail className="size-3.5 text-[#B6E778]" />
              <a href={`mailto:${site.contact.email}`} className="hover:text-white transition-colors">
                {site.contact.email}
              </a>
              <button
                type="button"
                onClick={() => copyToClipboard(site.contact.email, "email")}
                className="text-[#6D786A] hover:text-[#B6E778] transition-colors p-1"
                aria-label="Copy email address"
                title="Copy email"
              >
                {copied === "email" ? <Check className="size-3 text-[#B6E778]" /> : <Copy className="size-3" />}
              </button>
            </div>

            <span className="inline-flex items-center gap-1.5 text-[#9EAA9A]">
              <MapPin className="size-3.5 text-[#B6E778]" />
              {site.location}
            </span>

            <a
              href={site.contact.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#9EAA9A] hover:text-[#B6E778] transition-colors"
            >
              <Globe className="size-3.5 text-[#B6E778]" />
              <span>@Vignesh_S_2412</span>
            </a>
          </div>

          {/* Meta footer strip in Geist Mono */}
          <ul
            className="rise mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-[#B6E778]/15 pt-5 font-mono text-xs text-[#9EAA9A]"
            style={delay(500)}
          >
            <li className="inline-flex items-center gap-2">
              <Briefcase className="size-3.5 text-[#B6E778]" />
              {site.currentPosition}
            </li>
            <li className="inline-flex items-center gap-2">
              <GraduationCap className="size-3.5 text-[#B6E778]" />
              B.E. ECE · 2026 Grad · CGPA 8.2
            </li>
          </ul>
        </div>

        {/* Profile 3D Card with Studio Portrait */}
        <div className="rise relative mx-auto w-full max-w-[480px]" style={delay(260)}>
          <Profile3D />
        </div>
      </div>

      {/* Resume Viewer Modal */}
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
}
