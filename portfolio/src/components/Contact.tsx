import {
  Mail,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
  Clock,
  Sparkles,
} from "lucide-react";
import { site } from "@/data/site";
import { Section } from "./Section";
import { ContactForm } from "./ContactForm";
import { GitHubIcon, LinkedInIcon } from "./icons";

export function Contact() {
  const { email, linkedin, github } = site.contact;

  return (
    <Section
      id="contact"
      badge="CONNECT & COLLABORATE"
      title="Let's Connect & Build Something Meaningful."
      description="Available for engineering opportunities, technical collaborations, STEM workshops, project mentoring, and professional networking."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] items-start">
        {/* Left column: Direct Channels & Professional Details */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-800/80 bg-[#0E1422]/90 p-6 sm:p-7 space-y-6 shadow-xl relative overflow-hidden">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-500/10 px-3 py-1 font-mono text-[11px] text-sky-300 font-semibold mb-3">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                OPEN FOR OPPORTUNITIES
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Direct Engineering Channels
              </h3>
              <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                Connect directly for embedded systems roles, firmware development, robotics research, or technical collaboration.
              </p>
            </div>

            {/* Three Professional Social & Direct Contact Buttons */}
            <div className="space-y-3 font-mono text-xs">
              {/* 1. LinkedIn */}
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-xl border border-slate-800/90 bg-[#070A11]/60 hover:border-sky-500/40 hover:bg-sky-500/[0.04] transition-all duration-200"
              >
                <div className="flex items-center gap-3.5">
                  <span className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20 group-hover:text-cyan-300 transition-colors">
                    <LinkedInIcon className="size-4" />
                  </span>
                  <div>
                    <div className="font-semibold text-white group-hover:text-sky-300 transition-colors text-sm font-sans">
                      LinkedIn
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Professional profile &amp; experience
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-slate-400 group-hover:text-sky-300 transition-colors text-[11px]">
                  <span>Connect</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>

              {/* 2. GitHub */}
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-xl border border-slate-800/90 bg-[#070A11]/60 hover:border-sky-500/40 hover:bg-sky-500/[0.04] transition-all duration-200"
              >
                <div className="flex items-center gap-3.5">
                  <span className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20 group-hover:text-cyan-300 transition-colors">
                    <GitHubIcon className="size-4" />
                  </span>
                  <div>
                    <div className="font-semibold text-white group-hover:text-sky-300 transition-colors text-sm font-sans">
                      GitHub
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Firmware code &amp; hardware repositories
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-slate-400 group-hover:text-sky-300 transition-colors text-[11px]">
                  <span>View Repos</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>

              {/* 3. Email Me (Mailto client launcher - private receiving email) */}
              <a
                href={`mailto:${email}`}
                className="group flex items-center justify-between p-3.5 rounded-xl border border-slate-800/90 bg-[#070A11]/60 hover:border-sky-500/40 hover:bg-sky-500/[0.04] transition-all duration-200"
              >
                <div className="flex items-center gap-3.5">
                  <span className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20 group-hover:text-cyan-300 transition-colors">
                    <Mail className="size-4" />
                  </span>
                  <div>
                    <div className="font-semibold text-white group-hover:text-sky-300 transition-colors text-sm font-sans">
                      Email Me
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Open default email application
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-slate-400 group-hover:text-sky-300 transition-colors text-[11px]">
                  <span>Compose</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            </div>

            {/* Quick Metadata: Location & Response Timing */}
            <div className="grid gap-2.5 pt-1 font-mono text-xs">
              <div className="flex items-center justify-between p-3 rounded-xl border border-slate-800/60 bg-[#070A11]/40 text-slate-300">
                <span className="flex items-center gap-2.5">
                  <MapPin className="size-4 text-sky-400" />
                  <span>{site.location}</span>
                </span>
                <span className="text-[11px] text-slate-500">UTC+05:30 (IST)</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl border border-slate-800/60 bg-[#070A11]/40 text-slate-300">
                <span className="flex items-center gap-2.5">
                  <Clock className="size-4 text-emerald-400" />
                  <span>Expected Response Time</span>
                </span>
                <span className="text-[11px] text-emerald-400 font-semibold">24–48 Hours</span>
              </div>
            </div>

            {/* Professional Quote */}
            <div className="rounded-xl border border-sky-500/20 bg-sky-950/20 p-4">
              <div className="flex items-start gap-2.5">
                <Sparkles className="size-4 text-sky-400 shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-slate-200 italic leading-relaxed">
                  &ldquo;Interested in building reliable embedded systems, high-performance firmware, and innovative robotics solutions.&rdquo;
                </p>
              </div>
            </div>

            {/* Security Note */}
            <div className="pt-1 flex items-center justify-between border-t border-slate-800/70 font-mono text-[11px] text-slate-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="size-3.5 text-emerald-400" />
                <span>SSL Encrypted &amp; Spam Protected</span>
              </span>
              <span>Web3Forms Verified</span>
            </div>
          </div>
        </div>

        {/* Right column: Interactive Web3Forms Dispatch Form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
