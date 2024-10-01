import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    hmr: {
      overlay: false, // Si quieres desactivar la superposición de errores de HMR
    },
  },
});
