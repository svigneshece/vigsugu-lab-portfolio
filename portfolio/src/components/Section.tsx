type SectionProps = {
  id: string;
  title: string;
  description?: string;
  badge?: string;
  children: React.ReactNode;
};

export function Section({ id, title, description, badge, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-16 border-t border-[#38BDF8]/15 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[240px_1fr] lg:gap-16">
        <header className="self-start lg:sticky lg:top-28">
          {badge && (
            <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#38BDF8]">
              {badge}
            </p>
          )}
          <h2 id={`${id}-title`} className="mt-1 text-2xl font-bold tracking-tight text-[#F8FAFC] sm:text-3xl">
            {title}
          </h2>
          {description && (
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#94A3B8]">
              {description}
            </p>
          )}
        </header>
        <div>{children}</div>
      </div>
    </section>
  );
}
