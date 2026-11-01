import Image from "next/image";
import { Presentation, Users, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { teachingAndSpeaking } from "@/data/site";
import { Section } from "./Section";

export function TeachingTraining() {
  return (
    <Section
      id="speaking"
      badge="KNOWLEDGE SHARING &amp; MENTORSHIP"
      title={teachingAndSpeaking.sectionTitle}
      description={teachingAndSpeaking.subtitle}
    >
      <div className="grid items-center gap-10 lg:grid-cols-12">
        {/* Left Column: Photograph of Vignesh Presenting */}
        <div className="lg:col-span-5">
          <div className="group relative overflow-hidden rounded-2xl border border-sky-400/30 bg-[#0E1422] p-2 shadow-2xl transition-all duration-300 hover:border-sky-400/60">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-slate-800 bg-[#070A11]">
              <Image
                src={teachingAndSpeaking.image}
                alt="Vignesh Sugunathan delivering an interactive technical presentation at a podium in front of a coding display"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070A11] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-slate-900/90 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-sky-300 backdrop-blur-md">
                  <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  Technical Presentation &amp; Workshop Session
                </div>
                <p className="mt-1 font-mono text-xs font-semibold text-white">
                  Vignesh Sugunathan · Speaker &amp; Instructor
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative, Stats & Core Pillars */}
        <div className="space-y-6 lg:col-span-7">
          <div className="rounded-2xl border border-slate-800 bg-[#0E1422]/90 p-6 sm:p-8 shadow-xl">
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              {teachingAndSpeaking.summary}
            </p>

            {/* Quick Metrics */}
            <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4 border-y border-slate-800/80 py-4">
              {teachingAndSpeaking.stats.map((s) => (
                <div key={s.label} className="min-w-0">
                  <p className="font-mono text-xl sm:text-2xl font-black text-sky-400 whitespace-nowrap overflow-hidden text-ellipsis">
                    {s.value}
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-slate-400 line-clamp-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Core Teaching Pillars */}
            <div className="mt-6 space-y-4">
              {teachingAndSpeaking.pillars.map((pillar) => (
                <div key={pillar.title} className="flex items-start gap-3">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-lg border border-sky-400/30 bg-sky-500/10 text-sky-400 mt-0.5">
                    <CheckCircle2 className="size-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-tight">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed mt-0.5">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <span className="font-mono text-xs text-slate-400">
                Interested in hosting a technical workshop or robotics boot-camp?
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 rounded-lg bg-sky-400 px-4 py-2 font-mono text-xs font-bold text-slate-950 hover:bg-sky-300 transition-all shadow-[0_0_15px_rgba(56,189,248,0.25)]"
              >
                <span>Request a Workshop</span>
                <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
