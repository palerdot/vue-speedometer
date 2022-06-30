module.exports = {
  stories: [
    "../src/stories/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "@storybook/builder-vite", // 👈 The builder enabled here.
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      define: {
        ...config.define,
        global: "window",
      },
    }
  },
}
