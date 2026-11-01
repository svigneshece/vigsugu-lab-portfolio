"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, BookOpen, Trophy, Award, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";
import { researchPublications, awardHighlight } from "@/data/site";
import { Section } from "./Section";

export function Research() {
  const trophyCardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!trophyCardRef.current) return;
    const rect = trophyCardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({ x: -y / 20, y: x / 20 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <Section
      id="research"
      badge="SCHOLARLY DISSEMINATION"
      title="Research &amp; Publications"
      description="Peer-reviewed international conference presentations and research indexed in IEEE Xplore digital library."
    >
      {/* 1. Best Research Paper Award Showcase Card with 3D View */}
      <div className="mb-12">
        <div
          ref={trophyCardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
            transition: "transform 0.15s ease-out",
          }}
          className="group relative overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-br from-[#0E1422] via-[#0E1422] to-[#161206] p-6 shadow-2xl transition-all duration-300 hover:border-amber-400/60 hover:shadow-[0_0_35px_rgba(245,158,11,0.15)]"
        >
          {/* Subtle Ambient Gold Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-amber-500/10 blur-3xl" />

          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            {/* Small 3D View Trophy Photograph */}
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[240px] overflow-hidden rounded-xl border border-amber-500/30 bg-[#070A11] shadow-2xl lg:col-span-4">
              <Image
                src={awardHighlight.image}
                alt="ICRIDET - 2024 Best Research Paper Trophy Awarded to Vignesh Sugunathan"
                fill
                className="object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 240px, 280px"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#070A11] via-transparent to-transparent p-2 text-center">
                <span className="font-mono text-[10px] font-bold text-amber-400">
                  ICRIDET · 2024
                </span>
              </div>
            </div>

            {/* Award Content */}
            <div className="space-y-4 lg:col-span-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 font-mono text-xs font-bold text-amber-400">
                  <Trophy className="size-3.5" />
                  {awardHighlight.title}
                </span>
                <span className="rounded-md border border-[#1E293B] bg-[#070A11] px-2.5 py-1 font-mono text-[11px] text-[#94A3B8]">
                  IEEE &amp; BIHER Association
                </span>
                <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] font-semibold text-emerald-400">
                  Verified Trophy Credential
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  {awardHighlight.conference} — Best Research Paper
                </h3>
                <p className="mt-1 font-mono text-xs font-semibold text-amber-400/90">
                  {awardHighlight.organizedBy}
                </p>
                <p className="mt-0.5 font-mono text-[11px] text-[#64748B]">
                  Date: {awardHighlight.date}
                </p>
              </div>

              <p className="text-xs leading-relaxed text-[#CBD5E1] sm:text-sm">
                {awardHighlight.description}
              </p>

              <div className="pt-1">
                <a
                  href="#icridet-2024"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-amber-400 hover:text-white transition-colors"
                >
                  View Award-Winning Publication Below ↓
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Actual IEEE Publications Grid */}
      <div className="space-y-6">
        {researchPublications.map((pub, idx) => (
          <article
            key={pub.id}
            id={pub.id}
            className="group rounded-2xl border border-[#38BDF8]/20 bg-[#0E1422] p-6 sm:p-8 shadow-xl transition-all duration-300 hover:border-[#38BDF8]/50 hover:bg-[#121929]"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1E293B] pb-4">
              <div className="flex items-center gap-2">
                <span className="flex size-8 items-center justify-center rounded-lg border border-[#38BDF8]/30 bg-[#070A11] text-[#38BDF8]">
                  <BookOpen className="size-4" />
                </span>
                <span className="font-mono text-xs font-bold text-[#38BDF8]">
                  IEEE PUBLICATION 0{idx + 1}
                </span>
              </div>

              {pub.award && (
                <span className="inline-flex items-center gap-1 rounded-md border border-amber-500/40 bg-amber-500/10 px-2.5 py-0.5 font-mono text-[11px] font-bold text-amber-400">
                  <Award className="size-3" />
                  {pub.award}
                </span>
              )}
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-bold leading-snug tracking-tight text-white group-hover:text-[#38BDF8] transition-colors sm:text-xl">
                {pub.title}
              </h3>
              <p className="mt-1 font-mono text-xs font-semibold text-[#38BDF8]">
                {pub.authors}
              </p>
              <p className="mt-1 text-xs text-[#94A3B8]">
                {pub.conference} · {pub.year}
              </p>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-[#CBD5E1] sm:text-sm">
              {pub.summary}
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-[#1E293B] pt-4">
              <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
                <ShieldCheck className="size-4" />
                <span>Peer-Reviewed Manuscript · Canonical IEEE Record</span>
              </div>

              <a
                href={pub.ieeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#38BDF8]/40 bg-[#070A11] px-4 py-2 font-mono text-xs font-bold text-[#38BDF8] hover:border-[#38BDF8] hover:bg-[#38BDF8]/10 transition-all cursor-pointer shadow-sm"
              >
                Access on IEEE Xplore
                <ExternalLink className="size-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
