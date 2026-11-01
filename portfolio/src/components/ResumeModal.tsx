"use client";

import { useEffect, useRef } from "react";
import { X, Download, ExternalLink, Award, Sparkles } from "lucide-react";
import { site, about, skillGroups, experience, projects, researchPublications, awardHighlight } from "@/data/site";

type Props = {
  open?: boolean;
  isOpen?: boolean;
  onClose: () => void;
};

export function ResumeModal({ open, isOpen, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isVisible = Boolean(open ?? isOpen);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isVisible && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else if (!isVisible && dialog.open) {
      dialog.close();
      document.body.style.overflow = "";
    }
  }, [isVisible]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => e.target === dialogRef.current && onClose()}
      className="m-auto max-h-[92vh] w-[min(94vw,56rem)] overflow-y-auto rounded-2xl border border-slate-700/80 bg-[#070A11] p-0 text-slate-100 shadow-2xl backdrop:bg-black/85 backdrop:backdrop-blur-md"
    >
      <div className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-800 bg-[#0E1422]/95 px-6 py-4 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F0FF]" />
          <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-200">
            ATS Industry-Ready Resume Preview
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={site.resume.href}
            download={site.resume.downloadName}
            className="inline-flex items-center gap-1.5 rounded-lg bg-sky-400 px-3.5 py-1.5 font-mono text-xs font-bold text-slate-950 hover:bg-sky-300 transition-all cursor-pointer shadow-[0_0_15px_rgba(56,189,248,0.3)]"
          >
            <Download className="size-3.5" />
            Download PDF
          </a>

          <a
            href="/resume"
            target="_blank"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-[#070A11] px-3 py-1.5 font-mono text-xs text-slate-200 hover:border-sky-400 hover:text-sky-300 transition-colors"
          >
            <ExternalLink className="size-3.5 text-sky-400" />
            Full Page View
          </a>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close resume preview"
            className="rounded-lg border border-slate-800 p-1.5 text-slate-400 hover:text-white cursor-pointer"
          >
            <X className="size-4" />
          </button>
        </div>
      </div>

      <div className="p-6 sm:p-10 space-y-6 text-sm">
        {/* Header */}
        <div className="border-b border-slate-800 pb-6">
          <h1 className="text-3xl font-bold tracking-tight text-white">{site.name}</h1>
          <p className="mt-1 font-mono text-sm font-semibold text-sky-400">{site.role}</p>
          <p className="mt-1 text-xs text-slate-400">{site.location} · {site.contact.email}</p>
          <div className="mt-3 flex flex-wrap gap-4 font-mono text-xs text-slate-400">
            <a href={site.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">
              LinkedIn Profile
            </a>
            <a href={site.contact.github} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">
              GitHub Repositories
            </a>
            <span className="text-slate-500">CGPA: 8.2 / 10 · Anna University (Agni College)</span>
          </div>
        </div>

        {/* Professional Summary */}
        <section>
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-sky-400 border-b border-slate-800 pb-1">
            Professional Profile
          </h3>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
            {about.objective}
          </p>
        </section>

        {/* Education */}
        <section>
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-sky-400 border-b border-slate-800 pb-1">
            Education
          </h3>
          <div className="mt-2.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
            <div>
              <p className="font-bold text-white">Bachelor of Engineering (B.E.) — Electronics &amp; Communication Engineering</p>
              <p className="text-slate-400">Agni College of Technology, Chennai (Anna University)</p>
            </div>
            <p className="font-mono text-sky-300">Grad: 2026 · <strong className="text-white">CGPA: 8.2 / 10</strong></p>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-sky-400 border-b border-slate-800 pb-1">
            Technical Skills
          </h3>
          <div className="mt-2.5 space-y-1.5 text-xs">
            {skillGroups.map((g) => (
              <div key={g.category} className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-1">
                <span className="font-mono text-sky-300 font-medium">{g.category}:</span>
                <span className="text-slate-300">{g.items.join(" · ")}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section>
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-sky-400 border-b border-slate-800 pb-1">
            Engineering &amp; Technical Experience
          </h3>
          <div className="mt-3 space-y-4">
            {experience.map((e) => (
              <div key={e.title} className="text-xs">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <p className="font-bold text-white">{e.title} — <span className="font-mono text-sky-300">{e.company}</span></p>
                  <span className="font-mono text-slate-400">{e.period}</span>
                </div>
                <ul className="mt-1.5 list-disc pl-4 space-y-1 text-slate-300">
                  {e.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-sky-400 border-b border-slate-800 pb-1">
            Featured Engineering Projects
          </h3>
          <div className="mt-3 space-y-3.5 text-xs">
            {projects.slice(0, 4).map((p) => (
              <div key={p.slug}>
                <div className="flex justify-between items-baseline gap-2">
                  <p className="font-bold text-white">{p.title}</p>
                  {p.result && <span className="font-mono text-cyan-300 font-semibold">{p.result.value}</span>}
                </div>
                <p className="font-mono text-[11px] text-sky-400/90 mt-0.5">{p.technologies.join(" | ")}</p>
                <p className="text-slate-300 mt-1 leading-relaxed">{p.summary}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Research & Publications */}
        <section>
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-sky-400 border-b border-slate-800 pb-1">
            Research Publications (IEEE)
          </h3>
          <div className="mt-3 space-y-2 text-xs">
            {researchPublications.map((pub, idx) => (
              <div key={pub.id} className="text-slate-300">
                <p className="text-white font-semibold">
                  [{idx + 1}] {pub.title}
                </p>
                <p className="text-[11px] text-slate-400">
                  {pub.conference} ({pub.year}) · IEEE Xplore Record
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section>
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-sky-400 border-b border-slate-800 pb-1">
            Honors &amp; Recognitions
          </h3>
          <div className="mt-2.5 space-y-2 text-xs text-slate-300">
            <div className="flex items-start gap-2">
              <Award className="size-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white">{awardHighlight.title}</p>
                <p className="text-[11px] text-slate-400">{awardHighlight.organizedBy} · {awardHighlight.date}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Sparkles className="size-4 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white">Runner-up Award — SRM Robotics Hackathon</p>
                <p className="text-[11px] text-slate-400">SRM University · Multi-Mode Autonomous Surveillance &amp; Hazard Robot</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </dialog>
  );
}
