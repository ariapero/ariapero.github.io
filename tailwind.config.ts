import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			primary: 'var(--color-primary)',
  			secondary: 'var(--color-secondary)'
  		},
  		fontFamily: {
  			inter: ['var(--font-inter)', 'sans-serif'],
  			montserrat: ['var(--font-montserrat)', 'sans-serif'],
  			sloop: ['var(--font-sloop)', 'sans-serif'],
			reenie: ['var(--font-reenie)', 'sans-serif'],
  			// highriseRegular: ['var(--font-highrise-regular)', 'sans-serif'],
  			// highriseBold: ['var(--font-highrise-bold)', 'sans-serif'],
  			// highriseCondensed: ['var(--font-highrise-condensed)', 'sans-serif'],
  			grand: ['var(--font-grand)', 'sans-serif'],
			zen: ['var(--font-zen)', 'sans-serif']
  		},
  		fontSize: {
  			huge: '9rem'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		keyframes: {
			fadeIn: {
				'0%': { opacity: '0' },
				'100%': { opacity: '1' },
			},
		},
		animation: {
			fadeIn: 'fadeIn 1s ease-in both',
		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
