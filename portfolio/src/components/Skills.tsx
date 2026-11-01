import { Cpu, Radio, CircuitBoard, Wrench, Bot } from "lucide-react";
import { skillGroups } from "@/data/site";
import { Section } from "./Section";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Embedded Systems": Cpu,
  "Communication Protocols": Radio,
  "Hardware and Electronics": CircuitBoard,
  "Development Tools": Wrench,
  "Robotics and Platforms": Bot,
};

export function Skills() {
  return (
    <Section
      id="expertise"
      badge="TECHNICAL PROFICIENCIES"
      title="Technical Expertise"
      description="Applied engineering capabilities spanning microcontroller firmware, communication buses, circuit hardware, and robotics."
    >
      <div id="skills" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, idx) => {
          const Icon = categoryIcons[group.category] || Cpu;
          return (
            <div
              key={group.category}
              className={`group rounded-2xl border border-slate-800 bg-[#0E1422]/90 p-6 transition-all duration-300 hover:border-sky-400/50 hover:bg-[#121A2C] ${
                idx === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-9 items-center justify-center rounded-xl border border-sky-400/25 bg-sky-500/10 text-sky-400 group-hover:scale-110 transition-transform">
                    <Icon className="size-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white tracking-tight">{group.category}</h3>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-sky-400 font-semibold">
                      {group.badge}
                    </span>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-slate-500">0{idx + 1}</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-lg border border-slate-800 bg-[#070A11] px-2.5 py-1.5 font-mono text-xs text-slate-300 transition-colors group-hover:border-slate-700 hover:border-sky-400 hover:text-sky-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
