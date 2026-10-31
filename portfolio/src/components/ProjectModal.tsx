"use client";

import { useEffect, useRef } from "react";
import { X, ExternalLink, Cpu, CheckCircle2 } from "lucide-react";
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
      className="m-auto max-h-[92vh] w-[min(94vw,48rem)] overflow-y-auto rounded-2xl border border-[#B6E778]/30 bg-[#101310] p-0 text-[#F1F4EF] backdrop:bg-black/85 backdrop:backdrop-blur-md"
    >
      {project && (
        <div>
          {/* Top Image / Schematic View */}
          <div className="relative h-64 sm:h-80 w-full border-b border-[#B6E778]/20 bg-[#101310]">
            {project.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.image}
                alt={`${project.title} detailed view`}
                className="size-full object-contain bg-[#101310]"
              />
            ) : null}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close details"
              className="absolute right-3 top-3 rounded-full border border-[#B6E778]/30 bg-[#1B211D] p-2 text-[#9EAA9A] hover:text-white cursor-pointer"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="rounded-full border border-[#B6E778]/30 bg-[#1B211D] px-2.5 py-0.5 font-mono text-[10px] uppercase text-[#B6E778] font-bold">
                {project.category}
              </span>
              {project.result && (
                <span className="font-mono text-xs font-semibold text-[#B6E778]">
                  ● {project.result.value} {project.result.label}
                </span>
              )}
            </div>

            <h3
              id="project-dialog-title"
              className="text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl"
            >
              {project.title}
            </h3>

            <p className="mt-3 text-base leading-relaxed text-[#9EAA9A]">
              {project.summary}
            </p>

            {/* Architecture Highlights */}
            <div className="mt-6 border-t border-[#B6E778]/15 pt-6">
              <h4 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#B6E778]">
                <Cpu className="size-4" />
                Engineering Highlights &amp; Validation
              </h4>
              <ul className="mt-4 space-y-3">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-[#F1F4EF]">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#B6E778]" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hardware & Protocol Tags */}
            <div className="mt-6 border-t border-[#B6E778]/15 pt-6">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#B6E778]">
                Hardware Stack &amp; Protocols
              </h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded border border-[#B6E778]/20 bg-[#1B211D] px-2.5 py-1 font-mono text-xs text-[#F1F4EF]"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-[#B6E778]/15 pt-6">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={button.primary}
                >
                  <GitHubIcon className="size-4" />
                  View GitHub Repository
                  <ExternalLink className="size-3.5" />
                </a>
              ) : (
                <span className="font-mono text-xs text-[#9EAA9A]">
                  STM32 / Internship Research Architecture
                </span>
              )}
              <button type="button" onClick={onClose} className={button.secondary}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
