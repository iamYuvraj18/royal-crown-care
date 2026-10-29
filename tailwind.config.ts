import type { Config } from "tailwindcss";

// Brand colours: sirf yahin se badlo, poori site mein change ho jayega.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FFF9EF",
        cream: "#F7ECD8",
        gold: { DEFAULT: "#C69A32", deep: "#A87A14" },
        espresso: "#382014",
        neem: "#174B2C",
        burgundy: "#8B2937",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
