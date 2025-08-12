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
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: {
          lightest: "#a6bed9",
          lighter: "#205188", 
          light: "#144277",
          DEFAULT: "#082E57",
          dark: "#031D39",
          darker: "#00132A",
          darkest: "#06031c"
        },
        secondary: {
          lighter: "#E2B19C", 
          light: "#ee9d6bff", 
          DEFAULT: "#EC874A", 
          dark: "#c06006ff",
          darker: "#884a04ff",
        },
        neutral: {
          lighter: "#ffffff",
          light: "#f3f4f6",
          DEFAULT: "#9ca3af",
          dark: "#4b5563",
          darker: "#111827",
        },
      },
    },
  },
  plugins: [],
};

export default config;