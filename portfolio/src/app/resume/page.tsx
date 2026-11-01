import Link from "next/link";
import { ArrowLeft, Download, Mail, Award, Sparkles } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/icons";
import { site, about, experience, projects, skillGroups, researchPublications, awardHighlight } from "@/data/site";
import { PrintButton } from "./PrintButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vignesh Sugunathan | ATS-Ready Engineering Resume",
  description: "ATS optimized resume of Vignesh Sugunathan - Embedded Systems, Firmware, ARM Cortex-M, STM32, PIC, ESP32, LoRa Mesh.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#070A11] text-slate-100 py-10 px-4 sm:px-6 print:bg-white print:text-black print:p-0">
      {/* Top Navigation Bar (Hidden when printing) */}
      <div className="max-w-4xl mx-auto mb-8 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-slate-400 hover:text-sky-300 transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to Portfolio
        </Link>

        <div className="flex items-center gap-3">
          <PrintButton />

          <a
            href={site.resume.href}
            download={site.resume.downloadName}
            className="inline-flex items-center gap-1.5 rounded-lg bg-sky-400 px-4 py-2 font-mono text-xs font-bold text-slate-950 hover:bg-sky-300 transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)]"
          >
            <Download className="size-3.5" />
            Download PDF
          </a>
        </div>
      </div>

      {/* ATS Clean Printable Sheet */}
      <article className="max-w-4xl mx-auto rounded-2xl border border-slate-800 bg-[#0E1422] p-8 sm:p-12 shadow-2xl print:border-none print:bg-white print:p-0 print:shadow-none print:text-black">
        {/* Header */}
        <header className="border-b border-slate-800 pb-6 print:border-neutral-300">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white print:text-black">
                {site.name}
              </h1>
              <p className="mt-1 font-mono text-sm font-semibold text-sky-400 print:text-neutral-800">
                {site.role}
              </p>
            </div>
            <p className="font-mono text-xs text-slate-400 print:text-neutral-600 sm:text-right">
              {site.location} · Open for Global Roles
            </p>
          </div>

          {/* Contact Bar */}
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-slate-300 print:text-neutral-700">
            <span className="flex items-center gap-1.5">
              <Mail className="size-3 text-sky-400 print:text-black" />
              <a href={`mailto:${site.contact.email}`} className="hover:underline">
                {site.contact.email}
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <LinkedInIcon className="size-3 text-sky-400 print:text-black" />
              <a href={site.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                linkedin.com/in/vignesh-sugunathan
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <GitHubIcon className="size-3 text-sky-400 print:text-black" />
              <a href={site.contact.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                github.com/svigneshece
              </a>
            </span>
            <span className="text-slate-400 print:text-neutral-600">
              Graduation: 2026 · Anna University (CGPA 8.2)
            </span>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mt-6">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-sky-400 print:text-neutral-900 border-b border-slate-800 pb-1 print:border-neutral-300">
            Professional Summary
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-300 print:text-neutral-800">
            {about.objective}
          </p>
        </section>

        {/* Education */}
        <section className="mt-6">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-sky-400 print:text-neutral-900 border-b border-slate-800 pb-1 print:border-neutral-300">
            Education
          </h2>
          <div className="mt-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <div>
              <h3 className="text-sm font-bold text-white print:text-black">
                Bachelor of Engineering (B.E.) in Electronics and Communication Engineering
              </h3>
              <p className="text-xs text-slate-400 print:text-neutral-700">
                Agni College of Technology, Chennai (Affiliated to Anna University)
              </p>
            </div>
            <div className="font-mono text-xs text-sky-400 print:text-neutral-800 sm:text-right">
              <span>2022 – 2026</span> · <strong className="text-white print:text-black">CGPA: 8.2 / 10</strong>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mt-6">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-sky-400 print:text-neutral-900 border-b border-slate-800 pb-1 print:border-neutral-300">
            Technical Skills &amp; Proficiencies
          </h2>
          <div className="mt-3 space-y-2 text-xs">
            {skillGroups.map((group) => (
              <div key={group.category} className="grid grid-cols-1 sm:grid-cols-[170px_1fr] gap-1">
                <span className="font-mono font-semibold text-sky-400 print:text-neutral-900">
                  {group.category}:
                </span>
                <span className="text-slate-300 print:text-neutral-800">
                  {group.items.join(" · ")}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mt-6">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-sky-400 print:text-neutral-900 border-b border-slate-800 pb-1 print:border-neutral-300">
            Professional Experience
          </h2>
          <div className="mt-3 space-y-5">
            {experience.map((role) => (
              <div key={`${role.company}-${role.title}`} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="text-sm font-bold text-white print:text-black">
                      {role.title}
                    </h3>
                    <p className="font-mono text-xs text-sky-400 print:text-neutral-700">
                      {role.company} {role.location && `· ${role.location}`}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-slate-400 print:text-neutral-600 sm:text-right">
                    {role.period}
                  </span>
                </div>
                <ul className="mt-1 list-disc pl-4 space-y-1 text-xs leading-relaxed text-slate-300 print:text-neutral-800">
                  {role.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Key Engineering Projects */}
        <section className="mt-6">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-sky-400 print:text-neutral-900 border-b border-slate-800 pb-1 print:border-neutral-300">
            Selected Engineering Projects
          </h2>
          <div className="mt-3 space-y-4">
            {projects.slice(0, 4).map((p) => (
              <div key={p.slug} className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-sm font-bold text-white print:text-black">
                    {p.title}
                  </h3>
                  {p.result && (
                    <span className="font-mono text-xs font-semibold text-cyan-400 print:text-neutral-800">
                      {p.result.value} {p.result.label}
                    </span>
                  )}
                </div>
                <p className="font-mono text-[11px] text-sky-400 print:text-neutral-600">
                  Tech Stack: {p.technologies.join(" | ")}
                </p>
                <p className="text-xs text-slate-300 print:text-neutral-800 leading-relaxed">
                  {p.summary}
                </p>
                <ul className="list-disc pl-4 space-y-0.5 text-xs text-slate-400 print:text-neutral-700">
                  {p.myContribution.slice(0, 2).map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Scholarly Publications */}
        <section className="mt-6">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-sky-400 print:text-neutral-900 border-b border-slate-800 pb-1 print:border-neutral-300">
            Scholarly Publications &amp; Research (IEEE)
          </h2>
          <ul className="mt-3 space-y-3 text-xs">
            {researchPublications.map((pub, i) => (
              <li key={pub.id} className="space-y-0.5">
                <p className="text-white print:text-black font-semibold">
                  [{i + 1}] &ldquo;{pub.title}&rdquo;
                </p>
                <p className="text-slate-400 print:text-neutral-700">
                  {pub.authors} · <em>{pub.conference}</em> ({pub.year})
                </p>
                <p className="text-[11px] text-slate-400 print:text-neutral-600">
                  {pub.summary}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Honors & Awards */}
        <section className="mt-6 border-t border-slate-800 pt-4 print:border-neutral-300">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-sky-400 print:text-neutral-900">
            Honors &amp; Recognitions
          </h2>
          <ul className="mt-2.5 space-y-2 text-xs text-slate-300 print:text-neutral-800">
            <li className="flex items-start gap-2">
              <Award className="size-4 text-cyan-400 print:text-black shrink-0 mt-0.5" />
              <div>
                <strong>{awardHighlight.title}</strong> — {awardHighlight.organizedBy} ({awardHighlight.date}).
                <p className="text-[11px] text-slate-400 print:text-neutral-600">
                  {awardHighlight.description}
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="size-4 text-sky-400 print:text-black shrink-0 mt-0.5" />
              <div>
                <strong>Runner-up Award</strong> — SRM National Level Robotics Hackathon (Autonomous Multi-Mode Surveillance &amp; Hazard Robot).
              </div>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
}
