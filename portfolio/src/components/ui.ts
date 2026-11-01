const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

export const button = {
  primary: `${base} bg-[#38BDF8] text-[#070A11] font-bold hover:bg-[#7dd3fc] active:scale-[0.98] shadow-[0_0_20px_rgba(56,189,248,0.25)]`,
  secondary: `${base} border border-[#38BDF8]/25 bg-[#0E1422] text-[#F8FAFC] hover:bg-[#151D30] hover:border-[#38BDF8]/50 active:scale-[0.98]`,
  accent: `${base} bg-gradient-to-r from-[#38BDF8] to-[#00F0FF] text-[#070A11] font-bold hover:opacity-95 shadow-[0_0_24px_rgba(56,189,248,0.3)] active:scale-[0.98]`,
  ghost: `${base} text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#0E1422] active:scale-[0.98]`,
  mono: `${base} font-mono text-xs border border-[#38BDF8]/20 bg-[#0E1422] text-[#F8FAFC] hover:border-[#38BDF8] hover:text-[#38BDF8]`,
};
