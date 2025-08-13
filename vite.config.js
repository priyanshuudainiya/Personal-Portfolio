import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              primary: "#6366F1",
              secondary: "#F43F5E",
              accent: "#22D3EE",
              background: "#0F172A",
              text: "#F1F5F9",
            },
          },
        },
      },
    }),
  ],
});
