import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: ".", // use playground folder as root
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../"),
    },
  },
});
