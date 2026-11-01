import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ProfessionalImpact } from "@/components/ProfessionalImpact";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { EngineeringToolkit } from "@/components/EngineeringToolkit";
import { Services } from "@/components/Services";
import { TeachingTraining } from "@/components/TeachingTraining";
import { Experience } from "@/components/Experience";
import { Research } from "@/components/Research";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WelcomePopup } from "@/components/WelcomePopup";
import { site } from "@/data/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vignesh Sugunathan",
  alternateName: ["Vignesh S", "VIGNESH.", "Vignesh Sugunathan Portfolio"],
  jobTitle: site.role,
  worksFor: { "@type": "Organization", name: "NxtWave" },
  address: { "@type": "PostalAddress", addressLocality: "Chennai", addressRegion: "Tamil Nadu", addressCountry: "IN" },
  alumniOf: site.education,
  sameAs: [
    site.contact.linkedin,
    site.contact.github,
    site.contact.twitter,
  ],
};

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-sky-400 focus:px-4 focus:py-2 focus:text-slate-950 focus:font-semibold"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        {/* 01. Home / Hero */}
        <Hero />

        {/* 02. About Me */}
        <About />

        {/* 03. Professional Impact */}
        <ProfessionalImpact />

        {/* 04. Technical Expertise */}
        <Skills />

        {/* 05. Featured Engineering Projects */}
        <Projects />

        {/* 06. Engineering Toolkit / Workspace */}
        <EngineeringToolkit />

        {/* 07. Professional Services */}
        <Services />

        {/* 08. Teaching, Training & Public Speaking */}
        <TeachingTraining />

        {/* 09. Professional Experience */}
        <Experience />

        {/* 10. Research & Publications */}
        <Research />

        {/* 11. Certifications & Achievements */}
        <Certifications />

        {/* 12. Contact & Collaboration */}
        <Contact />
      </main>
      <Footer />
      <WelcomePopup />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </>
  );
}
