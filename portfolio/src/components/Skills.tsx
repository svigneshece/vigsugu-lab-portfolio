import { Cpu, Radio, CircuitBoard, Wrench, Bot, CheckCircle2 } from "lucide-react";
import { skillGroups } from "@/data/site";
import { Section } from "./Section";

const categoryIcons = [Cpu, Radio, CircuitBoard, Wrench, Bot];

export function Skills() {
  return (
    <Section
      id="skills"
      badge="TECHNICAL CAPABILITIES"
      title="Engineering Competencies"
      description="Microcontroller architectures, embedded communication protocols, hardware EDA, and physical prototyping toolchains."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = categoryIcons[index] || Cpu;
          return (
            <div
              key={group.category}
              className={`group rounded-2xl border border-[#38BDF8]/20 bg-[#0E1422] p-6 shadow-xl transition-all duration-300 hover:border-[#38BDF8]/50 hover:bg-[#121929] hover:shadow-[0_0_24px_rgba(56,189,248,0.1)] ${
                index === 0 ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className="mb-4 flex items-center justify-between border-b border-[#38BDF8]/15 pb-3">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg border border-[#38BDF8]/30 bg-[#070A11] text-[#38BDF8] group-hover:scale-105 transition-transform">
                    <Icon className="size-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#38BDF8]">
                      {group.badge}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                      {group.category}
                    </h3>
                  </div>
                </div>

                <span className="rounded-md border border-[#1E293B] bg-[#070A11] px-2 py-0.5 font-mono text-[10px] text-[#64748B]">
                  {group.items.length} Techs
                </span>
              </div>

              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#38BDF8]/15 bg-[#070A11] px-3 py-1.5 font-mono text-xs text-[#CBD5E1] transition-all duration-200 hover:border-[#38BDF8] hover:bg-[#151D30] hover:text-[#38BDF8]"
                  >
                    <span className="size-1 rounded-full bg-[#38BDF8]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
