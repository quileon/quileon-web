import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import catppuccin from "@catppuccin/tailwindcss"; // Added import

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
      keyframes: {
        running: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        wag: {
          "0%, 100%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
      },
      animation: {
        running: "running 0.5s ease-in-out infinite",
        wag: "wag 1s ease-in-out infinite",
      },
    },
    plugins: [typography],
    // Ensure all Tailwind features are enabled
    corePlugins: {
      preflight: true,
    },
  },
  plugins: [
    typography,
    catppuccin({
      // prefix: "ctp", // Optional: string - Prefix for generated utilities, e.g. `text-ctp-blue`
      // defaultFlavour: "latte", // Optional: string - The default flavour for utilities, e.g. `text-blue`
    }),
  ],
} satisfies Config;
