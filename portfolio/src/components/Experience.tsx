import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { experience } from "@/data/site";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      badge="PROFESSIONAL RECORD"
      title="Engineering Experience"
      description="Practical embedded systems exposure, robotics workshops, hardware troubleshooting, and technical mentorship."
    >
      <div className="relative space-y-6">
        {experience.map((role, idx) => (
          <article
            key={`${role.company}-${role.title}`}
            className="group rounded-2xl border border-[#38BDF8]/20 bg-[#0E1422] p-6 sm:p-7 shadow-xl transition-all duration-300 hover:border-[#38BDF8]/50 hover:bg-[#121929]"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-[#1E293B] pb-4">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-[#38BDF8] transition-colors">
                    {role.title}
                  </h3>
                  {role.current && (
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-bold text-emerald-400">
                      CURRENT ROLE
                    </span>
                  )}
                </div>
                <p className="mt-1 font-mono text-sm font-semibold text-[#38BDF8]">
                  {role.company}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#64748B]">
                <span className="inline-flex items-center gap-1 text-[#94A3B8]">
                  <Calendar className="size-3.5 text-[#38BDF8]" />
                  {role.period}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="size-3.5 text-[#64748B]" />
                  {role.location}
                </span>
              </div>
            </div>

            <ul className="mt-5 space-y-2.5 text-xs text-[#CBD5E1] sm:text-sm leading-relaxed">
              {role.points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#38BDF8]" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
