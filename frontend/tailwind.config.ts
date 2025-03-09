import { IBM_Plex_Sans } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#FBF8F6",
      },
      fontFamily:{
          commissionr: ["Commissioner", "var(--font-commissioner-bold)"],
          Plus_Jakarta_Sans: ["Plus Jakarta Sans", "var(--font-plus-jakarta-sans)"],
          IBM_Plex_Sans: ["IBM Plex Sans", "var(--font-ibm-plex-sans)"],
      }
    },
  },
  plugins: [],
} satisfies Config;
