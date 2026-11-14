import { Cpu, Users, School, Layers, Sparkles } from "lucide-react";
import { impactStats } from "@/data/site";

const cardThemes = [
  {
    icon: Cpu,
    tag: "CIRCUITS & CODE",
    numberGradient: "from-cyan-300 via-sky-400 to-blue-400",
    glowColor: "via-cyan-400",
    borderHover: "hover:border-cyan-400/70 hover:shadow-[0_8px_30px_rgba(6,182,212,0.22)]",
    iconBox: "border-cyan-400/30 bg-cyan-500/10 text-cyan-400",
    beacon: "bg-cyan-400",
  },
  {
    icon: Users,
    tag: "STUDENTS REACHED",
    numberGradient: "from-emerald-300 via-teal-300 to-cyan-400",
    glowColor: "via-emerald-400",
    borderHover: "hover:border-emerald-400/70 hover:shadow-[0_8px_30px_rgba(16,185,129,0.22)]",
    iconBox: "border-emerald-400/30 bg-emerald-500/10 text-emerald-400",
    beacon: "bg-emerald-400",
  },
  {
    icon: School,
    tag: "HANDS-ON LABS",
    numberGradient: "from-amber-300 via-orange-400 to-amber-500",
    glowColor: "via-amber-400",
    borderHover: "hover:border-amber-400/70 hover:shadow-[0_8px_30px_rgba(245,158,11,0.22)]",
    iconBox: "border-amber-400/30 bg-amber-500/10 text-amber-400",
    beacon: "bg-amber-400",
  },
  {
    icon: Layers,
    tag: "SYSTEM INTERLOCK",
    numberGradient: "from-violet-300 via-purple-300 to-indigo-400",
    glowColor: "via-purple-400",
    borderHover: "hover:border-purple-400/70 hover:shadow-[0_8px_30px_rgba(168,85,247,0.22)]",
    iconBox: "border-purple-400/30 bg-purple-500/10 text-purple-400",
    beacon: "bg-purple-400",
  },
];

export function ProfessionalImpact() {
  return (
    <section className="relative border-y border-slate-800/80 bg-[#0A0F1D]/80 py-10 sm:py-12 backdrop-blur-md">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(56,189,248,0.1),rgba(255,255,255,0))] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-6 sm:mb-7 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-500/10 px-3.5 py-1 font-mono text-[11px] font-semibold text-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
            <Sparkles className="size-3.5 text-cyan-400" />
            <span>MEASURABLE PROFESSIONAL REACH</span>
          </div>
          <h2 className="mt-2.5 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Engineering Depth &amp; Educational Impact
          </h2>
          <p className="mt-1 font-mono text-xs text-slate-400">
            Bridging bench electronics with real-world technical training and mentorship
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat, i) => {
            const theme = cardThemes[i] || cardThemes[0];
            const Icon = theme.icon;

            return (
              <div
                key={stat.label}
                className={`group relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0E1422] p-5 transition-all duration-300 hover:-translate-y-1.5 ${theme.borderHover}`}
              >
                {/* Dynamic Top Edge Accent Glow */}
                <div
                  className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent ${theme.glowColor} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10`}
                />

                <div className="flex items-center justify-between">
                  <div
                    className={`flex size-10 items-center justify-center rounded-xl border ${theme.iconBox} shadow-sm group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="size-5" />
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold text-slate-400">
                    <span className={`size-1.5 rounded-full ${theme.beacon} animate-pulse`} />
                    <span>0{i + 1}</span>
                  </div>
                </div>

                <div className="mt-4">
                  {/* High-impact unique font metric number with vivid gradient */}
                  <p
                    className={`font-mono font-black tracking-tighter text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r ${theme.numberGradient} drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]`}
                  >
                    {stat.value}
                  </p>

                  <div className="mt-2 flex items-center justify-between">
                    <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-200 group-hover:text-sky-300 transition-colors">
                      {stat.label}
                    </h3>
                  </div>

                  <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                    {stat.subtext}
                  </p>

                  <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between font-mono text-[9px] uppercase tracking-wider text-slate-500">
                    <span>{theme.tag}</span>
                    <span className="text-slate-600">VERIFIED</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
