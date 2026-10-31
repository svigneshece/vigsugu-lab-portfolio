/**
 * Hero visual: a small LoRa-style mesh. Packets hop node to node along the
 * routes. Purely decorative, so it is hidden from assistive tech.
 */
const nodes: Record<string, { x: number; y: number; label: string }> = {
  n1: { x: 70, y: 330, label: "N1" },
  n2: { x: 120, y: 150, label: "N2" },
  n3: { x: 240, y: 260, label: "N3" },
  n4: { x: 270, y: 80, label: "N4" },
  n5: { x: 380, y: 170, label: "N5" },
  n6: { x: 330, y: 370, label: "N6" },
  gw: { x: 455, y: 290, label: "Gateway" },
};

const links: [string, string][] = [
  ["n1", "n2"], ["n1", "n3"], ["n2", "n3"], ["n2", "n4"], ["n3", "n4"], ["n3", "n5"],
  ["n3", "n6"], ["n4", "n5"], ["n5", "gw"], ["n6", "gw"], ["n5", "n6"],
];

const routes = [
  { keys: ["n1", "n3", "n5", "gw"], begin: "0s" },
  { keys: ["n2", "n4", "n5", "gw"], begin: "1.2s" },
  { keys: ["n2", "n3", "n6", "gw"], begin: "2.4s" },
].map((r) => ({
  begin: r.begin,
  d: r.keys.map((k, i) => `${i === 0 ? "M" : "L"}${nodes[k].x},${nodes[k].y}`).join(" "),
}));

export function MeshVisual() {
  return (
    <figure className="m-0">
      <div className="overflow-hidden rounded-2xl border border-line bg-surface">
        <svg viewBox="0 0 520 440" className="block h-auto w-full" aria-hidden="true" role="presentation">
          <defs>
            <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1" fill="var(--color-line)" />
            </pattern>
          </defs>
          <rect width="520" height="440" fill="url(#dots)" />

          {links.map(([a, b]) => (
            <line
              key={`${a}-${b}`}
              x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
              stroke="var(--color-line)" strokeWidth="1.5"
            />
          ))}

          {routes.map((r) => (
            <path key={r.d} d={r.d} fill="none" stroke="var(--color-accent)" strokeOpacity="0.28" strokeWidth="1.5" strokeDasharray="3 5" />
          ))}

          {routes.map((r) => (
            <circle key={`p-${r.d}`} r="4" fill="var(--color-accent)" className="packet">
              <animateMotion dur="3.6s" begin={r.begin} repeatCount="indefinite" path={r.d} />
            </circle>
          ))}

          {Object.entries(nodes).map(([key, n]) => {
            const isGw = key === "gw";
            return (
              <g key={key}>
                <circle cx={n.x} cy={n.y} r={isGw ? 10 : 7} fill="none" stroke={isGw ? "var(--color-electric)" : "var(--color-accent)"} strokeWidth="1.5" className="node-ring" />
                <circle
                  cx={n.x} cy={n.y} r={isGw ? 10 : 7}
                  fill={isGw ? "var(--color-electric)" : "var(--color-bg)"}
                  stroke={isGw ? "var(--color-electric)" : "var(--color-accent)"}
                  strokeWidth="2"
                />
                <text x={n.x + (isGw ? -26 : 13)} y={n.y + (isGw ? 28 : -12)} fontSize="12" fill="var(--color-muted)" fontFamily="var(--font-mono)">
                  {n.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <figcaption className="mt-3 text-sm text-muted">
        Packets hop from node to node, choosing routes by signal strength.
      </figcaption>
    </figure>
  );
}
