// ref: https://www.npmjs.com/package/@storybook/vue3
// ref: https://github.com/storybookjs/storybook/issues/19295
import { setup } from "@storybook/vue3"

// DEVELOPMENT: 'src/index.js'
import VueSpeedometer from "../src/index"
// PRODUCTION build testing
// import VueSpeedometer from "../dist/index"
//
setup(app => {
  app.component("vue-speedometer", VueSpeedometer)
  app.mixin({
    /* My mixin */
  })
})

