import Image from "next/image";
import { Target, Terminal, Award, Users, BookOpen, Radio } from "lucide-react";
import { about, impactStats } from "@/data/site";
import { Section } from "./Section";

export function About() {
  return (
    <Section
      id="about"
      badge="BACKGROUND & PHILOSOPHY"
      title="About Me"
      description="Electronics engineer, hands-on firmware builder, and robotics mentor."
    >
      <div className="grid items-start gap-10 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5 text-base leading-relaxed text-[#F1F4EF] sm:text-lg">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}

          <div className="flex gap-4 rounded-xl border border-[#B6E778]/25 bg-[#1B211D] p-5 text-base transition-colors hover:border-[#B6E778]/50">
            <Target className="mt-0.5 size-5 shrink-0 text-[#B6E778]" aria-hidden="true" />
            <div>
              <h3 className="font-bold text-white">Career Goal</h3>
              <p className="mt-1 font-mono text-xs sm:text-sm text-[#9EAA9A]">{about.goal}</p>
            </div>
          </div>
        </div>

        {/* Visual Evidence Showcase: Real Hardware & Workshop Photos */}
        <div className="grid grid-cols-5 gap-3">
          <figure className="relative col-span-3 min-h-[270px] overflow-hidden rounded-xl border border-[#B6E778]/25 bg-[#1B211D] sm:min-h-[320px]">
            <Image
              src="/profile/vignesh-presenting.jpg"
              alt="Vignesh Sugunathan conducting technical robotics and firmware mentoring"
              fill
              sizes="(max-width: 768px) 60vw, 340px"
              className="object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101310]/95 via-[#101310]/20 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#B6E778]/30 bg-[#101310]/85 px-2 py-0.5 font-mono text-[10px] text-[#B6E778] backdrop-blur-md">
                <Terminal className="size-3" />
                Live Engineering Session
              </span>
              <p className="mt-1 text-xs font-semibold text-white">
                Practical embedded systems &amp; firmware bring-up
              </p>
            </figcaption>
          </figure>

          <figure className="relative col-span-2 mt-6 min-h-[220px] overflow-hidden rounded-xl border border-[#B6E778]/25 bg-[#1B211D] sm:mt-10 sm:min-h-[270px]">
            <Image
              src="/projects/lora-hardware.jpg"
              alt="Real LoRa SX1278 hardware modules and ESP32 breadboard on workbench"
              fill
              sizes="(max-width: 768px) 40vw, 240px"
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101310]/95 via-[#101310]/20 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-3">
              <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase text-[#B6E778]">
                <Radio className="size-2.5" />
                Hardware Lab
              </span>
              <p className="text-[11px] font-semibold text-white">LoRa SX1278 Bench</p>
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Impact Stats in Army Green / Lime Style */}
      <div className="mt-12 grid gap-3 sm:grid-cols-3">
        {impactStats.map((stat, idx) => {
          const Icons = [Award, Users, BookOpen];
          const Icon = Icons[idx] || Award;
          return (
            <div
              key={stat.value}
              className="group rounded-xl border border-[#B6E778]/20 bg-[#1B211D] p-6 transition-all duration-300 hover:border-[#B6E778]/40 hover:bg-[#232B25]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-3xl font-bold tracking-tight text-[#F1F4EF] group-hover:text-[#B6E778] transition-colors sm:text-4xl">
                  {stat.value}
                </span>
                <Icon className="size-5 text-[#9EAA9A] group-hover:text-[#B6E778] transition-colors" />
              </div>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-[#9EAA9A]">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>

      {/* Technical Facts Grid */}
      <dl className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
        {about.facts.map((f) => (
          <div
            key={f.label}
            className="rounded-lg border border-[#B6E778]/15 bg-[#1B211D] p-4 transition-colors hover:border-[#B6E778]/40"
          >
            <dt className="font-mono text-[10px] uppercase tracking-widest text-[#B6E778]">
              {f.label}
            </dt>
            <dd className="mt-1 text-sm font-semibold text-[#F1F4EF]">{f.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
