import {
  Cpu,
  CircuitBoard,
  Radio,
  Bot,
  Wrench,
  GraduationCap,
  Sparkles,
  Presentation,
  Compass,
  Briefcase,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { services } from "@/data/site";
import { Section } from "./Section";

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "embedded-firmware": Cpu,
  "pcb-prototyping": CircuitBoard,
  "iot-wireless": Radio,
  "robotics-automation": Bot,
  "hardware-integration": Wrench,
  "technical-training": GraduationCap,
  "stem-robotics-education": Sparkles,
  "public-speaking": Presentation,
  "technical-mentoring": Compass,
  "career-guidance": Briefcase,
};

export function Services() {
  const engineeringServices = services.filter((s) => s.category === "engineering");
  const knowledgeServices = services.filter((s) => s.category === "knowledge");

  return (
    <Section
      id="services"
      badge="PROFESSIONAL OFFERINGS"
      title="What I Bring to the Table"
      description="Engineering Innovation. Sharing Knowledge. Empowering People."
    >
      <div className="space-y-12">
        {/* Category A: Engineering Services */}
        <div>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38BDF8]" />
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-sky-400">
                CATEGORY A · Core Engineering &amp; Hardware Services
              </h3>
            </div>
            <span className="font-mono text-xs text-slate-500">
              Silicon Bring-up · Firmware · Circuit Design
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {engineeringServices.map((service) => {
              const Icon = serviceIcons[service.id] || Cpu;
              return (
                <div
                  key={service.id}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-[#0E1422]/90 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/50 hover:bg-[#121A2C]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex size-10 items-center justify-center rounded-xl border border-sky-400/25 bg-sky-500/10 text-sky-400 group-hover:scale-110 transition-transform">
                        <Icon className="size-5" />
                      </div>
                      <span className="font-mono text-[10px] font-bold text-slate-500">
                        {service.tag}
                      </span>
                    </div>

                    <h4 className="mt-4 text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                      {service.title}
                    </h4>

                    <p className="mt-2 text-xs leading-relaxed text-slate-400">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-5 border-t border-slate-800/80 pt-4">
                    <div className="mb-3 flex flex-wrap gap-1.5">
                      {service.keywords.map((kw) => (
                        <span
                          key={kw}
                          className="rounded border border-slate-800 bg-[#070A11] px-2 py-0.5 font-mono text-[10px] text-slate-300"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                    >
                      <span>Inquire About This</span>
                      <ArrowRight className="size-3 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Category B: Professional & Knowledge Services */}
        <div>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F0FF]" />
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-cyan-400">
                CATEGORY B · Professional, Training &amp; Mentorship Services
              </h3>
            </div>
            <span className="font-mono text-xs text-slate-500">
              STEM Workshops · Presentations · ECE Career Guidance
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {knowledgeServices.map((service) => {
              const Icon = serviceIcons[service.id] || GraduationCap;
              return (
                <div
                  key={service.id}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-[#0E1422]/90 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-[#121A2C]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex size-10 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                        <Icon className="size-5" />
                      </div>
                      <span className="font-mono text-[10px] font-bold text-slate-500">
                        {service.tag}
                      </span>
                    </div>

                    <h4 className="mt-4 text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h4>

                    <p className="mt-2 text-xs leading-relaxed text-slate-400">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-5 border-t border-slate-800/80 pt-4">
                    <div className="mb-3 flex flex-wrap gap-1.5">
                      {service.keywords.map((kw) => (
                        <span
                          key={kw}
                          className="rounded border border-slate-800 bg-[#070A11] px-2 py-0.5 font-mono text-[10px] text-slate-300"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>Connect for Mentorship</span>
                      <ArrowRight className="size-3 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
