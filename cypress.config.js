const { defineConfig } = require("cypress")

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

  // e2e: {
  //   setupNodeEvents(on, config) {
  //     // implement node event listeners here
  //   },
  // },
})
