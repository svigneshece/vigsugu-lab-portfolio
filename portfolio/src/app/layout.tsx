import type { Metadata, Viewport } from "next";
import { site } from "@/data/site";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vignesh-sugunathan.vercel.app";
const title = `${site.name} | Embedded Systems Engineer | Firmware & Hardware R&D`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s | ${site.name}` },
  description: site.description,
  keywords: [
    "Vignesh Sugunathan",
    "Embedded Systems Engineer",
    "Firmware Developer",
    "Hardware Integration",
    "ARM Cortex-M",
    "STM32",
    "ESP32",
    "LoRa Mesh",
    "Robotics",
    "Chennai",
    "ICRIDET 2024 Best Paper",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title,
    description: site.description,
    siteName: `${site.name} — Embedded Systems Portfolio`,
    locale: "en_IN",
    images: [{ url: "/profile/vignesh.jpg", width: 800, height: 800, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
    creator: "@Vignesh_S_2412",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#070A11",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Geist+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased bg-[#070A11] text-[#F8FAFC] selection:bg-[#38BDF8]/20 selection:text-[#38BDF8]">
        {children}
      </body>
    </html>
  );
}
