import { Cpu, Users, School, Layers, Sparkles } from "lucide-react";
import { impactStats } from "@/data/site";

const icons = [Cpu, Users, School, Layers];

export function ProfessionalImpact() {
  return (
    <section className="relative border-y border-slate-800/80 bg-[#0A0F1D]/80 py-16 backdrop-blur-md">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(56,189,248,0.1),rgba(255,255,255,0))] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-500/10 px-3.5 py-1 font-mono text-[11px] font-semibold text-sky-300">
            <Sparkles className="size-3.5 text-cyan-400" />
            <span>MEASURABLE PROFESSIONAL REACH</span>
          </div>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Engineering Depth &amp; Educational Impact
          </h2>
          <p className="mt-1.5 font-mono text-xs text-slate-400">
            Bridging bench electronics with real-world technical training and mentorship
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat, i) => {
            const Icon = icons[i] || Cpu;
            return (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0E1422]/90 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/50 hover:bg-[#121A2C]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-10 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-500/10 text-sky-400 group-hover:scale-110 transition-transform">
                    <Icon className="size-5" />
                  </div>
                  <span className="font-mono text-[11px] font-bold text-slate-500">0{i + 1}</span>
                </div>

                <div className="mt-5">
                  <p className="font-mono text-2xl font-black tracking-tight text-white group-hover:text-sky-300 transition-colors sm:text-3xl">
                    {stat.value}
                  </p>
                  <h3 className="mt-2 font-mono text-xs font-bold uppercase tracking-wider text-sky-400">
                    {stat.label}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                    {stat.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
