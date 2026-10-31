"use client";

import { useState } from "react";
import { Terminal, Play, Cpu, ShieldCheck, Code2, CircuitBoard } from "lucide-react";

type SimProgram = "stm32" | "lora" | "ros2" | "picsim";

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
      "[SENSORS] DHT11 acquisition on PA1: Temp = 24.8 °C, Humidity = 62% RH",
      "[RTC_SYNC] DS1307 real-time clock over I2C (0x68): 14:32:08 UTC+05:30",
      "[FRAME_BUFFER] Drawing: 'TEMP: 24.8 C' at (x:0, y:16, Font_7x10)",
      "[FRAME_BUFFER] Drawing: 'HUM : 62 %'  at (x:0, y:32, Font_7x10)",
      "[DMA1_CH6] Circular DMA display buffer transfer complete (20 FPS stable, 0% CPU overhead)",
    ],
  },
  lora: {
    title: "LoRa SX1278 (433MHz) Multi-Node Mesh Hardware",
    chip: "TTGO ESP32 LoRa + OLED Modules",
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
      "  ✓ Node A [Gateway Sink] -> RSSI: -74 dBm, SNR: +8.4 dB",
      "  ✓ Node B [Relay 01]     -> Hop Count: 1, Solar LiPo: 4.18V",
      "  ✓ Node C [Sensor Node]  -> GPS Lock: Lat 12.9716°N, Lon 80.2437°E",
      "[PACKET_TX] Broadcasting 48-byte encrypted payload over air...",
      "[PACKET_RX] ACK received from Gateway sink in 138ms",
      "[BENCHMARK] 500 field transmissions verified: 96.4% packet delivery rate",
    ],
  },
  ros2: {
    title: "ROS 2 Humble · Gazebo 3D & RViz SLAM Mapping",
    chip: "Ubuntu 22.04 LTS · CycloneDDS",
    badge: "AUTONOMOUS ROBOTICS",
    codeSnippet: `def cmd_vel_callback(self, msg: Twist):
    v = msg.linear.x
    w = msg.angular.z
    # Differential drive inverse kinematics
    v_left  = (2 * v - w * self.wheel_separation) / (2 * self.wheel_radius)
    v_right = (2 * v + w * self.wheel_separation) / (2 * self.wheel_radius)
    self.send_motor_pwm(v_left, v_right)`,
    lines: [
      "[ROS2] Initializing rclpy node /diff_drive_slam_controller",
      "[GAZEBO] Spawning URDF differential drive robot model into 3D world",
      "[TF2] Publishing transforms: map -> odom -> base_link -> laser_frame",
      "[LIDAR] /scan topic active: 360 laser range samples [0.12m - 8.0m]",
      "[SLAM] Generating 2D Occupancy Grid Costmap in RViz...",
      "[NAV_GOAL] 2D Nav Goal received: target (x: 4.50m, y: -2.10m, θ: 0.0)",
      "[PLANNER] DWA Local Planner computed velocity: v = 0.45 m/s, ω = 0.12 rad/s",
      "[STATUS] Real-time factor: 0.98 | Zero obstacle collisions recorded",
    ],
  },
  picsim: {
    title: "PIC16F877A Microwave Appliance Controller",
    chip: "8-bit PIC MCU · MPLAB X · PICSimLab",
    badge: "EMBEDDED APPLIANCE",
    codeSnippet: `void ISR_Timer1(void) interrupt 1 {
    if (PIR1bits.TMR1IF) {
        PIR1bits.TMR1IF = 0;
        TMR1 = TMR1_RELOAD_VALUE;
        if (cooking_active && sec_counter > 0) {
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
    <div className="rounded-2xl border border-[#B6E778]/25 bg-[#1B211D] p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
      {/* Console Top Toolbar */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-[#B6E778]/15 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="flex size-3 rounded-full bg-[#ef4444]" />
          <span className="flex size-3 rounded-full bg-[#f59e0b]" />
          <span className="flex size-3 rounded-full bg-[#B6E778]" />
          <span className="ml-2 font-mono text-xs font-bold uppercase tracking-wider text-[#F1F4EF]">
            Interactive Firmware &amp; Architecture Console
          </span>
        </div>

        {/* Program Buttons */}
        <div className="flex flex-wrap gap-1 rounded-lg border border-[#B6E778]/20 bg-[#101310] p-1">
          {(["stm32", "lora", "ros2", "picsim"] as SimProgram[]).map((p) => {
            const labels: Record<SimProgram, string> = {
              stm32: "STM32 OLED",
              lora: "LoRa SX1278",
              ros2: "ROS 2 SLAM",
              picsim: "PIC Microwave",
            };
            return (
              <button
                key={p}
                type="button"
                onClick={() => switchTab(p)}
                className={`rounded-md px-3 py-1.5 font-mono text-xs transition-all cursor-pointer ${
                  activeProg === p
                    ? "bg-[#B6E778] text-[#101310] font-bold shadow-[0_0_12px_rgba(182,231,120,0.3)]"
                    : "text-[#9EAA9A] hover:text-[#F1F4EF]"
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
          <CircuitBoard className="size-4 text-[#B6E778]" />
          <span className="font-bold text-[#F1F4EF]">{current.title}</span>
          <span className="hidden sm:inline text-neutral-600">·</span>
          <span className="hidden sm:inline text-[#9EAA9A]">{current.chip}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => setShowCode(!showCode)}
            className="inline-flex items-center gap-1 rounded-md border border-[#B6E778]/25 bg-[#101310] px-2.5 py-1 text-xs text-[#B6E778] hover:bg-[#B6E778]/10 cursor-pointer"
          >
            <Code2 className="size-3" />
            {showCode ? "View Serial Output" : "View C / Python Source"}
          </button>

          <button
            type="button"
            disabled={running}
            onClick={runSimulation}
            className="inline-flex items-center gap-1.5 rounded-md bg-[#B6E778] px-3 py-1 font-bold text-[#101310] hover:bg-[#cbf58f] transition-all disabled:opacity-50 cursor-pointer shadow-[0_0_12px_rgba(182,231,120,0.2)]"
          >
            <Play className="size-3 fill-current" />
            {running ? "Simulating..." : "Run Test"}
          </button>
        </div>
      </div>

      {/* Code Snippet View OR Terminal Viewport */}
      {showCode ? (
        <div className="mt-4 rounded-xl border border-[#B6E778]/20 bg-[#101310] p-4 font-mono text-xs leading-relaxed text-[#B6E778] overflow-x-auto min-h-[220px]">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#B6E778]/15 text-[11px] text-[#9EAA9A]">
            <span>SOURCE CODE IMPLEMENTATION</span>
            <span>C99 / Embedded C / rclpy</span>
          </div>
          <pre className="font-mono text-xs text-[#F1F4EF] whitespace-pre">
            {current.codeSnippet}
          </pre>
        </div>
      ) : (
        <div className="mt-4 rounded-xl border border-[#B6E778]/20 bg-[#101310] p-4 font-mono text-xs leading-relaxed text-[#F1F4EF] overflow-x-auto min-h-[220px]">
          <div className="space-y-1.5">
            {current.lines.slice(0, visibleCount).map((line, idx) => {
              let color = "text-[#F1F4EF]";
              if (line.includes("[OLED_INIT]") || line.includes("[OLED_CMD]"))
                color = "text-[#B6E778]";
              if (line.includes("ACK Received") || line.includes("complete") || line.includes("96.4%"))
                color = "text-[#B6E778] font-bold";
              if (line.includes("[FRAME_BUFFER]") || line.includes("✓"))
                color = "text-[#cbf58f]";
              if (line.includes("[SENSORS]") || line.includes("[RTC_SYNC]"))
                color = "text-[#9EAA9A]";
              return (
                <div key={idx} className="flex gap-2 font-mono">
                  <span className="select-none text-[#6D786A]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className={color}>{line}</span>
                </div>
              );
            })}
            {running && (
              <div className="flex items-center gap-2 text-[#9EAA9A]">
                <span className="inline-block size-2 animate-pulse bg-[#B6E778]" />
                <span>Streaming MCU telemetry packets...</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer Info */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-[#9EAA9A]">
        <span>BAUD: 115200 · PROTOCOL: I2C / SPI / UART · STATUS: BUFFER NOMINAL</span>
        <span className="text-[#B6E778] flex items-center gap-1 font-semibold">
          <ShieldCheck className="size-3.5" />
          Hardware Bring-Up &amp; Register Validated
        </span>
      </div>
    </div>
  );
}
