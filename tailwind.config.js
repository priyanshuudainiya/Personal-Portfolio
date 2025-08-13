/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1", // Indigo
        secondary: "#F43F5E", // Rose
        accent: "#22D3EE", // Cyan
        background: "#0F172A", // Dark bg
        text: "#F1F5F9", // Light text
      },
    },
  },
};
