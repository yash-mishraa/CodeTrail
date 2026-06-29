import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#070a09",
        panel: "#0d1210",
        lime: "#9BFF2E",
        muted: "#7c8b83",
      },
      fontFamily: { mono: ["JetBrains Mono", "Fira Code", "Cascadia Code", "Consolas", "monospace"] },
      boxShadow: {
        glow: "0 0 24px rgba(155,255,46,.10)",
        "glow-strong": "0 0 32px rgba(155,255,46,.18)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
