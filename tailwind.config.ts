import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        sloop: ['var(--font-sloop)', 'sans-serif'],
        highriseRegular: ['var(--font-highrise-regular)', 'sans-serif'],
        highriseBold: ['var(--font-highrise-bold)', 'sans-serif'],
        highriseCondensed: ['var(--font-highrise-condensed)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
