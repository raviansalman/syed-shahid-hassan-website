"use client";

import { motion } from "framer-motion";

// Simplified, illustrative world dot-map (not geographically precise)
const worldDots: [number, number][] = [
  // North America
  [20, 30], [25, 25], [30, 32], [22, 40], [18, 35], [27, 20],
  // South America
  [35, 55], [38, 65], [33, 70], [40, 60], [36, 48],
  // Europe
  [95, 22], [100, 18], [105, 25], [98, 28], [92, 16],
  // Africa
  [95, 45], [100, 55], [105, 50], [98, 60], [102, 40], [92, 52],
  // Asia
  [130, 20], [140, 25], [150, 18], [135, 35], [145, 40], [155, 30], [125, 30], [160, 22],
  // Australia
  [160, 65], [165, 70], [170, 68], [163, 72],
];

const hubs = [
  { x: 140, y: 32 },
  { x: 98, y: 22 },
  { x: 25, y: 28 },
  { x: 118, y: 35 },
  { x: 150, y: 45 },
];

const arcs: [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [1, 3],
  [2, 3],
];

function arcPath(a: { x: number; y: number }, b: { x: number; y: number }) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2 - 18;
  return `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`;
}

export default function GlobalNetworkBackground({
  className = "",
  intensity = "subtle",
}: {
  className?: string;
  intensity?: "subtle" | "prominent";
}) {
  const opacity = intensity === "prominent" ? 0.9 : 0.45;

  return (
    <div className={`pointer-events-none overflow-hidden ${className}`} style={{ opacity }}>
      <svg viewBox="0 0 180 90" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
        <defs>
          <pattern id="hexgrid" width="9" height="15.6" patternUnits="userSpaceOnUse">
            <path
              d="M4.5 0 L9 2.6 L9 7.8 L4.5 10.4 L0 7.8 L0 2.6 Z"
              fill="none"
              stroke="#2563EB"
              strokeWidth="0.12"
              opacity="0.35"
            />
          </pattern>
        </defs>

        {/* Blockchain hex texture */}
        <rect x="0" y="0" width="180" height="90" fill="url(#hexgrid)" />

        {/* World dot-map */}
        {worldDots.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="0.6" fill="#0B1F45" opacity="0.4" />
        ))}

        {/* Cross-border connection arcs */}
        {arcs.map(([a, b], i) => (
          <motion.path
            key={i}
            d={arcPath(hubs[a], hubs[b])}
            fill="none"
            stroke="#67E8F9"
            strokeWidth="0.4"
            strokeDasharray="2 3"
            initial={{ strokeDashoffset: 0, opacity: 0.2 }}
            animate={{ strokeDashoffset: -60, opacity: [0.2, 0.55, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: i * 0.4 }}
          />
        ))}

        {/* International hub nodes */}
        {hubs.map((h, i) => (
          <motion.circle
            key={i}
            cx={h.x}
            cy={h.y}
            r="1.3"
            fill="#2563EB"
            initial={{ opacity: 0.4, scale: 1 }}
            animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.8, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}
