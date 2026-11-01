"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { X, ExternalLink, Cpu, CheckCircle2, AlertTriangle, Layers, Activity } from "lucide-react";
import type { Project } from "@/data/site";
import { GitHubIcon } from "./icons";
import { button } from "./ui";

type Props = { project: Project | null; onClose: () => void };

export function ProjectModal({ project, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (project && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else if (!project && dialog.open) {
      dialog.close();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  return (
    <dialog
      ref={ref}
      aria-labelledby="project-dialog-title"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      className="m-auto max-h-[92vh] w-[min(94vw,56rem)] overflow-y-auto rounded-2xl border border-[#38BDF8]/30 bg-[#070A11] p-0 text-[#F8FAFC] shadow-2xl backdrop:bg-black/85 backdrop:backdrop-blur-md"
    >
      {project && (
        <div>
          {/* Top Real Photograph Display */}
          <div className="relative h-64 sm:h-96 w-full border-b border-[#38BDF8]/20 bg-[#0E1422]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain p-2"
              priority
            />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close details"
              className="absolute right-4 top-4 z-20 rounded-full border border-[#38BDF8]/30 bg-[#070A11]/90 p-2 text-[#94A3B8] hover:text-white hover:border-[#38BDF8] cursor-pointer backdrop-blur-md"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
            <div className="absolute left-4 bottom-4 z-20">
              <span className="rounded-md border border-[#38BDF8]/30 bg-[#070A11]/90 px-3 py-1 font-mono text-xs font-bold uppercase text-[#38BDF8] backdrop-blur-md">
                {project.category} Architecture
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Header info */}
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                {project.subtitle}
              </p>
              <h2
                id="project-dialog-title"
                className="mt-1 text-2xl font-extrabold tracking-tight text-white sm:text-3xl"
              >
                {project.title}
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-[#CBD5E1]">
                {project.summary}
              </p>
            </div>

            {/* Problem Statement */}
            <div className="rounded-xl border border-amber-500/25 bg-[#0E1422] p-5">
              <h3 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-amber-400">
                <AlertTriangle className="size-4" />
                Problem Statement &amp; Engineering Need
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#CBD5E1] sm:text-sm">
                {project.problemStatement}
              </p>
            </div>

            {/* Hardware Architecture Breakdown */}
            <div className="rounded-xl border border-[#38BDF8]/20 bg-[#0E1422] p-5">
              <h3 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                <Layers className="size-4" />
                Hardware Architecture &amp; Silicon Modules
              </h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {project.hardwareArchitecture.map((arch) => (
                  <li
                    key={arch}
                    className="flex items-start gap-2.5 rounded-lg border border-[#1E293B] bg-[#070A11] p-2.5 text-xs text-[#CBD5E1]"
                  >
                    <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-[#38BDF8]" />
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Used Grid */}
            <div className="rounded-xl border border-[#38BDF8]/20 bg-[#0E1422] p-5">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                Technologies &amp; Protocols Stack
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-[#38BDF8]/20 bg-[#070A11] px-3 py-1 font-mono text-xs text-[#F8FAFC]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* My Contribution */}
            <div className="rounded-xl border border-[#38BDF8]/20 bg-[#0E1422] p-5">
              <h3 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                <Cpu className="size-4" />
                My Direct Engineering Contribution
              </h3>
              <ul className="mt-3 space-y-2.5">
                {project.myContribution.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-xs text-[#CBD5E1] sm:text-sm">
                    <span className="size-1.5 mt-2 rounded-full bg-[#38BDF8] shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Testing and Validation */}
            <div className="rounded-xl border border-emerald-500/25 bg-[#0E1422] p-5">
              <h3 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-emerald-400">
                <Activity className="size-4" />
                Testing, Physical Validation &amp; Measured Metrics
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#CBD5E1] sm:text-sm">
                {project.testingAndValidation}
              </p>
              {project.result && (
                <div className="mt-3 inline-flex items-center gap-2 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-bold text-emerald-400">
                  <span>{project.result.value}</span>
                  <span className="text-white font-normal">— {project.result.label}</span>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#1E293B] pt-6">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={button.primary}
                >
                  <GitHubIcon className="size-4" />
                  View GitHub Source Code
                  <ExternalLink className="size-3.5" />
                </a>
              ) : (
                <span className="font-mono text-xs text-[#94A3B8]">
                  Verified Laboratory Silicon Implementation
                </span>
              )}

              <button type="button" onClick={onClose} className={button.secondary}>
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
