import path from "path"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: "VueSpeedometer",
      entry: path.resolve(__dirname, "src/index.js"),
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  resolve: {
    alias: {
      // ref: https://github.com/vitejs/vite/discussions/4158
      // needed to enable template compiling for cypress
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
  plugins: [vue()],
})
