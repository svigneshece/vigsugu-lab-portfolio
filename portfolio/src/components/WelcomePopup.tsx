"use client";

import { useState, useEffect } from "react";
import { X, FileText, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

type Props = {
  onOpenResume?: () => void;
};

export function WelcomePopup({ onOpenResume }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if dismissed previously in this session
    const dismissed = sessionStorage.getItem("vigsugu_welcome_dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem("vigsugu_welcome_dismissed", "true");
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Welcome greeting"
      className="fixed bottom-5 right-5 z-50 max-w-sm sm:max-w-md animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-[#0E1422]/95 p-5 text-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_30px_rgba(56,189,248,0.15)] backdrop-blur-xl">
        {/* Ambient Top Glow Line */}
        <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="relative size-11 shrink-0 overflow-hidden rounded-full border border-sky-400/40 bg-slate-900 shadow-inner">
              <Image
                src={site.profileImage}
                alt={site.name}
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F0FF]" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                  {site.brand} · LIVE
                </span>
              </div>
              <h3 className="text-sm font-bold text-white tracking-tight">Welcome to VIGSUGU LAB 👋</h3>
            </div>
          </div>

          <button
            type="button"
            onClick={dismiss}
            aria-label="Close welcome message"
            className="rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
          >
            <X className="size-4" />
          </button>
        </div>

        <p className="mt-3 text-xs leading-relaxed text-slate-300">
          I&apos;m <strong className="text-white">Vignesh Sugunathan</strong>, Embedded Systems &amp; Firmware Engineer. Explore my genuine hardware prototypes, STM32 bring-up bench, and ATS-optimized resume.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800">
          <a
            href="#projects"
            onClick={dismiss}
            className="inline-flex items-center gap-1.5 rounded-lg bg-sky-400 px-3.5 py-1.5 font-mono text-xs font-bold text-slate-950 hover:bg-sky-300 transition-all cursor-pointer shadow-[0_0_12px_rgba(56,189,248,0.25)]"
          >
            <span>Explore Projects</span>
            <ArrowRight className="size-3" />
          </a>

          {onOpenResume ? (
            <button
              type="button"
              onClick={() => {
                dismiss();
                onOpenResume();
              }}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-[#070A11] px-3 py-1.5 font-mono text-xs text-slate-200 hover:border-sky-400 hover:text-sky-300 transition-colors cursor-pointer"
            >
              <FileText className="size-3 text-sky-400" />
              <span>ATS Resume</span>
            </button>
          ) : (
            <Link
              href="/resume"
              onClick={dismiss}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-[#070A11] px-3 py-1.5 font-mono text-xs text-slate-200 hover:border-sky-400 hover:text-sky-300 transition-colors"
            >
              <FileText className="size-3 text-sky-400" />
              <span>ATS Resume</span>
            </Link>
          )}
        </div>
      </div>
    </aside>
  );
}
