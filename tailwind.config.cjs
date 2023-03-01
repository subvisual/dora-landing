/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontSize: {
      sm: "1rem",
      base: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
      "3xl": "3.75rem",
      "4xl": "5.625rem",
    },
    extend: {
      colors: {
        black: "#0F1314",
        yellow: "#FED766",
        "light-gray": "#DAD9DB",
        white: "#F4F7F5",
        gray: "#575A5E",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        studio: ["Studio Feixen Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
