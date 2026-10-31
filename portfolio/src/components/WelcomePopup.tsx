"use client";

import { useState, useEffect } from "react";
import { X, Sparkles, FileText, ArrowRight } from "lucide-react";
import Image from "next/image";
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
      }, 1000);
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
      <div className="relative overflow-hidden rounded-2xl border border-[#B6E778]/40 bg-[#1B211D] p-5 text-[#F1F4EF] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(182,231,120,0.15)] backdrop-blur-xl">
        {/* Ambient Top Glow Line */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#B6E778] to-transparent" />

        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="relative size-11 shrink-0 overflow-hidden rounded-full border border-[#B6E778]/40 bg-neutral-900">
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
                <span className="size-2 rounded-full bg-[#B6E778] shadow-[0_0_8px_#B6E778]" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#B6E778]">
                  VIGSUGU LAB · LIVE
                </span>
              </div>
              <h3 className="text-sm font-bold text-white">Hi there, Welcome! 👋</h3>
            </div>
          </div>

          <button
            type="button"
            onClick={dismiss}
            aria-label="Close welcome message"
            className="rounded-lg p-1 text-[#9EAA9A] hover:bg-white/5 hover:text-white transition-colors cursor-pointer"
          >
            <X className="size-4" />
          </button>
        </div>

        <p className="mt-3 text-xs leading-relaxed text-[#9EAA9A]">
          I&apos;m <strong className="text-white">Vignesh Sugunathan</strong>, Embedded Systems &amp; Firmware Engineer. Explore my real hardware prototypes, STM32 OLED drivers, and 100% ATS-ready resume!
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2 pt-2 border-t border-[#B6E778]/15">
          <a
            href="#projects"
            onClick={dismiss}
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#B6E778] px-3 py-1.5 font-mono text-xs font-bold text-[#101310] hover:bg-[#cbf58f] transition-all cursor-pointer shadow-[0_0_12px_rgba(182,231,120,0.2)]"
          >
            Explore Projects
            <ArrowRight className="size-3" />
          </a>

          {onOpenResume ? (
            <button
              type="button"
              onClick={() => {
                dismiss();
                onOpenResume();
              }}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#B6E778]/25 bg-[#101310] px-3 py-1.5 font-mono text-xs text-[#F1F4EF] hover:border-[#B6E778] transition-colors cursor-pointer"
            >
              <FileText className="size-3 text-[#B6E778]" />
              View ATS Resume
            </button>
          ) : (
            <a
              href="/resume"
              onClick={dismiss}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#B6E778]/25 bg-[#101310] px-3 py-1.5 font-mono text-xs text-[#F1F4EF] hover:border-[#B6E778] transition-colors"
            >
              <FileText className="size-3 text-[#B6E778]" />
              View ATS Resume
            </a>
          )}
        </div>
      </div>
    </aside>
  );
}
