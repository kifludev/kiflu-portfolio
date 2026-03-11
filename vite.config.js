import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/kiflu-portfolio/", // ✅ start and end with a slash
  server: {
    port: 3000,
  },
});
