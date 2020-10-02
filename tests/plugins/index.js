// const preprocessor = require('@cypress/vue/dist/plugins/webpack');
const webpackPreprocessor = require("@cypress/webpack-preprocessor")
const coverage = require("@cypress/code-coverage/task")

module.exports = (on, config) => {
  coverage(on, config)

  // webpackPreprocessor(on, config)
  const webpackOptions = {
    // send in the options from your webpack.config.js, so it works the same
    // as your app's code
    webpackOptions: require("./cypress-webpack-config"),
    watchOptions: {},
  }
  on("file:preprocessor", webpackPreprocessor(webpackOptions))

  // IMPORTANT return the config object
  return config
}
