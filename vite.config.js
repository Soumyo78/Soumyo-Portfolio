import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  // Make sure the capitalization matches your GitHub repository name exactly!
  base: mode === "production" ? "/Soumyo-Portfolio/" : "/",
}));
