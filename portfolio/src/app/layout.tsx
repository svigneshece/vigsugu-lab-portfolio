import type { Metadata, Viewport } from "next";
import { site } from "@/data/site";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const title = `${site.name} | Embedded Systems & Firmware`;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: { default: title, template: `%s | ${site.name}` },
  description: site.description,
  keywords: [
    "Vignesh Sugunathan",
    "Embedded Systems Engineer",
    "Robotics Engineer",
    "Firmware Developer",
    "IoT",
    "STM32",
    "ESP32",
    "LoRa",
    "ROS 2",
    "Chennai",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title,
    description: site.description,
    siteName: `${site.name} Portfolio`,
    locale: "en_IN",
  },
  twitter: { card: "summary", title, description: site.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#101310",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased bg-[#101310] text-[#F1F4EF]">{children}</body>
    </html>
  );
}
