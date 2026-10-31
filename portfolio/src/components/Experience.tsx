import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experience } from "@/data/site";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      badge="PROFESSIONAL RECORD"
      title="Experience"
      description="Hands-on robotics engineering, firmware development, and practical STEM mentoring."
    >
      <ol className="relative ml-2 space-y-12 border-l border-[#B6E778]/20">
        {experience.map((role) => (
          <li key={`${role.company}-${role.title}`} className="relative pl-8">
            {/* Timeline Node */}
            <span
              aria-hidden="true"
              className={`absolute -left-[7px] top-1.5 size-3.5 rounded-full border-2 ${
                role.current
                  ? "border-[#101310] bg-[#B6E778] shadow-[0_0_12px_#B6E778]"
                  : "border-[#6D786A] bg-[#1B211D]"
              }`}
            />

            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-xl font-bold tracking-tight text-[#F1F4EF]">{role.title}</h3>
              {role.period && (
                <span className="font-mono text-xs font-semibold text-[#B6E778]">{role.period}</span>
              )}
            </div>

            <div className="mt-1 flex flex-wrap items-center gap-3 font-mono text-xs text-[#9EAA9A]">
              <span className="font-bold text-[#F1F4EF]">{role.company}</span>
              {role.location && (
                <span className="inline-flex items-center gap-1">
                  <MapPin className="size-3 text-[#B6E778]" />
                  {role.location}
                </span>
              )}
              {role.current && (
                <span className="rounded-full border border-[#B6E778]/40 bg-[#B6E778]/15 px-2 py-0.5 text-[10px] font-bold text-[#B6E778]">
                  CURRENT ROLE
                </span>
              )}
            </div>

            <ul className="mt-4 max-w-prose space-y-2.5 text-sm leading-relaxed text-[#F1F4EF]">
              {role.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#B6E778]" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
