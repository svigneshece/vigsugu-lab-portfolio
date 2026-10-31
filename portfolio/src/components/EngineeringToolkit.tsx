"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Cpu,
  CircuitBoard,
  Wrench,
  Lightbulb,
  Search,
  Activity,
  Layers,
  Terminal,
  Zap,
  CheckCircle2,
} from "lucide-react";
import {
  engineeringInterests,
  engineeringTools,
  hardwareBenchTools,
  microcontrollerNotes,
} from "@/data/site";
import { Section } from "./Section";
import { TelemetryConsole } from "./TelemetryConsole";

export function EngineeringToolkit() {
  const [filterQuery, setFilterQuery] = useState("");
  const [selectedToolIdx, setSelectedToolIdx] = useState(0);

  const filteredNotes = microcontrollerNotes.filter(
    (m) =>
      !filterQuery ||
      m.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
      m.core.toLowerCase().includes(filterQuery.toLowerCase()) ||
      m.note.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <Section
      id="toolkit"
      badge="HARDWARE TOOLCHAINS"
      title="Engineering Toolkit & Lab Bench"
      description="Real silicon bring-up, electronic instrumentation, PCB schematics, and embedded developer toolchains."
    >
      {/* 1. Real Hardware Lab Bring-Up Showcase (ESP32 + E-Paper Display SPI Driver) */}
      <div className="mb-14 overflow-hidden rounded-2xl border border-[#B6E778]/30 bg-[#161C18] p-6 shadow-2xl lg:p-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#B6E778]/15 pb-4">
          <div className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-lg border border-[#B6E778]/30 bg-[#101310] text-[#B6E778]">
              <Layers className="size-4" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#B6E778]">
                  BENCH LAB BRING-UP
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-400">
                  <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
                  LIVE HARDWARE DESK
                </span>
              </div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                ESP32 + 1.54&quot; E-Paper SPI Display Firmware Bring-Up
              </h3>
            </div>
          </div>
          <span className="font-mono text-xs text-[#9EAA9A]">
            GxEPD2 · 4-Wire SPI · Low-Power Bitmap Render
          </span>
        </div>

        <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
          {/* Real Photo Column - 100% Clean & Unobstructed */}
          <div className="space-y-2 lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#B6E778]/30 bg-[#101310] shadow-lg">
              <Image
                src="/projects/epaper-display-esp32.jpg"
                alt="Vignesh Sugunathan bringing up ESP32 with 1.54 inch e-paper SPI display running paper_screen.ino in Arduino IDE"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 58vw"
                priority
              />
            </div>
            {/* Clean bottom caption bar outside image */}
            <div className="flex flex-wrap items-center justify-between gap-2 px-1 font-mono text-[11px] text-[#9EAA9A]">
              <span className="inline-flex items-center gap-1.5 text-[#B6E778] font-semibold">
                <span className="size-1.5 rounded-full bg-[#B6E778]" />
                DOIT ESP32 DEVKIT V1 · Arduino IDE 2.3.10
              </span>
              <span>1.54&quot; 200×200 E-Paper SPI Bring-Up</span>
            </div>
          </div>

          {/* Technical Specs & Pinout Column */}
          <div className="flex flex-col justify-between space-y-4 lg:col-span-5">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#B6E778]">
                FIRMWARE ARCHITECTURE &amp; INTERFACE
              </p>
              <h4 className="mt-1 text-base font-bold text-white">
                4-Wire High-Speed SPI Driver with Busy Pin Handshake
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-[#D2DDD3]">
                Direct register-level hardware bring-up of an ultra-low-power 1.54-inch 200×200
                electronic paper module on DOIT ESP32 DEVKIT V1. Image bitmaps are compiled into flash
                memory (<code className="rounded bg-[#101310] px-1 text-[#B6E778]">vignesh_200x200.h</code>)
                and streamed via DMA-assisted hardware SPI.
              </p>
            </div>

            {/* Hardware Pin Mapping Matrix */}
            <div className="rounded-xl border border-[#2A372E] bg-[#101310] p-4 font-mono text-xs">
              <div className="mb-2 flex items-center justify-between border-b border-[#232F26] pb-2 text-[11px] text-[#86998A]">
                <span>SIGNAL PIN</span>
                <span>ESP32 GPIO</span>
                <span>FUNCTION</span>
              </div>
              <div className="space-y-1.5 text-[11px]">
                <div className="flex justify-between">
                  <span className="text-[#B6E778]">EPD_CS</span>
                  <span className="text-white">GPIO 5</span>
                  <span className="text-[#86998A]">Chip Select (Active Low)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#B6E778]">EPD_DC</span>
                  <span className="text-white">GPIO 22</span>
                  <span className="text-[#86998A]">Data / Command Mode</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#B6E778]">EPD_RST</span>
                  <span className="text-white">GPIO 19</span>
                  <span className="text-[#86998A]">Hardware Reset Line</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#B6E778]">EPD_BUSY</span>
                  <span className="text-white">GPIO 4</span>
                  <span className="text-[#86998A]">Busy Polling / Int</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#B6E778]">EPD_MOSI</span>
                  <span className="text-white">GPIO 23</span>
                  <span className="text-[#86998A]">SPI Master Out</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#B6E778]">EPD_SCK</span>
                  <span className="text-white">GPIO 18</span>
                  <span className="text-[#86998A]">SPI Clock Line</span>
                </div>
              </div>
            </div>

            {/* Flash Verification Log */}
            <div className="rounded-lg border border-[#232E26] bg-[#0E120F] p-3 font-mono text-[10px] text-[#7E8F82]">
              <p className="text-[#B6E778]">esptool.py v4.6 · RTS Pin Hard Reset Complete</p>
              <p className="mt-0.5">Wrote 313,312 bytes (184,741 compressed) at 0x00010000 in 4.7s</p>
              <p className="text-emerald-400">Hash of data verified · Screen Refresh OK</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Hardware Bench Instruments & Visual Prototyping (Soldering, PCB, DMM, Oscilloscope) */}
      <div className="mb-14">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#B6E778]">
              BENCH INSTRUMENTATION &amp; SCHEMATICS
            </p>
            <h3 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Physical Electronics &amp; Measurement Lab
            </h3>
            <p className="mt-1 text-sm text-[#9EAA9A]">
              Interactive schematics, soldering rework bench, 6.5-digit precision DMM, and 200MHz protocol oscilloscope.
            </p>
          </div>
          <div className="flex items-center gap-1 rounded-lg border border-[#B6E778]/25 bg-[#1B211D] p-1 font-mono text-xs">
            {hardwareBenchTools.map((tool, idx) => (
              <button
                key={tool.id}
                type="button"
                onClick={() => setSelectedToolIdx(idx)}
                className={`rounded-md px-3 py-1 font-semibold transition-all ${
                  selectedToolIdx === idx
                    ? "bg-[#B6E778] text-[#101310] shadow"
                    : "text-[#8EA091] hover:text-white"
                }`}
              >
                0{idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Tool Featured Card */}
        {(() => {
          const activeTool = hardwareBenchTools[selectedToolIdx];
          return (
            <div className="mb-6 overflow-hidden rounded-2xl border border-[#B6E778]/30 bg-[#1B211D] shadow-2xl">
              <div className="grid gap-6 p-6 lg:grid-cols-12 lg:items-center lg:p-8">
                {/* SVG Visual Display */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-[#2D3A31] bg-[#101310] shadow-inner lg:col-span-7">
                  <Image
                    src={activeTool.image}
                    alt={activeTool.title}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </div>

                {/* Info & Badges */}
                <div className="space-y-4 lg:col-span-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-md border border-[#B6E778]/40 bg-[#B6E778]/10 px-2.5 py-1 font-mono text-xs font-bold text-[#B6E778]">
                      {activeTool.category}
                    </span>
                    <span className="rounded-md border border-[#2B3830] bg-[#101310] px-2 py-1 font-mono text-[11px] text-[#86998A]">
                      TOOL 0{selectedToolIdx + 1} OF 04
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                      {activeTool.title}
                    </h4>
                    <p className="mt-1 font-mono text-xs text-[#B6E778]">{activeTool.spec}</p>
                  </div>

                  <p className="text-sm leading-relaxed text-[#D2DDD3]">
                    {activeTool.description}
                  </p>

                  <div className="pt-2">
                    <p className="mb-2 font-mono text-[11px] font-bold uppercase tracking-wider text-[#86998A]">
                      VERIFIED LAB CAPABILITIES:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {activeTool.badges.map((b) => (
                        <span
                          key={b}
                          className="inline-flex items-center gap-1 rounded-md border border-[#B6E778]/20 bg-[#101310] px-2.5 py-1 font-mono text-xs text-[#F1F4EF]"
                        >
                          <CheckCircle2 className="size-3 text-[#B6E778]" />
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* 4 Tool Cards Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {hardwareBenchTools.map((t, idx) => (
            <div
              key={t.id}
              onClick={() => setSelectedToolIdx(idx)}
              className={`cursor-pointer rounded-xl border p-4 transition-all duration-300 ${
                selectedToolIdx === idx
                  ? "border-[#B6E778] bg-[#1B211D] ring-1 ring-[#B6E778]/50"
                  : "border-[#B6E778]/15 bg-[#141A16] hover:border-[#B6E778]/40 hover:bg-[#1B211D]"
              }`}
            >
              <div className="relative mb-3 aspect-[16/10] w-full overflow-hidden rounded-lg border border-[#2B3830] bg-[#101310]">
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  className="object-contain p-1"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-[10px] font-bold text-[#B6E778]">0{idx + 1}</span>
                <span className="font-mono text-[10px] text-[#809183]">{t.category}</span>
              </div>
              <h5 className="mt-1 font-bold text-white text-xs line-clamp-1">{t.title}</h5>
              <p className="mt-1 text-[11px] text-[#9EAA9A] line-clamp-2">{t.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Interactive Telemetry & Mission Console (STM32 OLED, LoRa, ROS 2, PIC) */}
      <div className="mb-14">
        <TelemetryConsole />
      </div>

      {/* 4. Engineering Toolchains (Firmware IDEs, Circuit & PCB, Debug & Test, Development) */}
      <div className="grid gap-4 md:grid-cols-2">
        {engineeringTools.map((group, index) => {
          const Icon = [Cpu, CircuitBoard, Wrench, Lightbulb][index] || Cpu;
          return (
            <article
              key={group.group}
              className="rounded-xl border border-[#B6E778]/20 bg-[#1B211D] p-6 transition-all duration-300 hover:border-[#B6E778]/50 hover:bg-[#232B25]"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-lg border border-[#B6E778]/25 bg-[#101310] p-2 text-[#B6E778]">
                  <Icon className="size-4" />
                </span>
                <h3 className="font-bold text-white">{group.group}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-[#B6E778]/15 bg-[#101310] px-2.5 py-1.5 font-mono text-xs text-[#F1F4EF]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      {/* 5. Areas of Specialization */}
      <div className="mt-14">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-[#B6E778] font-bold">
              AREAS OF SPECIALIZATION
            </p>
            <h3 className="mt-1 text-2xl font-bold tracking-tight text-white">
              Electronics &amp; Embedded Systems
            </h3>
          </div>
          <span className="font-mono text-xs text-[#9EAA9A]">
            Hardware Bring-Up · Firmware · Low-Power IoT
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {engineeringInterests.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#B6E778]/20 bg-[#1B211D] px-3.5 py-1.5 font-mono text-xs text-[#F1F4EF] transition-colors hover:border-[#B6E778] hover:text-[#B6E778]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* 6. Microcontroller Field Notes with Live Search */}
      <div className="mt-14">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-[#B6E778] font-bold">
              QUICK REFERENCE COMPENDIUM
            </p>
            <h3 className="mt-1 text-2xl font-bold tracking-tight text-white">
              Microcontroller Field Notes
            </h3>
            <p className="mt-1 text-sm text-[#9EAA9A]">
              Architecture specs, core peripherals, and practical register considerations.
            </p>
          </div>

          <div className="relative min-w-[200px]">
            <Search className="absolute left-3 top-2.5 size-3.5 text-[#9EAA9A]" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Search MCU (STM32, PIC...)"
              className="w-full rounded-lg border border-[#B6E778]/25 bg-[#101310] py-1.5 pl-9 pr-3 font-mono text-xs text-[#F1F4EF] placeholder:text-[#9EAA9A] focus:border-[#B6E778] focus:outline-none"
            />
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {filteredNotes.map((m) => (
            <details
              key={m.name}
              className="group rounded-xl border border-[#B6E778]/20 bg-[#1B211D] p-5 open:border-[#B6E778]/50 transition-colors"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span>
                  <span className="block font-bold text-white">{m.name}</span>
                  <span className="mt-0.5 block font-mono text-xs font-semibold text-[#B6E778]">{m.core}</span>
                </span>
                <span className="grid size-7 shrink-0 place-items-center rounded-full border border-[#B6E778]/25 text-sm text-[#9EAA9A] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 border-t border-[#B6E778]/15 pt-3 font-mono text-xs leading-relaxed text-[#9EAA9A]">
                {m.note}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}