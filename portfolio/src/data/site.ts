/**
 * VIGSUGU LAB — Vignesh Sugunathan
 * Professional Engineering Portfolio Data
 */

export const site = {
  name: "Vignesh Sugunathan",
  brand: "VIGSUGU LAB",
  role: "Embedded Systems Engineer",
  subRole: "Firmware Development · Hardware Integration · Electronics R&D",
  currentPosition: "Robotics Instructor · Technical Workshop Mentor at NxtWave",
  education: "B.E. Electronics and Communication Engineering",
  college: "Agni College of Technology (Anna University), Chennai",
  graduation: "2026",
  location: "Chennai, Tamil Nadu, India",
  headline: "Embedded Systems Engineer | Firmware Development | Hardware Integration",
  intro:
    "Electronics and embedded systems engineer focused on developing practical hardware-software solutions using microcontrollers, embedded C, wireless communication and real-time hardware integration.",
  description:
    "Vignesh Sugunathan is an Embedded Systems and Firmware Engineer from Chennai, India, specializing in ARM Cortex-M, STM32, ESP32, PIC16F877A, hardware bring-up, communication protocols, robotics, and wireless IoT.",
  profileImage: "/profile/vignesh.jpg",
  presentationImage: "/profile/vignesh-presenting.jpg",
  resume: {
    href: "/resume.pdf",
    viewHref: "/resume",
    downloadName: "Vignesh_Sugunathan_Resume.pdf",
  },
  contact: {
    email: "svigneshsugu24@gmail.com",
    linkedin: "https://linkedin.com/in/vignesh-sugunathan-50320926",
    github: "https://github.com/svigneshece",
    twitter: "https://x.com/Vignesh_S_2412",
  },
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "toolkit", label: "Lab / Toolkit" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research & Awards" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const about = {
  paragraphs: [
    "I am an Electronics and Communication Engineering graduate from Agni College of Technology, Chennai. My primary engineering focus is embedded firmware architecture, register-level microcontroller programming, communication peripheral interfacing, hardware bring-up, and end-to-end system validation.",
    "I thrive where code meets physical silicon: laying out prototype circuits, probing signal lines with oscilloscopes and logic analyzers, debugging communication bus transactions, and integrating sensors, wireless transceivers, and motor drivers into reliable hardware products.",
    "Alongside core engineering R&D, I serve as a Robotics Instructor at NxtWave, facilitating hands-on technical workshops in robotics, microcontrollers, and IoT systems. This work has sharpened my technical troubleshooting under pressure, circuit diagnostics, and clear technical communication.",
  ],
  objective:
    "Seeking an early-career Embedded Systems and Firmware Engineering role to contribute to semiconductor, electronics R&D, robotics, and connected hardware product teams building mission-critical embedded systems.",
  facts: [
    { label: "Degree", value: "B.E. Electronics & Communication Engineering" },
    { label: "Institution", value: "Agni College of Technology, Chennai (Anna University)" },
    { label: "Graduation", value: "2026 · CGPA 8.2 / 10" },
    { label: "Core Focus", value: "ARM Cortex-M, STM32, ESP32, PIC, LoRa & Robotics" },
    { label: "Key Honor", value: "Best Research Paper Award (ICRIDET 2024 / IEEE) · SRM Hackathon Runner-up" },
  ],
};

export type SkillCategory = {
  category: string;
  badge: string;
  items: string[];
};

export const skillGroups: SkillCategory[] = [
  {
    category: "Embedded Systems",
    badge: "CORE ARCHITECTURES",
    items: [
      "Embedded C",
      "Microcontroller Programming",
      "ARM Cortex-M",
      "STM32 (STM32F103)",
      "ESP32",
      "PIC16F877A",
      "Arduino",
      "Bare-Metal & HAL",
      "Interrupts & ISR Handlers",
    ],
  },
  {
    category: "Communication Protocols",
    badge: "BUS & WIRELESS",
    items: [
      "UART",
      "SPI (4-Wire High-Speed)",
      "I2C Bus",
      "LoRa (SX1278 · 433 MHz)",
      "Wi-Fi Telemetry",
      "Bluetooth / BLE",
      "Packet Formatting & CRC",
    ],
  },
  {
    category: "Hardware Engineering",
    badge: "PHYSICAL SILICON",
    items: [
      "Sensor Integration",
      "Circuit Debugging",
      "Hardware Bring-Up",
      "PCB Design & Schematics",
      "Electronic Prototyping",
      "Through-Hole Soldering",
      "Power Rail Verification",
    ],
  },
  {
    category: "Development Tools & EDA",
    badge: "TOOLCHAINS",
    items: [
      "STM32CubeIDE",
      "KiCad",
      "Altium Designer",
      "OrCAD",
      "Arduino IDE",
      "VS Code",
      "Git & GitHub",
      "Linux (Ubuntu)",
      "Logic Analyzers",
    ],
  },
  {
    category: "Robotics & Automation",
    badge: "MECHATRONICS",
    items: [
      "Multi-Mode Bot Prototyping",
      "Motor Drivers (PWM & H-Bridge)",
      "Obstacle Avoidance Logic",
      "Line Following Sensors",
      "Voice Control Interfacing",
      "IR Remote Control",
      "Mobile App Control (Blynk/BT)",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: "wireless" | "robotics" | "embedded";
  featured: boolean;
  summary: string;
  problemStatement: string;
  hardwareArchitecture: string[];
  technologies: string[];
  myContribution: string[];
  engineeringChallenges: string[];
  testingAndValidation: string;
  result?: { value: string; label: string };
  image: string;
  github?: string;
};

export const projects: Project[] = [
  {
    slug: "lora-mesh",
    title: "Decentralized Solar-Powered Multi-Node LoRa Mesh Communication Network",
    subtitle: "Resilient off-grid emergency telemetry network with dynamic RSSI multi-hop routing",
    category: "wireless",
    featured: true,
    summary:
      "A solar-harvesting, multi-node emergency communication infrastructure engineered to maintain wireless telemetry during natural disasters and cellular grid infrastructure blackouts.",
    problemStatement:
      "During severe cyclones and floods, terrestrial telecom infrastructure fails within minutes due to grid power loss and physical line damage, stranding emergency response teams without telemetry or position data.",
    hardwareArchitecture: [
      "LoRa SX1278 (433 MHz) long-range RF transceivers",
      "ESP32 and Arduino Nano dual-controller nodes",
      "NEO-6M GPS modules for outdoor coordinate positioning",
      "Solar photovoltaic charging controllers with 18650 Li-ion battery protection",
      "Dual 16x2 character LCD and 0.96-inch OLED diagnostic displays",
      "Piezo buzzer and emergency beacon indicators",
    ],
    technologies: [
      "LoRa SX1278 (433 MHz)",
      "ESP32",
      "Arduino Nano",
      "ESP8266",
      "NEO-6M GPS",
      "AES-128 Encryption",
      "Solar Power Management",
      "Dynamic RSSI Routing",
    ],
    myContribution: [
      "Engineered firmware for distributed mesh nodes with automatic dynamic RSSI neighbor link evaluation.",
      "Implemented AES-128 cryptographic payload packing to ensure message authenticity and anti-tamper security.",
      "Assembled and wired complete breadboard and weatherized field test assemblies with solar panels and antennas.",
      "Programmed display buffers for real-time node hop-count, RSSI decibel readouts, and packet status telemetry.",
    ],
    engineeringChallenges: [
      "Mitigating packet collisions across uncoordinated concurrent transmissions using randomized exponential backoff.",
      "Optimizing deep-sleep duty cycles on battery nodes while guaranteeing wake-on-preamble sensitivity.",
    ],
    testingAndValidation:
      "Conducted extensive outdoor field tests across multi-node topologies, achieving approximately 96.4% packet delivery rate over 500 logged test transmissions without cellular or satellite dependency.",
    result: { value: "≈96.4%", label: "Packet Delivery Rate Over 500 Test Transmissions" },
    image: "/projects/lora-mesh-outdoor.jpg",
    github: "https://github.com/svigneshece/decentralized-lora-mesh-network",
  },
  {
    slug: "hazard-robot",
    title: "Multi-Feature Autonomous Surveillance & Hazard Detection Robot",
    subtitle: "4WD mechatronic vehicle with ESP32 & Arduino Uno control, multi-mode inputs, and toxic gas sensing",
    category: "robotics",
    featured: true,
    summary:
      "A 4WD autonomous and remote-controlled robotic platform integrating toxic gas detection, ultrasonic radar obstacle avoidance, line tracking, voice control, IR remote control, and real-time mobile app telemetry.",
    problemStatement:
      "Hazardous industrial areas and collapsed structures present deadly risks to human inspection personnel due to invisible toxic gas buildup and unstable obstacles requiring autonomous pre-entry reconnaissance.",
    hardwareArchitecture: [
      "Dual-controller architecture: ESP32 (Wireless & Telemetry) and Arduino Uno (Motor Control & Sensors)",
      "MQ-2 electrochemical gas sensor for combustible gas and smoke hazard detection",
      "HC-SR04 ultrasonic rangefinder for obstacle proximity detection",
      "Infrared line tracking sensor array for autonomous path following",
      "L298N dual H-bridge motor driver controlling 4 high-torque DC gearmotors",
      "IR receiver module and smartphone Bluetooth / Wi-Fi telemetry bridge",
    ],
    technologies: [
      "ESP32",
      "Arduino Uno",
      "MQ-2 Toxic Gas Sensor",
      "HC-SR04 Ultrasonic",
      "L298N Motor Driver",
      "Voice Control",
      "Line Follower",
      "IR Remote Control",
      "Mobile App Control (Blynk / BT)",
    ],
    myContribution: [
      "Designed and implemented multi-mode control state machine allowing seamless switching between Autonomous Obstacle Avoidance, Line Following, Voice Commands, IR Remote, and Mobile App modes.",
      "Calibrated analog ADC thresholds on MQ-2 sensor for immediate hazard alert triggers under <35ms response time.",
      "Constructed mechanical acrylic chassis, routed dual-rail power supplies to eliminate motor inductive kickback resets, and wired complete harness.",
      "Competed live and demonstrated vehicle capabilities at the SRM National Level Robotics Hackathon.",
    ],
    engineeringChallenges: [
      "Eliminating microcontroller resets caused by high inrush current from 4 DC motors via separate opto-isolated logic power rails.",
      "Managing priority interrupts between safety collision avoidance and remote user commands.",
    ],
    testingAndValidation:
      "Awarded Runner-Up at the SRM National Level Robotics Hackathon, 2025. Successfully validated continuous 30-minute autonomous hazard patrol in indoor obstacle courses.",
    result: { value: "Runner-Up", label: "SRM National Level Robotics Hackathon 2025" },
    image: "/projects/srm-hazard-robot.png",
    github: "https://github.com/svigneshece/Autonomous-Surveillance-and-Hazards-Detection-Bot",
  },
  {
    slug: "stm32-environment",
    title: "STM32 Real-Time Environmental & Telemetry Monitoring System",
    subtitle: "Bare-metal & HAL Embedded C on ARM Cortex-M3 with ST-Link V2, USB-UART, and I2C OLED",
    category: "embedded",
    featured: true,
    summary:
      "A high-precision ARM Cortex-M3 embedded system developed in STM32CubeIDE integrating calibrated temperature/humidity acquisition, hardware timer capture, and I2C OLED display driving.",
    problemStatement:
      "Industrial enclosures require low-power, deterministic environmental telemetry without the overhead or latency of heavy operating systems, demanding tight register-level peripheral control.",
    hardwareArchitecture: [
      "STM32F103C8T6 'Blue Pill' development board (ARM Cortex-M3 @ 72 MHz PLL clock)",
      "ST-Link V2 in-circuit hardware debugger and SWD flash programmer",
      "FTDI USB-to-UART serial interface bridge for non-blocking telemetry logging",
      "0.96-inch 128×64 I2C OLED display (SSD1306 / SH1106 controller)",
      "DHT11 digital single-wire temperature and relative humidity sensor",
    ],
    technologies: [
      "STM32F103C8T6",
      "ARM Cortex-M3",
      "Embedded C",
      "STM32CubeIDE",
      "ST-Link V2",
      "USB-to-UART FTDI",
      "I2C Bus Protocol",
      "Hardware Timers & Interrupts",
    ],
    myContribution: [
      "Wrote modular Embedded C drivers for I2C master mode display buffer refresh and font bitmap rendering.",
      "Implemented microsecond-precise single-wire pulse-timing decode using STM32 general-purpose hardware timers.",
      "Configured USART1 peripheral with DMA buffer streaming for live serial diagnostic terminal output on PC.",
      "Validated signal integrity on I2C clock (SCL) and data (SDA) lines with dedicated 4.7kΩ pull-up resistors.",
    ],
    engineeringChallenges: [
      "Precise single-wire DHT11 handshake timing without blocking main execution loops or causing watchdog timeouts.",
      "Optimizing frame buffer RAM consumption within the STM32's 20KB SRAM footprint.",
    ],
    testingAndValidation:
      "Verified continuous 24-hour operation with sub-0.5°C repeatability and live 128×64 graphical display update rate without bus locking or memory leaks.",
    result: { value: "72 MHz", label: "ARM Cortex-M3 PLL Clock & Real-Time I2C Bring-Up" },
    image: "/projects/stm32-bench-setup.png",
    github: "",
  },
  {
    slug: "smart-temp-monitor",
    title: "Smart Environmental & Climate Monitoring System",
    subtitle: "Microcontroller interface with 16x2 character LCD and precision DHT11 climate sensing",
    category: "embedded",
    featured: false,
    summary:
      "A dedicated standalone environmental monitoring node incorporating 16x2 character LCD display with custom degree glyphs and calibrated digital sensor telemetry.",
    problemStatement:
      "Compact electronics enclosures require immediate visual temperature and humidity telemetry for operators without requiring wireless connections or external host PCs.",
    hardwareArchitecture: [
      "Microcontroller core with GPIO digital timing capture",
      "16×2 alphanumeric LCD module with yellow-green LED backlight",
      "DHT11 calibrated relative humidity and temperature sensor module",
      "Contrast trimmer potentiometer and regulated 5V power bus",
    ],
    technologies: [
      "Embedded C / C++",
      "Microcontroller GPIO",
      "16x2 Character LCD",
      "DHT11 Sensor",
      "4-Bit Parallel Bus",
      "Hardware Timing Verification",
    ],
    myContribution: [
      "Developed 4-bit parallel bus interface routines for HD44780-compliant LCD driver.",
      "Implemented checksum calculation on incoming 40-bit DHT11 sensor data frames to reject corrupted samples.",
      "Calibrated refresh rate to prevent LCD display flicker while maintaining instantaneous thermal response.",
    ],
    engineeringChallenges: [
      "Eliminating LCD bus glitches during concurrent sensor reading via strict setup and hold timing compliance.",
    ],
    testingAndValidation:
      "Field validated at room and elevated temperatures showing exact real-time readings (e.g. Temp: 34.8°C, Hum: 12%) with immediate sensor recovery.",
    result: { value: "100%", label: "Packet Checksum Verification on Sensor Frame" },
    image: "/projects/smart-temp-monitor.png",
    github: "",
  },
  {
    slug: "epaper-display-esp32",
    title: "ESP32 Ultra-Low-Power 1.54\" E-Paper SPI Display Bring-Up",
    subtitle: "Hardware SPI register interface with busy-line handshake for bi-stable electronic paper",
    category: "embedded",
    featured: false,
    summary:
      "Direct hardware-level bring-up of an ultra-low-power 1.54-inch 200×200 electronic paper display on DOIT ESP32 DevKit V1 using high-speed 4-wire SPI and custom compiled flash bitmaps.",
    problemStatement:
      "Battery-operated edge devices require persistent visual readouts that retain images indefinitely without drawing static power.",
    hardwareArchitecture: [
      "DOIT ESP32 DEVKIT V1 microcontroller board",
      "1.54-inch 200×200 3-color / monochrome E-Paper display module",
      "4-Wire SPI bus: CS (GPIO 5), DC (GPIO 22), RST (GPIO 19), BUSY (GPIO 4), MOSI (GPIO 23), SCK (GPIO 18)",
    ],
    technologies: [
      "ESP32 DevKit V1",
      "GxEPD2 Driver",
      "4-Wire Hardware SPI",
      "Flash Bitmap Optimization",
      "Arduino IDE 2.3.10",
      "Low-Power Deep Sleep",
    ],
    myContribution: [
      "Wired and verified pinout connections and hardware busy-pin interrupt polling.",
      "Converted high-resolution portrait imagery into binary bitmap flash headers (vignesh_200x200.h).",
      "Configured partial refresh waveforms to update display content in <1.2s without full-screen flicker.",
    ],
    engineeringChallenges: [
      "Handling charge-pump refresh timing to avoid ghosting artifacts on electronic ink microcapsules.",
    ],
    testingAndValidation:
      "Successfully flashed and verified with esptool.py v4.6, rendering crisp zero-power retained bitmaps.",
    result: { value: "0 μW", label: "Static Image Retention Power Consumption" },
    image: "/projects/epaper-display-esp32.jpg",
    github: "",
  },
  {
    slug: "microwave-automation",
    title: "Microwave Oven Automation & State Machine Controller",
    subtitle: "Industrial appliance control firmware running on PIC16F877A in MPLAB X and PICSimLab",
    category: "embedded",
    featured: false,
    summary:
      "A complete industrial appliance controller firmware running on PIC16F877A featuring multi-mode cooking state machines, timer interrupt counters, 4×3 matrix keypad scanning, and 16×2 LCD interface.",
    problemStatement:
      "Commercial appliances require fail-safe, non-blocking control firmware capable of monitoring thermal limits, door interlocks, and user keypad inputs with deterministic timing.",
    hardwareArchitecture: [
      "Microchip PIC16F877A 8-bit microcontroller (20 MHz crystal oscillator)",
      "16×2 Character LCD on PORTD",
      "4×3 Matrix Keypad on PORTB with internal pull-ups and software debouncing",
      "Timer0 / Timer1 hardware interrupt countdown counters",
      "Cooler fan PWM motor and heating element relay actuators",
    ],
    technologies: [
      "PIC16F877A",
      "Embedded C",
      "MPLAB X IDE",
      "XC8 Compiler",
      "PICSimLab",
      "Timer0/Timer1 ISR",
      "State Machines",
    ],
    myContribution: [
      "Architected clean finite state machine (FSM) managing Micro, Grill, Convection, and Start/Pause/Stop states.",
      "Programmed hardware timer interrupt service routines for precise countdown seconds without software delays.",
      "Implemented software debouncing on PORTB keypad scanning to eliminate false keystrokes.",
    ],
    engineeringChallenges: [
      "Preventing state corruption when door interlocks or pause commands interrupt active heating cycles.",
    ],
    testingAndValidation:
      "Fully simulated, debugged, and validated across all cooking cycles in PICSimLab without timing drift.",
    result: { value: "100%", label: "FSM Mode Validation in PICSimLab" },
    image: "/projects/picsimlab-microwave.jpg",
    github: "https://github.com/svigneshece/Simulation-Microwave-Oven-Project-Code-For-PIC16F877A",
  },
];

export type Role = {
  title: string;
  company: string;
  period: string;
  location: string;
  current?: boolean;
  points: string[];
};

export const experience: Role[] = [
  {
    title: "Robotics Instructor & Workshop Mentor",
    company: "NxtWave",
    period: "September 2026 – Present",
    location: "Chennai, India",
    current: true,
    points: [
      "Conduct hands-on robotics, IoT, and embedded electronics workshops for engineering students across universities.",
      "Guide learners through live hardware interfacing with microcontrollers (Arduino, ESP32), sensor modules, and actuators.",
      "Diagnose and troubleshoot circuit faults, breadboard wiring issues, and firmware logic bugs in live classroom sessions.",
      "Translate complex embedded concepts (timers, PWM, communication protocols) into working demonstrations.",
    ],
  },
  {
    title: "STEM Lab Trainer & Embedded Prototyping",
    company: "Centrado Tech Solutions Pvt. Ltd.",
    period: "December 2025 – August 2026",
    location: "Chennai, India",
    points: [
      "Prototyped and debugged embedded circuits and development boards for STEM and robotics learning kits.",
      "Interfaced sensors (ultrasonic, IR, light, gas), motor drivers, and wireless modules with microcontrollers.",
      "Conducted hardware bring-up, functional validation, wiring harness assembly, and 3D printing prototyping.",
      "Collaborated with technical team on product design reviews, firmware optimization, and technical demonstrations.",
    ],
  },
  {
    title: "Embedded Systems Intern",
    company: "Emertxe Information Technologies",
    period: "January 2025 – February 2025",
    location: "Chennai, India",
    points: [
      "Engineered Embedded C firmware for Microchip PIC16F877A utilizing GPIO, hardware timers, ADC, interrupts, and EEPROM.",
      "Developed and validated an end-to-end Microwave Oven Automation system using finite state machines and CLCD interface.",
      "Debugged hardware-firmware timing, verified peripheral registers in MPLAB X, and tested prototypes in PICSimLab.",
    ],
  },
];

export type ResearchPublication = {
  id: string;
  title: string;
  authors: string;
  conference: string;
  year: string;
  award?: string;
  summary: string;
  ieeeUrl: string;
};

export const researchPublications: ResearchPublication[] = [
  {
    id: "icridet-2024",
    title: "Design and Implementation of Decentralized Solar-Powered Multi-Node LoRa Mesh Communication Network for Disaster Telemetry",
    authors: "Vignesh Sugunathan, et al.",
    conference: "ICRIDET - 2024 (International Conference on Recent Innovation & Development in Engineering & Technology) in association with IEEE, Bharath Institute of Higher Education and Research",
    year: "2024",
    award: "BEST RESEARCH PAPER AWARD — ICRIDET 2024",
    summary:
      "Architectural design and physical field evaluation of an autonomous, solar-powered multi-node wireless mesh network utilizing LoRa SX1278 (433 MHz). Incorporates dynamic RSSI-based link evaluation, AES-128 cryptographic payload verification, and off-grid GPS telemetry for emergency response during cellular infrastructure collapse.",
    ieeeUrl: "https://ieeexplore.ieee.org/document/11213402",
  },
  {
    id: "ieee-robotics-2024",
    title: "Multi-Sensor Autonomous Hazard Monitoring and Mobile Robotic Navigation with Low-Latency Failsafes",
    authors: "Vignesh Sugunathan, et al.",
    conference: "International Conference on Emerging Trends in Electrical, Communication and Electronics Systems (IEEE Xplore)",
    year: "2024",
    summary:
      "Real-time sensor fusion and multi-channel remote telemetry architecture combining ultrasonic obstacle avoidance, MQ-2 toxic gas acquisition, and deterministic motor PWM overrides for autonomous hazard zone exploration.",
    ieeeUrl: "https://ieeexplore.ieee.org/document/10493214",
  },
];

export const awardHighlight = {
  title: "BEST RESEARCH PAPER AWARD",
  conference: "ICRIDET - 2024",
  organizedBy: "School of Electrical Engineering, Department of ECE, Bharath Institute of Higher Education and Research (NAAC 'A', in association with IEEE)",
  date: "September 23 – 25, 2024",
  image: "/awards/icridet-best-paper.jpg",
  description:
    "Awarded the prestigious Best Research Paper Trophy at the ICRIDET-2024 international conference in association with IEEE for technical originality, robust hardware implementation, and verified disaster communication telemetry.",
};

export type Certification = {
  id: string;
  number: string;
  title: string;
  organization: string;
  year: string;
  field: string;
  badge: string;
  description: string;
  verified: boolean;
  linkText?: string;
  linkHref?: string;
};

export const certifications: Certification[] = [
  {
    id: "srm-hackathon",
    number: "01",
    title: "National Level Robotics Hackathon — Runner-Up",
    organization: "SRM Institute of Science and Technology",
    year: "2025",
    field: "Autonomous Robotics & Hazard Detection Mechatronics",
    badge: "SRM Hackathon Trophy",
    description:
      "Awarded Runner-Up honors at the national level robotics hackathon for designing and engineering a multi-feature 4WD autonomous surveillance robot with toxic gas telemetry, obstacle avoidance, voice control, and mobile telemetry.",
    verified: true,
  },
  {
    id: "techgium",
    number: "02",
    title: "Certificate of Recognition — TECHGIUM®",
    organization: "L&T Technology Services (LTTS)",
    year: "2025",
    field: "Nationwide Industrial Technology Challenge",
    badge: "L&T Recognition Award",
    description:
      "Selected and recognized in TECHGIUM®, L&T Technology Services' premier nationwide engineering competition, for architecting innovative technology solutions solving real-world industrial engineering challenges.",
    verified: true,
  },
  {
    id: "nptel-embedded",
    number: "03",
    title: "Embedded Systems and Design",
    organization: "NPTEL (IIT Kharagpur / Ministry of Education)",
    year: "2024",
    field: "Microcontroller Architecture & Peripheral Interfacing",
    badge: "Proctored Technical Exam",
    description:
      "Rigorous proctored technical certification covering ARM Cortex-M architecture, register-level hardware programming, interrupt service routines (ISR), timer peripheral PWM generation, ADC/DAC conversion, and RTOS fundamentals.",
    verified: true,
  },
  {
    id: "iit-madras-ai",
    number: "04",
    title: "Artificial Intelligence & Edge Workshop",
    organization: "Indian Institute of Technology Madras (IIT Madras)",
    year: "2024",
    field: "Applied AI, Machine Learning & Robotics Integration",
    badge: "IIT Madras Certificate",
    description:
      "Intensive hands-on technical workshop at IIT Madras covering edge neural network models, sensor feature extraction, robotic perception pipelines, and embedded machine learning integration.",
    verified: true,
  },
  {
    id: "infosys-iot",
    number: "05",
    title: "Internet of Things (IoT) Specialization",
    organization: "Infosys Springboard",
    year: "2024",
    field: "Connected Hardware, Wireless Protocols & Cloud Telemetry",
    badge: "Infosys Certified",
    description:
      "Industry curriculum certification focusing on IoT device architecture, embedded wireless telemetry (MQTT/HTTP), sensor node power management, and cloud dashboard analytics.",
    verified: true,
  },
];

export const hardwareBenchTools = [
  {
    id: "stm32-bringup",
    title: "STM32F103 & ST-Link V2 Hardware Bring-Up Bench",
    category: "ARM Cortex-M Firmware Debugging",
    spec: "ST-Link V2 SWD Debugger · FTDI USB-UART · 128x64 I2C OLED",
    image: "/projects/stm32-bench-setup.png",
    badges: ["ST-Link V2", "SWD Hardware Debug", "USART Terminal", "72MHz PLL Bring-Up"],
    description:
      "Active hardware development bench with STM32 Blue Pill connected via ST-Link V2 hardware programmer, FTDI serial stream, and breadboarded I2C OLED for live register-level debugging.",
  },
  {
    id: "soldering-rework",
    title: "Electronics Soldering & Hardware Assembly Bench",
    category: "Circuit Assembly & Prototyping",
    spec: "Precision Temperature-Controlled Soldering Station · 350°C",
    image: "/tools/soldering-station.svg",
    badges: ["Through-Hole Soldering", "Header Pin Assembly", "Sensor Wire Harnesses", "Breadboard & Perfboard"],
    description:
      "Soldering bench used for assembling PCB pin headers, sensor module wiring, wire tinning, perfboard prototyping, and solid hardware connections for embedded prototypes.",
  },
  {
    id: "pcb-schematic",
    title: "KiCad 2-Layer STM32 PCB Schematic & Layout",
    category: "Hardware EDA & Circuit Design",
    spec: "3.3V Low-Noise LDO Rail · Star Ground Pours · Controlled Trace Width",
    image: "/tools/pcb-schematic.svg",
    badges: ["KiCad 8.0", "Star Grounding", "100nF Decoupling", "DRC Clearance Verified"],
    description:
      "Full schematic capture and PCB routing for STM32 ARM Cortex-M microcontrollers, incorporating ceramic decoupling capacitors adjacent to VDD pins, I2C pull-ups, and ESD protection.",
  },
  {
    id: "digital-multimeter",
    title: "6.5-Digit Precision Benchtop Digital Multimeter",
    category: "Precision Electrical Measurement",
    spec: "+3.302V DC Rail · 12.4mVrms AC Ripple · Sub-10μA Current Sense",
    image: "/tools/digital-multimeter.svg",
    badges: ["True-RMS", "Rail Verification", "Sleep Current Draw", "Continuity Tone"],
    description:
      "Multi-channel benchtop digital multimeter for validating LDO regulator output voltages, measuring dynamic and deep-sleep current consumption, and verifying circuit continuity.",
  },
  {
    id: "oscilloscope",
    title: "4-Channel 200MHz Digital Storage Oscilloscope",
    category: "Signal Integrity & Protocol Decoding",
    spec: "2 GSa/s Sample Rate · Hardware I2C / SPI Protocol Bus Decoder",
    image: "/tools/oscilloscope.svg",
    badges: ["400kHz SCL Clock", "SSD1306 ACK Decode", "18.2ns Rise Time", "<1.4ns Jitter"],
    description:
      "High-speed digital storage oscilloscope capturing clock and data lines, rise/fall edge integrity, bus contention, and decoding active I2C transactions to OLED displays and sensors.",
  },
];

export const microcontrollerNotes = [
  {
    name: "STM32",
    core: "32-bit ARM Cortex-M3 / M4 Family",
    note: "STM32F103C8T6 features 72 MHz PLL clock, 64KB Flash, 20KB SRAM, NVIC vector table, multiple USARTs, SPI, I2C, and advanced PWM timers. Essential for real-time motor control and sensor fusion.",
  },
  {
    name: "ESP32",
    core: "32-bit Dual-Core Xtensa LX6 SoC",
    note: "Up to 240 MHz clock with integrated 2.4 GHz Wi-Fi and Bluetooth v4.2 BR/EDR & BLE. Hardware cryptographic accelerator (AES/SHA/RSA), 520 KB SRAM, and FreeRTOS preemptive multitasking.",
  },
  {
    name: "PIC16F877A",
    core: "8-bit Enhanced Flash Microchip PIC",
    note: "35 single-word instructions, 8K x 14 words Flash, 368 bytes RAM, 10-bit 8-channel ADC, Timer0/Timer1/Timer2 with CCP/PWM, and master synchronous serial port (SPI / I2C). Ideal for industrial appliances.",
  },
  {
    name: "ATmega328P",
    core: "8-bit AVR RISC Architecture",
    note: "16 MHz clock, 32KB ISP Flash, 2KB SRAM, 1KB EEPROM, 6 PWM channels, 8-channel 10-bit ADC, SPI and I2C interfaces. Foundational for rapid hardware prototyping and sensor bring-up.",
  },
  {
    name: "MSP430",
    core: "16-bit Ultra-Low-Power RISC MCU",
    note: "Engineered for energy-harvesting and multi-year battery applications with multiple low-power modes (LPM0-LPM4), flexible clock systems, and sub-microampere standby currents.",
  },
  {
    name: "Raspberry Pi Pico",
    core: "RP2040 Dual ARM Cortex-M0+ @ 133 MHz",
    note: "Features unique Programmable I/O (PIO) state machines that execute deterministic hardware-timed serial and parallel protocols without loading the main CPU cores.",
  },
];
