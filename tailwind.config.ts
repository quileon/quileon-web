import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
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
        "pastel-green": "#ccd5ae",
        "pastel-pink": "#faedcd",
        "pastel-white": "#fefae0",
        "pastel-brown": "#d4a373",
        "pastel-grey": "#e9edc9",
      },
    },
  },
  plugins: [typography],
} satisfies Config;
