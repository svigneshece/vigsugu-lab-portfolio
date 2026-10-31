import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/site";
import { ProjectVisual } from "./ProjectVisual";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

type Props = { project: Project; onOpen: (p: Project) => void };

export function ProjectCard({ project, onOpen }: Props) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-[#B6E778]/20 bg-[#1B211D] transition-all duration-300 hover:border-[#B6E778]/50 hover:shadow-[0_12px_36px_rgba(0,0,0,0.5)]">
      {/* Visual Image Header */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden border-b border-[#B6E778]/15 bg-[#101310]">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <ProjectVisual kind={project.visual} />
        )}

        {/* Category Pill */}
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-[#B6E778]/30 bg-[#101310]/90 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[#F1F4EF] backdrop-blur-md">
          <span className="size-1.5 rounded-full bg-[#B6E778] shadow-[0_0_8px_#B6E778]" />
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold leading-snug tracking-tight text-white group-hover:text-[#B6E778] transition-colors">
          {project.title}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-[#9EAA9A]">
          {project.summary}
        </p>

        {project.result && (
          <div className="mt-4 inline-flex items-center gap-2 rounded-md border border-[#B6E778]/20 bg-[#101310] px-3 py-1.5 font-mono text-xs">
            <span className="font-bold text-[#B6E778]">{project.result.value}</span>
            <span className="text-[#9EAA9A]">{project.result.label}</span>
          </div>
        )}

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <li
              key={t}
              className="rounded border border-[#B6E778]/15 bg-[#101310] px-2 py-0.5 font-mono text-[11px] text-[#F1F4EF]"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-6">
          <button
            type="button"
            onClick={() => onOpen(project)}
            aria-haspopup="dialog"
            aria-label={`View details: ${project.title}`}
            className="inline-flex w-fit items-center gap-1.5 font-mono text-xs font-bold text-[#B6E778] hover:text-white transition-colors cursor-pointer"
          >
            Inspect Architecture
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </button>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-[#9EAA9A] hover:text-[#B6E778] transition-colors"
            >
              <GithubIcon className="size-3.5" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
