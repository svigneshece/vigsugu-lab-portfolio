import type { ProjectVisualKey } from "@/data/site";

/** Simple built-in artwork used until you add a real project image. */
export function ProjectVisual({ kind }: { kind: ProjectVisualKey }) {
  return (
    <svg
      viewBox="0 0 400 180"
      preserveAspectRatio="xMidYMid slice"
      className="block size-full text-accent"
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <pattern id={`grid-${kind}`} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="var(--color-line)" strokeWidth="0.6" />
        </pattern>
      </defs>
      <rect width="400" height="180" fill={`url(#grid-${kind})`} />

      {kind === "mesh" && (
        <g stroke="currentColor" fill="none" strokeWidth="1.5">
          <path d="M60 130 L140 60 L230 110 L330 50 M140 60 L200 30 M230 110 L320 140 M60 130 L230 110" strokeOpacity="0.45" />
          {[[60,130],[140,60],[230,110],[330,50],[200,30],[320,140]].map(([x,y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="6" fill="var(--color-bg)" />
          ))}
          <circle cx="330" cy="50" r="9" fill="var(--color-electric)" stroke="var(--color-electric)" />
        </g>
      )}

      {kind === "robot" && (
        <g stroke="currentColor" fill="none" strokeWidth="1.5">
          {[40, 80, 120, 160].map((r) => (
            <path key={r} d={`M${200 - r} 160 A${r} ${r} 0 0 1 ${200 + r} 160`} strokeOpacity="0.35" />
          ))}
          <path d="M200 160 L275 62" strokeWidth="2" />
          <circle cx="200" cy="160" r="6" fill="currentColor" />
          <circle cx="120" cy="105" r="4" fill="currentColor" stroke="none" />
          <circle cx="262" cy="92" r="5" fill="var(--color-electric)" stroke="none" />
        </g>
      )}

      {kind === "health" && (
        <g stroke="currentColor" fill="none" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
          <polyline points="0,95 70,95 90,95 105,55 120,135 135,40 150,95 230,95 250,95 265,70 280,120 295,95 400,95" />
        </g>
      )}
    </svg>
  );
}
