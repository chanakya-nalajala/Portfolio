import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // Served from the custom domain root (chanakya.got-a.page), not /Portfolio/
  base: "/",
  build: {
    // The PDF renderer (~1.2 MB) is lazy-loaded only when the resume is downloaded.
    chunkSizeWarningLimit: 1300,
  },
});
