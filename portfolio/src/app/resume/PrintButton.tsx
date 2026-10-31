"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => typeof window !== "undefined" && window.print()}
      className="inline-flex items-center gap-1.5 rounded-lg border border-[#B6E778]/30 bg-[#1B211D] px-3.5 py-2 font-mono text-xs text-[#F1F4EF] hover:border-[#B6E778] transition-colors cursor-pointer"
    >
      <Printer className="size-3.5 text-[#B6E778]" />
      Print / Save as PDF
    </button>
  );
}
