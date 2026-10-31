"use client";

import { useEffect, useRef } from "react";
import { X, Download, Printer, ExternalLink, Mail } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/icons";
import { site, skillGroups, experience, projects, researchPapers } from "@/data/site";
import { button } from "./ui";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function ResumeModal({ open, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else if (!open && dialog.open) {
      dialog.close();
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => e.target === dialogRef.current && onClose()}
      className="m-auto max-h-[92vh] w-[min(94vw,56rem)] overflow-y-auto rounded-2xl border border-[#B6E778]/30 bg-[#101310] p-0 text-[#F1F4EF] backdrop:bg-black/85 backdrop:backdrop-blur-md"
    >
      <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[#B6E778]/20 bg-[#1B211D]/95 px-6 py-4 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-[#B6E778] shadow-[0_0_8px_#B6E778]" />
          <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-[#F1F4EF]">
            ATS 100% Industry-Ready Resume Preview
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={site.resume.href}
            download={site.resume.downloadName}
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#B6E778] px-3.5 py-1.5 font-mono text-xs font-bold text-[#101310] hover:bg-[#cbf58f] transition-all cursor-pointer shadow-[0_0_15px_rgba(182,231,120,0.25)]"
          >
            <Download className="size-3.5" />
            Download PDF
          </a>

          <a
            href="/resume"
            target="_blank"
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#B6E778]/25 bg-[#101310] px-3 py-1.5 font-mono text-xs text-[#F1F4EF] hover:border-[#B6E778] transition-colors"
          >
            <ExternalLink className="size-3.5 text-[#B6E778]" />
            Full Page View
          </a>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close resume preview"
            className="rounded-lg border border-[#B6E778]/20 p-1.5 text-[#9EAA9A] hover:text-white cursor-pointer"
          >
            <X className="size-4" />
          </button>
        </div>
      </div>

      <div className="p-6 sm:p-10 space-y-6 text-sm">
        {/* Header */}
        <div className="border-b border-[#B6E778]/15 pb-6">
          <h1 className="text-3xl font-bold tracking-tight text-white">{site.name}</h1>
          <p className="mt-1 font-mono text-sm font-semibold text-[#B6E778]">{site.role}</p>
          <p className="mt-1 text-xs text-[#9EAA9A]">Chennai, Tamil Nadu, India · {site.contact.email}</p>
          <div className="mt-3 flex flex-wrap gap-4 font-mono text-xs text-[#9EAA9A]">
            <a href={site.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#B6E778] hover:underline">
              LinkedIn Profile
            </a>
            <a href={site.contact.github} target="_blank" rel="noopener noreferrer" className="text-[#B6E778] hover:underline">
              GitHub Repositories
            </a>
            <a href={site.contact.twitter} target="_blank" rel="noopener noreferrer" className="text-[#B6E778] hover:underline">
              Twitter / X
            </a>
          </div>
        </div>

        {/* Education */}
        <section>
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#B6E778] border-b border-[#B6E778]/15 pb-1">
            Education
          </h3>
          <div className="mt-2.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
            <div>
              <p className="font-bold text-white">Bachelor of Engineering (B.E.) — Electronics &amp; Communication</p>
              <p className="text-[#9EAA9A]">Agni College of Technology, Chennai (Anna University)</p>
            </div>
            <p className="font-mono text-[#B6E778]">Grad: 2026 · <strong className="text-white">CGPA: 8.2 / 10</strong></p>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#B6E778] border-b border-[#B6E778]/15 pb-1">
            Technical Skills
          </h3>
          <div className="mt-2.5 space-y-1.5 text-xs">
            {skillGroups.map((g) => (
              <div key={g.category} className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1">
                <span className="font-mono text-[#B6E778]">{g.category}:</span>
                <span className="text-[#F1F4EF]">{g.items.join(" · ")}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section>
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#B6E778] border-b border-[#B6E778]/15 pb-1">
            Experience
          </h3>
          <div className="mt-3 space-y-4">
            {experience.map((e) => (
              <div key={e.title} className="text-xs">
                <div className="flex justify-between items-baseline">
                  <p className="font-bold text-white">{e.title} — <span className="font-mono text-[#B6E778]">{e.company}</span></p>
                  <span className="font-mono text-[#9EAA9A]">{e.period}</span>
                </div>
                <ul className="mt-1 list-disc pl-4 space-y-1 text-[#F1F4EF]">
                  {e.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#B6E778] border-b border-[#B6E778]/15 pb-1">
            Featured Projects
          </h3>
          <div className="mt-3 space-y-3 text-xs">
            {projects.slice(0, 3).map((p) => (
              <div key={p.slug}>
                <div className="flex justify-between items-baseline">
                  <p className="font-bold text-white">{p.title}</p>
                  {p.result && <span className="font-mono text-[#B6E778]">{p.result.value}</span>}
                </div>
                <p className="font-mono text-[11px] text-[#9EAA9A] mt-0.5">{p.tags.join(" | ")}</p>
                <p className="text-[#F1F4EF] mt-1">{p.summary}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </dialog>
  );
}
