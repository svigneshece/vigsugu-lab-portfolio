/**
 * VIGNESH. — Vignesh Sugunathan
 * Professional Engineering & Technical Educator Portfolio Data
 */

export const site = {
  name: "Vignesh Sugunathan",
  displayName: "VIGNESH",
  brand: "VIGNESH.",
  role: "Embedded Systems Engineer",
  subRole: "Firmware Development · Hardware Integration · IoT · Robotics",
  secondaryRoles: "Technical Educator · Robotics Instructor · STEM Trainer · Technical Mentor · Public Speaker",
  currentPosition: "Robotics Instructor · Technical Workshop Mentor at NxtWave",
  education: "B.E. Electronics and Communication Engineering",
  college: "Agni College of Technology (Anna University), Chennai",
  graduation: "2026",
  location: "Chennai, Tamil Nadu, India",
  headline: "Embedded Systems Engineer | Firmware Development | Hardware Integration | IoT | Robotics",
  intro:
    "An electronics engineer passionate about building practical engineering solutions through embedded systems, firmware development, hardware integration and robotics. Alongside technical development, I enjoy sharing knowledge, conducting workshops, mentoring students and making engineering accessible through practical learning.",
  description:
    "Vignesh Sugunathan (VIGNESH) is an Embedded Systems and Firmware Engineer from Chennai, India, specializing in ARM Cortex-M, STM32, ESP32, PIC16F877A, 8051, hardware bring-up, communication protocols, robotics, wireless IoT, and STEM technical education.",
  profileImage: "/profile/vignesh.jpg",
  presentationImage: "/profile/vignesh-speaker-presentation.jpg",
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
  { id: "expertise", label: "Expertise" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export const about = {
  heading: "Beyond Engineering, Into Innovation.",
  paragraphs: [
    "I am an Electronics and Communication Engineering graduate with a strong interest in embedded systems, firmware development, electronics and robotics.",
    "My engineering journey involves working with microcontrollers, developing hardware-based prototypes, exploring wireless communication and integrating hardware with software.",
    "Beyond engineering, I have been involved in technical education, robotics training, STEM workshops, student mentoring and technical presentations across schools and colleges.",
    "I believe engineering is not only about developing solutions but also about understanding problems, sharing knowledge and helping others learn.",
  ],
  objective:
    "Seeking early-career Embedded Systems and Firmware Engineering opportunities to contribute to semiconductor, electronics R&D, robotics, and connected hardware product teams building mission-critical embedded systems.",
  facts: [
    { label: "Degree", value: "B.E. Electronics & Communication Engineering" },
    { label: "Institution", value: "Agni College of Technology, Chennai (Anna University)" },
    { label: "Graduation", value: "2026 · CGPA 8.2 / 10" },
    { label: "Primary Role", value: "Embedded Systems Engineer (Firmware & Hardware)" },
    { label: "Secondary Role", value: "Technical Educator · Robotics Instructor · Workshop Mentor" },
    { label: "Key Honors", value: "Best Research Paper Award (ICRIDET 2024 / IEEE) · SRM Hackathon Runner-up" },
  ],
};

export const impactStats = [
  {
    value: "100+",
    label: "Projects Developed, Supported & Mentored",
    subtext: "Hands-on embedded prototypes, student capstone designs, and practical STEM builds.",
  },
  {
    value: "10,000+",
    label: "Student Interactions",
    subtext: "Delivered interactive workshops and technical demonstrations across schools and colleges.",
  },
  {
    value: "50+",
    label: "Technical Workshops",
    subtext: "Hands-on robotics, microcontroller, and IoT sessions conducted for learners.",
  },
  {
    value: "Multi-Field",
    label: "Engineering & Education",
    subtext: "Seamless blend of Embedded Systems, Robotics, Electronics, and Technical Knowledge Sharing.",
  },
];

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
      "ESP8266",
      "PIC16F877A",
      "8051 Architecture",
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
      "SPI (High-Speed 4-Wire)",
      "I2C Bus",
      "LoRa (SX1278 · 433 MHz)",
      "Wi-Fi Telemetry",
      "Bluetooth / BLE",
      "Packet Formatting & CRC",
    ],
  },
  {
    category: "Hardware and Electronics",
    badge: "PHYSICAL SILICON",
    items: [
      "Sensor Interfacing",
      "Hardware Integration",
      "Circuit Prototyping",
      "PCB Design",
      "Electronics Troubleshooting",
      "Hardware-Firmware Integration",
      "Through-Hole Soldering",
      "Power Rail Verification",
    ],
  },
  {
    category: "Development Tools",
    badge: "TOOLCHAINS & EDA",
    items: [
      "STM32CubeIDE",
      "KiCad",
      "Altium Designer",
      "OrCAD",
      "Arduino IDE",
      "Visual Studio Code",
      "Git & GitHub",
      "Proteus Simulation",
      "Logic Analyzers",
    ],
  },
  {
    category: "Robotics and Platforms",
    badge: "MECHATRONICS & SYSTEMS",
    items: [
      "ROS 2",
      "Ubuntu Linux",
      "Robotics Prototyping",
      "Sensor Integration",
      "Motor Control",
      "Obstacle Avoidance Logic",
      "Line Following Sensors",
      "Blynk / Mobile Control",
    ],
  },
];

export type ServiceItem = {
  id: string;
  title: string;
  category: "engineering" | "knowledge";
  tag: string;
  description: string;
  keywords: string[];
};

export const services: ServiceItem[] = [
  // Category A: Engineering Services
  {
    id: "embedded-firmware",
    title: "Embedded Firmware Development",
    category: "engineering",
    tag: "01 · FIRMWARE",
    description:
      "Architecting reliable Embedded C firmware for STM32 ARM Cortex-M, ESP32, and PIC microcontrollers with register-level peripheral interfacing, interrupt timers, and low-power modes.",
    keywords: ["Embedded C", "STM32", "ESP32", "HAL / Bare-Metal", "Interrupts & Timers"],
  },
  {
    id: "pcb-prototyping",
    title: "PCB Design & Electronics Prototyping",
    category: "engineering",
    tag: "02 · HARDWARE",
    description:
      "Schematic capture, PCB layout routing, component selection, power-rail conditioning, and hands-on breadboard to perfboard hardware prototyping.",
    keywords: ["KiCad", "Altium", "Schematics", "Circuit Prototyping", "Power Rails"],
  },
  {
    id: "iot-wireless",
    title: "IoT & Wireless Solutions",
    category: "engineering",
    tag: "03 · CONNECTIVITY",
    description:
      "Engineering connected edge systems using LoRa long-range RF, ESP32 Wi-Fi telemetry, Bluetooth LE, and multi-sensor acquisition for industrial or agricultural monitoring.",
    keywords: ["LoRa SX1278", "ESP32 / ESP8266", "Wi-Fi Telemetry", "Bluetooth", "Sensor Nodes"],
  },
  {
    id: "robotics-automation",
    title: "Robotics & Automation",
    category: "engineering",
    tag: "04 · MECHATRONICS",
    description:
      "Prototyping mobile autonomous robots, integrating motor drivers, ultrasonic rangefinders, line trackers, and toxic gas safety sensors with real-time control algorithms.",
    keywords: ["Autonomous Bots", "Motor Control", "Sensor Fusion", "Blynk / Remote", "Failsafes"],
  },
  {
    id: "hardware-integration",
    title: "Hardware Integration & Debugging",
    category: "engineering",
    tag: "05 · BRING-UP",
    description:
      "Diagnosing communication bus anomalies (I2C/SPI/UART), probing clock lines with oscilloscopes and logic analyzers, and solving hardware-firmware timing conflicts.",
    keywords: ["UART Debugging", "I2C/SPI Probing", "Logic Analyzers", "Signal Integrity", "Fault Analysis"],
  },

  // Category B: Professional & Knowledge Services
  {
    id: "technical-training",
    title: "Technical Training & Education",
    category: "knowledge",
    tag: "06 · WORKSHOPS",
    description:
      "Conducting hands-on educational sessions covering embedded systems fundamentals, microcontroller programming, and practical electronics circuit building.",
    keywords: ["Microcontrollers", "Embedded Fundamentals", "Live Demonstrations", "Interactive Labs"],
  },
  {
    id: "stem-robotics-education",
    title: "STEM & Robotics Education",
    category: "knowledge",
    tag: "07 · STEM MENTORSHIP",
    description:
      "Delivering school and college-level STEM curricula, robotics kits, block-based to text-based code transitions, and student project mentorship.",
    keywords: ["School STEM Labs", "Robotics Kits", "Hands-on Learning", "Youth Mentoring"],
  },
  {
    id: "public-speaking",
    title: "Public Speaking & Technical Presentations",
    category: "knowledge",
    tag: "08 · SPEAKING",
    description:
      "Presenting technical conference topics, conducting tech talks on embedded technologies and IoT, and engaging audiences with clear, structured communication.",
    keywords: ["Keynotes", "Tech Talks", "Conference Presentations", "Technical Storytelling"],
  },
  {
    id: "technical-mentoring",
    title: "Technical Mentoring & Project Guidance",
    category: "knowledge",
    tag: "09 · GUIDANCE",
    description:
      "Providing one-on-one and team guidance for engineering students on capstone hardware projects, sensor selection, firmware debugging, and architectural clarity.",
    keywords: ["Capstone Guidance", "Circuit Reviews", "Debugging Help", "Hardware Architecture"],
  },
  {
    id: "career-guidance",
    title: "Career & Placement Guidance",
    category: "knowledge",
    tag: "10 · CAREER PATHWAYS",
    description:
      "Orienting ECE students on core embedded domain career paths, technical interview preparation, portfolio structuring, and industry skill alignment without commercial placement guarantees.",
    keywords: ["ECE Career Awareness", "Interview Preparation", "Embedded Roadmap", "Portfolio Review"],
  },
];

export const teachingAndSpeaking = {
  sectionTitle: "Knowledge That Creates Impact",
  subtitle:
    "Inspiring students, conducting engineering workshops, and demonstrating practical electronics across schools and universities.",
  image: "/profile/vignesh-speaker-presentation.jpg",
  summary:
    "Beyond bench engineering, I actively share technical knowledge through interactive workshops, robotics bootcamps, and technical presentations. With over 10,000 student interactions at NxtWave, I bridge the gap between academic theory and physical, working silicon.",
  stats: [
    { label: "Learners Impacted", value: "10,000+" },
    { label: "Hands-on Workshops", value: "50+" },
    { label: "Curriculum Tracks", value: "Robotics & IoT" },
  ],
  pillars: [
    {
      title: "Interactive Live Demonstrations",
      desc: "Translating abstract registers, PWM duty cycles, and bus timing into working motors, sensors, and live telemetry on big screens.",
    },
    {
      title: "Real-Time Hardware Troubleshooting",
      desc: "Guiding learners through breadboard wiring faults, loose ground connections, and firmware compilation errors in real time.",
    },
    {
      title: "Empowering Next-Gen Engineers",
      desc: "Cultivating an engineering mindset where failure is seen as an opportunity for systematic circuit and code debugging.",
    },
  ],
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: "wireless" | "robotics" | "embedded" | "simulation";
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
      "GSM Module",
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
      "L298N dual H-bridge high-current motor driver board",
      "Voice recognition module and TSOP IR receiver for multi-modal commands",
      "Rechargeable high-drain Li-ion battery pack with regulated power rail",
    ],
    technologies: [
      "ESP32",
      "Arduino Uno",
      "MQ-2 Gas Sensor",
      "HC-SR04 Ultrasonic",
      "L298N H-Bridge",
      "Voice Recognition",
      "IR Remote Protocol",
      "Blynk IoT App",
      "Bluetooth SPP",
      "PWM Motor Speed Control",
    ],
    myContribution: [
      "Architected the dual-MCU firmware distributing time-critical motor PWM to Arduino Uno and network telemetry to ESP32.",
      "Integrated analog threshold ADC polling for MQ-2 gas sensor with immediate emergency motor shutdown failsafe.",
      "Programmed responsive ultrasonic obstacle avoidance routine with sub-35ms reaction latency.",
      "Developed custom smartphone interface via Blynk / Bluetooth for multi-mode switching (Autonomous, Line Follower, Voice, Manual Remote).",
    ],
    engineeringChallenges: [
      "Eliminating DC motor inductive kickback noise that caused microcontroller resets, resolved via flyback diode clamping and separate logic/motor battery rails.",
      "Managing concurrent sensor polling loops without blocking incoming voice or Bluetooth remote commands.",
    ],
    testingAndValidation:
      "Demonstrated at the SRM National Level Robotics Hackathon, successfully navigating dynamic obstacle courses and detecting smoke leaks in under 1.2 seconds, securing the Runner-up Award.",
    result: { value: "Runner-Up", label: "SRM National Level Robotics Hackathon" },
    image: "/projects/srm-hazard-robot-studio.jpg",
    github: "https://github.com/svigneshece/Autonomous-Surveillance-and-Hazards-Detection-Bot.git",
  },
  {
    slug: "stm32-environment",
    title: "STM32-Based Real-Time Environmental System & I2C OLED Driver",
    subtitle: "Bare-metal ARM Cortex-M3 firmware with I2C display driver, ST-Link V2, and sensor acquisition",
    category: "embedded",
    featured: true,
    summary:
      "A complete embedded bring-up featuring the STM32F103C8T6 (ARM Cortex-M3 @ 72 MHz) interfacing with a 0.96-inch SSD1306 I2C OLED display and DHT11 digital humidity/temperature sensor via register-level peripheral drivers.",
    problemStatement:
      "Industrial sensor nodes require deterministic low-latency data acquisition and direct peripheral bus control without bulky operating system overhead.",
    hardwareArchitecture: [
      "STM32F103C8T6 'Blue Pill' board (ARM Cortex-M3 @ 72 MHz PLL)",
      "ST-Link V2 USB in-circuit debugger and programmer",
      "USB-to-UART FTDI bridge module for live serial terminal telemetry",
      "0.96-inch 128x64 SSD1306 I2C OLED display module",
      "DHT11 digital single-wire temperature and humidity sensor",
      "Solderless breadboard with dedicated 4.7kΩ I2C pull-up resistors and decoupling capacitors",
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
    github: "https://github.com/svigneshece/Proteus-Project-Sources.git",
  },
  {
    slug: "accident-prevention",
    title: "Automatic Accident Prevention System",
    subtitle: "Automotive safety prototype with eye-blink interval monitoring and emergency ignition cutoff",
    category: "embedded",
    featured: true,
    summary:
      "An automotive safety embedded prototype featuring eye-blink interval monitoring for real-time driver drowsiness detection, warning alerts, and automated vehicle ignition cutoff interlocks.",
    problemStatement:
      "Driver fatigue and microsleep account for thousands of fatal highway collisions annually, requiring an autonomous, unobtrusive onboard safety interlock to intervene before an impact occurs.",
    hardwareArchitecture: [
      "Microcontroller core (ATmega328P / Arduino platform)",
      "IR phototransistor eye-blink sensor module with LM393 comparator",
      "Heavy-duty safety relay module for vehicle ignition cutoff simulation",
      "Audible piezo buzzer warning siren and status LEDs",
      "Regulated automotive 12V-to-5V DC-DC power step-down rail",
    ],
    technologies: [
      "Arduino",
      "Embedded C / C++",
      "IR Eye-Blink Sensor",
      "LM393 Comparator",
      "Safety Relay Interlock",
      "Interrupt Timers",
      "Automotive Failsafes",
    ],
    myContribution: [
      "Built an Arduino microcontroller interface connected to an IR phototransistor eye-blink sensor.",
      "Engineered drowsiness recognition logic detecting abnormal eye closure duration exceeding 2.0s threshold.",
      "Integrated emergency piezo buzzer siren and safety relay interlock for automated engine ignition cutoff.",
      "Achieved sub-50ms reaction latency during simulated drowsy driver trigger conditions.",
    ],
    engineeringChallenges: [
      "Filtering out false positives from rapid voluntary blinks versus true involuntary eyelid closures under varying ambient light.",
      "Ensuring failsafe relay coil de-energization in case of controller brownout.",
    ],
    testingAndValidation:
      "Simulated over 150 driver blink events across normal and drowsy conditions, achieving reliable ignition cutoff within <50ms of prolonged eye closure threshold violation.",
    result: { value: "<50ms", label: "Real-Time Emergency Cutoff Latency" },
    image: "/projects/accident-prevention.svg",
    github: "https://github.com/svigneshece/Accident-Prevention-",
  },
  {
    slug: "smart-temp-monitor",
    title: "Smart Environmental & Climate Monitoring System",
    subtitle: "Raspberry Pi 5 digital processing engine with 16x2 character LCD and precision climate sensing",
    category: "embedded",
    featured: false,
    summary:
      "A dedicated standalone environmental monitoring node incorporating a Raspberry Pi 5 single-board computer driving a 16x2 character alphanumeric LCD display and calibrated DHT11 digital climate sensor.",
    problemStatement:
      "Edge computing enclosures and laboratory environments require local visual temperature and humidity telemetry directly from the processing unit without requiring an external desktop monitor.",
    hardwareArchitecture: [
      "Raspberry Pi 5 single-board computer with 40-pin GPIO header",
      "16×2 alphanumeric LCD module with yellow-green LED backlight",
      "DHT11 calibrated relative humidity and temperature digital sensor",
      "Contrast trimmer potentiometer and regulated 5V power bus",
      "GPIO digital timing interface wiring harness",
    ],
    technologies: [
      "Raspberry Pi 5",
      "Python / Embedded C",
      "Raspberry Pi GPIO",
      "16x2 Character LCD",
      "DHT11 Sensor",
      "Digital Timing Interface",
      "Linux SBC Telemetry",
    ],
    myContribution: [
      "Wrote GPIO control drivers on Raspberry Pi 5 to drive the HD44780-compliant LCD in 4-bit parallel mode.",
      "Implemented digital pulse-timing decoding on Raspberry Pi 5 GPIO pins to read 40-bit DHT11 sensor data frames.",
      "Configured automatic checksum validation to reject corrupted samples before updating the LCD display.",
      "Programmed display formatting showing real-time temperature (34.8°C) and relative humidity (12%) with custom glyphs.",
    ],
    engineeringChallenges: [
      "Precise single-wire microsecond timing on Linux OS without real-time kernel extensions, solved via optimized user-space GPIO timing buffers.",
    ],
    testingAndValidation:
      "Field validated at room and elevated temperatures showing exact real-time readings (e.g. Temp: 34.8°C, Hum: 12%) with instantaneous sensor recovery.",
    result: { value: "100%", label: "Packet Checksum Verification on Sensor Frame" },
    image: "/projects/smart-temp-monitor.png",
    github: "https://github.com/svigneshece/Proteus-Project-Sources.git",
  },
  {
    slug: "microwave-automation",
    title: "Microwave Oven Automation System",
    subtitle: "Industrial appliance controller firmware running on PIC16F877A with multi-mode state machine",
    category: "simulation",
    featured: false,
    summary:
      "An industrial appliance controller firmware running on the Microchip PIC16F877A microcontroller with a multi-mode cooking finite state machine, matrix keypad input, and character LCD interface.",
    problemStatement:
      "Home appliances require fail-safe, predictable, and responsive microcontroller architectures capable of executing multiple concurrent timing and safety checks without locking.",
    hardwareArchitecture: [
      "Microchip PIC16F877A 8-bit RISC microcontroller",
      "16×2 Character LCD (CLCD) for mode, power, and countdown display",
      "4×4 Matrix Keypad for cooking mode selection and time entry",
      "Piezo buzzer for audible completion alerts",
      "Hardware Timer0 / Timer2 for deterministic clock timing",
    ],
    technologies: [
      "PIC16F877A",
      "Embedded C",
      "MPLAB X IDE",
      "XC8 Compiler",
      "PICSimLab Simulation",
      "Finite State Machines (FSM)",
      "Matrix Keypad Scanning",
    ],
    myContribution: [
      "Developed modular Embedded C control firmware for PIC16F877A in MPLAB X IDE.",
      "Implemented multi-mode state machine (Micro, Grill, Convection, Start/Resume, Pause/Stop).",
      "Programmed non-blocking matrix keypad scanning routines and CLCD driver routines.",
      "Configured hardware timer interrupts for deterministic 1-second countdown clock ticks.",
    ],
    engineeringChallenges: [
      "Keypad debounce management without using CPU-blocking delay loops during active cooking cycles.",
    ],
    testingAndValidation:
      "Simulated full cooking cycles in PICSimLab across all 4 operational modes with 100% state machine transition accuracy.",
    result: { value: "4 Modes", label: "State Machine Cooking Controller" },
    image: "/projects/microwave-automation.svg",
    github: "https://github.com/svigneshece/Simulation-Microwave-Oven-Project-Code-For-PIC16F877A.git",
  },
  {
    slug: "8051-projects-suite",
    title: "8051 Microcontroller Architecture & Peripheral Interfacing",
    subtitle: "Register-level assembly and Embedded C hardware interfacing on AT89C51 / 8051 core",
    category: "simulation",
    featured: false,
    summary:
      "A comprehensive repository of 8051 microcontroller projects covering timer-based frequency generation, UART serial communication, 7-segment multiplexing, and LCD display drivers.",
    problemStatement:
      "Foundational understanding of CISC register banking, accumulator-based math, and raw memory-mapped I/O is crucial for debugging modern embedded architectures.",
    hardwareArchitecture: [
      "8051 / AT89C51 8-bit microcontroller core",
      "11.0592 MHz crystal oscillator for precise baud rate generation",
      "Multiplexed 7-segment LED displays and 16x2 character LCDs",
      "Pushbutton keypad matrix and LED status arrays",
      "Proteus VSM interactive simulation models",
    ],
    technologies: [
      "8051 Architecture",
      "AT89C51",
      "Keil C51",
      "Embedded C",
      "Proteus Simulation",
      "UART 9600 Baud",
      "Timer Modes (Mode 1 & 2)",
      "Register Banking",
    ],
    myContribution: [
      "Engineered modular Embedded C firmware modules for Keil uVision targeting 8051 peripherals.",
      "Implemented Timer 1 Mode 2 auto-reload baud rate generator for UART communication at 9600 bps.",
      "Created Proteus schematic circuits for hardware simulation and virtual terminal debugging.",
      "Wrote bit-addressable register routines for multi-channel I/O port manipulation.",
    ],
    engineeringChallenges: [
      "Managing limited 128-byte internal RAM through strict variable scope and memory register banking.",
    ],
    testingAndValidation:
      "Validated all modules in Proteus VSM simulation with cycle-accurate timing and virtual terminal echo test verification.",
    result: { value: "9600 bps", label: "Deterministic UART Baud Rate Generation" },
    image: "/projects/8051-projects.svg",
    github: "https://github.com/svigneshece/8051-Projects.git",
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
      "Bi-Stable Electrophoretic",
      "Bitmap Rendering",
      "Deep Sleep Mode",
    ],
    myContribution: [
      "Wrote pin-mapping abstraction for ESP32 hardware VSPI peripheral pins to display controller.",
      "Integrated hardware BUSY pin polling handshake to prevent command collisions during e-paper refresh cycles.",
      "Encoded graphic icons and typography strings into flash program memory PROGMEM arrays.",
    ],
    engineeringChallenges: [
      "Eliminating ghosting artifacts through full-refresh waveform initialization and partial-update look-up tables.",
    ],
    testingAndValidation:
      "Successfully displayed custom logos and text with complete image retention upon total power disconnection, drawing <10μA in deep-sleep mode.",
    result: { value: "<10μA", label: "Quiescent Sleep Current with Image Retention" },
    image: "/projects/epaper-display.jpg",
    github: "https://github.com/svigneshece/Proteus-Project-Sources.git",
  },
];

export type Role = {
  title: string;
  company: string;
  period: string;
  location?: string;
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
      "Conduct hands-on robotics, microcontroller, and IoT workshops for university and school students.",
      "Demonstrate live electronics project builds using ESP32, Arduino, sensors, and motor drivers.",
      "Troubleshoot hardware wiring, sensor interfacing, and firmware bugs during live lab sessions.",
      "Explain complex embedded concepts (timers, interrupts, PWM, serial buses) through practical demonstrations.",
      "Support learners in architecting and debugging their capstone engineering projects.",
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
    id: "oil-spill-ssn-2024",
    title: "Real-time Oil Spill Detection and Monitoring Using Deep Learning and Convolutional Neural Networks",
    authors: "Vignesh S, et al.",
    conference: "SSN College IEEE International Conference",
    year: "2024",
    award: "BEST RESEARCH PAPER AWARD — Bharath University (ICRIDET - 2024)",
    summary:
      "Architectural design and deep convolutional neural network framework for real-time maritime oil spill detection, feature extraction, and continuous environmental telemetry. Received the prestigious Best Research Paper Award from Bharath Institute of Higher Education and Research (ICRIDET - 2024).",
    ieeeUrl: "https://ieeexplore.ieee.org/document/11213402",
  },
  {
    id: "dent-damage-vit-2024",
    title: "Machine Learning Based Dent Damage Detection Using Image Processing Methods",
    authors: "Vignesh S, et al.",
    conference: "VIT Vellore, IEEE International Conference",
    year: "2024",
    award: "IEEE International Conference Publication",
    summary:
      "Computer vision and machine learning methodology utilizing morphological image filters, contour feature extraction, and edge detection to autonomously identify and classify vehicle surface dent deformities.",
    ieeeUrl: "https://ieeexplore.ieee.org/document/10493214",
  },
];

export const awardHighlight = {
  title: "BEST RESEARCH PAPER AWARD",
  conference: "ICRIDET - 2024 (International Conference on Recent Innovation & Development in Engineering & Technology)",
  organizedBy: "Bharath Institute of Higher Education and Research in association with IEEE",
  date: "September 23 – 25, 2024",
  image: "/awards/icridet-best-paper.jpg",
  description:
    "Awarded Best Research Paper for real-time detection and monitoring systems, presented at ICRIDET-2024 by Bharath Institute of Higher Education and Research in association with IEEE.",
};

export const certifications = [
  {
    id: "lnt-techgium",
    stationNumber: "MILESTONE 01",
    title: "TECHGIUM® National Finalist & Recognition",
    organization: "L&T Technology Services (LTTS)",
    year: "2025",
    field: "Nationwide Industrial Innovation Challenge",
    badge: "L&T Recognition Award",
    description:
      "Awarded Certificate of Recognition in TECHGIUM®, L&T Technology Services' prestigious national engineering competition, for architecting innovative technology solutions solving real-world industrial engineering challenges.",
    verified: true,
  },
  {
    id: "nptel-embedded",
    stationNumber: "MILESTONE 02",
    title: "Embedded Systems and Design",
    organization: "NPTEL (IIT Kharagpur / Ministry of Education)",
    year: "2024",
    field: "Microcontroller Architecture & Peripheral Interfacing",
    badge: "Proctored Technical Exam",
    description:
      "Comprehensive certification covering ARM Cortex-M architecture, register-level hardware programming, interrupt service routines (ISR), timer peripheral PWM generation, ADC/DAC conversion, and RTOS task fundamentals.",
    verified: true,
  },
  {
    id: "iit-madras-ai",
    stationNumber: "MILESTONE 03",
    title: "Artificial Intelligence Workshop",
    organization: "Indian Institute of Technology Madras (IIT Madras)",
    year: "2024",
    field: "Applied AI, Machine Learning & Edge Computing",
    badge: "IIT Madras Certificate",
    description:
      "Hands-on technical workshop at IIT Madras covering edge neural network models, sensor feature extraction, robotic perception pipelines, and embedded machine learning integration.",
    verified: true,
  },
  {
    id: "infosys-iot",
    stationNumber: "MILESTONE 04",
    title: "Internet of Things (IoT) Specialization",
    organization: "Infosys Springboard",
    year: "2024",
    field: "Connected Hardware, Wireless Protocols & Cloud Telemetry",
    badge: "Infosys Certified",
    description:
      "Industry curriculum certification focusing on IoT device architecture, embedded wireless telemetry (MQTT/HTTP), sensor node power management, and cloud dashboard analytics.",
    verified: true,
  },
  {
    id: "srm-robotics-award",
    stationNumber: "MILESTONE 05",
    title: "SRM National Robotics Hackathon Runner-Up",
    organization: "SRM Institute of Science and Technology",
    year: "2025",
    field: "Autonomous Mechatronics & Hazard Reconnaissance",
    badge: "Hackathon Trophy & Runner-Up",
    description:
      "Won Runner-up Award for engineering the Multi-Feature Autonomous Surveillance and Hazard Detection Robot with dual ESP32/Arduino control, MQ-2 toxic gas detection, and <35ms obstacle avoidance.",
    verified: true,
  },
];

export const hardwareBenchTools = [
  {
    id: "stm32-bench",
    title: "STM32F103 + ST-Link V2 + FTDI Bring-Up Bench",
    category: "ARM Cortex-M Firmware Debugging",
    spec: "72 MHz PLL Core Clock · SWD In-Circuit Debugging · USART1 Live Terminal",
    image: "/projects/stm32-bench-setup.png",
    badges: ["ST-Link V2 (SWD)", "FTDI USB-UART", "SSD1306 OLED (I2C)", "DHT11 Single-Wire"],
    description:
      "Actual hardware development bench featuring the STM32F103C8T6 'Blue Pill' connected via SWD to an ST-Link V2 hardware programmer, with FTDI UART live serial monitoring and 0.96-inch OLED I2C telemetry.",
  },
  {
    id: "soldering-rework",
    title: "Electronics Soldering & Wire Harness Prototyping Bench",
    category: "Prototyping & Assembly",
    spec: "Temperature-Controlled Soldering Station · 60/40 Rosin Core · ESD Safe",
    image: "/tools/soldering-station.svg",
    badges: ["Through-Hole Soldering", "Perfboard Assembly", "Header Pin Soldering", "Wire Harnesses"],
    description:
      "Hands-on electronics bench used for through-hole soldering, tinning stranded wiring harnesses, assembling custom perfboard sensor breakouts, and building reliable connections for robotics platforms.",
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
    title: "Precision Benchtop Digital Multimeter",
    category: "Precision Electrical Measurement",
    spec: "+3.302V DC Rail · 12.4mVrms AC Ripple · Sub-10μA Current Sense",
    image: "/tools/digital-multimeter.svg",
    badges: ["True-RMS", "Rail Verification", "Sleep Current Draw", "Continuity Tone"],
    description:
      "Multi-channel benchtop digital multimeter for validating LDO regulator output voltages, measuring dynamic and deep-sleep current consumption, and verifying circuit continuity.",
  },
  {
    id: "oscilloscope",
    title: "Digital Storage Oscilloscope & Logic Analyzer",
    category: "Signal Integrity & Protocol Decoding",
    spec: "Hardware I2C / SPI Protocol Bus Decoder · Rise/Fall Timing Analysis",
    image: "/tools/oscilloscope.svg",
    badges: ["400kHz SCL Clock", "I2C ACK Decoding", "Rise Time Verification", "Bus Jitter Analysis"],
    description:
      "High-speed digital storage oscilloscope capturing clock and data lines, rise/fall edge integrity, bus contention, and decoding active I2C transactions to OLED displays and sensors.",
  },
];

export const mcuNotes = [
  {
    id: "stm32f103",
    name: "STM32F103C8T6 (ARM Cortex-M3)",
    clock: "72 MHz",
    flash: "64 KB",
    sram: "20 KB",
    voltage: "2.0V – 3.6V",
    peripherals: "2x I2C, 3x USART, 2x SPI, 1x CAN 2.0B, 2x 12-bit ADC (16 ch), USB 2.0 FS, 4x Timers",
    bringUpFocus:
      "Configured RCC PLL for maximum 72 MHz operation from 8 MHz HSE crystal. Implemented I2C1 in Fast Mode (400 kHz) for SSD1306 OLED display updates, and routed USART1 with DMA for high-throughput packet streaming.",
  },
  {
    id: "esp32-wroom",
    name: "ESP32-WROOM-32 (Xtensa Dual-Core 32-bit LX6)",
    clock: "Up to 240 MHz",
    flash: "4 MB SPI Flash",
    sram: "520 KB",
    voltage: "2.7V – 3.6V",
    peripherals: "Wi-Fi 802.11 b/g/n, BLE 4.2, 3x UART, 3x SPI, 2x I2C, 18x 12-bit ADC, 2x DAC, capacitive touch",
    bringUpFocus:
      "Brought up high-speed 4-wire hardware VSPI bus driving 1.54-inch e-paper display with busy-line polling. Engineered LoRa SX1278 transceiver interfaces and deep-sleep duty cycling for low-power edge wireless nodes.",
  },
  {
    id: "pic16f877a",
    name: "Microchip PIC16F877A (8-bit RISC)",
    clock: "20 MHz",
    flash: "8 KB (14-bit words)",
    sram: "368 Bytes",
    voltage: "2.0V – 5.5V",
    peripherals: "1x USART, 1x MSSP (SPI/I2C), 8x 10-bit ADC, 3x Timers (Timer0/1/2), 2x CCP (PWM)",
    bringUpFocus:
      "Engineered industrial microwave automation firmware in XC8. Utilized Timer0 interrupts for 1-second countdown clock timebase and implemented non-blocking 4x4 matrix keypad scanning and CLCD 4-bit bus interface.",
  },
  {
    id: "at89c51",
    name: "AT89C51 / 8051 Core (8-bit CISC)",
    clock: "11.0592 MHz / 12 MHz",
    flash: "4 KB On-chip Flash",
    sram: "128 Bytes",
    voltage: "4.0V – 5.5V",
    peripherals: "1x Full-Duplex UART, 2x 16-bit Timers (Timer 0/1), 32 Programmable I/O Lines",
    bringUpFocus:
      "Programmed in Keil C51 and Proteus VSM. Configured Timer 1 Mode 2 auto-reload for deterministic 9600-baud UART communication. Managed strict 128-byte RAM constraints through bit-addressable register banking.",
  },
  {
    id: "raspberry-pi-sbc",
    name: "Raspberry Pi (SBC Linux & GPIO)",
    clock: "Broadcom Quad-Core 64-bit @ up to 2.4 GHz",
    flash: "MicroSD / NVMe Storage",
    sram: "4GB / 8GB LPDDR4X",
    voltage: "5V USB-C PD Rail (3.3V Logic Level)",
    peripherals: "40-pin GPIO Header, Dual 4Kp60 HDMI, PCIe 2.0, Gigabit Ethernet, 2x USB 3.0, I2C, SPI, UART",
    bringUpFocus:
      "Employed as the central computing engine for the Smart Environmental & Climate Monitoring System. Interfaced 40-pin GPIO directly to 16x2 HD44780 LCD in 4-bit parallel mode and captured microsecond single-wire DHT11 pulses.",
  },
];


export const microcontrollerNotes = [
  {
    name: "STM32F103C8T6",
    core: "ARM Cortex-M3 @ 72 MHz",
    note: "Configured RCC PLL for 72 MHz operation. Implemented I2C1 Fast Mode (400 kHz) for SSD1306 OLED updates and USART1 DMA packet streaming.",
  },
  {
    name: "ESP32-WROOM-32",
    core: "Xtensa Dual-Core 32-bit @ 240 MHz",
    note: "High-speed 4-wire hardware VSPI bus driving 1.54-inch e-paper display with busy-line polling, plus LoRa SX1278 transceiver interfaces.",
  },
  {
    name: "PIC16F877A",
    core: "Microchip 8-bit RISC @ 20 MHz",
    note: "Industrial appliance firmware in XC8. Utilized Timer0 interrupts for 1-second countdown timebase and non-blocking 4x4 matrix keypad scanning.",
  },
  {
    name: "AT89C51 / 8051",
    core: "8-bit CISC @ 11.0592 MHz",
    note: "Keil C51 & Proteus VSM. Timer 1 Mode 2 auto-reload for deterministic 9600-baud UART communication and bit-addressable register banking.",
  },
  {
    name: "Raspberry Pi (SBC)",
    core: "Quad-Core 64-bit Linux & 40-Pin GPIO",
    note: "Central computing engine for Smart Environmental & Climate Monitoring System. Interfaced 40-pin GPIO directly to 16x2 HD44780 LCD in 4-bit parallel mode and captured microsecond single-wire DHT11 pulses.",
  },
];
