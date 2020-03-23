import { addParameters, configure } from "@storybook/vue"

// ref: https://storybook.js.org/docs/guides/guide-vue/
import Vue from "vue"

// DEVELOPMENT: 'src/index.js'
import VueSpeedometer from "../src/index"
// PRODUCTION build testing
// import VueSpeedometer from "../dist/index"

// Register global components.
Vue.component("vue-speedometer", VueSpeedometer)

configure(require.context("../src", true, /\.stories\.js$/), module)

addParameters({
  options: {
    /**
     * display the top-level grouping as a "root" in the sidebar
     * @type {Boolean}
     */
    showPanel: true,
    showRoots: true,
  },
  docs: {
    inlineStories: true,
  },
})
