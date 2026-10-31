const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

export const button = {
  primary: `${base} bg-[#B6E778] text-[#101310] font-semibold hover:bg-[#cbf58f] active:scale-[0.98] shadow-[0_0_20px_rgba(182,231,120,0.22)]`,
  secondary: `${base} border border-[#B6E778]/25 bg-[#1B211D] text-[#F1F4EF] hover:bg-[#232B25] hover:border-[#B6E778]/50 active:scale-[0.98]`,
  accent: `${base} bg-[#B6E778] text-[#101310] font-bold hover:bg-[#cbf58f] shadow-[0_0_24px_rgba(182,231,120,0.3)] active:scale-[0.98]`,
  ghost: `${base} text-[#9EAA9A] hover:text-[#F1F4EF] hover:bg-[#1B211D] active:scale-[0.98]`,
  mono: `${base} font-mono text-xs border border-[#B6E778]/20 bg-[#1B211D] text-[#F1F4EF] hover:border-[#B6E778] hover:text-[#B6E778]`,
};
