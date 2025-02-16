import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // Támogatás a dark mode-hoz
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        background: {
          light: "#f8f9fa",
          dark: "#1c1c1c",
        },
        foreground: {
          light: "#212529",
          dark: "#f8f9fa",
        },
        primary: {
          DEFAULT: "#6c63ff", // Alapértelmezett kékes-lila
          light: "#8b7cff",
          dark: "#5046cc",
        },
        secondary: {
          DEFAULT: "#ff6584", // Pasztell pirosas-rózsaszín
          light: "#ff8da4",
          dark: "#cc4d66",
        },
        accent: {
          DEFAULT: "#ffd166", // Pasztell sárga
          light: "#ffde99",
          dark: "#ccaa52",
        },
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        serif: ["Merriweather", "Georgia", "serif"],
        mono: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
