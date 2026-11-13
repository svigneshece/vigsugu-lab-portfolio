"use client";

import { useEffect, useRef } from "react";
import { X, Download, ExternalLink, Award, Sparkles, CheckCircle2 } from "lucide-react";
import { site } from "@/data/site";

type Props = {
  open?: boolean;
  isOpen?: boolean;
  onClose: () => void;
};

export function ResumeModal({ open, isOpen, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isVisible = Boolean(open ?? isOpen);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isVisible && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else if (!isVisible && dialog.open) {
      dialog.close();
      document.body.style.overflow = "";
    }
  }, [isVisible]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => e.target === dialogRef.current && onClose()}
      className="m-auto max-h-[92vh] w-[min(94vw,56rem)] overflow-y-auto rounded-2xl border border-slate-700/80 bg-[#070A11] p-0 text-slate-100 shadow-2xl backdrop:bg-black/85 backdrop:backdrop-blur-md"
    >
      <div className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-800 bg-[#0E1422]/95 px-6 py-4 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F0FF]" />
          <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-200">
            ATS Industry-Ready 1-Page Resume
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={site.resume.href}
            download={site.resume.downloadName}
            className="inline-flex items-center gap-1.5 rounded-lg bg-sky-400 px-3.5 py-1.5 font-mono text-xs font-bold text-slate-950 hover:bg-sky-300 transition-all cursor-pointer shadow-[0_0_15px_rgba(56,189,248,0.3)]"
          >
            <Download className="size-3.5" />
            Download PDF
          </a>

          <a
            href="/resume"
            target="_blank"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-[#070A11] px-3 py-1.5 font-mono text-xs text-slate-200 hover:border-sky-400 hover:text-sky-300 transition-colors"
          >
            <ExternalLink className="size-3.5 text-sky-400" />
            Full Page View
          </a>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close resume preview"
            className="rounded-lg border border-slate-800 p-1.5 text-slate-400 hover:text-white cursor-pointer"
          >
            <X className="size-4" />
          </button>
        </div>
      </div>

      <div className="p-6 sm:p-10 space-y-6 text-sm">
        {/* Header */}
        <div className="border-b border-slate-800 pb-5 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white uppercase font-serif">
            Vignesh Sugunathan
          </h1>
          <p className="mt-1 font-mono text-xs font-bold uppercase tracking-widest text-sky-400">
            Embedded Firmware &nbsp;|&nbsp; Product Development
          </p>
          <div className="mt-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-xs text-slate-400">
            <span>Chennai, Tamil Nadu</span>
            <span>•</span>
            <a href="tel:+919360266424" className="hover:underline text-slate-300">
              +91-9360266424
            </a>
            <span>•</span>
            <a href={`mailto:${site.contact.email}`} className="text-sky-400 hover:underline">
              {site.contact.email}
            </a>
            <span>•</span>
            <a href={site.contact.github} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">
              github.com/svigneshece
            </a>
          </div>
          <div className="mt-1 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-xs text-slate-400">
            <a href={site.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">
              linkedin.com/in/vignesh-sugunathan-50320926a
            </a>
            <span>•</span>
            <a href="https://vignesh-sugunathan.vercel.app" target="_blank" rel="noopener noreferrer" className="text-cyan-300 font-semibold hover:underline">
              vignesh-sugunathan.vercel.app
            </a>
          </div>
        </div>

        {/* 1. Professional Summary */}
        <section>
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-sky-400 border-b border-slate-800 pb-1">
            Professional Summary
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
            Embedded Systems Engineer with hands-on exposure to the electronics product cycle: board bring-up, firmware development, integration testing and field validation. Built STM32, ESP32 and PIC based systems, including a solar LoRa network with 96.4% packet delivery in outdoor trials and a hazard-detection robot that placed runner-up nationally. Skilled at isolating hardware–firmware faults with oscilloscope, logic analyzer and SWD tools. Aims to help a product team deliver reliable firmware, faster bring-up and validation, and a smooth prototype-to-release path.
          </p>
        </section>

        {/* 2. Technical Skills */}
        <section>
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-sky-400 border-b border-slate-800 pb-1">
            Technical Skills
          </h3>
          <div className="mt-2 space-y-1.5 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-[165px_1fr] gap-1">
              <span className="font-semibold text-white">Embedded &amp; Firmware:</span>
              <span className="text-slate-300">
                Embedded C/C++, ARM Cortex-M (STM32F103), ESP32/ESP8266, PIC16F877A, 8051, MSP430, Arduino; Bare-Metal &amp; HAL, GPIO, ADC, PWM, Timers, ISR, DMA, RTC, EEPROM, Low-Power, FSM
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[165px_1fr] gap-1">
              <span className="font-semibold text-white">Protocols &amp; Wireless:</span>
              <span className="text-slate-300">
                UART, SPI, I2C, LoRa (SX1278, 433 MHz), Wi-Fi, Bluetooth/BLE, GSM, GPS (NEO-6M), AES-128, Packet Framing &amp; CRC, RSSI Multi-Hop Routing
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[165px_1fr] gap-1">
              <span className="font-semibold text-white">Hardware &amp; Validation:</span>
              <span className="text-slate-300">
                Board Bring-up &amp; Testing, Sensor/Actuator Interfacing, Motor Control (H-Bridge, BLDC, Stepper), Power-Rail Verification, Fault Isolation, Oscilloscope, Logic Analyzer, DMM, Soldering
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[165px_1fr] gap-1">
              <span className="font-semibold text-white">EDA, Tools &amp; Platforms:</span>
              <span className="text-slate-300">
                KiCad, Proteus, STM32CubeIDE, MPLAB X, Keil, PlatformIO, ST-Link (SWD), Git, Linux, ROS 2, Gazebo, RViz, Python
              </span>
            </div>
          </div>
        </section>

        {/* 3. Professional Experience */}
        <section>
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-sky-400 border-b border-slate-800 pb-1">
            Professional Experience
          </h3>
          <div className="mt-2.5 space-y-3.5 text-xs">
            {/* NxtWave */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h4 className="font-bold text-white">Robotics Instructor</h4>
                  <p className="text-[11px] italic text-slate-400">NxtWave Institute of Advanced Technologies, Chennai</p>
                </div>
                <span className="font-mono text-sky-400 text-[11px]">Sep 2026 – Present</span>
              </div>
              <ul className="mt-1 list-disc pl-4 space-y-1 text-slate-300">
                <li>Develop robotics and drone projects on <strong>ROS 2 / Ubuntu in Python</strong>, simulating robots in Gazebo and visualizing state, sensor streams and transforms in RViz.</li>
                <li>Build IoT and robotics prototypes on <strong>ESP32 and STM32</strong>, writing and debugging Embedded C/C++ firmware with sensors, motor drivers and Wi-Fi/Bluetooth telemetry.</li>
                <li>Perform hardware testing and fault isolation across UART, I2C and SPI buses, power rails, wiring and sensor/actuator interfaces.</li>
              </ul>
            </div>

            {/* Centrado */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h4 className="font-bold text-white">AI Robotics Engineer</h4>
                  <p className="text-[11px] italic text-slate-400">Centrado Tech Solutions Pvt. Ltd., Chennai</p>
                </div>
                <span className="font-mono text-sky-400 text-[11px]">Dec 2025 – Aug 2026</span>
              </div>
              <ul className="mt-1 list-disc pl-4 space-y-1 text-slate-300">
                <li><strong>Firmware development:</strong> Wrote Embedded C/C++ for ESP32 / STM32 (Cortex-M): GPIO, ADC, PWM, timers, interrupts and UART/I2C/SPI drivers for ultrasonic, IR, IMU and environmental sensors.</li>
                <li><strong>Control &amp; sensor fusion:</strong> Implemented real-time sensor fusion and closed-loop motor control (PWM, H-Bridge, BLDC, stepper) for autonomous navigation and obstacle avoidance.</li>
                <li><strong>Board bring-up &amp; testing:</strong> Power-rail verification, peripheral validation and board-level functional testing; isolated faults with multimeter, oscilloscope and logic analyzer.</li>
                <li><strong>Prototyping &amp; design:</strong> Built harnesses, CAD models and 3D-printed prototypes; supported schematic/PCB reviews, tuned low-latency firmware and delivered benchmarked demos.</li>
              </ul>
            </div>

            {/* Emertxe */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h4 className="font-bold text-white">Embedded Systems Intern</h4>
                  <p className="text-[11px] italic text-slate-400">Emertxe Information Technologies, Bengaluru</p>
                </div>
                <span className="font-mono text-sky-400 text-[11px]">Jan 2025 – Feb 2025</span>
              </div>
              <ul className="mt-1 list-disc pl-4 space-y-1 text-slate-300">
                <li>Developed Embedded C firmware on <strong>PIC16F877A</strong> (MPLAB X, XC8) for a state-machine microwave oven controller: 4x4 matrix keypad scanning, CLCD interface, and Timer0 interrupts.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4. Top Engineering Projects */}
        <section>
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-sky-400 border-b border-slate-800 pb-1">
            Top Engineering Projects
          </h3>
          <div className="mt-2.5 space-y-3 text-xs">
            <div>
              <div className="flex justify-between items-baseline gap-2">
                <h4 className="font-bold text-white">Decentralized Solar-Powered Multi-Node LoRa Mesh Emergency Network</h4>
                <span className="font-mono text-cyan-300 font-semibold text-[11px]">Field-tested</span>
              </div>
              <p className="font-mono text-[10px] text-slate-400">LoRa SX1278 (433 MHz) | ESP32 | Arduino Nano | ESP8266 | GSM | NEO-6M GPS | AES-128 | Solar Power</p>
              <ul className="mt-0.5 list-disc pl-4 space-y-0.5 text-slate-300">
                <li>Architected off-grid mesh network with dynamic RSSI multi-hop routing, GPS reporting, GSM alerts, and AES-128 encryption.</li>
                <li>Achieved ≈96.4% packet delivery over 500 transmissions at up to 200 m in outdoor field tests.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline gap-2">
                <h4 className="font-bold text-white">Autonomous Surveillance &amp; Hazard Detection Robot</h4>
                <span className="font-mono text-cyan-300 font-semibold text-[11px]">2025 | Runner-Up, SRM National Hackathon</span>
              </div>
              <p className="font-mono text-[10px] text-slate-400">ESP32 | Arduino Uno | MQ-2 Gas | HC-SR04 | L298N H-Bridge | Voice &amp; IR Control | Blynk | Bluetooth</p>
              <ul className="mt-0.5 list-disc pl-4 space-y-0.5 text-slate-300">
                <li>Built a 4WD platform with ultrasonic obstacle avoidance, line tracking, voice/IR/Bluetooth control, and real-time toxic-gas (MQ-2) alerts with live Blynk telemetry.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline gap-2">
                <h4 className="font-bold text-white">STM32 Real-Time Environmental Monitor &amp; I2C OLED Driver</h4>
                <span className="font-mono text-slate-400 text-[11px]">STM32F103C8T6 (Cortex-M3 @ 72 MHz)</span>
              </div>
              <p className="font-mono text-[10px] text-slate-400">Embedded C | STM32CubeIDE | ST-Link V2 SWD | FTDI UART | I2C | DS1307 RTC | DHT11 | SSD1306 OLED</p>
              <ul className="mt-0.5 list-disc pl-4 space-y-0.5 text-slate-300">
                <li>Performed bare-metal bring-up (HSE → PLL 72 MHz clock tree, I2C fast-mode, timers/interrupts) and wrote register-level drivers for OLED, DHT11 and RTC.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline gap-2">
                <h4 className="font-bold text-white">Smart Environmental &amp; Climate Monitoring System</h4>
                <span className="font-mono text-slate-400 text-[11px]">Raspberry Pi / Arduino SBC</span>
              </div>
              <p className="font-mono text-[10px] text-slate-400">Raspberry Pi 5 / Arduino | DHT11 Sensor | HD44780 16x2 LCD | Linux GPIO | Embedded C</p>
              <ul className="mt-0.5 list-disc pl-4 space-y-0.5 text-slate-300">
                <li>Interfaced 40-pin GPIO directly to 16x2 HD44780 LCD in 4-bit mode with 40-bit DHT11 pulse decoding and packet checksum verification.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Education */}
        <section>
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-sky-400 border-b border-slate-800 pb-1">
            Education
          </h3>
          <div className="mt-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
            <div>
              <p className="font-bold text-white">Bachelor of Engineering (B.E.) — Electronics &amp; Communication Engineering</p>
              <p className="text-slate-400">Agni College of Technology, Chennai (Anna University)</p>
            </div>
            <p className="font-mono text-sky-300 text-[11px]">Grad: 2026 · <strong className="text-white">CGPA: 8.2 / 10</strong></p>
          </div>
        </section>

        {/* 6. Publications & Honors */}
        <section>
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-sky-400 border-b border-slate-800 pb-1">
            Research Publications &amp; Honors
          </h3>
          <div className="mt-2 space-y-2 text-xs text-slate-300">
            <div>
              <p className="text-white font-semibold">
                [1] Real-time Oil Spill Detection and Monitoring Using Deep Learning and CNNs
              </p>
              <p className="text-[11px] text-slate-400">
                SSN College IEEE International Conference (2024) · <span className="text-cyan-300 font-medium">Best Research Paper Award — Bharath University (ICRIDET - 2024)</span>
              </p>
            </div>
            <div>
              <p className="text-white font-semibold">
                [2] Machine Learning Based Dent Damage Detection Using Image Processing Methods
              </p>
              <p className="text-[11px] text-slate-400">
                VIT Vellore, IEEE International Conference (2024) · IEEE Xplore Record
              </p>
            </div>
            <div className="flex items-center gap-2 pt-1 font-mono text-[11px] text-sky-300">
              <Award className="size-3.5 text-cyan-400 shrink-0" />
              <span>Runner-up Award — SRM National Robotics Hackathon (Autonomous Surveillance &amp; Hazard Robot)</span>
            </div>
          </div>
        </section>
      </div>
    </dialog>
  );
}
