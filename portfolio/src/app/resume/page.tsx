import Link from "next/link";
import { ArrowLeft, Download, Mail, Phone, Globe, ExternalLink } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/icons";
import { site } from "@/data/site";
import { PrintButton } from "./PrintButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vignesh Sugunathan | 1-Page ATS Engineering Resume",
  description: "ATS 100% Industry-Ready 1-Page Resume of Vignesh Sugunathan - Embedded Firmware & Product Development Engineer.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#070A11] text-slate-100 py-8 px-4 sm:px-6 print:bg-white print:text-black print:p-0">
      {/* Top Navigation Bar (Hidden when printing) */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-slate-400 hover:text-sky-300 transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to Portfolio
        </Link>

        <div className="flex items-center gap-3">
          <PrintButton />

          <a
            href={site.resume.href}
            download={site.resume.downloadName}
            className="inline-flex items-center gap-1.5 rounded-lg bg-sky-400 px-4 py-2 font-mono text-xs font-bold text-slate-950 hover:bg-sky-300 transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)]"
          >
            <Download className="size-3.5" />
            Download PDF
          </a>
        </div>
      </div>

      {/* 1-Page ATS Clean Printable Sheet */}
      <article className="max-w-4xl mx-auto rounded-2xl border border-slate-800 bg-[#0E1422] p-8 sm:p-10 shadow-2xl print:border-none print:bg-white print:p-6 print:shadow-none print:text-black print:max-w-full">
        {/* Header */}
        <header className="text-center border-b border-slate-800 pb-4 print:border-neutral-400">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase print:text-black font-serif">
            Vignesh Sugunathan
          </h1>
          <p className="mt-1 font-mono text-xs font-bold uppercase tracking-widest text-sky-400 print:text-neutral-800">
            Embedded Firmware &nbsp;|&nbsp; Product Development
          </p>

          <div className="mt-2.5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-mono text-[11px] text-slate-300 print:text-neutral-700">
            <span>Chennai, Tamil Nadu</span>
            <span className="text-slate-600 print:text-neutral-400">•</span>
            <a href="tel:+919360266424" className="hover:underline">
              +91-9360266424
            </a>
            <span className="text-slate-600 print:text-neutral-400">•</span>
            <a href={`mailto:${site.contact.email}`} className="text-sky-400 print:text-neutral-900 hover:underline">
              {site.contact.email}
            </a>
            <span className="text-slate-600 print:text-neutral-400">•</span>
            <a href={site.contact.github} target="_blank" rel="noopener noreferrer" className="text-sky-400 print:text-neutral-900 hover:underline">
              github.com/svigneshece
            </a>
          </div>

          <div className="mt-1 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-mono text-[11px] text-slate-300 print:text-neutral-700">
            <a href={site.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-sky-400 print:text-neutral-900 hover:underline">
              linkedin.com/in/vignesh-sugunathan-50320926a
            </a>
            <span className="text-slate-600 print:text-neutral-400">•</span>
            <a href="https://vignesh-sugunathan.vercel.app" target="_blank" rel="noopener noreferrer" className="font-semibold text-cyan-300 print:text-neutral-900 hover:underline">
              vignesh-sugunathan.vercel.app
            </a>
          </div>
        </header>

        {/* 1. Professional Summary */}
        <section className="mt-4">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-sky-400 print:text-neutral-900 border-b border-slate-800 pb-1 print:border-neutral-400">
            Professional Summary
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-slate-300 print:text-neutral-800 text-justify">
            Embedded Systems Engineer with hands-on exposure to the electronics product cycle: board bring-up, firmware development, integration testing and field validation. Built STM32, ESP32 and PIC based systems, including a solar LoRa network with 96.4% packet delivery in outdoor trials and a hazard-detection robot that placed runner-up nationally. Skilled at isolating hardware–firmware faults with oscilloscope, logic analyzer and SWD tools. Aims to help a product team deliver reliable firmware, faster bring-up and validation, and a smooth prototype-to-release path.
          </p>
        </section>

        {/* 2. Technical Skills */}
        <section className="mt-4">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-sky-400 print:text-neutral-900 border-b border-slate-800 pb-1 print:border-neutral-400">
            Technical Skills
          </h2>
          <div className="mt-2 space-y-1.5 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-[165px_1fr] gap-1">
              <span className="font-semibold text-white print:text-black">Embedded &amp; Firmware:</span>
              <span className="text-slate-300 print:text-neutral-800">
                Embedded C/C++, ARM Cortex-M (STM32F103), ESP32/ESP8266, PIC16F877A, 8051, MSP430, Arduino; Bare-Metal &amp; HAL, GPIO, ADC, PWM, Timers, ISR, DMA, RTC, EEPROM, Low-Power, FSM
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[165px_1fr] gap-1">
              <span className="font-semibold text-white print:text-black">Protocols &amp; Wireless:</span>
              <span className="text-slate-300 print:text-neutral-800">
                UART, SPI, I2C, LoRa (SX1278, 433 MHz), Wi-Fi, Bluetooth/BLE, GSM, GPS (NEO-6M), AES-128, Packet Framing &amp; CRC, RSSI Multi-Hop Routing
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[165px_1fr] gap-1">
              <span className="font-semibold text-white print:text-black">Hardware &amp; Validation:</span>
              <span className="text-slate-300 print:text-neutral-800">
                Board Bring-up &amp; Testing, Sensor/Actuator Interfacing, Motor Control (H-Bridge, BLDC, Stepper), Power-Rail Verification, Fault Isolation, Oscilloscope, Logic Analyzer, DMM, Soldering
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[165px_1fr] gap-1">
              <span className="font-semibold text-white print:text-black">EDA, Tools &amp; Platforms:</span>
              <span className="text-slate-300 print:text-neutral-800">
                KiCad, Proteus, STM32CubeIDE, MPLAB X, Keil, PlatformIO, ST-Link (SWD), Git, Linux, ROS 2, Gazebo, RViz, Python
              </span>
            </div>
          </div>
        </section>

        {/* 3. Professional Experience */}
        <section className="mt-4">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-sky-400 print:text-neutral-900 border-b border-slate-800 pb-1 print:border-neutral-400">
            Professional Experience
          </h2>
          <div className="mt-2.5 space-y-3">
            {/* Role 1 */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h3 className="text-xs font-bold text-white print:text-black">
                    Robotics Instructor
                  </h3>
                  <p className="text-[11px] italic text-slate-400 print:text-neutral-700">
                    NxtWave Institute of Advanced Technologies, Chennai
                  </p>
                </div>
                <span className="font-mono text-[11px] text-sky-400 print:text-neutral-700 sm:text-right">
                  Sep 2026 – Present
                </span>
              </div>
              <ul className="mt-1 list-disc pl-4 space-y-0.5 text-xs text-slate-300 print:text-neutral-800">
                <li>
                  Develop robotics and drone projects on <strong>ROS 2 / Ubuntu in Python</strong>, simulating robots in Gazebo and visualizing state, sensor streams and transforms in RViz.
                </li>
                <li>
                  Build IoT and robotics prototypes on <strong>ESP32 and STM32</strong>, writing and debugging Embedded C/C++ firmware with sensors, motor drivers and Wi-Fi/Bluetooth telemetry.
                </li>
                <li>
                  Perform hardware testing and fault isolation across UART, I2C and SPI buses, power rails, wiring and sensor/actuator interfaces.
                </li>
              </ul>
            </div>

            {/* Role 2 */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h3 className="text-xs font-bold text-white print:text-black">
                    AI Robotics Engineer
                  </h3>
                  <p className="text-[11px] italic text-slate-400 print:text-neutral-700">
                    Centrado Tech Solutions Pvt. Ltd., Chennai
                  </p>
                </div>
                <span className="font-mono text-[11px] text-sky-400 print:text-neutral-700 sm:text-right">
                  Dec 2025 – Aug 2026
                </span>
              </div>
              <ul className="mt-1 list-disc pl-4 space-y-0.5 text-xs text-slate-300 print:text-neutral-800">
                <li>
                  <strong>Firmware development:</strong> Wrote Embedded C/C++ for ESP32 / STM32 (Cortex-M): GPIO, ADC, PWM, timers, interrupts and UART/I2C/SPI drivers for ultrasonic, IR, IMU and environmental sensors.
                </li>
                <li>
                  <strong>Control &amp; sensor fusion:</strong> Implemented real-time sensor fusion and closed-loop motor control (PWM, H-Bridge, BLDC, stepper) for autonomous navigation and obstacle avoidance.
                </li>
                <li>
                  <strong>Board bring-up &amp; testing:</strong> Power-rail verification, peripheral validation and board-level functional testing; isolated faults with multimeter, oscilloscope and logic analyzer.
                </li>
                <li>
                  <strong>Prototyping &amp; design:</strong> Built harnesses, CAD models and 3D-printed prototypes; supported schematic/PCB reviews, tuned low-latency firmware and delivered benchmarked demos with documentation.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4. Top Engineering Projects */}
        <section className="mt-4">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-sky-400 print:text-neutral-900 border-b border-slate-800 pb-1 print:border-neutral-400">
            Top Engineering Projects
          </h2>
          <div className="mt-2.5 space-y-2.5">
            {/* Project 1 */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-xs font-bold text-white print:text-black">
                  Decentralized Solar-Powered Multi-Node LoRa Mesh Emergency Network
                </h3>
                <span className="font-mono text-[11px] text-cyan-400 print:text-neutral-800 font-semibold sm:text-right">
                  Field-tested
                </span>
              </div>
              <p className="font-mono text-[10px] text-slate-400 print:text-neutral-600">
                LoRa SX1278 (433 MHz) | ESP32 | Arduino Nano | ESP8266 | GSM | NEO-6M GPS | AES-128 | Solar Power Mgmt
              </p>
              <ul className="mt-0.5 list-disc pl-4 space-y-0.5 text-xs text-slate-300 print:text-neutral-800">
                <li>
                  Architected an off-grid, multi-node network with dynamic RSSI-based multi-hop routing, GPS location reporting, GSM alerting and AES-128 encrypted payloads to keep telemetry alive during disasters and cellular blackouts.
                </li>
                <li>
                  Achieved ≈96.4% packet delivery over 500 transmissions at up to 200 m in outdoor field tests; engineered solar harvesting and power management for continuous unattended node operation.
                </li>
              </ul>
            </div>

            {/* Project 2 */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-xs font-bold text-white print:text-black">
                  Autonomous Surveillance &amp; Hazard Detection Robot
                </h3>
                <span className="font-mono text-[11px] text-cyan-400 print:text-neutral-800 font-semibold sm:text-right">
                  2025 | Runner-Up, SRM National Robotics Hackathon
                </span>
              </div>
              <p className="font-mono text-[10px] text-slate-400 print:text-neutral-600">
                ESP32 | Arduino Uno | MQ-2 Gas | HC-SR04 | L298N H-Bridge | Voice &amp; IR Control | Blynk | Bluetooth SPP
              </p>
              <ul className="mt-0.5 list-disc pl-4 space-y-0.5 text-xs text-slate-300 print:text-neutral-800">
                <li>
                  Built a 4WD mechatronic platform with ultrasonic obstacle avoidance, line tracking, voice/IR/Bluetooth control, PWM motor speed control, and real-time toxic-gas (MQ-2) alerts with live Blynk telemetry.
                </li>
              </ul>
            </div>

            {/* Project 3 */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-xs font-bold text-white print:text-black">
                  STM32 Real-Time Environmental Monitor &amp; I2C OLED Driver
                </h3>
                <span className="font-mono text-[11px] text-slate-400 print:text-neutral-700 sm:text-right">
                  STM32F103C8T6 (Cortex-M3 @ 72 MHz)
                </span>
              </div>
              <p className="font-mono text-[10px] text-slate-400 print:text-neutral-600">
                Embedded C | STM32CubeIDE | ST-Link V2 SWD | FTDI UART | I2C | DS1307 RTC | DHT11 | SSD1306 OLED
              </p>
              <ul className="mt-0.5 list-disc pl-4 space-y-0.5 text-xs text-slate-300 print:text-neutral-800">
                <li>
                  Performed bare-metal bring-up (HSE → PLL 72 MHz clock tree, I2C fast-mode peripheral, timers/interrupts) and wrote register-level drivers for OLED display, DHT11 and RTC.
                </li>
                <li>
                  Validated bus behavior and sensor acquisition through SWD in-circuit debugging, logic-analyzer decoding and a non-blocking 115200-baud UART diagnostic stream.
                </li>
              </ul>
            </div>

            {/* Project 4 */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-xs font-bold text-white print:text-black">
                  Microwave Oven Automation System (Embedded Systems Internship, Emertxe)
                </h3>
                <span className="font-mono text-[11px] text-slate-400 print:text-neutral-700 sm:text-right">
                  Jan – Feb 2025
                </span>
              </div>
              <p className="font-mono text-[10px] text-slate-400 print:text-neutral-600">
                PIC16F877A | Embedded C | MPLAB X (XC8) | PICSimLab | GPIO | ADC | Timers | Interrupts | EEPROM | Matrix Keypad
              </p>
            </div>
          </div>
        </section>

        {/* 5. Education */}
        <section className="mt-4">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-sky-400 print:text-neutral-900 border-b border-slate-800 pb-1 print:border-neutral-400">
            Education
          </h2>
          <div className="mt-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
            <div>
              <h3 className="font-bold text-white print:text-black">
                B.E. – Electronics and Communication Engineering
              </h3>
              <p className="text-[11px] text-slate-400 print:text-neutral-700">
                Agni College of Technology, Chennai (Anna University)
              </p>
            </div>
            <div className="font-mono text-xs text-sky-400 print:text-neutral-900 sm:text-right">
              <span>2022 – 2026</span> &nbsp;•&nbsp; <strong className="text-white print:text-black">CGPA: 8.2 / 10</strong>
            </div>
          </div>
        </section>

        {/* 6. Achievements & Publications */}
        <section className="mt-4">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-sky-400 print:text-neutral-900 border-b border-slate-800 pb-1 print:border-neutral-400">
            Achievements &amp; Publications
          </h2>
          <ul className="mt-2 list-disc pl-4 space-y-1 text-xs text-slate-300 print:text-neutral-800">
            <li>
              <strong>Best Research Paper Award, ICRIDET 2024 (IEEE)</strong> for <em>Real-time Oil Spill Detection Using Deep Learning and CNNs</em>; second IEEE paper on dent damage detection (VIT Vellore).
            </li>
            <li>
              <strong>Runner-Up, SRM National Robotics Hackathon (2025)</strong> &nbsp;|&nbsp; <strong>NPTEL Embedded Systems and Design (2024)</strong>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
}
