/** Edit portfolio content here. Add images to public/projects and update image paths. */
export const site = {
  name: "Vignesh Sugunathan",
  brand: "VIGSUGU LAB",
  role: "Embedded Systems · Firmware Engineering · Hardware Integration",
  currentPosition: "Robotics Instructor · Workshop Mentor at NxtWave",
  education: "B.E. Electronics and Communication Engineering",
  graduation: "2026",
  location: "Chennai, Tamil Nadu, India",
  intro: "I develop and validate embedded systems and firmware where code meets real silicon — from STM32 ARM Cortex-M microcontrollers and I2C/SPI sensor interfaces to LoRa mesh networks and ROS 2 mobile robotics.",
  description: "Vignesh Sugunathan is an embedded systems engineer and firmware developer from Chennai, India, specializing in STM32, PIC, ESP32, hardware-firmware integration, robotics and wireless IoT.",
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
  { id: "toolkit", label: "Toolkit" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "research", label: "Research" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const about = {
  paragraphs: [
    "I'm an Electronics and Communication Engineering graduate from Agni College of Technology, Chennai. My focus is embedded firmware development, microcontroller programming, peripheral interfacing, hardware-firmware integration and system validation.",
    "I enjoy working close to the hardware: bringing up peripherals, integrating sensors and communication modules, debugging circuits, and validating complete systems for robotics, IoT and automation applications.",
    "Alongside engineering, I work as a Robotics Instructor at NxtWave, conducting practical workshops and mentoring learners across schools and colleges. This experience has strengthened my technical communication, live troubleshooting and ability to turn engineering concepts into working demonstrations.",
  ],
  goal: "Contribute to an electronics or product engineering team building reliable embedded products, firmware and connected hardware.",
  facts: [
    { label: "Education", value: "B.E. Electronics & Communication Engineering" },
    { label: "College", value: "Agni College of Technology, Chennai" },
    { label: "Graduation", value: "2026 · CGPA 8.2 / 10" },
    { label: "Current role", value: "Robotics Instructor · NxtWave" },
    { label: "Recognition", value: "SRM Hackathon Runner-up · IEEE research contributions" },
  ],
};

export const skillGroups = [
  { category: "Programming", items: ["Embedded C", "C", "C++", "Python"] },
  { category: "Microcontrollers", items: ["STM32F103C8T6", "ARM Cortex-M3", "PIC16F877A", "ESP32", "ATmega328P", "MSP430", "Arduino"] },
  { category: "Communication", items: ["UART", "SPI", "I2C", "LoRa", "Wi-Fi", "Bluetooth"] },
  { category: "Peripherals", items: ["GPIO", "ADC", "PWM", "Timers", "Interrupts", "RTC", "EEPROM"] },
  { category: "Hardware & Firmware", items: ["Firmware Development", "Peripheral Bring-up", "Hardware-Firmware Integration", "Sensor Interfacing", "Circuit Debugging", "Prototyping", "Functional Testing", "System Validation"] },
  { category: "Tools", items: ["STM32CubeIDE", "MPLAB X", "Arduino IDE", "Proteus", "KiCad", "Git", "VS Code", "Linux"] },
];

export type ProjectVisualKey = "mesh" | "robot" | "health";
export type ProjectCategory = "all" | "embedded" | "robotics" | "wireless";

export type Project = {
  slug: string;
  title: string;
  category: "embedded" | "robotics" | "wireless";
  summary: string;
  highlights: string[];
  tags: string[];
  visual: ProjectVisualKey;
  result?: { value: string; label: string };
  image: string;
  github: string;
};

export const projects: Project[] = [
  {
    slug: "lora-mesh",
    title: "Decentralized Solar-Powered LoRa Mesh Network",
    category: "wireless",
    summary: "A resilient multi-node emergency communication network designed to keep messages moving when cellular coverage or grid power is unavailable.",
    highlights: [
      "Built multi-node wireless mesh hardware using LoRa SX1278 (433MHz) and TTGO modules with integrated OLEDs.",
      "Implemented dynamic RSSI-based multi-hop routing to automatically negotiate optimal communication paths.",
      "Engineered AES-128 payload encryption and message integrity verification for secure off-grid telemetry.",
      "Validated with solar-rechargeable battery nodes achieving 96.4% packet delivery rate over 500 field transmissions.",
    ],
    tags: ["TTGO LoRa", "ESP32", "SX1278 · 433 MHz", "RSSI Routing", "AES-128", "GPS · NEO-6M", "Solar Power"],
    visual: "mesh",
    result: { value: "≈96%", label: "packet delivery across 500 transmissions" },
    image: "/projects/lora-hardware.jpg",
    github: "https://github.com/svigneshece/decentralized-lora-mesh-network",
  },
  {
    slug: "hazard-robot",
    title: "Autonomous Surveillance & Hazard Detection Robot",
    category: "robotics",
    summary: "A 4WD mobile robotics platform with onboard sensing, camera telemetry, and toxic gas hazard detection.",
    highlights: [
      "Engineered 4-wheel mobile chassis integrating Raspberry Pi, Arduino, HC-SR04 ultrasonic radar, and camera telemetry.",
      "Developed PWM-driven obstacle avoidance and autonomous hazard sensing loops with <35ms reaction latency.",
      "Integrated MQ-2 gas sensor with IoT cloud dashboard for real-time hazardous environment monitoring.",
      "Recognized as Runner-up at the SRM National Level Robotics Hackathon, 2025.",
    ],
    tags: ["Raspberry Pi", "Arduino UNO", "MQ-2 Gas", "Ultrasonic", "Camera Module", "Blynk IoT", "PWM Motor Driver"],
    visual: "robot",
    result: { value: "Runner-up", label: "SRM National Level Robotics Hackathon · 2025" },
    image: "/projects/robot-hardware.jpg",
    github: "https://github.com/svigneshece/Autonomous-Surveillance-and-Hazards-Detection-Bot",
  },
  {
    slug: "stm32-environment",
    title: "STM32 Environmental Monitoring & Display System",
    category: "embedded",
    summary: "An ARM Cortex-M3 microcontroller system integrating environmental telemetry, real-time clock, and I2C OLED display.",
    highlights: [
      "Developed bare-metal / HAL Embedded C firmware on STM32F103C8T6 operating at 72 MHz PLL clock.",
      "Implemented I2C master driver for SH1106 128x64 OLED display controller and DS1307 real-time clock.",
      "Integrated single-wire DHT11 temperature/humidity sensor acquisition with hardware timer capture.",
      "Configured USART1 non-blocking serial debugging stream and DMA-assisted display buffer refresh.",
    ],
    tags: ["STM32F103C8T6", "ARM Cortex-M3", "Embedded C", "SH1106 OLED", "I2C Bus", "DS1307 RTC", "USART"],
    visual: "health",
    result: { value: "72 MHz", label: "ARM Cortex-M3 Real-Time I2C Bus Bring-Up" },
    image: "/projects/stm32-environment.svg",
    github: "",
  },
  {
    slug: "ros2-mobile-robot",
    title: "ROS 2 Mobile Robot Simulation & SLAM Mapping",
    category: "robotics",
    summary: "A complete autonomous mobile robot stack featuring Gazebo 3D physics simulation and RViz SLAM occupancy grid mapping.",
    highlights: [
      "Configured ROS 2 Humble workspace on Ubuntu 22.04 LTS with rclpy publisher/subscriber communication.",
      "Developed custom URDF robot description with differential-drive kinematics, wheel inertia, and LIDAR sensors.",
      "Simulated real-time indoor navigation, laser scan rays, and obstacle costmaps in Gazebo and RViz.",
      "Testing autonomous 2D Nav Goal waypoint navigation and obstacle avoidance path planning.",
    ],
    tags: ["ROS 2 Humble", "Ubuntu 22.04", "Gazebo Sim", "RViz SLAM", "URDF", "Python", "LIDAR"],
    visual: "robot",
    result: { value: "Active", label: "Gazebo + RViz SLAM Costmap Validated" },
    image: "/projects/ros2-gazebo-rviz.jpg",
    github: "",
  },
  {
    slug: "microwave-automation",
    title: "Microwave Oven Automation System",
    category: "embedded",
    summary: "An industrial appliance controller firmware running on PIC16F877A with multi-mode cooking state machine and LCD interface.",
    highlights: [
      "Developed modular Embedded C control firmware for PIC16F877A in MPLAB X IDE.",
      "Programmed Timer0/Timer1 hardware interrupt ticks for exact countdown timers and 16x2 CLCD updates.",
      "Integrated 4x3 matrix keypad scanning on PORTB with software debouncing.",
      "Fully simulated, debugged, and validated cooking modes (Micro, Grill, Convection) in PICSimLab and Proteus.",
    ],
    tags: ["PIC16F877A", "Embedded C", "PICSimLab", "MPLAB X", "16x2 CLCD", "Timers", "Matrix Keypad"],
    visual: "health",
    result: { value: "Validated", label: "PICSimLab multi-mode cooking state machine" },
    image: "/projects/picsimlab-microwave.jpg",
    github: "https://github.com/svigneshece/Simulation-Microwave-Oven-Project-Code-For-PIC16F877A",
  },
  {
    slug: "accident-prevention",
    title: "Automatic Accident Prevention System",
    category: "embedded",
    summary: "An automotive safety prototype featuring eye-blink interval monitoring for real-time driver drowsiness detection and ignition cutoff.",
    highlights: [
      "Built an Arduino microcontroller interface connected to an IR phototransistor eye-blink sensor.",
      "Engineered drowsiness recognition logic detecting abnormal eye closure duration exceeding 2.0s threshold.",
      "Integrated emergency piezo buzzer siren and safety relay interlock for automated engine ignition cutoff.",
      "Achieved sub-50ms reaction latency during simulated drowsy driver trigger conditions.",
    ],
    tags: ["Arduino", "Embedded C", "Eye-Blink Sensor", "LM393", "Relay Cutoff", "Automotive Safety"],
    visual: "health",
    result: { value: "<50ms", label: "real-time emergency cutoff latency" },
    image: "/projects/accident-prevention.svg",
    github: "https://github.com/svigneshece/Accident-Prevention-",
  },
];

export type Role = { title: string; company: string; period?: string; location?: string; current?: boolean; points: string[] };
export const experience: Role[] = [
  {
    title: "Robotics Instructor & Workshop Mentor", company: "NxtWave", period: "September 2026 – Present", location: "India", current: true,
    points: [
      "Conduct practical robotics and IoT learning sessions for university students.",
      "Guide learners through hands-on projects involving electronics, sensors, microcontrollers and programming.",
      "Explain technical concepts, troubleshoot project issues and support students during implementation.",
    ],
  },
  {
    title: "AI Robotics Engineer", company: "Centrado Tech Solutions Pvt. Ltd.", period: "December 2025 – August 2026", location: "Chennai, India",
    points: [
      "Developed and debugged embedded firmware for robotics, IoT-enabled STEM products and microcontroller-based development boards.",
      "Integrated microcontrollers, sensors, actuators and wireless communication modules for embedded prototypes.",
      "Performed hardware bring-up, firmware debugging, functional validation and system-level testing.",
      "Collaborated with electronics and software teams during product development, design reviews, troubleshooting and demonstrations.",
    ],
  },
  {
    title: "Embedded Systems Intern", company: "Emertxe Information Technologies", period: "January 2025 – February 2025", location: "Chennai, India",
    points: [
      "Developed Embedded C firmware for PIC16F877A using GPIO, timers, ADC, interrupts and EEPROM.",
      "Debugged and validated firmware-hardware interfaces during peripheral bring-up and functional testing.",
      "Developed and tested a Microwave Oven Automation System using embedded control logic and microcontroller peripherals.",
    ],
  },
];

export const services = [
  { title: "Project Help", detail: "Guidance with microcontrollers, firmware, sensors, debugging and hardware integration." },
  { title: "Product Development", detail: "Prototype development, electronics integration, functional testing and validation." },
  { title: "Teaching & Mentoring", detail: "Practical STEM, electronics, embedded systems, robotics and IoT learning." },
  { title: "Event Hosting", detail: "Technical event coordination, workshop facilitation and live demonstrations." },
  { title: "Public Speaking", detail: "Technical presentations, engineering awareness sessions and student engagement." },
  { title: "STEM Education", detail: "Hands-on learning experiences in science, technology, electronics and robotics." },
  { title: "PCB Design", detail: "PCB design support, schematic understanding and prototyping workflows." },
  { title: "Placement Guidance", detail: "Embedded interview preparation, resume feedback and technical career guidance." },
];


export const impactStats = [
  { value: "100+", label: "projects built, supported & mentored" },
  { value: "10,000+", label: "student interactions across schools & colleges" },
  { value: "2", label: "IEEE Xplore research links" },
];

export const engineeringInterests = [
  "Embedded firmware architecture", "Peripheral driver development", "Microcontroller bring-up",
  "Sensor and actuator integration", "PCB design and hardware prototyping", "Wireless and IoT systems",
  "Robotics and automation", "Low-power embedded design", "Hardware debugging and validation",
  "Real-time systems and RTOS fundamentals",
];

export const engineeringTools = [
  { group: "Firmware & IDEs", items: ["STM32CubeIDE", "MPLAB X IDE", "Arduino IDE", "PlatformIO", "VS Code"] },
  { group: "Circuit & PCB", items: ["KiCad", "Altium Designer", "OrCAD", "Proteus", "PICSimLab"] },
  { group: "Debug & Test", items: ["ST-Link V2", "FTDI · USB-to-UART", "UART Serial Debugging", "Logic Analyser Concepts", "Oscilloscope Workflow"] },
  { group: "Development", items: ["Git & GitHub", "Embedded C", "Python", "Ubuntu Linux", "ROS 2 Humble"] },
];

export const microcontrollerNotes = [
  { name: "Arduino Uno", core: "ATmega328P · 8-bit AVR", note: "16 MHz clock, GPIO, ADC, timers, PWM, UART, SPI and I²C. A friendly platform for learning peripheral interfacing." },
  { name: "ESP32", core: "32-bit wireless SoC", note: "Original ESP32 commonly uses dual-core Xtensa LX6; integrated Wi-Fi and Bluetooth. Strong for connected devices, FreeRTOS tasks and IoT." },
  { name: "ESP8266", core: "32-bit Wi-Fi SoC", note: "Cost-effective Wi-Fi connectivity for IoT nodes. Commonly programmed with Arduino core or ESP8266 SDK." },
  { name: "MSP430", core: "16-bit ultra-low-power MCU family", note: "Designed for low-power sensing and battery-operated applications. Learn clock control, low-power modes, timers and ADC." },
  { name: "PIC16F877A", core: "8-bit PIC MCU", note: "Popular learning device with GPIO, ADC, timers, CCP/PWM, USART, SPI and I²C. Useful for understanding registers, interrupts and peripheral setup." },
  { name: "STM32", core: "32-bit Arm Cortex-M family", note: "Family spans Cortex-M0/M0+/M3/M4/M7 and more. STM32F103C8T6 uses Cortex-M3 up to 72 MHz; study RCC, GPIO, NVIC, timers, ADC, DMA and serial buses." },
  { name: "Raspberry Pi", core: "Linux single-board computer", note: "A Raspberry Pi computer is a Linux-capable SBC, not a microcontroller. Raspberry Pi Pico is different: it uses the RP2040 MCU with dual-core Arm Cortex-M0+." },
  { name: "8051", core: "Classic 8-bit MCU architecture", note: "A foundational architecture for learning ports, timers/counters, serial communication, interrupts and memory organisation. Modern derivatives vary widely." },
];

export const researchPapers = [
  { label: "IEEE Xplore Paper 01", detail: "Research publication · IEEE Xplore", href: "https://ieeexplore.ieee.org/document/11213402" },
  { label: "IEEE Xplore Paper 02", detail: "Research publication · IEEE Xplore", href: "https://ieeexplore.ieee.org/document/10493214" },
];

export type Certification = {
  id: string;
  stationNumber: string;
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
    id: "techgium",
    stationNumber: "STATION 01",
    title: "Certificate of Recognition — TECHGIUM®",
    organization: "L&T Technology Services (LTTS)",
    year: "2025",
    field: "Nationwide Industrial Innovation Hackathon",
    badge: "L&T Recognition Award",
    description:
      "Awarded Certificate of Recognition in TECHGIUM®, L&T Technology Services' prestigious national engineering competition, for architecting innovative technology solutions solving real-world industrial engineering challenges.",
    verified: true,
  },
  {
    id: "nptel-embedded",
    stationNumber: "STATION 02",
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
    stationNumber: "STATION 03",
    title: "Artificial Intelligence Workshop",
    organization: "Indian Institute of Technology Madras (IIT Madras)",
    year: "2024",
    field: "Applied AI, Machine Learning & Robotics Integration",
    badge: "IIT Madras Certificate",
    description:
      "Hands-on technical workshop at IIT Madras covering edge neural network models, sensor feature extraction, robotic perception pipelines, and embedded machine learning integration.",
    verified: true,
  },
  {
    id: "infosys-iot",
    stationNumber: "STATION 04",
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
    id: "conferences-vit-ssn",
    stationNumber: "STATION 05",
    title: "International Conference Presentations",
    organization: "VIT (Vellore Institute of Technology) & SSN College of Engineering",
    year: "2024 – 2025",
    field: "Peer-Reviewed Research Dissemination & IEEE Publications",
    badge: "Conference Presenter & Author",
    description:
      "Oral research presentation of peer-reviewed engineering papers at international conferences hosted at VIT and SSN. Technical papers indexed in IEEE Xplore digital library covering autonomous systems and wireless networks.",
    verified: true,
    linkText: "View Publications on IEEE Xplore",
    linkHref: "#research",
  },
];

export const hardwareBenchTools = [
  {
    id: "soldering-rework",
    title: "Precision Soldering & Hot Air Rework Station",
    category: "Prototyping & SMD Assembly",
    spec: "350°C PID Temperature Controlled · ESD-Safe Grounded Bench",
    image: "/tools/soldering-station.svg",
    badges: ["0.2mm Micro-Jumpering", "QFN/SOIC Rework", "ESD-Safe", "Sn63/Pb37 Reflow"],
    description:
      "High-precision thermal station used for manual SMD assembly, 0603/0805 passives, QFN chip rework, fine enameled wire bodge jumpers, and PCB pad reconstruction.",
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
