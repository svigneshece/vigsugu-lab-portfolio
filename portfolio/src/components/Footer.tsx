import { site } from "@/data/site";
import { ArrowUp, Terminal, FileText } from "lucide-react";
import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-[#070A11] py-10 font-mono text-xs text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col sm:flex-row items-center justify-between gap-6 px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 text-white font-bold tracking-tight">
            <span className="size-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F0FF]" />
            <span>{site.brand}</span>
          </div>
          <span className="hidden sm:inline text-slate-700">|</span>
          <p className="text-slate-400">
            © {new Date().getFullYear()} {site.name} · {site.location}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5">
          <a
            href={site.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-sky-300 transition-colors"
          >
            <GitHubIcon className="size-3.5 text-sky-400" />
            <span>GitHub</span>
          </a>

          <a
            href={site.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-sky-300 transition-colors"
          >
            <LinkedInIcon className="size-3.5 text-sky-400" />
            <span>LinkedIn</span>
          </a>

          <Link
            href="/resume"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-sky-300 transition-colors"
          >
            <FileText className="size-3 text-sky-400" />
            <span>ATS Resume</span>
          </Link>

          <Link
            href="/inbox"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-sky-300 transition-colors"
          >
            <Terminal className="size-3 text-cyan-400" />
            <span>Recruiter Console</span>
          </Link>

          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-slate-200 hover:text-sky-300 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="size-3.5 text-sky-400" />
          </a>
        </div>
      </div>
    </footer>
  );
}
