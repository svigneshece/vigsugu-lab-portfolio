import Link from "next/link";
import { ArrowLeft, Download, Mail, MapPin, Globe } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/icons";
import { site, about, experience, projects, skillGroups, researchPapers } from "@/data/site";
import { PrintButton } from "./PrintButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vignesh Sugunathan | ATS-Ready Engineering Resume",
  description: "ATS 100% optimized resume of Vignesh Sugunathan - Embedded Systems, Firmware, STM32, PIC, Robotics, IoT.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#101310] text-[#F1F4EF] py-10 px-4 sm:px-6 print:bg-white print:text-black print:p-0">
      {/* Top Navigation Bar (Hidden when printing) */}
      <div className="max-w-4xl mx-auto mb-8 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-[#9EAA9A] hover:text-[#B6E778] transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to Portfolio
        </Link>

        <div className="flex items-center gap-3">
          <PrintButton />

          <a
            href={site.resume.href}
            download={site.resume.downloadName}
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#B6E778] px-4 py-2 font-mono text-xs font-bold text-[#101310] hover:bg-[#cbf58f] transition-all shadow-[0_0_20px_rgba(182,231,120,0.25)]"
          >
            <Download className="size-3.5" />
            Download PDF
          </a>
        </div>
      </div>

      {/* ATS 100% Clean Printable Sheet */}
      <article className="max-w-4xl mx-auto rounded-2xl border border-[#B6E778]/20 bg-[#1B211D] p-8 sm:p-12 shadow-2xl print:border-none print:bg-white print:p-0 print:shadow-none print:text-black">
        {/* Header */}
        <header className="border-b border-[#B6E778]/20 pb-6 print:border-neutral-300">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F1F4EF] print:text-black">
                {site.name}
              </h1>
              <p className="mt-1 font-mono text-sm font-semibold text-[#B6E778] print:text-neutral-800">
                {site.role}
              </p>
            </div>
            <p className="font-mono text-xs text-[#9EAA9A] print:text-neutral-600 sm:text-right">
              Chennai, Tamil Nadu, India · Open for Global Roles
            </p>
          </div>

          {/* Contact Bar */}
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-[#9EAA9A] print:text-neutral-700">
            <span className="flex items-center gap-1.5">
              <Mail className="size-3 text-[#B6E778] print:text-black" />
              <a href={`mailto:${site.contact.email}`} className="hover:underline">
                {site.contact.email}
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <LinkedInIcon className="size-3 text-[#B6E778] print:text-black" />
              <a href={site.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                linkedin.com/in/vignesh-sugunathan
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <GitHubIcon className="size-3 text-[#B6E778] print:text-black" />
              <a href={site.contact.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                github.com/svigneshece
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <Globe className="size-3 text-[#B6E778] print:text-black" />
              <span>x.com/Vignesh_S_2412</span>
            </span>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mt-6">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#B6E778] print:text-neutral-900 border-b border-[#B6E778]/20 pb-1 print:border-neutral-300">
            Professional Summary
          </h2>
          <p className="mt-2.5 text-sm leading-relaxed text-[#F1F4EF] print:text-neutral-800">
            Electronics and Communication Engineering graduate (2026, CGPA 8.2/10) with specialized expertise in embedded firmware development, microcontroller peripheral interfacing (I2C, SPI, UART, PWM, Timers, ADC, DMA), and hardware-firmware bring-up. Proven engineering delivery across STM32 (ARM Cortex-M3), PIC16F877A, ESP32, and Arduino platforms, combined with real-world wireless mesh design (LoRa SX1278), ROS 2 mobile robotics simulation, and mentoring 10,000+ engineering learners at NxtWave.
          </p>
        </section>

        {/* Education */}
        <section className="mt-6">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#B6E778] print:text-neutral-900 border-b border-[#B6E778]/20 pb-1 print:border-neutral-300">
            Education
          </h2>
          <div className="mt-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <div>
              <h3 className="text-sm font-bold text-[#F1F4EF] print:text-black">
                Bachelor of Engineering (B.E.) in Electronics and Communication Engineering
              </h3>
              <p className="text-xs text-[#9EAA9A] print:text-neutral-700">
                Agni College of Technology, Chennai (Affiliated to Anna University)
              </p>
            </div>
            <div className="font-mono text-xs text-[#B6E778] print:text-neutral-800 sm:text-right">
              <span>Graduation: 2026</span> · <strong className="text-white print:text-black">CGPA: 8.2 / 10</strong>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mt-6">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#B6E778] print:text-neutral-900 border-b border-[#B6E778]/20 pb-1 print:border-neutral-300">
            Technical Skills &amp; Proficiencies
          </h2>
          <div className="mt-3 space-y-2 text-xs">
            {skillGroups.map((group) => (
              <div key={group.category} className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-1">
                <span className="font-mono font-semibold text-[#B6E778] print:text-neutral-900">
                  {group.category}:
                </span>
                <span className="text-[#F1F4EF] print:text-neutral-800">
                  {group.items.join(" · ")}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mt-6">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#B6E778] print:text-neutral-900 border-b border-[#B6E778]/20 pb-1 print:border-neutral-300">
            Professional Experience
          </h2>
          <div className="mt-3 space-y-5">
            {experience.map((role) => (
              <div key={`${role.company}-${role.title}`} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="text-sm font-bold text-[#F1F4EF] print:text-black">
                      {role.title}
                    </h3>
                    <p className="font-mono text-xs text-[#B6E778] print:text-neutral-700">
                      {role.company} {role.location && `· ${role.location}`}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-[#9EAA9A] print:text-neutral-600 sm:text-right">
                    {role.period}
                  </span>
                </div>
                <ul className="mt-1 list-disc pl-4 space-y-1 text-xs leading-relaxed text-[#F1F4EF] print:text-neutral-800">
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
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#B6E778] print:text-neutral-900 border-b border-[#B6E778]/20 pb-1 print:border-neutral-300">
            Selected Engineering Projects
          </h2>
          <div className="mt-3 space-y-4">
            {projects.slice(0, 4).map((p) => (
              <div key={p.slug} className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-sm font-bold text-[#F1F4EF] print:text-black">
                    {p.title}
                  </h3>
                  {p.result && (
                    <span className="font-mono text-xs font-semibold text-[#B6E778] print:text-neutral-800">
                      {p.result.value} {p.result.label}
                    </span>
                  )}
                </div>
                <p className="font-mono text-[11px] text-[#9EAA9A] print:text-neutral-600">
                  Tech Stack: {p.tags.join(" | ")}
                </p>
                <ul className="list-disc pl-4 space-y-0.5 text-xs text-[#F1F4EF] print:text-neutral-800">
                  {p.highlights.slice(0, 3).map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Research Publications */}
        <section className="mt-6">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#B6E778] print:text-neutral-900 border-b border-[#B6E778]/20 pb-1 print:border-neutral-300">
            Scholarly Publications &amp; Research
          </h2>
          <ul className="mt-3 space-y-2 text-xs">
            {researchPapers.map((paper, i) => (
              <li key={paper.href} className="flex items-start gap-2">
                <span className="font-mono font-bold text-[#B6E778] print:text-black">[0{i + 1}]</span>
                <div>
                  <span className="font-semibold text-[#F1F4EF] print:text-black">{paper.label}</span> — {paper.detail}.{" "}
                  <a href={paper.href} target="_blank" rel="noopener noreferrer" className="font-mono text-[#B6E778] print:text-neutral-800 hover:underline">
                    IEEE Xplore Record
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Honors & Awards */}
        <section className="mt-6 border-t border-[#B6E778]/20 pt-4 print:border-neutral-300">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#B6E778] print:text-neutral-900">
            Honors &amp; Recognitions
          </h2>
          <ul className="mt-2 list-disc pl-4 space-y-1 text-xs text-[#F1F4EF] print:text-neutral-800">
            <li>
              <strong>Runner-up Award</strong> — SRM National Level Robotics Hackathon, 2025 (Autonomous Surveillance &amp; Hazard Bot).
            </li>
            <li>
              <strong>Lead Robotics Instructor Recognition</strong> — Mentored 10,000+ students across hands-on STEM and electronics workshops at NxtWave.
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
}
