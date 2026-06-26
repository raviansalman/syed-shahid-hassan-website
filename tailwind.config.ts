import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B1F45",
        // Brand accent — kept the `gold` token name (used across components)
        // but the color itself is a bold cobalt blue, not yellow/gold.
        gold: "#2563EB",
        cream: "#F9F7F2",
        charcoal: "#1A1A2E",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "8px",
      },
    },
  },
  plugins: [],
};
export default config;
