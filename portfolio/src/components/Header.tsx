"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download, FileText } from "lucide-react";
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
      { rootMargin: "-35% 0px -55% 0px" }
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
            ? "border-b border-slate-800/80 bg-[#070A11]/90 backdrop-blur-xl shadow-lg shadow-black/60"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Professional Branding Logo */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 font-bold tracking-tight text-[#F8FAFC]"
            onClick={() => setOpen(false)}
          >
            <div className="relative flex size-8 items-center justify-center rounded-lg border border-sky-400/30 bg-[#0E1422] transition-colors group-hover:border-sky-400 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.25)]">
              <span className="font-mono text-xs font-black text-sky-400">V</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm font-black tracking-wider text-white group-hover:text-sky-300 transition-colors">
                {site.brand}
              </span>
              <span className="font-mono text-[9px] text-slate-400 tracking-widest uppercase">
                EMBEDDED &amp; FIRMWARE
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
                      className={`rounded-md px-2.5 py-1.5 transition-all ${
                        isActive
                          ? "bg-sky-400 text-slate-950 font-bold shadow-[0_0_12px_rgba(56,189,248,0.3)]"
                          : "text-slate-300 hover:text-white hover:bg-[#0E1422]"
                      }`}
                    >
                      {l.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Action Trigger */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={() => setResumeOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-sky-400/30 bg-[#0E1422] px-3 py-1.5 font-mono text-xs font-semibold text-slate-200 hover:border-sky-400 hover:text-sky-300 transition-all cursor-pointer"
            >
              <FileText className="size-3.5 text-sky-400" />
              <span>ATS Resume</span>
            </button>

            <a
              href={site.resume.href}
              download={site.resume.downloadName}
              className="inline-flex items-center gap-1.5 rounded-lg bg-sky-400 px-3.5 py-1.5 font-mono text-xs font-bold text-slate-950 hover:bg-sky-300 transition-all shadow-[0_0_15px_rgba(56,189,248,0.3)] cursor-pointer"
            >
              <Download className="size-3.5" />
              <span>Resume PDF</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen(!open)}
            className="flex size-9 items-center justify-center rounded-lg border border-slate-800 text-slate-300 hover:text-white lg:hidden cursor-pointer"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div
            id="mobile-menu"
            className="border-b border-slate-800 bg-[#070A11]/98 px-5 py-6 backdrop-blur-2xl lg:hidden"
          >
            <nav aria-label="Mobile">
              <ul className="space-y-1 font-mono text-sm">
                {navLinks.map((l) => {
                  const isActive = active === l.id;
                  return (
                    <li key={l.id}>
                      <a
                        href={`#${l.id}`}
                        onClick={() => setOpen(false)}
                        className={`block rounded-lg px-3.5 py-2 transition-colors ${
                          isActive
                            ? "bg-sky-400 text-slate-950 font-bold"
                            : "text-slate-300 hover:bg-[#0E1422] hover:text-white"
                        }`}
                      >
                        {l.label}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-5 grid grid-cols-2 gap-2 border-t border-slate-800/80 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    setResumeOpen(true);
                  }}
                  className="flex items-center justify-center gap-1.5 rounded-lg border border-slate-700 bg-[#0E1422] py-2 font-mono text-xs font-semibold text-slate-200"
                >
                  <FileText className="size-3.5 text-sky-400" />
                  <span>View Resume</span>
                </button>

                <a
                  href={site.resume.href}
                  download={site.resume.downloadName}
                  className="flex items-center justify-center gap-1.5 rounded-lg bg-sky-400 py-2 font-mono text-xs font-bold text-slate-950"
                >
                  <Download className="size-3.5" />
                  <span>Download PDF</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Global Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
