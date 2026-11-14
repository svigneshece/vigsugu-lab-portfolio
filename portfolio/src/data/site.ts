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
  currentPosition: "Robotics Instructor & Workshop Mentor at NxtWave Institute of Advanced Technologies",
  education: "B.E. Electronics and Communication Engineering",
  college: "Agni College of Technology (Anna University), Chennai",
  graduation: "2026",
  location: "Chennai, Tamil Nadu, India",
  headline: "Vignesh Sugunathan | Embedded Systems & Firmware Engineer | Chennai, India",
  intro:
    "An electronics engineer passionate about building practical engineering solutions through embedded systems, firmware development, hardware integration and robotics. Alongside technical development, I enjoy sharing knowledge, conducting workshops, mentoring students and making engineering accessible through practical learning.",
  description:
    "Explore Vignesh Sugunathan's engineering portfolio featuring Embedded Systems, Firmware Development, STM32, ESP32, PCB Design, Robotics, ROS 2 projects and technical research.",
  profileImage: "/profile/vignesh.jpg",
  presentationImage: "/profile/vignesh-speaker-presentation.jpg",
  resume: {
    href: "/resume.pdf",
    viewHref: "/resume",
    downloadName: "Vignesh_Sugunathan_Resume.pdf",
  },
  contact: {
    email: "svigneshsugu24@gmail.com",
    linkedin: "https://www.linkedin.com/in/vignesh-sugunathan-50320926a/",
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
    "I am Vignesh Sugunathan, an Electronics and Communication Engineering graduate based in Chennai, Tamil Nadu, specializing in embedded systems, firmware development, electronics, and robotics.",
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
    value: "30+",
    label: "Technical Workshops",
    subtext: "Technical sessions taken for school and college students.",
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
      "TI MSP430",
      "Arduino (Uno/Nano/Mega)",
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
    "Beyond bench engineering, I actively share technical knowledge through interactive workshops, robotics bootcamps, and technical presentations. With over 10,000 student interactions at NxtWave Institute of Advanced Technologies, I bridge the gap between academic theory and physical, working silicon.",
  stats: [
    { label: "Learners Impacted", value: "10,000+" },
    { label: "Technical Workshops", value: "30+" },
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
    title: "STM32 Real-Time Environmental Sensor Hub & Dual Display System",
    subtitle: "Bare-metal ARM Cortex-M firmware with 16x2 LCD, multi-color OLED, ultrasonic ranging, and actuator control",
    category: "embedded",
    featured: true,
    summary:
      "A complete embedded multi-sensor telemetry hub built on the STM32 ARM Cortex-M platform. Interfaced simultaneously with a 16x2 character LCD, multi-color OLED telemetry display, HC-SR04 ultrasonic rangefinder, DHT digital climate sensor, and DC cooling fan motor via register-level peripheral drivers and interrupt routines.",
    problemStatement:
      "Complex edge instrumentation nodes demand deterministic concurrent polling of analog and digital sensors while refreshing dual visual displays and managing actuator loads without bus locking.",
    hardwareArchitecture: [
      "STM32 ARM Cortex-M core development platform",
      "16×2 Character LCD displaying system status and 'STM32 PROJECT' header",
      "Multi-color graphical OLED display showing real-time telemetry (Air index, Temp 23.4°C, Hum 39%)",
      "HC-SR04 ultrasonic distance rangefinder module",
      "DHT digital single-wire temperature and humidity sensor",
      "DC cooling fan actuator driven via transistor / motor switching stage",
      "USB-to-UART FTDI serial debugging link and SWD programming port",
    ],
    technologies: [
      "STM32 (ARM Cortex-M)",
      "Embedded C",
      "STM32CubeIDE",
      "ST-Link V2 (SWD)",
      "I2C Bus Protocol",
      "4-Bit LCD Interface",
      "Hardware Timers & Interrupts",
      "Actuator Control (PWM / GPIO)",
    ],
    myContribution: [
      "Wrote modular Embedded C drivers for dual-display updates (I2C OLED and 4-bit parallel 16x2 LCD).",
      "Configured timer input capture to decode microsecond echo pulses from the HC-SR04 ultrasonic sensor.",
      "Engineered closed-loop thermal response logic activating the DC cooling fan when ambient temperature exceeds preset thresholds.",
      "Validated bus signal integrity and multi-peripheral concurrency with zero communication collisions.",
    ],
    engineeringChallenges: [
      "Preventing timing jitter between single-wire DHT sensor polling and ultrasonic pulse measurement.",
      "Optimizing memory buffers to manage dual-display font bitmaps simultaneously.",
    ],
    testingAndValidation:
      "Bench tested with continuous sensor stream showing live readings on both OLED (23.4°C, 39% RH) and 16x2 LCD with responsive fan motor actuation.",
    result: { value: "Dual Display", label: "Concurrent I2C OLED & 16x2 LCD Multi-Sensor Hub" },
    image: "/projects/stm32-multisensor-hub.jpg",
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
      "Arduino Uno microcontroller core (ATmega328P)",
      "IR phototransistor eye-blink sensor module & vision drowsiness processing stage",
      "Dual 5V safety relay modules for automated vehicle ignition cutoff and failsafe isolation",
      "Audible piezo buzzer warning siren and status indication LEDs",
      "DC gear motor and vehicle wheel actuator simulating live engine drive",
      "9V DC regulated power supply rail with decoupling filtering",
    ],
    technologies: [
      "Arduino Uno",
      "Embedded C / C++",
      "IR Eye-Blink Sensor",
      "Eye Landmark Geometry (P1-P6)",
      "Safety Relay Interlock",
      "Interrupt Timers",
      "Automotive Failsafes",
    ],
    myContribution: [
      "Built an Arduino microcontroller interface connected to an IR phototransistor eye-blink sensor and camera vision module.",
      "Engineered drowsiness recognition logic detecting abnormal eye closure duration exceeding 2.0s threshold.",
      "Integrated emergency piezo buzzer siren and dual safety relay interlocks for automated engine ignition cutoff.",
      "Achieved sub-50ms reaction latency during simulated drowsy driver trigger conditions.",
    ],
    engineeringChallenges: [
      "Filtering out false positives from rapid voluntary blinks versus true involuntary eyelid closures under varying ambient light.",
      "Ensuring failsafe relay coil de-energization in case of controller brownout.",
    ],
    testingAndValidation:
      "Simulated over 150 driver blink events across normal and drowsy conditions, achieving reliable ignition cutoff within <50ms of prolonged eye closure threshold violation.",
    result: { value: "<50ms", label: "Real-Time Emergency Cutoff Latency" },
    image: "/projects/accident-prevention-bench.jpg",
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
    image: "/projects/picsimlab-microwave.jpg",
    github: "https://github.com/svigneshece/Simulation-Microwave-Oven-Project-Code-For-PIC16F877A.git",
  },
  {
    slug: "msp430-rtc-calendar",
    title: "Texas Instruments MSP430 Real-Time Clock & Calendar",
    subtitle: "Ultra-low-power RTC calendar and I2C 16x2 LCD interface running on TI MSP430 LaunchPad",
    category: "embedded",
    featured: true,
    summary:
      "A precision digital calendar and real-time clock system engineered on the Texas Instruments MSP430 LaunchPad (MSP430G2553). Features USCI hardware I2C bus communication with an external RTC module, dynamic 12h/24h timekeeping, day-of-week computation, and deterministic 16x2 character LCD refresh while leveraging MSP430 Low-Power Modes (LPM3) between seconds ticks.",
    problemStatement:
      "Battery-operated edge timing and telemetry systems demand ultra-low quiescent standby currents with sub-second timekeeping accuracy and fail-safe power retention during primary supply interruptions.",
    hardwareArchitecture: [
      "Texas Instruments MSP-EXP430G2 LaunchPad (MSP430G2553 16-bit RISC MCU @ 16 MHz)",
      "DS1307 / DS3231 Real-Time Clock (RTC) module with 32.768 kHz crystal and backup battery",
      "HD44780-compliant 16×2 character LCD with yellow-green LED backlight",
      "Precision 10kΩ multi-turn potentiometer for LCD liquid crystal contrast tuning",
      "Solderless breadboard wiring harness with dedicated 4.7kΩ I2C bus pull-ups",
    ],
    technologies: [
      "TI MSP430 (MSP430G2553)",
      "Embedded C",
      "Code Composer Studio (CCS) / Energia",
      "USCI Hardware I2C",
      "Low-Power Mode (LPM3)",
      "16x2 LCD Driver (4-Bit Bus)",
      "Hardware Timer_A",
      "RTC DS1307 / DS3231",
    ],
    myContribution: [
      "Configured TI MSP430 USCI_B0 peripheral in master mode for I2C communication to read real-time registers (seconds, minutes, hours, day, date, month, year).",
      "Wrote modular 4-bit parallel display drivers with custom formatted strings for date (DD/MM/YYYY) and time (12-hour AM/PM format).",
      "Implemented Timer_A interrupt service routines to wake the MCU from Low-Power Mode (LPM3 <1μA) on 1-second ticks for minimal battery drain.",
      "Validated power rail stability and continuous timekeeping retention upon DC disconnection.",
    ],
    engineeringChallenges: [
      "Managing strict MSP430 512-byte SRAM limitations and avoiding floating-point math overhead in string formatting.",
      "Preventing bus locking during I2C start/stop conditions through timeout recovery routines.",
    ],
    testingAndValidation:
      "Field validated with continuous multi-day operation showing zero drift against atomic reference, displaying exact live timestamp '24/12/2025 Wed 12:00:00 PM'.",
    result: { value: "<1 μA", label: "LPM3 Standby Current with Hardware RTC Retention" },
    image: "/projects/msp430-rtc-clock.jpg",
    github: "https://github.com/svigneshece/Proteus-Project-Sources.git",
  },
  {
    slug: "8051-projects-suite",
    title: "8051 Microcontroller Architecture & Peripheral Interfacing",
    subtitle: "Register-level assembly and Embedded C hardware interfacing on AT89C51 / 8051 core",
    category: "simulation",
    featured: false,
    summary:
      "A comprehensive repository of 8051 microcontroller projects covering timer-based frequency generation, UART serial communication, 7447 BCD-to-7-segment decoders, matrix keypad scanning, and LCD display drivers.",
    problemStatement:
      "Foundational understanding of CISC register banking, accumulator-based math, and raw memory-mapped I/O is crucial for debugging modern embedded architectures.",
    hardwareArchitecture: [
      "AT89C51RC2 / 8051 8-bit CISC microcontroller core",
      "Dual 7-segment Common-Anode LED displays",
      "Dual 7447 BCD-to-7-segment decoder ICs with 330Ω current-limiting resistor packs",
      "4×3 matrix telephone keypad connected to Port 2 and Port 3 lines",
      "11.0592 MHz crystal oscillator for precise baud rate generation",
      "Proteus VSM interactive cycle-accurate simulation models",
    ],
    technologies: [
      "8051 Architecture",
      "AT89C51RC2",
      "Keil C51",
      "Embedded C",
      "Proteus VSM Simulation",
      "7447 BCD Decoders",
      "7-Segment Multiplexing",
      "Matrix Keypad Scanning",
      "Register Banking",
    ],
    myContribution: [
      "Engineered modular Embedded C firmware modules for Keil uVision targeting 8051 peripherals.",
      "Programmed Port 1 parallel BCD nibble outputs to drive dual 7447 decoders and 7-segment displays.",
      "Implemented non-blocking matrix keypad scanning routines on Port 2 and Port 3 with debounce logic.",
      "Wrote bit-addressable register routines for multi-channel I/O port manipulation and Timer 1 baud rate generation.",
    ],
    engineeringChallenges: [
      "Managing limited 128-byte internal RAM through strict variable scope and memory register banking.",
    ],
    testingAndValidation:
      "Validated all modules in Proteus VSM simulation with cycle-accurate timing and virtual terminal echo test verification.",
    result: { value: "Cycle-Accurate", label: "Proteus 8051 Keypad & 7-Segment Simulation" },
    image: "/projects/8051-proteus-simulation.png",
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
    image: "/projects/epaper-display-esp32.jpg",
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
    company: "NxtWave Institute of Advanced Technologies",
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
    title: "AI Robotics Engineer",
    company: "Centrado Tech Solutions Pvt. Ltd.",
    period: "December 2025 – August 2026",
    location: "Chennai, India",
    points: [
      "Designed, prototyped, and validated intelligent robotic systems and autonomous embedded platforms integrating microcontrollers (ESP32, STM32, ARM Cortex-M) with multi-sensor arrays.",
      "Engineered real-time sensor fusion pipelines and actuator control loops interfacing ultrasonic, IR, IMU, environmental telemetry, and motor drive stages (PWM, H-Bridge, BLDC/stepper motors).",
      "Executed full-lifecycle hardware bring-up, board-level functional testing, wiring harness routing, CAD modeling, and rapid 3D-printed electromechanical prototyping.",
      "Optimized low-latency C/C++ firmware, conducted schematic/PCB design reviews, and streamlined robotic actuation algorithms for robust real-world performance.",
      "Collaborated with cross-functional R&D teams to deliver production-ready robotic demonstrations, technical documentation, and hands-on system benchmarks.",
    ],
  },
  {
    title: "Embedded Systems Intern",
    company: "Emertxe Information Technologies",
    period: "January 2025 – February 2025",
    location: "Bengaluru, India",
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
    title: "Custom 2-Layer PCB Layout & Circuit Routing",
    category: "Hardware EDA & Circuit Design",
    spec: "IC DIP-8 Routing · +5V & GND Copper Rails · Passive R/C Network",
    image: "/tools/pcb-layout.png",
    badges: ["2-Layer PCB", "DIP-8 Package", "GND Plane Pour", "DRC Verified"],
    description:
      "Physical PCB artwork and schematic layout for circuit modules, featuring dedicated +5V and GND rail routing, discrete resistor-capacitor (R1-R3, C1) networks, diode protection, and clean trace geometries.",
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
    title: "Digital Storage Oscilloscope & Signal Generator",
    category: "Signal Integrity & Protocol Decoding",
    spec: "GRATTEN GA1102CAL 100MHz 1GS/s · Signal Generator & Protocol Analysis",
    image: "/tools/oscilloscope-bench.png",
    badges: ["100MHz 1GS/s", "Real-Time Waveform", "Signal Generator", "PP510 Probe 100MHz"],
    description:
      "Benchtop GA1102CAL digital storage oscilloscope with 100MHz PP510 probe measuring real-time analog and PWM waveforms, analyzing frequency response (432.535 Hz test carrier), and validating clock integrity.",
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
  {
    id: "ti-msp430",
    name: "TI MSP430 (MSP430G2553)",
    clock: "16 MHz DCO",
    flash: "16 KB Flash",
    sram: "512 Bytes SRAM",
    voltage: "1.8V – 3.6V (Ultra-Low Power)",
    peripherals: "USCI (UART / SPI / I2C), 10-bit 200ksps ADC, 2x 16-bit Timer_A, Watchdog, Ultra-Low Power LPM0-LPM4",
    bringUpFocus:
      "Programmed ultra-low-power sensing routines utilizing Low Power Modes (LPM3 <1μA standby). Configured USCI hardware serial peripherals and 10-bit analog-to-digital conversions for battery-operated telemetry.",
  },
  {
    id: "arduino-all-boards",
    name: "Arduino Ecosystem (Uno, Nano, Mega)",
    clock: "16 MHz Crystal Oscillator",
    flash: "32 KB (ATmega328P) / 256 KB (ATmega2560)",
    sram: "2 KB / 8 KB SRAM",
    voltage: "5V Operating (7-12V Input via VIN)",
    peripherals: "Hardware UART, SPI (Master/Slave), I2C (Two-Wire TWI), 10-bit ADC (6-16 ch), PWM Timers, External Interrupts",
    bringUpFocus:
      "Rapid hardware prototyping and sensor interfacing across Uno, Nano, and Mega platforms. Utilized hardware interrupts (INT0/INT1), register-level port manipulation (PORTB/PORTD), Timer/Counter PWM for motor control, and I2C/SPI sensor integration.",
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
  {
    name: "Texas Instruments MSP430",
    core: "16-bit Ultra-Low Power RISC @ 16 MHz",
    note: "Programmed low-power modes (LPM3 <1μA standby). Configured USCI hardware modules for UART/SPI/I2C and 10-bit ADC channels for battery-operated wireless telemetry.",
  },
  {
    name: "Arduino Ecosystem (Uno, Nano, Mega)",
    core: "AVR 8-bit RISC @ 16 MHz",
    note: "Prototyped across ATmega328P and ATmega2560 boards. Configured hardware interrupts, direct port register manipulation, Timer/Counter PWM for robotics, and I2C/SPI sensor nodes.",
  },
];
