import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/data/site";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vignesh-sugunathan.vercel.app";
const title = "Vignesh Sugunathan | Embedded Systems Engineer | Firmware & Robotics Portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s | ${site.name}` },
  description: site.description,
  keywords: [
    "Vignesh Sugunathan",
    "Vignesh S",
    "Embedded Systems Engineer",
    "Firmware Developer",
    "Hardware Integration",
    "ARM Cortex-M",
    "STM32",
    "ESP32",
    "LoRa Mesh",
    "Robotics Instructor",
    "Chennai",
    "Agni College of Technology",
    "NxtWave",
    "ICRIDET 2024 Best Paper",
  ],
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    title,
    description: site.description,
    siteName: `${site.name} — Embedded Systems Portfolio`,
    locale: "en_IN",
    url: siteUrl,
    images: [{ url: "/profile/vignesh.jpg", width: 800, height: 800, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
    creator: "@Vignesh_S_2412",
  },
  robots: { index: true, follow: true },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export const viewport: Viewport = {
  themeColor: "#070A11",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    alternateName: ["Vignesh Sugunathan", "Vignesh S", "svigneshece"],
    url: siteUrl,
    image: `${siteUrl}${site.profileImage}`,
    jobTitle: site.role,
    worksFor: {
      "@type": "Organization",
      name: "NxtWave Institute of Advanced Technologies",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: site.college,
    },
    sameAs: [
      site.contact.linkedin,
      site.contact.github,
      site.contact.twitter,
    ],
    knowsAbout: [
      "Embedded Systems",
      "Firmware Development",
      "ARM Cortex-M",
      "STM32",
      "ESP32",
      "Robotics",
      "IoT",
      "LoRa Mesh Networks",
      "Hardware Integration",
      "Circuit Design",
    ],
    description: site.description,
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased bg-[#070A11] text-[#F8FAFC] selection:bg-[#38BDF8]/20 selection:text-[#38BDF8]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
