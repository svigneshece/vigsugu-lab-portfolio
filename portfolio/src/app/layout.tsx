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
        image: {
          "@type": "ImageObject",
          "@id": `${siteUrl}/#personimage`,
          url: `${siteUrl}${site.profileImage}`,
          caption: "Vignesh Sugunathan - Embedded Systems and Firmware Engineer",
        },
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
