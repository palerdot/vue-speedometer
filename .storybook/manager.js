import { addons } from "@storybook/addons"
import { themes } from "@storybook/theming"
import { create } from "@storybook/theming/create"

const speedoTheme = create({
  base: "dark",

  appBg: "#413c69",
  appContentBg: "#2a2744",
  barBg: "#373359",
  // appContentBg: "#413c69",

  brandTitle: "vue-speedometer",
  brandUrl: "https://github.com/palerdot/vue-speedometer",
})

addons.setConfig({
  showPanel: true,
  theme: speedoTheme,
})
