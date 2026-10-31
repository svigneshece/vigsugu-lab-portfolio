# VIGSUGU LAB — Vignesh Sugunathan

High-performance personal engineering portfolio built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Lucide Icons**.

---

## 🎨 Design System
- **Background**: `#101310` (Deep obsidian tech green)
- **Surface**: `#1B211D` (Matte PCB green-gray card elevation)
- **Accent**: `#B6E778` (Electric high-contrast engineering lime)
- **Text**: `#F1F4EF` (Clean high-legibility off-white)
- **Typography**: 
  - Headings & Body: **Geist Sans**
  - Subheadings & Specs: **Geist Mono**

---

## 🚀 Key Features

1. **Interactive Hardware Lab & Bench Visuals**:
   - ESP32 + 1.54" E-Paper SPI display live firmware bring-up photo (`GxEPD2`, 4-wire SPI pinout table, flash verification logs).
   - SMD Soldering & Hot Air Rework Bench (`public/tools/soldering-station.svg`).
   - KiCad 2-Layer STM32 PCB Schematic with star grounding & 100nF decoupling (`public/tools/pcb-schematic.svg`).
   - 6.5-Digit Benchtop Digital Multimeter measuring 3.3V rails & AC ripple (`public/tools/digital-multimeter.svg`).
   - 4-Channel 200MHz DSO with live 400kHz I2C bus decode (`public/tools/oscilloscope.svg`).
2. **Interactive Mission Telemetry Console**:
   - Live simulated firmware telemetry and register diagnostics for STM32, LoRa Mesh, ROS 2 / Gazebo, and PIC16F877A.
3. **Train Track Credential Milestones**:
   - Railway track timeline connecting 5 milestone stations:
     - Station 01: TECHGIUM® Certificate of Recognition (L&T Technology Services)
     - Station 02: Embedded Systems and Design (NPTEL / IITs)
     - Station 03: Artificial Intelligence Workshop (IIT Madras)
     - Station 04: Internet of Things Specialization (Infosys Springboard)
     - Station 05: International Conference Presentations (VIT & SSN / IEEE Xplore)
4. **ATS 100% Resume Engine**:
   - Two options: **View ATS Resume** (modal & clean web route at `/resume`) and **Download PDF**.
   - Print-ready stylesheet optimized for A4 paper and automated recruiter parsers.
5. **Privacy First**:
   - Mobile number completely hidden across the entire site. Contact channels are restricted to verified professional endpoints.
6. **Built-in Local Database**:
   - `/api/contact` route writes recruiter submissions to `data/messages.json`.

---

## 💻 Local Development

```powershell
cd portfolio
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 📦 Production Build

```powershell
npm run build
```

---

## 🌐 Deploying to Vercel (Fastest & Free)

### Option A: 1-Click with Vercel CLI (No Git required)
From inside the `portfolio` folder, run:
```powershell
npx vercel
```
Follow the 3 prompts (login with GitHub/Email, select project name, confirm settings). Your site will be live on a free `*.vercel.app` URL with SSL in under 1 minute!

### Option B: Via GitHub & Vercel Dashboard
1. Create a repository on GitHub (e.g. `vignesh-portfolio`).
2. Upload this `portfolio` folder.
3. Visit [vercel.com](https://vercel.com) and click **"Add New Project"**.
4. Import your GitHub repo, keep default settings, and click **Deploy**.
