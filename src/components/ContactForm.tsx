"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/data/content";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full bg-white/50 border border-navy/15 rounded-xl px-4 py-2.5 text-navy placeholder:text-charcoal/30 focus:outline-none focus:border-gold/60 focus:bg-white/80 transition-colors";

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-gold rounded-2xl p-8 text-center"
      >
        <p className="font-serif text-xl text-navy mb-2">Thank you.</p>
        <p className="text-charcoal/70">
          Your message has been received. Available around the clock, we&apos;ll be in touch shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-navy/80 mb-1.5">
          Name
        </label>
        <input id="name" name="name" type="text" required className={inputClasses} />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-navy/80 mb-1.5">
          Email
        </label>
        <input id="email" name="email" type="email" required className={inputClasses} />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-navy/80 mb-1.5">
          Phone (WhatsApp preferred)
        </label>
        <input id="phone" name="phone" type="tel" className={inputClasses} />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-navy/80 mb-1.5">
          Service Interest
        </label>
        <select id="service" name="service" className={`${inputClasses} appearance-none`}>
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy/80 mb-1.5">
          Message
        </label>
        <textarea id="message" name="message" rows={5} required className={inputClasses} />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={status === "submitting"}
        className="glow-gold bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] text-white px-6 py-3 rounded-xl font-medium transition-all disabled:opacity-60 w-full md:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </motion.button>

      {status === "error" && (
        <p className="text-red-500 text-sm">
          Something went wrong. Please try again or reach out via WhatsApp.
        </p>
      )}
    </form>
  );
}
