// const preprocessor = require('@cypress/vue/dist/plugins/webpack');
const preprocessor = require("@cypress/webpack-preprocessor")
const coverage = require("@cypress/code-coverage/task")

module.exports = (on, config) => {
  coverage(on, config)
  preprocessor(on, config)

  // IMPORTANT return the config object
  return config
}
