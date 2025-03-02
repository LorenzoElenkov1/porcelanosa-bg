import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        custom: ["Porcelanosa", "Arial"],
        'ivy-thin': ["Ivy", "Porcelanosa", "Arial"]
      },
    },
  },
  plugins: [],
} satisfies Config;
