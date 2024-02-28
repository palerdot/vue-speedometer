import path from "path"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import terser from "@rollup/plugin-terser"
import { nodeResolve } from "@rollup/plugin-node-resolve"
// import analyze from "rollup-plugin-analyzer"

const devMode = process.env.NODE_ENV === "development"

// ref: https://blog.openreplay.com/the-ultimate-guide-to-getting-started-with-the-rollup-js-javascript-bundler
function terserConfig() {
  return terser({
    ecma: 2020,

    mangle: { toplevel: true },

    compress: {
      module: true,
      toplevel: true,
      unsafe_arrows: true,
      drop_console: !devMode,
      drop_debugger: !devMode,
    },

    output: { quote_style: 1 },
  })
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: "VueSpeedometer",
      entry: path.resolve(__dirname, "src/index.js"),
      fileName: (format) => `vue-speedometer.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        sourcemap: devMode ? "inline" : false,
        plugins: [terserConfig()],
      },
      // IMPORTANT: This plugins is different from output plugins
      plugins: [
        nodeResolve(),
        // analyze({
        //   summaryOnly: true,
        //   filterSummary: true,
        // }),
      ],
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
