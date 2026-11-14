import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vignesh-sugunathan.vercel.app";

const portfolioImages = [
  // Professional Portraits & Speaker Images
  `${siteUrl}/profile/vignesh.jpg`,
  `${siteUrl}/profile/vignesh-professional.jpg`,
  `${siteUrl}/profile/vignesh-speaker-presentation.jpg`,
  `${siteUrl}/profile/vignesh-presenting.jpg`,
  // Research & Best Paper Award
  `${siteUrl}/awards/icridet-best-paper.jpg`,
  // Verified Engineering Projects Hardware Setups
  `${siteUrl}/projects/picsimlab-microwave.jpg`,
  `${siteUrl}/projects/stm32-multisensor-hub.jpg`,
  `${siteUrl}/projects/msp430-rtc-clock.jpg`,
  `${siteUrl}/projects/8051-proteus-simulation.png`,
  `${siteUrl}/projects/accident-prevention-bench.jpg`,
  `${siteUrl}/projects/lora-mesh-outdoor.jpg`,
  `${siteUrl}/projects/epaper-display-esp32.jpg`,
  `${siteUrl}/projects/srm-hazard-robot-studio.jpg`,
  `${siteUrl}/projects/smart-temp-monitor.png`,
  `${siteUrl}/projects/ros2-gazebo-rviz.jpg`,
  // Technical Mentorship & Educational Workshops
  `${siteUrl}/experience/instructor-session.jpg`,
  `${siteUrl}/experience/workshop-classroom.jpg`,
  `${siteUrl}/experience/hardware-lab-epaper.jpg`,
  `${siteUrl}/experience/drone-simulation-session.jpg`,
  // Bench Instrumentation & PCB Design
  `${siteUrl}/tools/oscilloscope-bench.png`,
  `${siteUrl}/tools/pcb-layout.png`,
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: `${siteUrl}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      images: portfolioImages,
    },
    {
      url: `${siteUrl}/resume`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [
        `${siteUrl}/profile/vignesh.jpg`,
        `${siteUrl}/profile/vignesh-professional.jpg`,
      ],
    },
    {
      url: `${siteUrl}/resume.pdf`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
