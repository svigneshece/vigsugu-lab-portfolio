"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, Layers } from "lucide-react";
import { projects, type Project } from "@/data/site";
import { Section } from "./Section";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Engineering" },
    { id: "wireless", label: "Wireless & LoRa Mesh" },
    { id: "robotics", label: "Robotics & Mechatronics" },
    { id: "embedded", label: "STM32 & Microcontrollers" },
  ];

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        activeCategory === "all" || p.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <Section
      id="projects"
      badge="CORE R&amp;D PORTFOLIO"
      title="Featured Engineering Projects"
      description="Silicon bring-up, communication meshes, mechatronic vehicles, and embedded firmware validated on physical hardware."
    >
      {/* Category Filter & Search Bar */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-1.5 rounded-xl border border-[#38BDF8]/20 bg-[#0E1422] p-1 shadow-sm">
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
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#38BDF8] text-[#070A11] font-bold shadow-[0_0_12px_rgba(56,189,248,0.25)]"
                    : "text-[#94A3B8] hover:text-[#F8FAFC]"
                }`}
              >
                {c.label}
                <span
                  className={`rounded px-1.5 py-0.2 text-[10px] ${
                    isActive ? "bg-[#070A11] text-[#38BDF8]" : "bg-[#070A11] text-[#64748B]"
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
          <Search className="absolute left-3 top-2.5 size-3.5 text-[#64748B]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search STM32, LoRa, ESP32..."
            className="w-full rounded-xl border border-[#38BDF8]/25 bg-[#0E1422] py-2 pl-9 pr-3 font-mono text-xs text-[#F8FAFC] placeholder:text-[#64748B] focus:border-[#38BDF8] focus:outline-none transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-2 text-[10px] font-mono text-[#64748B] hover:text-white"
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
            <ProjectCard key={p.slug} project={p} onOpen={setSelected} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-[#38BDF8]/20 bg-[#0E1422] p-12 text-center">
          <SlidersHorizontal className="mx-auto size-8 text-[#64748B]" />
          <p className="mt-3 font-mono text-sm text-[#F8FAFC]">
            No projects found matching &ldquo;{searchQuery}&rdquo;
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
            }}
            className="mt-4 font-mono text-xs text-[#38BDF8] hover:underline"
          >
            Reset filters
          </button>
        </div>
      )}

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
