"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Cpu,
  CircuitBoard,
  Wrench,
  Search,
  Layers,
  Terminal,
  Activity,
  CheckCircle2,
  Sliders,
} from "lucide-react";
import {
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

  const laboratoryToolchains = [
    {
      group: "Firmware IDEs & Toolchains",
      icon: Cpu,
      description: "Embedded C compilation, flash programming, and register debugging environments.",
      items: ["STM32CubeIDE", "MPLAB X IDE (XC8)", "Arduino IDE 2.3", "VS Code (PlatformIO)", "GCC ARM Toolchain"],
    },
    {
      group: "Circuit Schematic & PCB EDA",
      icon: CircuitBoard,
      description: "Schematic capture, multi-layer routing, footprint verification, and design rules.",
      items: ["KiCad 8.0", "Altium Designer", "OrCAD Capture", "Proteus VSM", "PICSimLab"],
    },
    {
      group: "Hardware Debug & Bus Analyzers",
      icon: Activity,
      description: "SWD debuggers, logic protocol sniffers, and serial telemetry bridges.",
      items: ["ST-Link V2 (SWD)", "FTDI USB-to-UART", "Logic Analyzer Workflow", "I2C/SPI Protocol Decoding", "Serial Diagnostics"],
    },
    {
      group: "Physical Test Instrumentation",
      icon: Wrench,
      description: "Signal verification, rail calibration, and electrical debugging workflows.",
      items: ["Digital Storage Oscilloscope", "Benchtop True-RMS DMM", "DC Regulated Power Supply", "Soldering & Prototyping Bench", "ESD Grounding"],
    },
  ];

  return (
    <Section
      id="toolkit"
      badge="HARDWARE LABORATORY"
      title="Engineering Lab & Toolchains"
      description="Physical workbench bring-up, electronic instrumentation, PCB schematics, and embedded developer toolchains."
    >
      {/* 1. Dual Physical Laboratory Bring-Up Showcases */}
      <div className="mb-14 grid gap-6 lg:grid-cols-2">
        {/* Showcase A: STM32 + ST-Link V2 Hardware Bring-Up */}
        <div className="flex flex-col justify-between overflow-hidden rounded-2xl border border-[#38BDF8]/30 bg-[#0E1422] p-6 shadow-xl transition-all hover:border-[#38BDF8]/60">
          <div>
            <div className="mb-3 flex items-center justify-between border-b border-[#1E293B] pb-3">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8]" />
                <span className="font-mono text-[11px] font-bold uppercase text-[#38BDF8]">
                  BENCH LAB 01 · ARM CORTEX-M
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#64748B]">ST-LINK V2 + FTDI</span>
            </div>

            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#1E293B] bg-[#070A11]">
              <Image
                src="/projects/stm32-bench-setup.png"
                alt="STM32F103 Blue Pill development bench with ST-Link V2 programmer, USB-UART FTDI, and I2C OLED display"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <h4 className="mt-4 text-base font-bold text-white sm:text-lg">
              STM32F103 SWD Hardware Bring-Up &amp; Telemetry
            </h4>
            <p className="mt-1.5 text-xs leading-relaxed text-[#94A3B8]">
              Live workbench bring-up of an STM32 Blue Pill running bare-metal Embedded C. Programmed and debugged via ST-Link V2 SWD lines, streaming non-blocking USART telemetry over FTDI while driving a 0.96&quot; I2C OLED display.
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5 border-t border-[#1E293B] pt-3 font-mono text-[10px]">
            <span className="rounded bg-[#070A11] px-2 py-0.5 text-[#38BDF8] border border-[#38BDF8]/20">
              STM32F103C8T6
            </span>
            <span className="rounded bg-[#070A11] px-2 py-0.5 text-[#CBD5E1] border border-[#1E293B]">
              ST-Link V2 SWD
            </span>
            <span className="rounded bg-[#070A11] px-2 py-0.5 text-[#CBD5E1] border border-[#1E293B]">
              USB-UART FTDI
            </span>
            <span className="rounded bg-[#070A11] px-2 py-0.5 text-[#CBD5E1] border border-[#1E293B]">
              I2C OLED Driver
            </span>
          </div>
        </div>

        {/* Showcase B: ESP32 + E-Paper Display SPI Bring-Up */}
        <div className="flex flex-col justify-between overflow-hidden rounded-2xl border border-[#38BDF8]/30 bg-[#0E1422] p-6 shadow-xl transition-all hover:border-[#38BDF8]/60">
          <div>
            <div className="mb-3 flex items-center justify-between border-b border-[#1E293B] pb-3">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]" />
                <span className="font-mono text-[11px] font-bold uppercase text-[#00F0FF]">
                  BENCH LAB 02 · SPI INTERFACE
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#64748B]">ESP32 DEVKIT V1</span>
            </div>

            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#1E293B] bg-[#070A11]">
              <Image
                src="/projects/epaper-display-esp32.jpg"
                alt="ESP32 connected to 1.54 inch e-paper SPI display running custom bitmap code in Arduino IDE"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <h4 className="mt-4 text-base font-bold text-white sm:text-lg">
              ESP32 + 1.54&quot; E-Paper SPI Display Firmware Bring-Up
            </h4>
            <p className="mt-1.5 text-xs leading-relaxed text-[#94A3B8]">
              Physical bring-up of an ultra-low-power electronic paper module. Configured high-speed 4-wire SPI with busy-pin interrupt handshake, compiling custom bitmap flash headers for zero static power image retention.
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5 border-t border-[#1E293B] pt-3 font-mono text-[10px]">
            <span className="rounded bg-[#070A11] px-2 py-0.5 text-[#00F0FF] border border-[#00F0FF]/20">
              DOIT ESP32 DEVKIT
            </span>
            <span className="rounded bg-[#070A11] px-2 py-0.5 text-[#CBD5E1] border border-[#1E293B]">
              4-Wire SPI Bus
            </span>
            <span className="rounded bg-[#070A11] px-2 py-0.5 text-[#CBD5E1] border border-[#1E293B]">
              Busy-Pin Handshake
            </span>
            <span className="rounded bg-[#070A11] px-2 py-0.5 text-[#CBD5E1] border border-[#1E293B]">
              GxEPD2 Library
            </span>
          </div>
        </div>
      </div>

      {/* 2. Physical Lab Bench Visual Instruments (Soldering, KiCad PCB, DMM, Oscilloscope) */}
      <div className="mb-14">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#38BDF8]">
              PHYSICAL ELECTRONICS &amp; MEASUREMENT LAB
            </p>
            <h3 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Bench Instrumentation &amp; Circuit Schematics
            </h3>
            <p className="mt-1 text-xs text-[#94A3B8]">
              Interactive schematics, soldering bench, 6.5-digit precision DMM, and 200MHz protocol oscilloscope.
            </p>
          </div>
          <div className="flex items-center gap-1 rounded-xl border border-[#38BDF8]/25 bg-[#0E1422] p-1 font-mono text-xs">
            {hardwareBenchTools.map((tool, idx) => (
              <button
                key={tool.id}
                type="button"
                onClick={() => setSelectedToolIdx(idx)}
                className={`rounded-lg px-3 py-1 font-semibold transition-all ${
                  selectedToolIdx === idx
                    ? "bg-[#38BDF8] text-[#070A11] shadow"
                    : "text-[#94A3B8] hover:text-white"
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
            <div className="mb-6 overflow-hidden rounded-2xl border border-[#38BDF8]/30 bg-[#0E1422] shadow-2xl">
              <div className="grid gap-6 p-6 lg:grid-cols-12 lg:items-center lg:p-8">
                {/* Visual Display */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-[#1E293B] bg-[#070A11] shadow-inner lg:col-span-7">
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
                    <span className="rounded-md border border-[#38BDF8]/40 bg-[#38BDF8]/10 px-2.5 py-1 font-mono text-xs font-bold text-[#38BDF8]">
                      {activeTool.category}
                    </span>
                    <span className="rounded-md border border-[#1E293B] bg-[#070A11] px-2 py-1 font-mono text-[11px] text-[#64748B]">
                      LAB TOOL 0{selectedToolIdx + 1} OF 05
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                      {activeTool.title}
                    </h4>
                    <p className="mt-1 font-mono text-xs text-[#38BDF8]">{activeTool.spec}</p>
                  </div>

                  <p className="text-xs leading-relaxed text-[#CBD5E1] sm:text-sm">
                    {activeTool.description}
                  </p>

                  <div className="pt-2">
                    <p className="mb-2 font-mono text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                      VERIFIED LAB CAPABILITIES:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {activeTool.badges.map((b) => (
                        <span
                          key={b}
                          className="inline-flex items-center gap-1 rounded-md border border-[#38BDF8]/20 bg-[#070A11] px-2.5 py-1 font-mono text-xs text-[#F8FAFC]"
                        >
                          <CheckCircle2 className="size-3 text-[#38BDF8]" />
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

        {/* 5 Tool Cards Grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {hardwareBenchTools.map((t, idx) => (
            <div
              key={t.id}
              onClick={() => setSelectedToolIdx(idx)}
              className={`cursor-pointer rounded-xl border p-3.5 transition-all duration-300 ${
                selectedToolIdx === idx
                  ? "border-[#38BDF8] bg-[#0E1422] ring-1 ring-[#38BDF8]/50 shadow-lg"
                  : "border-[#38BDF8]/15 bg-[#0A0E18] hover:border-[#38BDF8]/40 hover:bg-[#0E1422]"
              }`}
            >
              <div className="relative mb-2.5 aspect-[16/10] w-full overflow-hidden rounded-lg border border-[#1E293B] bg-[#070A11]">
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  className="object-contain p-1"
                  sizes="(max-width: 640px) 100vw, 20vw"
                />
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-[10px] font-bold text-[#38BDF8]">0{idx + 1}</span>
                <span className="font-mono text-[9px] text-[#64748B] truncate max-w-[80px]">
                  {t.category.split(" ")[0]}
                </span>
              </div>
              <h5 className="mt-1 font-bold text-white text-xs line-clamp-1">{t.title}</h5>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Interactive Telemetry Console (STM32, LoRa, ROS 2, PIC) */}
      <div className="mb-14">
        <TelemetryConsole />
      </div>

      {/* 4. Development Toolchains 4-Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {laboratoryToolchains.map((toolchain) => {
          const Icon = toolchain.icon;
          return (
            <article
              key={toolchain.group}
              className="rounded-2xl border border-[#38BDF8]/20 bg-[#0E1422] p-6 transition-all duration-300 hover:border-[#38BDF8]/50 hover:bg-[#121929] shadow-xl"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-lg border border-[#38BDF8]/30 bg-[#070A11] p-2 text-[#38BDF8]">
                  <Icon className="size-4" />
                </span>
                <div>
                  <h3 className="font-bold text-white">{toolchain.group}</h3>
                  <p className="text-[11px] text-[#64748B]">{toolchain.description}</p>
                </div>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {toolchain.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-[#38BDF8]/15 bg-[#070A11] px-2.5 py-1.5 font-mono text-xs text-[#CBD5E1]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      {/* 5. Microcontroller Field Notes with Search */}
      <div className="mt-14">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-[#38BDF8] font-bold uppercase">
              QUICK REFERENCE COMPENDIUM
            </p>
            <h3 className="mt-1 text-2xl font-bold tracking-tight text-white">
              Microcontroller Field Notes
            </h3>
            <p className="mt-1 text-xs text-[#94A3B8]">
              Silicon architecture specs, core peripherals, and practical register considerations.
            </p>
          </div>

          <div className="relative min-w-[220px]">
            <Search className="absolute left-3 top-2.5 size-3.5 text-[#64748B]" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Search MCU (STM32, PIC, ESP32...)"
              className="w-full rounded-xl border border-[#38BDF8]/25 bg-[#0E1422] py-2 pl-9 pr-3 font-mono text-xs text-[#F8FAFC] placeholder:text-[#64748B] focus:border-[#38BDF8] focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {filteredNotes.map((m) => (
            <details
              key={m.name}
              className="group rounded-xl border border-[#38BDF8]/20 bg-[#0E1422] p-5 open:border-[#38BDF8]/50 transition-colors"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span>
                  <span className="block font-bold text-white">{m.name}</span>
                  <span className="mt-0.5 block font-mono text-xs font-semibold text-[#38BDF8]">
                    {m.core}
                  </span>
                </span>
                <span className="grid size-7 shrink-0 place-items-center rounded-full border border-[#38BDF8]/25 text-sm text-[#94A3B8] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 border-t border-[#1E293B] pt-3 font-mono text-xs leading-relaxed text-[#94A3B8]">
                {m.note}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
