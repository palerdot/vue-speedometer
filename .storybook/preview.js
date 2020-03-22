import { addParameters, configure } from "@storybook/vue"
import { create } from "@storybook/theming/create"

// ref: https://storybook.js.org/docs/guides/guide-vue/
import Vue from "vue"

// DEVELOPMENT: 'src/index.js'
import VueSpeedometer from "../src/index"
// PRODUCTION build testing
// import VueSpeedometer from "../dist/index"

// Register global components.
Vue.component("vue-speedometer", VueSpeedometer)

configure(require.context("../src", true, /\.stories\.js$/), module)

const speedoTheme = create({
  base: "dark",

  appBg: "#413c69",
  appContentBg: "#2a2744",
  barBg: "#373359",
  // appContentBg: "#413c69",

  brandTitle: "vue-speedometer",
  brandUrl: "https://github.com/palerdot/vue-speedometer",
})

addParameters({
  options: {
    /**
     * display the top-level grouping as a "root" in the sidebar
     * @type {Boolean}
     */
    showPanel: true,
    showRoots: true,
    theme: speedoTheme,
  },
  docs: {
    inlineStories: true,
  },
})
