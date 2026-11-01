"use client";

import Image from "next/image";
import { ArrowUpRight, Cpu, Layers, Radio, Sparkles } from "lucide-react";
import type { Project } from "@/data/site";
import { GitHubIcon } from "./icons";

type Props = { project: Project; onOpen: (p: Project) => void };

export function ProjectCard({ project, onOpen }: Props) {
  const isLarge = project.featured;

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-2xl ${
        isLarge
          ? "border-[#38BDF8]/40 bg-[#0E1422] hover:border-[#38BDF8] md:col-span-2 lg:grid lg:grid-cols-12 lg:items-center"
          : "border-[#38BDF8]/20 bg-[#0E1422] hover:border-[#38BDF8]/50"
      }`}
    >
      {/* Visual Image Header */}
      <div
        className={`relative overflow-hidden bg-[#070A11] ${
          isLarge
            ? "h-64 sm:h-80 lg:col-span-6 lg:h-full min-h-[300px] border-b lg:border-b-0 lg:border-r border-[#38BDF8]/20"
            : "h-52 sm:h-60 w-full border-b border-[#38BDF8]/15"
        }`}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
          sizes={isLarge ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          loading="lazy"
        />

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1422] via-transparent to-transparent opacity-80 lg:opacity-40" />

        {/* Category Pill */}
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#38BDF8]/30 bg-[#070A11]/90 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[#38BDF8] backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8]" />
            {project.category}
          </span>
          {isLarge && (
            <span className="inline-flex items-center gap-1 rounded-full border border-[#00F0FF]/30 bg-[#00F0FF]/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-[#00F0FF]">
              ★ FEATURED FLAGSHIP
            </span>
          )}
        </div>
      </div>

      {/* Content Column */}
      <div className={`flex flex-1 flex-col p-6 sm:p-7 ${isLarge ? "lg:col-span-6" : ""}`}>
        <div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#38BDF8]">
            {project.subtitle}
          </span>
          <h3 className="mt-1 text-xl font-bold leading-snug tracking-tight text-white group-hover:text-[#38BDF8] transition-colors sm:text-2xl">
            {project.title}
          </h3>
          <p className="mt-2.5 text-xs leading-relaxed text-[#94A3B8] sm:text-sm">
            {project.summary}
          </p>
        </div>

        {/* Result / Validation Metric */}
        {project.result && (
          <div className="mt-4 inline-flex items-center gap-2.5 rounded-lg border border-[#38BDF8]/20 bg-[#070A11] px-3.5 py-2 font-mono text-xs">
            <span className="size-2 rounded-full bg-emerald-400" />
            <span className="font-bold text-[#38BDF8]">{project.result.value}</span>
            <span className="text-[#94A3B8]">{project.result.label}</span>
          </div>
        )}

        {/* Tech Badges */}
        <div className="mt-5">
          <ul className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, isLarge ? 8 : 5).map((t) => (
              <li
                key={t}
                className="rounded border border-[#38BDF8]/15 bg-[#070A11] px-2 py-0.5 font-mono text-[11px] text-[#CBD5E1]"
              >
                {t}
              </li>
            ))}
            {project.technologies.length > (isLarge ? 8 : 5) && (
              <li className="rounded border border-[#1E293B] bg-[#070A11] px-2 py-0.5 font-mono text-[11px] text-[#64748B]">
                +{project.technologies.length - (isLarge ? 8 : 5)} more
              </li>
            )}
          </ul>
        </div>

        {/* Footer CTAs */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#1E293B] pt-5">
          <button
            type="button"
            onClick={() => onOpen(project)}
            aria-haspopup="dialog"
            aria-label={`View engineering details: ${project.title}`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#38BDF8]/40 bg-[#070A11] px-4 py-2 font-mono text-xs font-bold text-[#38BDF8] hover:border-[#38BDF8] hover:bg-[#38BDF8]/10 transition-all cursor-pointer"
          >
            Engineering Breakdown
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </button>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
            >
              <GitHubIcon className="size-3.5" />
              <span>GitHub Repo</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
