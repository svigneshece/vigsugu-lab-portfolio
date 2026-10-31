import { site } from "@/data/site";
import { ArrowUp, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#B6E778]/15 bg-[#101310] py-10 font-mono text-xs text-[#9EAA9A]">
      <div className="mx-auto flex max-w-6xl flex-col sm:flex-row items-center justify-between gap-4 px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 text-white font-bold">
            <span className="size-2 rounded-full bg-[#B6E778] shadow-[0_0_8px_#B6E778]" />
            <span>{site.brand}</span>
          </div>
          <span className="hidden sm:inline text-[#6D786A]">|</span>
          <p>
            © {new Date().getFullYear()} {site.name} · {site.location}
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={site.contact.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#9EAA9A] hover:text-[#B6E778] transition-colors"
          >
            <Globe className="size-3 text-[#B6E778]" />
            <span>Twitter / X</span>
          </a>

          <a
            href="/resume"
            className="text-[#9EAA9A] hover:text-[#B6E778] transition-colors"
          >
            ATS Resume
          </a>

          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-[#F1F4EF] hover:text-[#B6E778] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="size-3 text-[#B6E778]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
