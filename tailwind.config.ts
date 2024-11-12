import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "background-color": "#fffafa",
        "primary-color": "#faaf2e",
        "secondary-color": "#74ec8c",
        "bg-button": "#156e84",

        "background-dark": "#e5efff",
        "primary-dark": "#022983",
        "secondary-dark": "#a34ffc",
        "bg-button-dark": "#b604f1",
      },
      fontFamily: {
        love: ["Love Ya Like A Sister", "serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;