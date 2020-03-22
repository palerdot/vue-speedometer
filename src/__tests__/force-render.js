// NOTE: use 'test.only' to prevent jsdom svg breaking

import { mount } from "@vue/test-utils"
import VueSpeedometer from "../index"

const _mount = (options) =>
  mount(VueSpeedometer, {
    attachToDocument: true,
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

    // should update segments to 10
    await wrapper.vm.$nextTick()
    await new Promise((resolve) => setTimeout(resolve, 0))

    expect(wrapper.findAll("path.speedo-segment").length).toBe(10)

    // setting to force render as false
    // change the props and give 'rerender' true
    wrapper.setProps({
      segments: 15,
      // set force render to true so that we should get 10 segments
      forceRender: false,
    })

    await wrapper.vm.$nextTick()
    await new Promise((resolve) => setTimeout(resolve, 0))

    expect(wrapper.findAll("path.speedo-segment").length).toBe(10)
  })
})
