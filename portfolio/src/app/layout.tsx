import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/data/site";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vignesh-sugunathan.vercel.app";
const title = "Vignesh Sugunathan | Embedded Systems & Firmware Engineer";
const description =
  "Explore Vignesh Sugunathan's engineering portfolio featuring Embedded Systems, Firmware Development, STM32, ESP32, PCB Design, Robotics, ROS 2 projects and technical research.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s | ${site.name}` },
  description,
  keywords: [
    // Personal Identity Searches
    "Vignesh Sugunathan",
    "Vignesh Sugunathan Chennai",
    "Vignesh Sugunathan Engineer",
    "Vignesh Sugunathan Portfolio",
    "Vignesh Sugunathan Embedded Systems",
    "Vignesh Sugunathan Electronics Engineer",
    "Vignesh S",
    "svigneshece",
    // Professional Searches
    "Embedded Systems Engineer Chennai",
    "Firmware Engineer Chennai",
    "Electronics Engineer Portfolio",
    "STM32 Embedded C Developer",
    "ESP32 Firmware Developer",
    "Robotics Engineer Chennai",
    "ROS 2 Engineer",
    "PCB Design Engineer",
    "Embedded C++ Engineer",
    // Technical Skills Searches
    "ARM Cortex-M Developer",
    "Hardware Bring-Up Engineer",
    "LoRa Mesh Network",
    "PIC16F877A",
    "TI MSP430",
    "8051 Microcontroller",
    "Arduino Developer",
    // Education & Organizations
    "Agni College of Technology",
    "Anna University Chennai",
    "NxtWave Robotics Instructor",
    "Centrado Tech Solutions",
    "ICRIDET 2024 Best Paper",
  ],
  authors: [{ name: "Vignesh Sugunathan", url: siteUrl }],
  creator: "Vignesh Sugunathan",
  publisher: "Vignesh Sugunathan",
  applicationName: "Vignesh Sugunathan Portfolio",
  category: "technology",
  alternates: { canonical: siteUrl },
  other: {
    "profile:first_name": "Vignesh",
    "profile:last_name": "Sugunathan",
    "profile:username": "svigneshece",
    "author": "Vignesh Sugunathan",
    "copyright": "Vignesh Sugunathan",
    "entity_name": "Vignesh Sugunathan",
    "disambiguation": "Vignesh Sugunathan - Embedded Systems and Firmware Engineer Chennai",
  },
  openGraph: {
    type: "profile",
    firstName: "Vignesh",
    lastName: "Sugunathan",
    username: "svigneshece",
    gender: "male",
    title,
    description,
    siteName: "Vignesh Sugunathan Portfolio",
    locale: "en_IN",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/profile/vignesh.jpg`,
        width: 800,
        height: 800,
        alt: "Vignesh Sugunathan - Embedded Systems and Firmware Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@Vignesh_S_2412",
    images: [`${siteUrl}/profile/vignesh.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google504eed7ae6e2377c",
  },
};

export const viewport: Viewport = {
  themeColor: "#070A11",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Vignesh Sugunathan",
        givenName: "Vignesh",
        familyName: "Sugunathan",
        additionalName: "S",
        alternateName: [
          "Vignesh S",
          "svigneshece",
          "Vignesh Sugunathan Chennai",
          "Vignesh Sugunathan Engineer",
          "VIGNESH",
        ],
        disambiguatingDescription:
          "Vignesh Sugunathan is an Embedded Systems and Firmware Engineer based in Chennai, Tamil Nadu, India, specializing in ARM Cortex-M, STM32, ESP32, Robotics, and IoT. Alumnus of Agni College of Technology (Anna University) and published IEEE researcher. Distinct from other individuals named Vignesh.",
        gender: "https://schema.org/Male",
        nationality: {
          "@type": "Country",
          name: "India",
        },
        url: siteUrl,
        mainEntityOfPage: siteUrl,
        image: [
          `${siteUrl}/profile/vignesh.jpg`,
          `${siteUrl}/profile/vignesh-professional.jpg`,
          `${siteUrl}/profile/vignesh-speaker-presentation.jpg`,
          `${siteUrl}/profile/vignesh-presenting.jpg`,
        ],
        jobTitle: "Embedded Systems & Firmware Engineer",
        description:
          "Vignesh Sugunathan is an Embedded Systems and Firmware Engineer based in Chennai, Tamil Nadu, India, specializing in ARM Cortex-M, STM32, ESP32, Robotics, ROS 2, and wireless IoT hardware bring-up.",
        worksFor: {
          "@type": "Organization",
          name: "NxtWave Institute of Advanced Technologies",
          url: "https://www.nxtwave.co.in/",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Agni College of Technology, Chennai (Anna University)",
          url: "https://act.edu.in/",
          sameAs: "https://www.annauniv.edu/",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Chennai",
          addressRegion: "Tamil Nadu",
          addressCountry: "IN",
        },
        email: `mailto:${site.contact.email}`,
        telephone: "+91-9360266424",
        sameAs: [
          site.contact.linkedin,
          site.contact.github,
          site.contact.twitter,
          "https://ieeexplore.ieee.org/document/11213402",
          "https://ieeexplore.ieee.org/document/10493214",
        ],
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "degree",
            name: "Bachelor of Engineering (B.E.) in Electronics & Communication Engineering",
            educationalLevel: "Bachelor's Degree",
            recognizedBy: {
              "@type": "CollegeOrUniversity",
              name: "Anna University, Chennai",
              sameAs: "https://www.annauniv.edu/",
            },
          },
        ],
        award: [
          "Best Research Paper Award - ICRIDET 2024 (IEEE SSN College of Engineering / Bharath University)",
          "Runner-Up - SRM National Robotics Hackathon (2025)",
        ],
        knowsAbout: [
          "Embedded Systems",
          "Firmware Development",
          "Embedded C",
          "Embedded C++",
          "ARM Cortex-M",
          "STM32 (STM32F103)",
          "ESP32",
          "Microchip PIC16F877A",
          "8051 Microcontroller",
          "Texas Instruments MSP430",
          "Arduino Ecosystem",
          "Robotics",
          "ROS 2",
          "IoT & Wireless Telemetry",
          "LoRa (SX1278)",
          "PCB Design",
          "Hardware Integration",
          "Circuit Prototyping",
          "I2C / SPI / UART Protocols",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Vignesh Sugunathan | Embedded Systems & Firmware Engineer",
        alternateName: [
          "Vignesh Sugunathan",
          "Vignesh Sugunathan Portfolio",
          "Vignesh Sugunathan Official Website",
          "svigneshece",
        ],
        description,
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
        author: {
          "@id": `${siteUrl}/#person`,
        },
        inLanguage: "en-IN",
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profilepage`,
        url: siteUrl,
        name: "Vignesh Sugunathan Engineering Portfolio",
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${siteUrl}/#person`,
        },
        mainEntity: {
          "@id": `${siteUrl}/#person`,
        },
        primaryImageOfPage: {
          "@id": `${siteUrl}/#personimage`,
        },
      },
      {
        "@type": "ScholarlyArticle",
        "@id": "https://ieeexplore.ieee.org/document/11213402",
        headline:
          "Real-time Oil Spill Detection and Monitoring Using Deep Learning and Convolutional Neural Networks",
        name: "Real-time Oil Spill Detection and Monitoring Using Deep Learning and Convolutional Neural Networks",
        author: {
          "@id": `${siteUrl}/#person`,
        },
        url: "https://ieeexplore.ieee.org/document/11213402",
        publisher: {
          "@type": "Organization",
          name: "IEEE",
        },
        description:
          "Published in SSN College IEEE International Conference, awarded Best Research Paper Award from Bharath University (ICRIDET - 2024).",
      },
      {
        "@type": "ScholarlyArticle",
        "@id": "https://ieeexplore.ieee.org/document/10493214",
        headline:
          "Machine Learning Based Dent Damage Detection Using Image Processing Methods",
        name: "Machine Learning Based Dent Damage Detection Using Image Processing Methods",
        author: {
          "@id": `${siteUrl}/#person`,
        },
        url: "https://ieeexplore.ieee.org/document/10493214",
        publisher: {
          "@type": "Organization",
          name: "IEEE",
        },
        description:
          "Published in VIT Vellore IEEE International Conference, authored by Vignesh Sugunathan (Vignesh S).",
      },
      {
        "@type": "ImageObject",
        "@id": `${siteUrl}/#img-microwave`,
        url: `${siteUrl}/projects/picsimlab-microwave.jpg`,
        contentUrl: `${siteUrl}/projects/picsimlab-microwave.jpg`,
        name: "Microwave Oven Automation System - Embedded Project by Vignesh Sugunathan",
        caption:
          "PICSimLab hardware simulation of microcontroller-based microwave oven automation with matrix keypad and timer state machine by Vignesh Sugunathan.",
        author: { "@id": `${siteUrl}/#person` },
        creator: { "@id": `${siteUrl}/#person` },
        copyrightHolder: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "ImageObject",
        "@id": `${siteUrl}/#img-stm32-hub`,
        url: `${siteUrl}/projects/stm32-multisensor-hub.jpg`,
        contentUrl: `${siteUrl}/projects/stm32-multisensor-hub.jpg`,
        name: "STM32 Real-Time Environmental Sensor Hub & Dual Display - Hardware Bench by Vignesh Sugunathan",
        caption:
          "ARM Cortex-M STM32 Blue Pill development bench with dual I2C OLED and 16x2 LCD displays, DHT sensors, ultrasonic transducer, and DC motor fan by Vignesh Sugunathan.",
        author: { "@id": `${siteUrl}/#person` },
        creator: { "@id": `${siteUrl}/#person` },
        copyrightHolder: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "ImageObject",
        "@id": `${siteUrl}/#img-msp430-rtc`,
        url: `${siteUrl}/projects/msp430-rtc-clock.jpg`,
        contentUrl: `${siteUrl}/projects/msp430-rtc-clock.jpg`,
        name: "Texas Instruments MSP430 Real-Time Clock & Calendar - LaunchPad Hardware by Vignesh Sugunathan",
        caption:
          "Texas Instruments MSP-EXP430G2 LaunchPad with I2C RTC module and 16x2 LCD calendar display engineered by Vignesh Sugunathan.",
        author: { "@id": `${siteUrl}/#person` },
        creator: { "@id": `${siteUrl}/#person` },
        copyrightHolder: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "ImageObject",
        "@id": `${siteUrl}/#img-8051-proteus`,
        url: `${siteUrl}/projects/8051-proteus-simulation.png`,
        contentUrl: `${siteUrl}/projects/8051-proteus-simulation.png`,
        name: "8051 Microcontroller Architecture & Peripheral Interfacing - Proteus Schematic by Vignesh Sugunathan",
        caption:
          "Proteus cycle-accurate schematic featuring AT89C51RC2, dual 7447 BCD decoders, dual 7-segment displays, and 4x3 keypad by Vignesh Sugunathan.",
        author: { "@id": `${siteUrl}/#person` },
        creator: { "@id": `${siteUrl}/#person` },
        copyrightHolder: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "ImageObject",
        "@id": `${siteUrl}/#img-accident-prevention`,
        url: `${siteUrl}/projects/accident-prevention-bench.jpg`,
        contentUrl: `${siteUrl}/projects/accident-prevention-bench.jpg`,
        name: "Automatic Vehicle Accident Prevention System - Hardware Bench by Vignesh Sugunathan",
        caption:
          "Arduino Uno hardware workbench with dual 5V safety relay engine cutoff, piezo siren, and computer vision eye-blink drowsiness landmarks by Vignesh Sugunathan.",
        author: { "@id": `${siteUrl}/#person` },
        creator: { "@id": `${siteUrl}/#person` },
        copyrightHolder: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "ImageObject",
        "@id": `${siteUrl}/#img-lora-mesh`,
        url: `${siteUrl}/projects/lora-mesh-outdoor.jpg`,
        contentUrl: `${siteUrl}/projects/lora-mesh-outdoor.jpg`,
        name: "Solar-Powered LoRa Mesh Emergency Communication Network by Vignesh Sugunathan",
        caption:
          "Decentralized long-range LoRa SX1278 transceiver node with AES-128 encryption and solar battery charging by Vignesh Sugunathan.",
        author: { "@id": `${siteUrl}/#person` },
        creator: { "@id": `${siteUrl}/#person` },
        copyrightHolder: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "ImageObject",
        "@id": `${siteUrl}/#img-epaper-esp32`,
        url: `${siteUrl}/projects/epaper-display-esp32.jpg`,
        contentUrl: `${siteUrl}/projects/epaper-display-esp32.jpg`,
        name: "ESP32 SPI 1.54-inch E-Paper Zero Static Power Display Bring-Up by Vignesh Sugunathan",
        caption:
          "ESP32 connected to high-speed 4-wire SPI e-paper module with busy-pin interrupt handshake by Vignesh Sugunathan.",
        author: { "@id": `${siteUrl}/#person` },
        creator: { "@id": `${siteUrl}/#person` },
        copyrightHolder: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "ImageObject",
        "@id": `${siteUrl}/#img-hazard-robot`,
        url: `${siteUrl}/projects/srm-hazard-robot-studio.jpg`,
        contentUrl: `${siteUrl}/projects/srm-hazard-robot-studio.jpg`,
        name: "Autonomous Surveillance & Hazard Detection Robot - SRM Hackathon Runner-Up by Vignesh Sugunathan",
        caption:
          "Physical four-wheel robotic car with MQ-2 gas sensor, ultrasonic obstacle avoidance, and Wi-Fi telemetry by Vignesh Sugunathan.",
        author: { "@id": `${siteUrl}/#person` },
        creator: { "@id": `${siteUrl}/#person` },
        copyrightHolder: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "ImageObject",
        "@id": `${siteUrl}/#img-award-trophy`,
        url: `${siteUrl}/awards/icridet-best-paper.jpg`,
        contentUrl: `${siteUrl}/awards/icridet-best-paper.jpg`,
        name: "ICRIDET 2024 Best Research Paper Award Trophy - Vignesh Sugunathan",
        caption:
          "Best Research Paper Award trophy presented to Vignesh Sugunathan by Bharath Institute of Higher Education and Research at ICRIDET 2024 (IEEE).",
        author: { "@id": `${siteUrl}/#person` },
        creator: { "@id": `${siteUrl}/#person` },
        copyrightHolder: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "ImageObject",
        "@id": `${siteUrl}/#img-speaker`,
        url: `${siteUrl}/profile/vignesh-speaker-presentation.jpg`,
        contentUrl: `${siteUrl}/profile/vignesh-speaker-presentation.jpg`,
        name: "Vignesh Sugunathan - Speaker & Workshop Instructor",
        caption:
          "Vignesh Sugunathan presenting an interactive embedded systems and robotics session to students at podium.",
        author: { "@id": `${siteUrl}/#person` },
        creator: { "@id": `${siteUrl}/#person` },
        copyrightHolder: { "@id": `${siteUrl}/#person` },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Geist+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </head>
      <body className="min-h-screen antialiased bg-[#070A11] text-[#F8FAFC] selection:bg-[#38BDF8]/20 selection:text-[#38BDF8] relative">
        <div className="fixed inset-0 pointer-events-none z-0 bg-[url('/engineering-grid.svg')] bg-[size:480px_480px] bg-repeat opacity-75" aria-hidden="true" />
        <div className="relative z-10">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
