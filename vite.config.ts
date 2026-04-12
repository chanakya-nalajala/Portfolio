import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base to your repository name for GitHub Pages
  // Change 'Portfolio' to your actual repository name if different
  base: '/Portfolio/',
});
