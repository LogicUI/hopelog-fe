import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        medium: '500',
        semibold: '600',
      },
      colors: {
        white: '#FFFFFF',
        dark: '#2E2E40',
        muted: '#59596E',
        ascent: '#4F92FF'
      },
    },
  },
  plugins: [],
} satisfies Config;
