"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SectionTabs({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-15% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  function handleClick(id: string) {
    const el = document.getElementById(id);
    if (el) {
      const offset = 96;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }

  return (
    <div className="sticky top-[88px] z-30 flex justify-center mb-2">
      <div className="glass-strong rounded-2xl p-1.5 flex gap-1 overflow-x-auto max-w-full">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className="relative px-4 py-2 text-sm font-medium rounded-xl whitespace-nowrap transition-colors"
          >
            {active === item.id && (
              <motion.span
                layoutId="section-tab-pill"
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1E3A8A]"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className={`relative ${active === item.id ? "text-white" : "text-navy/70 hover:text-navy"}`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
