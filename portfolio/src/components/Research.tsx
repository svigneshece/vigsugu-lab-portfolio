import { ArrowUpRight, BookOpen, ShieldCheck } from "lucide-react";
import { researchPapers } from "@/data/site";
import { Section } from "./Section";

export function Research() {
  return (
    <Section
      id="research"
      badge="SCHOLARLY WORK"
      title="Research & Publications"
      description="Peer-reviewed publications and technical research indexed on IEEE Xplore."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {researchPapers.map((paper, index) => (
          <article
            key={paper.href}
            className="group rounded-xl border border-[#B6E778]/20 bg-[#1B211D] p-6 transition-all duration-300 hover:border-[#B6E778]/50 hover:bg-[#232B25]"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="rounded-lg border border-[#B6E778]/25 bg-[#101310] p-2.5 text-[#B6E778]">
                <BookOpen className="size-5" />
              </span>
              <span className="font-mono text-xs text-[#9EAA9A]">
                INDEX: IEEE-0{index + 1}
              </span>
            </div>

            <h3 className="mt-5 text-lg font-bold tracking-tight text-[#F1F4EF] group-hover:text-[#B6E778] transition-colors">
              {paper.label}
            </h3>
            <p className="mt-1 font-mono text-xs text-[#9EAA9A]">{paper.detail}</p>

            <div className="mt-4 flex items-center gap-2 font-mono text-[11px] text-[#B6E778]">
              <ShieldCheck className="size-3.5" />
              Verified Electronic Document · IEEE Xplore
            </div>

            <a
              href={paper.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#B6E778] hover:text-white transition-colors"
            >
              Access Manuscript on IEEE
              <ArrowUpRight className="size-3.5" />
            </a>
          </article>
        ))}
      </div>
      <p className="mt-4 font-mono text-xs leading-relaxed text-[#9EAA9A]">
        Direct canonical links to verified IEEE Xplore document records.
      </p>
    </Section>
  );
}
