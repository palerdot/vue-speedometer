import { defineConfig } from "vite"
import Vue from "@vitejs/plugin-vue"

export default defineConfig({
  plugins: [Vue()],
  test: {
    globals: true,
    environment: "jsdom",
    // spec.js belongs to cypress
    include: ["src/**/*.test.js"],
  },
})
