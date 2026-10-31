"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { X, Maximize2, Radio, Terminal, Sparkles, Cpu } from "lucide-react";
import { site } from "@/data/site";

export function Profile3D() {
  const [mode, setMode] = useState<"portrait" | "session">("portrait");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => {
      document.body.style.overflow = "";
    };
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  const currentImage = mode === "portrait" ? site.profileImage : site.presentationImage;

  return (
    <div className="relative w-full">
      {/* Ambient Phosphor Green Radial Glow */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#B6E778]/15 via-[#B6E778]/5 to-transparent blur-3xl pointer-events-none" />

      {/* Mode Switcher Tabs */}
      <div className="relative z-10 mb-3 flex items-center justify-between gap-2">
        <div className="inline-flex rounded-lg border border-[#B6E778]/20 bg-[#1B211D] p-1">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setMode("portrait");
            }}
            className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 font-mono text-xs font-medium transition-all cursor-pointer ${
              mode === "portrait"
                ? "bg-[#B6E778] text-[#101310] font-bold shadow-[0_0_12px_rgba(182,231,120,0.3)]"
                : "text-[#9EAA9A] hover:text-[#F1F4EF]"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B6E778] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#B6E778]" />
            </span>
            Professional Portrait
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setMode("session");
            }}
            className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 font-mono text-xs font-medium transition-all cursor-pointer ${
              mode === "session"
                ? "bg-[#B6E778] text-[#101310] font-bold shadow-[0_0_12px_rgba(182,231,120,0.3)]"
                : "text-[#9EAA9A] hover:text-[#F1F4EF]"
            }`}
          >
            Mentoring &amp; Workshop
          </button>
        </div>

        <span className="hidden font-mono text-[11px] text-[#B6E778] sm:inline-flex items-center gap-1.5">
          <Cpu className="size-3" />
          Embedded Engineer
        </span>
      </div>

      {/* Main Interactive 3D Card */}
      <button
        type="button"
        onClick={() => {
          document.body.style.overflow = "hidden";
          open();
        }}
        aria-label="Open expanded image showcase"
        className="profile-3d group relative block w-full rounded-2xl text-left focus-visible:outline-none cursor-pointer"
      >
        <div className="profile-3d-card relative overflow-hidden rounded-2xl border border-[#B6E778]/25 bg-[#1B211D] p-2 shadow-2xl transition-all duration-300 hover:border-[#B6E778]/50">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#101310]">
            <Image
              src={currentImage}
              alt={
                mode === "portrait"
                  ? "Professional portrait of Vignesh Sugunathan"
                  : "Vignesh Sugunathan conducting technical robotics and firmware mentoring"
              }
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 440px"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            />

            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#101310]/95 via-[#101310]/30 to-transparent" />

            {/* Top Badge */}
            <div className="absolute left-3 top-3 right-3 flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#B6E778]/30 bg-[#101310]/85 px-2.5 py-1 font-mono text-[10px] text-[#F1F4EF] backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-[#B6E778] shadow-[0_0_8px_#B6E778]" />
                {mode === "portrait" ? "INDUSTRY READY" : "NXTWAVE MENTOR"}
              </span>

              <span className="inline-flex items-center gap-1 rounded-full border border-[#B6E778]/30 bg-[#101310]/85 px-2.5 py-1 font-mono text-[10px] text-[#B6E778] backdrop-blur-md">
                <Maximize2 className="size-3" />
                Inspect
              </span>
            </div>

            {/* Bottom Content Overlay */}
            <div className="absolute bottom-4 left-4 right-4 text-[#F1F4EF]">
              {mode === "portrait" ? (
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-[#B6E778]">
                    VIGSUGU LAB · CHENNAI
                  </p>
                  <h2 className="mt-1 text-base font-bold tracking-tight text-white sm:text-lg">
                    Vignesh Sugunathan
                  </h2>
                  <p className="font-mono text-xs text-[#9EAA9A]">
                    Embedded Systems · Firmware Engineering · Hardware Bring-Up
                  </p>
                </div>
              ) : (
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded border border-[#B6E778]/30 bg-[#101310]/80 px-2 py-0.5 font-mono text-[10px] text-[#B6E778] backdrop-blur-md">
                    <Terminal className="size-3" />
                    Practical Hardware &amp; Firmware Mentoring
                  </div>
                  <h2 className="mt-2 text-base font-bold tracking-tight text-white sm:text-lg">
                    Live Workshop Instruction
                  </h2>
                  <p className="mt-0.5 font-mono text-xs text-[#9EAA9A]">
                    Interactive code debugging, peripheral bringing-up, and robotics logic
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Floating Mini Tech Pill */}
        <div className="absolute -bottom-3 -right-3 hidden rounded-lg border border-[#B6E778]/25 bg-[#101310]/95 px-3 py-2 shadow-2xl backdrop-blur-md sm:flex items-center gap-2">
          <Cpu className="size-4 text-[#B6E778]" />
          <div>
            <p className="font-mono text-[9px] uppercase tracking-wider text-[#9EAA9A]">
              HARDWARE FOCUS
            </p>
            <p className="font-mono text-xs font-bold text-white">
              STM32 · PIC · LoRa · ROS 2
            </p>
          </div>
        </div>
      </button>

      {/* Expanded Modal */}
      <dialog
        ref={dialogRef}
        onClick={(e) => e.target === dialogRef.current && close()}
        className="profile-dialog m-auto max-h-[94vh] w-[min(94vw,50rem)] overflow-visible rounded-2xl border border-[#B6E778]/30 bg-[#101310] p-3 text-[#F1F4EF] backdrop:bg-black/85 backdrop:backdrop-blur-md"
      >
        <div className="relative">
          <button
            type="button"
            onClick={close}
            aria-label="Close modal"
            className="absolute -right-2 -top-2 z-20 rounded-full border border-[#B6E778]/30 bg-[#1B211D] p-2 text-[#9EAA9A] shadow-xl hover:text-white cursor-pointer"
          >
            <X className="size-5" />
          </button>

          <div className="relative aspect-[4/3] max-h-[75vh] w-full overflow-hidden rounded-xl bg-[#101310] sm:aspect-[16/10]">
            <Image
              src={currentImage}
              alt="Vignesh Sugunathan"
              fill
              sizes="(max-width: 768px) 95vw, 800px"
              className="object-contain"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#101310] via-[#101310]/85 to-transparent p-6 pt-16">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="font-mono text-xs text-[#B6E778]">
                    {mode === "portrait"
                      ? "EMBEDDED SYSTEMS & HARDWARE-FIRMWARE INTEGRATION"
                      : "ROBOTICS & STEM WORKSHOP MENTORSHIP"}
                  </p>
                  <h2 className="mt-1 text-2xl font-bold tracking-tight text-white">
                    Vignesh Sugunathan
                  </h2>
                </div>
                <div className="inline-flex gap-2">
                  <button
                    type="button"
                    onClick={() => setMode(mode === "portrait" ? "session" : "portrait")}
                    className="rounded-md border border-[#B6E778]/30 bg-[#1B211D] px-3 py-1.5 font-mono text-xs text-[#F1F4EF] hover:border-[#B6E778] cursor-pointer"
                  >
                    Switch to {mode === "portrait" ? "Workshop Session" : "Portrait"}
                  </button>
                </div>
              </div>
              <p className="mt-2 font-mono text-xs leading-relaxed text-[#9EAA9A]">
                Electronics &amp; Communication Engineering graduate (2026, CGPA 8.2) specializing in STM32F103 (ARM Cortex-M3), PIC16F877A, ESP32, and LoRa SX1278 mesh networks with verified IEEE research publications.
              </p>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
