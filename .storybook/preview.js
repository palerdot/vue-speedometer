// ref: https://www.npmjs.com/package/@storybook/vue3
import { app } from "@storybook/vue3"

// DEVELOPMENT: 'src/index.js'
import VueSpeedometer from "../src/index"
// PRODUCTION build testing
// import VueSpeedometer from "../dist/index"

app.component("vue-speedometer", VueSpeedometer)
app.mixin({
  /* My mixin */
})
