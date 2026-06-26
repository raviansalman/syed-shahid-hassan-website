"use client";

import { motion } from "framer-motion";
import { timeline } from "@/data/content";

const accents = [
  { bar: "bg-gold", label: "text-gold", glow: "shadow-[0_0_10px_2px_rgba(37,99,235,0.5)]" },
  { bar: "bg-emerald-500", label: "text-emerald-600", glow: "shadow-[0_0_10px_2px_rgba(16,185,129,0.5)]" },
  { bar: "bg-sky-500", label: "text-sky-600", glow: "shadow-[0_0_10px_2px_rgba(56,130,246,0.5)]" },
  { bar: "bg-slate-500", label: "text-slate-600", glow: "shadow-[0_0_10px_2px_rgba(71,85,105,0.5)]" },
  { bar: "bg-red-500", label: "text-red-600", glow: "shadow-[0_0_10px_2px_rgba(220,38,38,0.5)]" },
  { bar: "bg-cyan-500", label: "text-cyan-600", glow: "shadow-[0_0_10px_2px_rgba(8,145,178,0.5)]" },
];

export default function Timeline() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {timeline.map((entry, i) => {
        const a = accents[i % accents.length];
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: (i % 4) * 0.06, ease: [0.21, 0.47, 0.32, 0.98] }}
            whileHover={{ y: -4 }}
            className="glass rounded-xl pl-4 pr-5 py-4 relative overflow-hidden hover:bg-white/80 transition-colors"
          >
            <span className={`absolute left-0 top-0 bottom-0 w-1 ${a.bar}`} />
            <div className="flex items-center gap-2 mb-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${a.bar} ${a.glow}`} />
              <p className={`text-xs font-semibold tracking-wide uppercase ${a.label}`}>{entry.period}</p>
            </div>
            <h3 className="font-serif text-base md:text-lg text-navy leading-snug">{entry.role}</h3>
            <p className="text-charcoal/55 text-sm mt-0.5">
              {entry.org}, {entry.location}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
