import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: path.join(__dirname, "build"),
  },
  server: {
    host: true,
    strictPort: true,
    port: 3000,
  },
});
