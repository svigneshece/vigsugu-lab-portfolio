"use client";

import { useState, useEffect } from "react";
import { X, FileText, ArrowRight, Sparkles, Send, MapPin, Award, Cpu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

type Props = {
  onOpenResume?: () => void;
};

export function WelcomePopup({ onOpenResume }: Props) {
  const [visible, setVisible] = useState(false);
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    // Check if dismissed previously in this session
    const dismissed = sessionStorage.getItem("vigsugu_welcome_dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // If previously dismissed, still offer the minimized floating button
      setMinimized(true);
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    setMinimized(true);
    sessionStorage.setItem("vigsugu_welcome_dismissed", "true");
  };

  const reopen = () => {
    setMinimized(false);
    setVisible(true);
  };

  // If dismissed and not open, render the sleek floating quick-launcher
  if (!visible && minimized) {
    return (
      <aside aria-label="Open welcome message" className="fixed bottom-5 right-5 z-40">
        <button
          type="button"
          onClick={reopen}
          className="group inline-flex items-center gap-2.5 rounded-full border border-cyan-400/40 bg-[#0E1422]/95 px-4 py-2 font-mono text-xs font-bold text-cyan-300 shadow-[0_10px_35px_rgba(0,0,0,0.85),0_0_20px_rgba(6,182,212,0.25)] backdrop-blur-xl hover:border-cyan-400 hover:bg-[#121A2C] hover:scale-105 transition-all cursor-pointer"
        >
          <div className="relative size-6 overflow-hidden rounded-full border border-cyan-400/70 shadow-sm">
            <Image
              src={site.profileImage}
              alt={site.name}
              fill
              sizes="24px"
              className="object-cover"
            />
          </div>
          <span className="flex items-center gap-1.5">
            <span className="text-sm">👋</span>
            <span className="text-white group-hover:text-cyan-300 transition-colors">
              Welcome from Vignesh
            </span>
          </span>
          <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
        </button>
      </aside>
    );
  }

  if (!visible) return null;

  return (
    <aside
      aria-label="Personal welcome from Vignesh"
      className="fixed bottom-5 right-5 z-50 max-w-sm sm:max-w-md animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-[#0A0E18]/98 p-5 text-slate-100 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_35px_rgba(6,182,212,0.2)] backdrop-blur-2xl ring-1 ring-cyan-400/20">
        {/* Dynamic Cyan/Sky Ambient Glow Line */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-sky-400 animate-pulse" />

        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* Vignesh Profile Portrait with Animated Radar Status */}
            <div className="relative size-12 shrink-0">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 opacity-75 blur-xs animate-pulse" />
              <div className="relative size-12 overflow-hidden rounded-full border-2 border-cyan-400 bg-slate-950 shadow-inner">
                <Image
                  src={site.profileImage}
                  alt={site.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-[#0A0E18] bg-emerald-400 shadow-[0_0_8px_#34D399]" />
            </div>

            <div>
              <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                <Sparkles className="size-3 text-cyan-400" />
                <span>PERSONAL GREETING</span>
              </div>
              <h3 className="text-base font-black text-white tracking-tight flex items-center gap-1.5 mt-0.5">
                <span>Hello, I&apos;m Vignesh!</span>
                <span className="text-base">👋</span>
              </h3>
              <p className="font-mono text-[11px] font-semibold text-sky-400">
                Embedded Systems &amp; Firmware Engineer
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={dismiss}
            aria-label="Minimize welcome greeting"
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Unique Welcome Message */}
        <div className="mt-3.5 space-y-2">
          <p className="text-xs leading-relaxed text-slate-200">
            Welcome to my engineering laboratory! Here you&apos;ll discover my hands-on <strong className="text-white">STM32 firmware bring-ups</strong>, custom <strong className="text-white">2-layer PCB routing</strong>, real <strong className="text-white">oscilloscope waveforms</strong>, and technical workshops impacting over <strong className="text-cyan-300">10,000+ students</strong>.
          </p>

          {/* Quick Engineering Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-[10px]">
            <span className="inline-flex items-center gap-1 rounded-md border border-cyan-400/30 bg-cyan-500/10 px-2 py-0.5 text-cyan-300">
              <MapPin className="size-2.5" />
              Chennai, IN
            </span>
            <span className="inline-flex items-center gap-1 rounded-md border border-sky-400/30 bg-sky-500/10 px-2 py-0.5 text-sky-300">
              <Award className="size-2.5" />
              Best Paper Award
            </span>
            <span className="inline-flex items-center gap-1 rounded-md border border-emerald-400/30 bg-emerald-500/10 px-2 py-0.5 text-emerald-300">
              <Cpu className="size-2.5" />
              ARM · STM32 · ESP32
            </span>
          </div>
        </div>

        {/* Interactive Action Triggers */}
        <div className="mt-4 flex flex-wrap items-center gap-2 pt-3 border-t border-slate-800/80">
          <a
            href="#projects"
            onClick={dismiss}
            className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-cyan-400 to-sky-400 px-3.5 py-1.5 font-mono text-xs font-bold text-slate-950 hover:from-cyan-300 hover:to-sky-300 transition-all cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.3)]"
          >
            <span>Explore Projects</span>
            <ArrowRight className="size-3" />
          </a>

          <a
            href="#contact"
            onClick={dismiss}
            className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-400/50 bg-cyan-500/10 px-3 py-1.5 font-mono text-xs font-bold text-cyan-300 hover:bg-cyan-500/25 transition-all cursor-pointer"
          >
            <Send className="size-3" />
            <span>Say Hello</span>
          </a>

          {onOpenResume ? (
            <button
              type="button"
              onClick={() => {
                dismiss();
                onOpenResume();
              }}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-[#070A11] px-2.5 py-1.5 font-mono text-xs text-slate-300 hover:border-sky-400 hover:text-sky-300 transition-colors cursor-pointer"
            >
              <FileText className="size-3 text-sky-400" />
              <span>Resume</span>
            </button>
          ) : (
            <Link
              href="/resume"
              onClick={dismiss}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-[#070A11] px-2.5 py-1.5 font-mono text-xs text-slate-300 hover:border-sky-400 hover:text-sky-300 transition-colors"
            >
              <FileText className="size-3 text-sky-400" />
              <span>Resume</span>
            </Link>
          )}
        </div>
      </div>
    </aside>
  );
}
