const { defineConfig } = require("cypress")
const vitePreprocessor = require("cypress-vite")

module.exports = defineConfig({
  video: false,

  component: {
    setupNodeEvents(on, config) {
      require("@cypress/code-coverage/task")(on, config)

      return config
    },
    specPattern: "tests/components/**/*.spec.js*",
    devServer: {
      framework: "vue",
      bundler: "vite",
      // bundler: "webpack",
    },
  },

  // ref: https://www.npmjs.com/package/cypress-vite
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", vitePreprocessor())
    },
  },
})
