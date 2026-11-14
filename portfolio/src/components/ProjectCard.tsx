"use client";

import Image from "next/image";
import { ArrowUpRight, Cpu, Sparkles } from "lucide-react";
import type { Project } from "@/data/site";
import { GitHubIcon } from "./icons";

type Props = {
  project: Project;
  onOpen?: (p: Project) => void;
  onSelect?: (p: Project) => void;
};

export function ProjectCard({ project, onOpen, onSelect }: Props) {
  const handleOpen = () => (onOpen || onSelect)?.(project);

  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800 bg-[#0E1422] transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/80 hover:shadow-[0_14px_45px_rgba(56,189,248,0.22)]">
      {/* Top Subtle Animated Accent Line on Hover */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20" />

      <div>
        {/* Visual Image Header */}
        <div
          onClick={handleOpen}
          className="relative aspect-[16/10] w-full overflow-hidden bg-[#070A11] border-b border-slate-800 cursor-pointer"
        >
          <Image
            src={project.image}
            alt={`${project.title} - Embedded Engineering Project by Vignesh Sugunathan`}
            fill
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />

          {/* Vignette Gradient for Depth & Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1422] via-[#0E1422]/20 to-transparent opacity-90 transition-opacity group-hover:opacity-75" />

          {/* Badges Overlay */}
          <div className="absolute left-3.5 top-3.5 right-3.5 flex items-center justify-between gap-2 z-10">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-sky-400/30 bg-[#070A11]/90 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-sky-300 backdrop-blur-md shadow-sm">
              <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
              {project.category}
            </span>

            {project.result && (
              <span className="inline-flex items-center gap-1 rounded-md border border-cyan-400/40 bg-cyan-950/85 px-2 py-0.5 font-mono text-[10px] font-bold text-cyan-300 backdrop-blur-md shadow-sm">
                <Sparkles className="size-2.5 text-cyan-400" />
                {project.result.value}
              </span>
            )}
          </div>
        </div>

        {/* Card Content Block */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-3">
            <h3
              onClick={handleOpen}
              className="text-lg font-bold leading-snug tracking-tight text-white transition-colors duration-200 group-hover:text-sky-300 cursor-pointer line-clamp-2"
            >
              {project.title}
            </h3>

            <button
              type="button"
              onClick={handleOpen}
              aria-label={`Open hardware details for ${project.title}`}
              className="grid size-8 shrink-0 place-items-center rounded-lg border border-slate-800 bg-[#070A11] text-slate-400 transition-all duration-200 group-hover:border-sky-400 group-hover:bg-sky-500/10 group-hover:text-sky-300 cursor-pointer"
            >
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          <p className="mt-2 font-mono text-xs font-semibold text-sky-400 line-clamp-1">
            {project.subtitle}
          </p>

          <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-300 line-clamp-3">
            {project.summary}
          </p>
        </div>
      </div>

      {/* Card Footer: Tech Stack Chips & Action Links */}
      <div className="px-6 pb-6 pt-0">
        <div className="border-t border-slate-800/80 pt-4">
          <div className="mb-4 flex flex-wrap gap-1.5 min-h-[30px]">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-slate-800 bg-[#070A11] px-2 py-0.5 font-mono text-[10px] text-slate-300 transition-colors group-hover:border-slate-700"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="rounded-md border border-slate-800/60 bg-[#070A11]/60 px-1.5 py-0.5 font-mono text-[10px] text-slate-500">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between font-mono text-xs pt-1">
            <button
              type="button"
              onClick={handleOpen}
              className="inline-flex items-center gap-1.5 font-bold text-sky-400 hover:text-cyan-300 transition-colors cursor-pointer group/btn"
            >
              <span>Inspect Architecture</span>
              <ArrowUpRight className="size-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </button>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${project.title}`}
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
              >
                <GitHubIcon className="size-3.5 text-slate-400" />
                <span>Source</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
