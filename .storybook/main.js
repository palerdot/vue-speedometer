const path = require("path")

module.exports = {
  stories: [
    // "../stories/*.stories.js",
    "../src/stories/*.stories.js",
  ],
  addons: [
    // "@storybook/addon-knobs/register",
    "@storybook/addon-storysource",
    {
      name: "@storybook/addon-docs",
      options: {
        vueDocgenOptions: {
          alias: {
            "@": path.resolve(__dirname, "../"),
          },
        },
      },
    },
  ],
}
