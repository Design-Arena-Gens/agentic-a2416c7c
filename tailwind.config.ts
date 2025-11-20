import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5D4BFF",
          dark: "#4334C6",
          light: "#8475FF"
        },
        accent: "#FFA928",
        slate: {
          950: "#0d1220"
        }
      },
      fontFamily: {
        heading: ["'Poppins'", "sans-serif"],
        body: ["'Inter'", "sans-serif"]
      },
      backgroundImage: {
        grid: "radial-gradient(circle at center, rgba(93,75,255,0.25) 0, rgba(93,75,255,0.05) 40%, transparent 70%)",
        glow: "conic-gradient(from 180deg at 50% 50%, rgba(93,75,255,0.45), rgba(255,169,40,0.45), rgba(93,75,255,0.45))"
      }
    }
  },
  plugins: []
};

export default config;
