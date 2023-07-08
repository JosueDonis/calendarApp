/// <reference types="vitest" />
import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), legacy()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      types: `${path.resolve(__dirname, "./src/types/")}`,
      helpers: `${path.resolve(__dirname, "./src/helpers/")}`,
      hooks: `${path.resolve(__dirname, "./src/hooks/")}`,
      components: `${path.resolve(__dirname, "./src/components/")}`,
      theme: `${path.resolve(__dirname, "./src/theme/")}`,
      pages: `${path.resolve(__dirname, "./src/pages/")}`,
    },
  },
});
