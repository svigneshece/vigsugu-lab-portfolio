"use client";

import { useState } from "react";
import { Terminal, Play, Cpu, ShieldCheck, Code2, CircuitBoard } from "lucide-react";

type SimProgram = "stm32" | "lora" | "robot" | "picsim";

const programData: Record<
  SimProgram,
  {
    title: string;
    chip: string;
    badge: string;
    codeSnippet: string;
    lines: string[];
  }
> = {
  stm32: {
    title: "STM32F103 Embedded C · I2C OLED Driver (SH1106)",
    chip: "ARM Cortex-M3 @ 72MHz · Bare-Metal / HAL",
    badge: "FIRMWARE DRIVER",
    codeSnippet: `void OLED_Draw_Telemetry(float temp, uint8_t humidity) {
    char buf[24];
    snprintf(buf, sizeof(buf), "TEMP: %.1f C", temp);
    OLED_Puts(0, 16, buf, &Font_7x10, OLED_COLOR_WHITE);
    snprintf(buf, sizeof(buf), "HUM : %d %%", humidity);
    OLED_Puts(0, 32, buf, &Font_7x10, OLED_COLOR_WHITE);
    OLED_UpdateScreen(&hi2c1); // Non-blocking DMA transfer
}`,
    lines: [
      "[RCC] System clock configured: HSE 8MHz -> PLL x9 -> 72MHz Core Clock",
      "[I2C1] Pins PB6 (SCL), PB7 (SDA) initialized in AF Open-Drain @ 400kHz Fast-Mode",
      "[OLED_INIT] Sending SH1106 initialization sequence (0xAE Display OFF, 0xD5, 0x80)",
      "[OLED_CMD] 0xA8 Multiplex: 0x3F | 0xD3 Offset: 0x00 | 0x8D Charge Pump: ON",
      "[OLED_CMD] 0xAF Display ON -> I2C Address 0x3C ACK Received",
      "[SENSORS] DHT11 acquisition on PA1: Temp = 31.3 °C, Humidity = 64.9% RH",
      "[RTC_SYNC] DS1307 real-time clock over I2C (0x68): Synchronized",
      "[FRAME_BUFFER] Drawing: 'TEMP: 31.3 C' at (x:0, y:16, Font_7x10)",
      "[FRAME_BUFFER] Drawing: 'HUM : 64.9 %' at (x:0, y:32, Font_7x10)",
      "[DMA1_CH6] Circular DMA display buffer transfer complete (20 FPS stable, 0% CPU overhead)",
    ],
  },
  lora: {
    title: "LoRa SX1278 (433MHz) Multi-Node Mesh Hardware",
    chip: "ESP32 + Arduino Nano Dual-Node LoRa Transceivers",
    badge: "WIRELESS MESH",
    codeSnippet: `void LoRa_Transmit_Encrypted(uint8_t destNode, uint8_t *payload, uint8_t len) {
    uint8_t cipher[64];
    AES_128_CBC_Encrypt(payload, len, aes_key, cipher);
    LoRa.beginPacket();
    LoRa.write(destNode);
    LoRa.write(localNodeID);
    LoRa.write(cipher, len);
    LoRa.endPacket(); // 433.05 MHz TX
}`,
    lines: [
      "[SX1278] Initialized SPI1 (MOSI:27, MISO:19, SCK:5, NSS:18, DIO0:26)",
      "[RADIO] Freq: 433.05 MHz | Spreading Factor: SF12 | Bandwidth: 125 kHz | CR: 4/5",
      "[SECURITY] AES-CBC-128 Encryption initialized with secret key hash",
      "[MESH_ROUTING] Dynamic route discovery initiated across field nodes:",
      "  -> Node 01 (Base): RSSI -68 dBm, SNR: +8.5 dB (DIRECT LINK OK)",
      "  -> Node 02 (Relay): RSSI -84 dBm, SNR: +4.2 dB (HOP 1 OK)",
      "  -> Node 03 (Sensor Node): RSSI -96 dBm, SNR: -1.2 dB (ROUTED VIA NODE 02)",
      "[GPS] NEO-6M Fix acquired: Latitude 13.0827° N, Longitude 80.2707° E, Sats: 8",
      "[PACKET_DISPATCH] 48 bytes AES ciphertext sent -> ACK received in 84ms",
      "[METRIC] Tested packet delivery rate: 96.4% across 500 field transmissions",
    ],
  },
  robot: {
    title: "ESP32 & Arduino Uno Autonomous Mechatronic Controller",
    chip: "Dual MCU Architecture · Voice, IR & Mobile App Control",
    badge: "MECHATRONICS",
    codeSnippet: `void loop() {
    uint16_t gasLevel = analogRead(MQ2_PIN);
    if (gasLevel > GAS_THRESHOLD) {
        triggerEmergencyBuzzer();
        broadcastHazardAlert(gasLevel);
    }
    handleMultiModeInputs(); // Voice / Line / Obstacle / IR / App
}`,
    lines: [
      "[ROBOT_INIT] Hardware self-test started on dual MCU bus (ESP32 <-> Arduino Uno)",
      "[MOTORS] L298N dual H-bridge initialized: Left & Right PWM channels 0-255",
      "[SENSORS] HC-SR04 ultrasonic rangefinder active: Ping distance 48.2 cm",
      "[LINE_TRACK] 3-Channel infrared reflective array calibrated: On-track",
      "[GAS_SENSOR] MQ-2 electrochemical sensor heated and analog ADC zeroed: 112 ppm (NORMAL)",
      "[BLUETOOTH] Smartphone mobile telemetry bridge connected: Handshake OK",
      "[VOICE_CMD] Voice recognition module standby: Listening for directional commands",
      "[OBSTACLE_AVOID] Path clear. Cruising speed 65% PWM duty cycle",
      "[SAFETY_INTERLOCK] Auto-stop latency verified: <35ms reaction on sudden obstruction",
    ],
  },
  picsim: {
    title: "PIC16F877A Microwave Oven Automation System",
    chip: "8-bit Microchip PIC @ 20MHz · MPLAB X XC8",
    badge: "APPLIANCE FIRMWARE",
    codeSnippet: `void __interrupt() ISR(void) {
    if (TMR1IF) {
        TMR1IF = 0;
        TMR1 = 0x3CAF; // 10ms tick
        if (++tick_count >= 100) {
            tick_count = 0;
            sec_counter--;
            CLCD_Display_Time(sec_counter);
        }
    }
}`,
    lines: [
      "[PIC_INIT] Oscillator: 20 MHz | Configuration Bits: HS, WDT OFF, LVP OFF",
      "[TRIS] PORTB configured as 4x3 Keypad Matrix inputs with weak pull-ups",
      "[CLCD] 16x2 Display initialized: 4-bit mode (RS:RD2, EN:RD3, DATA:RD4-RD7)",
      "[LCD_PRINT] Line 1: 'MODE: MICRO 80%' | Line 2: 'TIME: 02:45 [RUN]'",
      "[TMR1] 10ms interrupt tick configured (T1CON: Prescaler 1:8, TMR1ON=1)",
      "[PWM] CCP1 module configured for microwave magnetron heater control: 80% duty",
      "[DOOR_SW] Safety interlock on RB0: CLOSED (Heater Enabled)",
      "[BUZZER] Timer completed -> 5-second beep sounded -> 'Enjoy your meal!'",
    ],
  },
};

export function TelemetryConsole() {
  const [activeProg, setActiveProg] = useState<SimProgram>("stm32");
  const [running, setRunning] = useState(false);
  const [visibleCount, setVisibleCount] = useState<number>(
    programData.stm32.lines.length
  );
  const [showCode, setShowCode] = useState(false);

  const current = programData[activeProg];

  const runSimulation = () => {
    setRunning(true);
    setVisibleCount(1);
    let count = 1;
    const interval = setInterval(() => {
      count++;
      setVisibleCount(count);
      if (count >= current.lines.length) {
        clearInterval(interval);
        setRunning(false);
      }
    }, 150);
  };

  const switchTab = (p: SimProgram) => {
    setActiveProg(p);
    setVisibleCount(programData[p].lines.length);
    setRunning(false);
  };

  return (
    <div className="rounded-2xl border border-[#38BDF8]/25 bg-[#0E1422] p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
      {/* Console Top Toolbar */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-[#1E293B] pb-4">
        <div className="flex items-center gap-2.5">
          <span className="flex size-3 rounded-full bg-[#ef4444]" />
          <span className="flex size-3 rounded-full bg-[#f59e0b]" />
          <span className="flex size-3 rounded-full bg-[#38BDF8]" />
          <span className="ml-2 font-mono text-xs font-bold uppercase tracking-wider text-[#F8FAFC]">
            Interactive Firmware &amp; Architecture Console
          </span>
        </div>

        {/* Program Buttons */}
        <div className="flex flex-wrap gap-1 rounded-xl border border-[#38BDF8]/20 bg-[#070A11] p-1">
          {(["stm32", "lora", "robot", "picsim"] as SimProgram[]).map((p) => {
            const labels: Record<SimProgram, string> = {
              stm32: "STM32 OLED",
              lora: "LoRa SX1278",
              robot: "Robot Bot MCU",
              picsim: "PIC Microwave",
            };
            return (
              <button
                key={p}
                type="button"
                onClick={() => switchTab(p)}
                className={`rounded-lg px-3 py-1.5 font-mono text-xs transition-all cursor-pointer ${
                  activeProg === p
                    ? "bg-[#38BDF8] text-[#070A11] font-bold shadow-[0_0_12px_rgba(56,189,248,0.25)]"
                    : "text-[#94A3B8] hover:text-[#F8FAFC]"
                }`}
              >
                {labels[p]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Program Metadata Bar */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
        <div className="flex items-center gap-2">
          <CircuitBoard className="size-4 text-[#38BDF8]" />
          <span className="font-bold text-[#F8FAFC]">{current.title}</span>
          <span className="hidden sm:inline text-neutral-600">·</span>
          <span className="hidden sm:inline text-[#94A3B8]">{current.chip}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => setShowCode(!showCode)}
            className="inline-flex items-center gap-1 rounded-md border border-[#38BDF8]/25 bg-[#070A11] px-2.5 py-1 text-xs text-[#38BDF8] hover:bg-[#38BDF8]/10 cursor-pointer"
          >
            <Code2 className="size-3" />
            {showCode ? "Hide Firmware" : "View Driver C"}
          </button>
          <span className="rounded bg-[#38BDF8]/15 px-2 py-0.5 text-[10px] font-bold text-[#38BDF8]">
            {current.badge}
          </span>
        </div>
      </div>

      {/* Code Snippet Drawer */}
      {showCode && (
        <div className="mt-4 overflow-hidden rounded-xl border border-[#38BDF8]/20 bg-[#070A11] p-4 font-mono text-xs">
          <div className="mb-2 flex items-center justify-between border-b border-[#1E293B] pb-2 text-[10px] text-[#64748B]">
            <span>EMBEDDED C SOURCE SNIPPET</span>
            <span className="text-[#38BDF8]">driver.c</span>
          </div>
          <pre className="overflow-x-auto text-[#CBD5E1]">
            <code>{current.codeSnippet}</code>
          </pre>
        </div>
      )}

      {/* Terminal Output Window */}
      <div className="mt-4 overflow-hidden rounded-xl border border-[#1E293B] bg-[#070A11] p-4 font-mono text-xs">
        <div className="mb-3 flex items-center justify-between border-b border-[#1E293B] pb-2 text-[11px]">
          <span className="flex items-center gap-1.5 text-[#38BDF8]">
            <Terminal className="size-3.5" />
            <span>SERIAL / UART DIAGNOSTIC STREAM (115200 BAUD)</span>
          </span>
          <button
            type="button"
            onClick={runSimulation}
            disabled={running}
            className="inline-flex items-center gap-1 rounded bg-[#38BDF8] px-2.5 py-0.5 font-mono text-[10px] font-bold text-[#070A11] hover:bg-[#7dd3fc] disabled:opacity-50 cursor-pointer"
          >
            <Play className="size-2.5 fill-current" />
            {running ? "STREAMING..." : "RE-RUN TELEMETRY"}
          </button>
        </div>

        <div className="space-y-1.5 text-[11px] leading-relaxed">
          {current.lines.slice(0, visibleCount).map((line, i) => {
            const isError = line.includes("ERR") || line.includes("OVERHEAD");
            const isSuccess =
              line.includes("OK") ||
              line.includes("complete") ||
              line.includes("stable") ||
              line.includes("Acquired");
            const isHighlight =
              line.includes("72MHz") ||
              line.includes("96.4%") ||
              line.includes("Fix acquired") ||
              line.includes("<35ms");

            return (
              <div
                key={i}
                className={`flex items-start gap-2 ${
                  isHighlight
                    ? "font-bold text-[#38BDF8]"
                    : isSuccess
                    ? "text-emerald-400"
                    : isError
                    ? "text-rose-400"
                    : "text-[#94A3B8]"
                }`}
              >
                <span className="text-[#64748B] select-none">{String(i + 1).padStart(2, "0")}</span>
                <span>{line}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
