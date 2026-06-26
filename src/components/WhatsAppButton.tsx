"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function WhatsAppButton({ className = "" }: { className?: string }) {
  return (
    <motion.a
      href={siteConfig.whatsapp || "https://wa.me/"}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`glass-whatsapp relative flex items-center justify-center gap-2 text-white rounded-xl px-6 py-3.5 font-medium overflow-hidden ${className}`}
    >
      <motion.span
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-xl bg-[#25D366]/20 blur-md"
      />
      <MessageCircle size={18} className="relative" />
      <span className="relative">Chat on WhatsApp</span>
    </motion.a>
  );
}

export function WhatsAppFloatingButton() {
  return (
    <motion.a
      href={siteConfig.whatsapp || "https://wa.me/"}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="glass-whatsapp fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <motion.span
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
        className="absolute inset-0 rounded-full bg-[#25D366]/40"
      />
      <MessageCircle size={24} className="relative text-white" />
    </motion.a>
  );
}
