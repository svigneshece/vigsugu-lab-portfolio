import { Mail, MapPin, ArrowUpRight, ShieldCheck, Terminal, Sparkles } from "lucide-react";
import Link from "next/link";
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
        {/* Left column: Direct channels & statement */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-800/80 bg-[#0E1422]/90 p-6 sm:p-7 space-y-5 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-500/10 px-3 py-1 font-mono text-[11px] text-sky-300 font-semibold mb-3">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                OPEN FOR OPPORTUNITIES
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Direct Engineering Channels</h3>
              <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                Connect directly for full-time embedded engineering roles, firmware architecture discussions, or technical collaboration.
              </p>
            </div>

            <ul className="divide-y divide-slate-800/70 border-y border-slate-800/70 font-mono text-xs">
              <li>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center justify-between py-3.5 text-slate-200 hover:text-sky-300 transition-colors group"
                >
                  <span className="flex items-center gap-3">
                    <span className="p-2 rounded-lg bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20 transition-colors">
                      <Mail className="size-4" />
                    </span>
                    <span className="font-semibold text-white group-hover:text-sky-300 transition-colors">{email}</span>
                  </span>
                  <ArrowUpRight className="size-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-3.5 text-slate-200 hover:text-sky-300 transition-colors group"
                >
                  <span className="flex items-center gap-3">
                    <span className="p-2 rounded-lg bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20 transition-colors">
                      <LinkedInIcon className="size-4" />
                    </span>
                    <span>LinkedIn Profile</span>
                  </span>
                  <ArrowUpRight className="size-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-3.5 text-slate-200 hover:text-sky-300 transition-colors group"
                >
                  <span className="flex items-center gap-3">
                    <span className="p-2 rounded-lg bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20 transition-colors">
                      <GitHubIcon className="size-4" />
                    </span>
                    <span>GitHub Repositories</span>
                  </span>
                  <ArrowUpRight className="size-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
                </a>
              </li>
              <li className="flex items-center justify-between py-3.5 text-slate-300">
                <span className="flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-slate-800 text-slate-400">
                    <MapPin className="size-4" />
                  </span>
                  <span>{site.location}</span>
                </span>
                <span className="text-[11px] text-slate-500">UTC+05:30 (IST)</span>
              </li>
            </ul>

            {/* Professional Closing Statement */}
            <div className="rounded-xl border border-sky-500/20 bg-sky-950/20 p-4">
              <div className="flex items-start gap-2.5">
                <Sparkles className="size-4 text-sky-400 shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-slate-200 italic leading-relaxed">
                  &ldquo;Interested in building reliable embedded systems and innovative electronics products.&rdquo;
                </p>
              </div>
            </div>

            {/* Dedicated Message Console link */}
            <div className="pt-1 flex items-center justify-between">
              <Link
                href="/inbox"
                className="inline-flex items-center gap-2 font-mono text-xs text-slate-400 hover:text-sky-300 transition-colors"
              >
                <Terminal className="size-3.5 text-sky-400" />
                <span>Open Recruiter Message Console</span>
                <ArrowUpRight className="size-3" />
              </Link>
              <span className="inline-flex items-center gap-1 font-mono text-[10px] text-slate-500">
                <ShieldCheck className="size-3 text-emerald-400" />
                SSL Encrypted
              </span>
            </div>
          </div>
        </div>

        {/* Right column: Interactive dispatch form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
