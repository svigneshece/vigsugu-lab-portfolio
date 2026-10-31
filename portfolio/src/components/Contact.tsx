import { Mail, MapPin, MessageSquare, ArrowUpRight, Globe } from "lucide-react";
import { site } from "@/data/site";
import { Section } from "./Section";
import { ContactForm } from "./ContactForm";
import { GitHubIcon, LinkedInIcon } from "./icons";

export function Contact() {
  const { email, linkedin, github, twitter } = site.contact;

  return (
    <Section
      id="contact"
      badge="GET IN TOUCH"
      title="Contact"
      description="Available for firmware engineering, embedded hardware roles, and robotics workshops."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] items-start">
        <div className="space-y-4">
          <div className="rounded-xl border border-[#B6E778]/25 bg-[#1B211D] p-6 space-y-4">
            <h3 className="font-bold text-white">Direct Communication Channels</h3>
            <p className="text-sm text-[#9EAA9A]">
              Feel free to reach out directly via email, message form, or connect through professional networks.
            </p>

            <ul className="divide-y divide-[#B6E778]/15 border-y border-[#B6E778]/15 font-mono text-xs">
              <li>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center justify-between py-3.5 text-[#F1F4EF] hover:text-[#B6E778] transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <Mail className="size-4 text-[#B6E778]" />
                    <span>{email}</span>
                  </span>
                  <ArrowUpRight className="size-3.5 text-[#9EAA9A]" />
                </a>
              </li>
              <li>
                <a
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-3.5 text-[#F1F4EF] hover:text-[#B6E778] transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <Globe className="size-4 text-[#B6E778]" />
                    <span>Twitter / X (@Vignesh_S_2412)</span>
                  </span>
                  <ArrowUpRight className="size-3.5 text-[#9EAA9A]" />
                </a>
              </li>
              <li>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-3.5 text-[#F1F4EF] hover:text-[#B6E778] transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <LinkedInIcon className="size-4 text-[#B6E778]" />
                    <span>LinkedIn Profile</span>
                  </span>
                  <ArrowUpRight className="size-3.5 text-[#9EAA9A]" />
                </a>
              </li>
              <li>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-3.5 text-[#F1F4EF] hover:text-[#B6E778] transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <GitHubIcon className="size-4 text-[#B6E778]" />
                    <span>GitHub Repositories</span>
                  </span>
                  <ArrowUpRight className="size-3.5 text-[#9EAA9A]" />
                </a>
              </li>
              <li className="flex items-center justify-between py-3.5 text-[#9EAA9A]">
                <span className="flex items-center gap-2.5">
                  <MapPin className="size-4 text-[#B6E778]" />
                  <span>{site.location}</span>
                </span>
                <span className="text-[10px] text-[#6D786A]">UTC+05:30</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
