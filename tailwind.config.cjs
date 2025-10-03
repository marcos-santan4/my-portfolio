/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Habilita o dark mode baseado na classe 'dark' no HTML
  theme: {
    extend: {
      colors: {
        primary: "#14532d", // dark green
        secondary: "#0f172a", // dark blue
        accent: "#22c55e", // vibrant green
        dark: "#0a0a0a", // rich black
      },
    },
  },
  plugins: [],
};

export default config;
