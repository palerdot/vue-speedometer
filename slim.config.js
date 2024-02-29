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
    outDir: path.resolve(__dirname, "dist/slim"),
    lib: {
      name: "VueSpeedometer",
      entry: path.resolve(__dirname, "src/index.vue"),
      // fileName: (format) => `vue-speedometer.${format}.js`,
      formats: ["es"],
      fileName: () => "index.js",
    },
    rollupOptions: {
      external: [
        "vue",
        "d3-array",
        "d3-color",
        "d3-ease",
        "d3-format",
        "d3-interpolate",
        "d3-scale",
        "d3-selection",
        "d3-shape",
        "d3-transition",
      ],
      output: {
        globals: {
          vue: "Vue",
        },
        sourcemap: devMode ? "inline" : false,
        plugins: [terserConfig()],
      },
      treeshake: {
        moduleSideEffects: false,
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
      // vue: "vue/dist/vue.esm-bundler.js",
    },
  },
  plugins: [vue()],
})
