import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { EngineeringToolkit } from "@/components/EngineeringToolkit";
import { Research } from "@/components/Research";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";
import { WelcomePopup } from "@/components/WelcomePopup";
import { site } from "@/data/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vignesh Sugunathan",
  alternateName: ["Vignesh S", "VIGSUGU LAB", "Vignesh Sugunathan Portfolio"],
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
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-[#B6E778] focus:px-4 focus:py-2 focus:text-[#101310]"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <EngineeringToolkit />
        <Projects />
        <Certifications />
        <Research />
        <Experience />
        <Services />
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
