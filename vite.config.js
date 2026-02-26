import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  // Use root base locally, project subpath when deployed.
  base: mode === "production" ? "/soumyo-portfolio/" : "/",
}));
