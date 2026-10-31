import { services } from "@/data/site";
import { Section } from "./Section";
import {
  CircuitBoard,
  Code2,
  GraduationCap,
  Mic2,
  PanelsTopLeft,
  Target,
  RadioTower,
  Presentation,
} from "lucide-react";

const icons = [
  CircuitBoard,
  Code2,
  GraduationCap,
  Mic2,
  Presentation,
  RadioTower,
  PanelsTopLeft,
  Target,
];

export function Services() {
  return (
    <Section
      id="services"
      badge="COLLABORATION"
      title="What I Can Help With"
      description="Hardware prototyping, embedded firmware bring-up, workshops, and engineering consulting."
    >
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {services.map((service, i) => {
          const Icon = icons[i] || CircuitBoard;
          return (
            <article
              key={service.title}
              className="group rounded-xl border border-[#B6E778]/20 bg-[#1B211D] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#B6E778]/50 hover:bg-[#232B25]"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-lg border border-[#B6E778]/25 bg-[#101310] p-2 text-[#B6E778] group-hover:scale-110 transition-transform">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <span className="font-mono text-[10px] text-[#6D786A]">0{i + 1}</span>
              </div>
              <h3 className="mt-4 font-bold tracking-tight text-[#F1F4EF] group-hover:text-[#B6E778] transition-colors">
                {service.title}
              </h3>
              <p className="mt-1.5 font-mono text-xs leading-relaxed text-[#9EAA9A]">
                {service.detail}
              </p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
