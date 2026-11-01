"use client";

import Image from "next/image";
import { ArrowUpRight, Cpu, Layers, Radio, Sparkles } from "lucide-react";
import type { Project } from "@/data/site";
import { GitHubIcon } from "./icons";

type Props = {
  project: Project;
  onOpen?: (p: Project) => void;
  onSelect?: (p: Project) => void;
};

export function ProjectCard({ project, onOpen, onSelect }: Props) {
  const isLarge = project.featured;
  const handleOpen = () => (onOpen || onSelect)?.(project);

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-2xl ${
        isLarge
          ? "border-sky-400/40 bg-[#0E1422] hover:border-sky-400 md:col-span-2 lg:grid lg:grid-cols-12 lg:items-center"
          : "border-slate-800 bg-[#0E1422] hover:border-sky-400/50"
      }`}
    >
      {/* Visual Image Header */}
      <div
        onClick={handleOpen}
        className={`relative overflow-hidden bg-[#070A11] cursor-pointer ${
          isLarge
            ? "h-64 sm:h-80 lg:col-span-6 lg:h-full min-h-[300px] border-b lg:border-b-0 lg:border-r border-slate-800"
            : "h-52 sm:h-60 w-full border-b border-slate-800"
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

        {/* Category & Result Pill */}
        <div className="absolute left-3.5 top-3.5 flex flex-wrap items-center gap-2 z-10">
          <span className="rounded-md border border-sky-400/30 bg-[#070A11]/90 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-sky-400 backdrop-blur-md">
            {project.category}
          </span>
          {project.result && (
            <span className="rounded-md border border-cyan-400/40 bg-cyan-950/80 px-2 py-0.5 font-mono text-[10px] font-bold text-cyan-300 backdrop-blur-md">
              {project.result.value}
            </span>
          )}
        </div>
      </div>

      {/* Content Block */}
      <div
        className={`flex flex-col justify-between p-6 sm:p-7 ${
          isLarge ? "lg:col-span-6" : ""
        }`}
      >
        <div>
          <div className="flex items-start justify-between gap-3">
            <h3
              onClick={handleOpen}
              className="font-bold leading-snug tracking-tight text-white group-hover:text-sky-300 transition-colors cursor-pointer text-lg sm:text-xl line-clamp-2"
            >
              {project.title}
            </h3>

            <button
              type="button"
              onClick={handleOpen}
              aria-label={`Open details for ${project.title}`}
              className="grid size-8 shrink-0 place-items-center rounded-lg border border-slate-800 bg-[#070A11] text-slate-400 group-hover:border-sky-400 group-hover:text-sky-400 transition-colors cursor-pointer"
            >
              <ArrowUpRight className="size-4" />
            </button>
          </div>

          <p className="mt-2 text-xs font-medium text-sky-400 line-clamp-1">
            {project.subtitle}
          </p>

          <p className="mt-2.5 text-xs leading-relaxed text-slate-300 line-clamp-3 sm:text-sm">
            {project.summary}
          </p>
        </div>

        {/* Technologies Tags & Actions */}
        <div className="mt-6 border-t border-slate-800/80 pt-4">
          <div className="mb-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="rounded border border-slate-800 bg-[#070A11] px-2 py-0.5 font-mono text-[10px] text-slate-400"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="rounded border border-slate-800 bg-[#070A11] px-2 py-0.5 font-mono text-[10px] text-slate-500">
                +{project.technologies.length - 5} more
              </span>
            )}
          </div>

          <div className="flex items-center justify-between font-mono text-xs">
            <button
              type="button"
              onClick={handleOpen}
              className="inline-flex items-center gap-1.5 font-semibold text-sky-400 hover:text-sky-300 transition-colors cursor-pointer"
            >
              <span>Inspect Architecture</span>
              <ArrowUpRight className="size-3.5" />
            </button>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${project.title}`}
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-sky-300 transition-colors"
              >
                <GitHubIcon className="size-3.5" />
                <span>Source</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
