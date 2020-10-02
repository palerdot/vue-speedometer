/*
 * NOTE:
 * IMPORTANT:
 *
 * This test limitation is fixed with e2e cypress tests (inside tests/)
 *
 * IMPORTANT: Test limitation
 * @vue/test-utils uses jsdom which has a limitation of mimicking svg functionality
 *
 * ref: https://github.com/jsdom/jsdom/issues/2531
 *
 * We cannot test updating of svg in the dom and verify if the change is reflected in the vue component
 * Till the JSDOM issue is fixed or if @vue/test-utils uses a better adapter like 'Enzyme (React)'
 * we have this limitation of testing the actual update of svg elements for vue
 */

import { mount } from "@vue/test-utils"
import VueSpeedometer from "../index"

const div = document.createElement("div")
div.id = "root"
document.body.appendChild(div)

const _mount = (options) =>
  mount(VueSpeedometer, {
    attachTo: div,
    ...options,
  })

describe("forceRender testing", () => {
  // mount with default 'propsData' which you want to watch on 'props' change
  const wrapper = _mount({
    propsData: {
      segments: 5,
    },
  })

  test.only("'forceRender' => true => false", async () => {
    expect(wrapper.findAll("path.speedo-segment").length).toBe(5)
    // change the props and give 'rerender' true
    wrapper.setProps({
      segments: 10,
      // set force render to true so that we should get 10 segments
      forceRender: true,
    })

    /* // should update segments to 10
    await new Promise((resolve) => setTimeout(resolve, 0))
    await wrapper.vm.$nextTick()

    expect(wrapper.findAll("path.speedo-segment").length).toBe(10)

    // setting to force render as false
    // change the props and give 'rerender' true
    wrapper.setProps({
      segments: 15,
      // set force render to true so that we should get 10 segments
      forceRender: false,
    }) */

    /*
     * Please note the vue svg test limitation added at the start
     */
    expect(wrapper.vm.$props.segments).toEqual(10)

    /* await wrapper.vm.$nextTick()
    await new Promise((resolve) => setTimeout(resolve, 0))

    expect(wrapper.findAll("path.speedo-segment").length).toBe(10) */

    wrapper.destroy()
  })
})
