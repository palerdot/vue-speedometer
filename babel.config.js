module.exports = function(api) {
  api.cache(true)

  const presets = ["@babel/preset-env"]
  const plugins = [
    "@babel/plugin-proposal-class-properties",
    // "transform-vue-template",
  ]

  return {
    presets,
    plugins,
    env: {
      production: getProductionConfig(),
    },
  }

  function getProductionConfig() {
    return {
      plugins: [
        ["transform-remove-console"],
        ["@babel/plugin-transform-modules-commonjs"],
        // ["transform-vue-template"],
        [
          "@babel/plugin-transform-runtime",
          {
            absoluteRuntime: false,
            corejs: false,
            helpers: true,
            regenerator: true,
            useESModules: false,
          },
        ],
        [
          "module-resolver",
          {
            root: ["./src"],
          },
        ],
        ["@babel/plugin-proposal-class-properties"],
      ],
      presets: [["minify"]],
    }
  }
}
