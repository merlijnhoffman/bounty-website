import type { Config } from "tailwindcss";

// Palette mirrors the app's constants/colors.ts
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0C0C0E",
        surface: "#161618",
        card: "#1E1E22",
        elevated: "#252529",
        line: "#2A2A2E",
        "line-light": "#3A3A3E",
        ink: "#F5F5F7",
        "ink-2": "#9CA3AF",
        "ink-3": "#6B7280",
        amber: {
          DEFAULT: "#F59E0B",
          dark: "#D97706",
          light: "#FBBF24",
        },
        teal: { DEFAULT: "#14B8A6" },
        live: "#10B981",
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(245, 158, 11, 0.35)",
      },
      keyframes: {
        ping2: {
          "0%": { transform: "scale(0.6)", opacity: "0.6" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        sweep: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        ping2: "ping2 2.4s ease-out infinite",
        sweep: "sweep 5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
