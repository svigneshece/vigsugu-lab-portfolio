"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
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
            ? "border-b border-[#B6E778]/15 bg-[#101310]/90 backdrop-blur-xl shadow-lg shadow-black/40"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          {/* Brand Logo in Embedded Industrial aesthetic */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 font-bold tracking-tight text-[#F1F4EF]"
            onClick={() => setOpen(false)}
          >
            <div className="relative flex size-7 items-center justify-center rounded-md border border-[#B6E778]/30 bg-[#1B211D] transition-colors group-hover:border-[#B6E778]">
              <svg viewBox="0 0 24 24" className="size-4" fill="none">
                <path
                  d="M12 4L20 18H4L12 4Z"
                  fill="none"
                  stroke="#B6E778"
                  strokeWidth="2.2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="font-mono text-sm tracking-wider">{site.brand}</span>
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
                          ? "bg-[#B6E778] text-[#101310] font-bold"
                          : "text-[#9EAA9A] hover:text-[#F1F4EF] hover:bg-[#1B211D]"
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
              className="inline-flex items-center gap-1.5 rounded-md border border-[#B6E778]/30 bg-[#1B211D] px-3 py-1.5 font-mono text-xs text-[#F1F4EF] hover:border-[#B6E778] hover:text-[#B6E778] transition-all cursor-pointer"
            >
              <FileText className="size-3 text-[#B6E778]" />
              ATS Resume
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-md bg-[#B6E778] px-3 py-1.5 font-mono text-xs font-bold text-[#101310] hover:bg-[#cbf58f] transition-all shadow-[0_0_12px_rgba(182,231,120,0.2)]"
            >
              Contact
              <ArrowUpRight className="size-3" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="rounded-md border border-[#B6E778]/20 p-2 text-[#9EAA9A] hover:text-white lg:hidden cursor-pointer"
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
          <nav id="mobile-nav" aria-label="Mobile" className="border-t border-[#B6E778]/20 bg-[#101310]/95 px-5 py-4 lg:hidden backdrop-blur-2xl">
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2 font-mono text-xs ${
                      active === l.id
                        ? "bg-[#B6E778] text-[#101310] font-bold"
                        : "text-[#F1F4EF] hover:bg-[#1B211D]"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="col-span-2 pt-2 border-t border-[#B6E778]/15 flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    setResumeOpen(true);
                  }}
                  className="w-full text-center rounded-lg border border-[#B6E778]/30 bg-[#1B211D] py-2 font-mono text-xs text-[#B6E778]"
                >
                  View ATS Resume
                </button>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
