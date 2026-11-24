import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // GitHub Pages publica el sitio en https://hpalomino1091.github.io/Palma_POS/
  base: "/Palma_POS/",
  plugins: [
    react(),        // Plugin oficial de React para Vite
    tailwindcss(),  // Plugin oficial de Tailwind CSS v4 para Vite
  ],
});
