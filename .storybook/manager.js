import { addons } from "@storybook/addons"
import { create } from "@storybook/theming/create"
import theme from "../src/core/theme"

const speedoTheme = create({
  ...theme,

  brandTitle: "vue-speedometer",
  brandUrl: "https://github.com/palerdot/vue-speedometer",
})

addons.setConfig({
  showPanel: true,
  theme: speedoTheme,
})
