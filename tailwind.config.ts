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
        // Primary Electric Royal Blue (#0047FF / #0038D1) matching official SmartEdge branding
        primary: {
          50: "#eef4ff",
          100: "#dbe8fe",
          200: "#bfd5fe",
          300: "#92b9fd",
          400: "#5b90f9",
          500: "#0047ff", // Official Electric Royal Blue
          600: "#003bd6",
          700: "#002fa8",
          800: "#012686",
          900: "#051f6d",
          950: "#020b2e", // Deep Midnight Blue
        },
        navy: {
          800: "#0b1739",
          900: "#060f26",
          950: "#020718",
        },
        // SmartEdge Signature Colors
        brand: {
          blue: "#0047ff",        // Vibrant electric royal blue
          royal: "#003bd6",       // Deep electric blue
          navy: "#020b2e",        // Midnight navy
          dark: "#01061f",        // Ultra dark navy
          yellow: "#ffe600",      // Signature electric yellow accent
          "yellow-hover": "#ffd600",
          surface: "#fafafd",
          border: "#e2e8f0",
          cyan: "#00d2ff",
        },
        accent: {
          yellow: "#ffe600",
          lime: "#e6ff00",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "Poppins", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 20px -2px rgba(2, 11, 46, 0.05), 0 0 1px 1px rgba(2, 11, 46, 0.05)",
        "card-hover": "0 20px 35px -5px rgba(0, 71, 255, 0.12), 0 0 1px 1px rgba(0, 71, 255, 0.08)",
        glow: "0 0 40px -10px rgba(0, 71, 255, 0.35)",
        "yellow-glow": "0 0 30px -5px rgba(255, 230, 0, 0.4)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
