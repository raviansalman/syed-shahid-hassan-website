"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, Users, ShieldAlert, Scale, Search, Mic, Newspaper, Landmark, Presentation, ArrowRight } from "lucide-react";
import { Service, ServiceColor } from "@/data/content";

const icons = { GraduationCap, Users, ShieldAlert, Scale, Search, Mic, Newspaper, Landmark, Presentation };

const colorStyles: Record<ServiceColor, { chip: string; border: string; text: string; glow: string }> = {
  cobalt: { chip: "glass-gold", border: "hover:border-gold/50", text: "text-gold", glow: "hover:shadow-[0_12px_36px_-12px_rgba(37,99,235,0.35)]" },
  emerald: { chip: "glass-emerald", border: "hover:border-emerald-400/50", text: "text-emerald-600", glow: "hover:shadow-[0_12px_36px_-12px_rgba(16,185,129,0.35)]" },
  sky: { chip: "glass-sky", border: "hover:border-sky-400/50", text: "text-sky-600", glow: "hover:shadow-[0_12px_36px_-12px_rgba(56,130,246,0.35)]" },
  crimson: { chip: "glass-crimson", border: "hover:border-red-400/50", text: "text-red-600", glow: "hover:shadow-[0_12px_36px_-12px_rgba(220,38,38,0.35)]" },
  slate: { chip: "glass-slate", border: "hover:border-slate-400/50", text: "text-slate-600", glow: "hover:shadow-[0_12px_36px_-12px_rgba(71,85,105,0.35)]" },
  cyan: { chip: "glass-cyan", border: "hover:border-cyan-400/50", text: "text-cyan-600", glow: "hover:shadow-[0_12px_36px_-12px_rgba(8,145,178,0.35)]" },
};

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon];
  const style = colorStyles[service.color];

  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25, ease: "easeOut" }} className="h-full">
      <Link
        href={`/services/${service.slug}`}
        className={`group glass rounded-2xl p-6 flex flex-col h-full transition-all duration-300 hover:bg-white/85 ${style.border} ${style.glow}`}
      >
        <div className={`w-12 h-12 rounded-xl ${style.chip} flex items-center justify-center mb-4`}>
          <Icon size={22} className={style.text} />
        </div>
        <h3 className="font-serif text-xl text-navy mb-2 group-hover:text-gold transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-charcoal/65 leading-relaxed flex-grow">
          {service.shortDescription}
        </p>
        <span className={`mt-4 inline-flex items-center gap-1 text-sm font-medium ${style.text}`}>
          Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </span>
      </Link>
    </motion.div>
  );
}
