"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { projects, type Project, type ProjectCategory } from "@/data/site";
import { Section } from "./Section";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: "all", label: "All Architecture" },
    { id: "embedded", label: "Embedded & MCUs" },
    { id: "robotics", label: "Robotics & ROS" },
    { id: "wireless", label: "Wireless & IoT" },
  ];

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        activeCategory === "all" || p.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <Section
      id="projects"
      badge="PORTFOLIO HIGHLIGHTS"
      title="Projects"
      description="Hardware, firmware, and autonomous systems built, simulated, and validated."
    >
      {/* Category Filter & Search Bar */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-1.5 rounded-lg border border-[#B6E778]/20 bg-[#1B211D] p-1">
          {categories.map((c) => {
            const count =
              c.id === "all"
                ? projects.length
                : projects.filter((p) => p.category === c.id).length;
            const isActive = activeCategory === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCategory(c.id)}
                className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 font-mono text-xs transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#B6E778] text-[#101310] font-bold shadow-[0_0_12px_rgba(182,231,120,0.25)]"
                    : "text-[#9EAA9A] hover:text-[#F1F4EF]"
                }`}
              >
                {c.label}
                <span
                  className={`rounded px-1.5 py-0.2 text-[10px] ${
                    isActive ? "bg-[#101310] text-[#B6E778]" : "bg-[#101310] text-[#9EAA9A]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Search Input */}
        <div className="relative min-w-[220px]">
          <Search className="absolute left-3 top-2.5 size-3.5 text-[#9EAA9A]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search MCU, sensor, protocol..."
            className="w-full rounded-lg border border-[#B6E778]/25 bg-[#1B211D] py-2 pl-9 pr-3 font-mono text-xs text-[#F1F4EF] placeholder:text-[#9EAA9A] focus:border-[#B6E778] focus:outline-none transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-2 text-[10px] font-mono text-[#9EAA9A] hover:text-white"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      {filtered.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((p) => (
            <div key={p.slug}>
              <ProjectCard project={p} onOpen={setSelected} />
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-[#B6E778]/20 bg-[#1B211D] p-12 text-center">
          <SlidersHorizontal className="mx-auto size-8 text-[#9EAA9A]" />
          <p className="mt-3 font-mono text-sm text-[#F1F4EF]">
            No projects found matching &ldquo;{searchQuery}&rdquo;
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
            }}
            className="mt-4 font-mono text-xs text-[#B6E778] hover:underline"
          >
            Reset filters
          </button>
        </div>
      )}

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
