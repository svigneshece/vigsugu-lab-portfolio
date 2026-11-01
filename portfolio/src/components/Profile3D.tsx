"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { X, Maximize2, Cpu, Sparkles, Compass } from "lucide-react";
import { site } from "@/data/site";

export function Profile3D() {
  const [mode, setMode] = useState<"portrait" | "session">("portrait");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Restrained, subtle 3D tilt (max 6 degrees) - no distortion
    setRotate({
      x: -y / 35,
      y: x / 35,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const currentImage = mode === "portrait" ? site.profileImage : site.presentationImage;

  return (
    <div className="relative w-full">
      {/* Ambient Electric Blue Radial Glow */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#38BDF8]/12 via-[#00F0FF]/6 to-transparent blur-3xl pointer-events-none" />

      {/* Mode Switcher Tabs */}
      <div className="relative z-10 mb-3 flex items-center justify-between gap-2">
        <div className="inline-flex rounded-lg border border-[#38BDF8]/20 bg-[#0E1422] p-1 shadow-sm">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setMode("portrait");
            }}
            className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 font-mono text-xs font-medium transition-all cursor-pointer ${
              mode === "portrait"
                ? "bg-[#38BDF8] text-[#070A11] font-bold shadow-[0_0_12px_rgba(56,189,248,0.3)]"
                : "text-[#94A3B8] hover:text-[#F8FAFC]"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#38BDF8] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#38BDF8]" />
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
                ? "bg-[#38BDF8] text-[#070A11] font-bold shadow-[0_0_12px_rgba(56,189,248,0.3)]"
                : "text-[#94A3B8] hover:text-[#F8FAFC]"
            }`}
          >
            Technical Presentation
          </button>
        </div>

        <span className="hidden font-mono text-[11px] text-[#38BDF8] sm:inline-flex items-center gap-1.5">
          <Cpu className="size-3" />
          Hardware &amp; Firmware
        </span>
      </div>

      {/* Main Interactive 3D Card with Subtle Hover Physics */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: "transform 0.15s ease-out",
        }}
        className="group relative block w-full rounded-2xl text-left"
      >
        <div className="relative overflow-hidden rounded-2xl border border-[#38BDF8]/25 bg-[#0E1422] p-2.5 shadow-2xl transition-all duration-300 hover:border-[#38BDF8]/60 hover:shadow-[0_0_30px_rgba(56,189,248,0.12)]">
          {/* Engineering Viewfinder Reticles on Corners */}
          <div className="pointer-events-none absolute left-3 top-3 z-20 font-mono text-[10px] text-[#38BDF8]/80">
            ┌ VIGSUGU:R&amp;D
          </div>
          <div className="pointer-events-none absolute right-3 top-3 z-20 font-mono text-[10px] text-[#38BDF8]/80">
            [SYS_OK] ┐
          </div>
          <div className="pointer-events-none absolute bottom-3 left-3 z-20 font-mono text-[10px] text-[#38BDF8]/80">
            └ SILICON:ENG
          </div>
          <div className="pointer-events-none absolute bottom-3 right-3 z-20 font-mono text-[10px] text-[#38BDF8]/80">
            CH_01 ┘
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#070A11]">
            <Image
              src={currentImage}
              alt={
                mode === "portrait"
                  ? "Professional portrait of Vignesh Sugunathan"
                  : "Vignesh Sugunathan presenting technical research"
              }
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
              priority
            />

            {/* Subtle Gradient Vignette at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#070A11] via-[#070A11]/60 to-transparent" />

            {/* Click to inspect overlay trigger */}
            <button
              type="button"
              onClick={() => {
                document.body.style.overflow = "hidden";
                open();
              }}
              className="absolute right-3 top-3 z-30 inline-flex items-center gap-1 rounded-md border border-[#38BDF8]/30 bg-[#070A11]/85 px-2.5 py-1 font-mono text-[10px] text-[#F8FAFC] backdrop-blur-md opacity-0 transition-opacity group-hover:opacity-100 hover:border-[#38BDF8] hover:text-[#38BDF8] cursor-pointer"
            >
              <Maximize2 className="size-3" />
              Inspect
            </button>

            {/* Bottom Card Identity Strip */}
            <div className="absolute inset-x-3 bottom-3 z-20 flex items-center justify-between rounded-lg border border-[#38BDF8]/20 bg-[#0E1422]/90 p-2.5 backdrop-blur-md">
              <div>
                <p className="font-mono text-xs font-bold text-white">
                  {mode === "portrait" ? "Vignesh Sugunathan" : "Technical Session Presentation"}
                </p>
                <p className="font-mono text-[10px] text-[#38BDF8]">
                  {mode === "portrait" ? "Embedded Systems & Firmware Engineer" : "Agni College / NxtWave Robotics"}
                </p>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#94A3B8]">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                <span>Chennai, IN</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Modal Dialog */}
      <dialog
        ref={dialogRef}
        className="fixed inset-0 z-50 m-auto max-h-[90vh] w-[95vw] max-w-2xl rounded-2xl border border-[#38BDF8]/30 bg-[#0E1422] p-0 text-[#F8FAFC] shadow-2xl backdrop:bg-black/80 backdrop:backdrop-blur-sm"
      >
        <div className="p-6">
          <div className="mb-4 flex items-center justify-between border-b border-[#38BDF8]/15 pb-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
              High-Resolution Engineering Showcase
            </h3>
            <button
              type="button"
              onClick={close}
              className="rounded-lg border border-[#38BDF8]/20 p-1.5 text-[#94A3B8] hover:text-white hover:border-[#38BDF8]"
            >
              <X className="size-4" />
            </button>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-[#38BDF8]/20 bg-[#070A11]">
            <Image
              src={currentImage}
              alt="High resolution showcase"
              fill
              className="object-contain"
            />
          </div>
          <p className="mt-3 text-center font-mono text-xs text-[#94A3B8]">
            {site.name} · {site.role} · Agni College of Technology (Anna University)
          </p>
        </div>
      </dialog>
    </div>
  );
}
