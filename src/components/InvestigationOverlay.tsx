"use client";

import { motion } from "framer-motion";

const nodes = [
  { x: 6, y: 22 },
  { x: 26, y: 8 },
  { x: 50, y: 24 },
  { x: 74, y: 10 },
  { x: 94, y: 20 },
  { x: 14, y: 72 },
  { x: 38, y: 84 },
  { x: 64, y: 78 },
  { x: 90, y: 68 },
];

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [0, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [2, 6],
  [4, 8],
];

export default function InvestigationOverlay({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden z-0 ${className}`}>
      {/* Radar sweep */}
      <motion.div
        className="absolute -inset-[60%] origin-center"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(37,99,235,0.16), transparent 30%, transparent 100%)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
      />

      {/* Network graph (investigation / case-mapping motif) */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {edges.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="#2563EB"
            strokeWidth="0.25"
            initial={{ opacity: 0.08 }}
            animate={{ opacity: [0.08, 0.3, 0.08] }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
          />
        ))}
        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.x}
            cy={n.y}
            r="0.9"
            fill="#67E8F9"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.25, ease: "easeInOut" }}
          />
        ))}
      </svg>

      {/* Scanning line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent"
        initial={{ top: "0%" }}
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
