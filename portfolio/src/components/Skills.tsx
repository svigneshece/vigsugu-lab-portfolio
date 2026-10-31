import { skillGroups } from "@/data/site";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section
      id="skills"
      badge="TECHNICAL CAPABILITIES"
      title="Skills"
      description="Hardware architectures, firmware programming languages, and validation toolchains."
    >
      <div className="divide-y divide-[#B6E778]/15 border-y border-[#B6E778]/15">
        {skillGroups.map((g) => (
          <div key={g.category} className="grid gap-4 py-7 sm:grid-cols-[200px_1fr] sm:gap-8 items-start">
            <div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#B6E778]">
                {g.category}
              </h3>
              <p className="mt-1 font-mono text-[11px] text-[#9EAA9A]">
                {g.items.length} proficiencies
              </p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-[#B6E778]/20 bg-[#1B211D] px-3 py-1.5 font-mono text-xs text-[#F1F4EF] transition-all duration-200 hover:border-[#B6E778] hover:bg-[#232B25] hover:text-[#B6E778]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
