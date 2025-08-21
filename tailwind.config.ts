import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#fef3f2",
          100: "#fee4e2",
          200: "#fecdcf",
          300: "#fda4a1",
          400: "#fb7a72",
          500: "#f05245",
          600: "#b4533a", // mid-bordeaux
          700: "#7f1d1d", // bordeaux (CTA base)
          800: "#6b1515",
          900: "#43100f",
        },
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
};

export default config;
