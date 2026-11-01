"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, FileText, Download } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { ResumeModal } from "./ResumeModal";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "border-b border-[#38BDF8]/15 bg-[#070A11]/90 backdrop-blur-xl shadow-lg shadow-black/60"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          {/* Professional Engineering Identity Brand */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 font-bold tracking-tight text-[#F8FAFC]"
            onClick={() => setOpen(false)}
          >
            <div className="relative flex size-7 items-center justify-center rounded-md border border-[#38BDF8]/30 bg-[#0E1422] transition-colors group-hover:border-[#38BDF8]">
              <svg viewBox="0 0 24 24" className="size-4" fill="none">
                <path
                  d="M12 4L20 18H4L12 4Z"
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="2.2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs font-bold tracking-wider text-white group-hover:text-[#38BDF8] transition-colors">
                {site.name.toUpperCase()}
              </span>
              <span className="font-mono text-[9px] text-[#64748B] tracking-widest uppercase">
                EMBEDDED R&amp;D
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1 font-mono text-xs">
              {navLinks.map((l) => {
                const isActive = active === l.id;
                return (
                  <li key={l.id}>
                    <a
                      href={`#${l.id}`}
                      aria-current={isActive ? "true" : undefined}
                      className={`rounded-md px-3 py-1.5 transition-all ${
                        isActive
                          ? "bg-[#38BDF8] text-[#070A11] font-bold shadow-[0_0_12px_rgba(56,189,248,0.3)]"
                          : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#0E1422]"
                      }`}
                    >
                      {l.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Header CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setResumeOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-md border border-[#38BDF8]/30 bg-[#0E1422] px-3 py-1.5 font-mono text-xs text-[#F8FAFC] hover:border-[#38BDF8] hover:text-[#38BDF8] transition-all cursor-pointer"
            >
              <FileText className="size-3 text-[#38BDF8]" />
              ATS Resume
            </button>

            <a
              href={site.resume.href}
              download={site.resume.downloadName}
              className="inline-flex items-center gap-1.5 rounded-md bg-[#38BDF8] px-3.5 py-1.5 font-mono text-xs font-bold text-[#070A11] hover:bg-[#7dd3fc] transition-all shadow-[0_0_12px_rgba(56,189,248,0.25)]"
            >
              <Download className="size-3" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="rounded-md border border-[#38BDF8]/20 p-2 text-[#94A3B8] hover:text-white lg:hidden cursor-pointer"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {open && (
          <nav
            id="mobile-nav"
            aria-label="Mobile"
            className="border-t border-[#38BDF8]/20 bg-[#070A11]/98 px-5 py-5 lg:hidden backdrop-blur-2xl shadow-2xl"
          >
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2 font-mono text-xs ${
                      active === l.id
                        ? "bg-[#38BDF8] text-[#070A11] font-bold"
                        : "text-[#94A3B8] hover:bg-[#0E1422] hover:text-white"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex items-center gap-3 border-t border-[#38BDF8]/15 pt-4">
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setResumeOpen(true);
                }}
                className="w-full rounded-lg border border-[#38BDF8]/30 bg-[#0E1422] py-2 font-mono text-xs text-white"
              >
                View ATS Resume
              </button>
              <a
                href={site.resume.href}
                download={site.resume.downloadName}
                className="w-full text-center rounded-lg bg-[#38BDF8] py-2 font-mono text-xs font-bold text-[#070A11]"
              >
                Download PDF
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Interactive ATS Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
