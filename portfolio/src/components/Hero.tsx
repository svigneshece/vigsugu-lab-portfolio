"use client";

import { useState } from "react";
import { ArrowDown, Download, Mail, Check, Copy, FileText } from "lucide-react";
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
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-28 sm:px-8 sm:pt-36 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:pb-24 lg:pt-24">
        <div>
          {/* Status Indicator Badge */}
          <div className="rise mb-6 flex flex-wrap items-center gap-3" style={delay(0)}>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-[#0E1422] px-3.5 py-1.5 font-mono text-xs text-slate-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              <span>Chennai, India | Embedded Systems Engineer</span>
            </div>
          </div>

          {/* Main Heading: VIGNESH */}
          <h1
            className="rise text-5xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl tracking-tight"
            style={delay(100)}
          >
            VIGNESH<span className="text-sky-400">.</span>
          </h1>

          {/* Professional Designation & Supporting Headline */}
          <div className="rise mt-3 space-y-1.5" style={delay(180)}>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {site.role}
            </h2>
            <p className="font-mono text-xs uppercase tracking-wider text-sky-400 sm:text-sm font-semibold">
              {site.subRole}
            </p>
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
              <span>{site.contact.email}</span>
            </a>

            <button
              type="button"
              onClick={() => copyToClipboard(site.contact.email, "email")}
              className="inline-flex items-center gap-1 rounded border border-slate-800 bg-[#0E1422] px-2 py-0.5 text-[10px] text-slate-400 hover:border-sky-400 hover:text-sky-300 transition-colors cursor-pointer"
            >
              {copied === "email" ? (
                <>
                  <Check className="size-3 text-emerald-400" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="size-3" />
                  <span>Copy</span>
                </>
              )}
            </button>
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
