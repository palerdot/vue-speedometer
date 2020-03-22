// NOTE: use 'test.only' to prevent jsdom svg breaking

import { mount } from "@vue/test-utils"
import VueSpeedometer from "../index"

const _mount = (options) =>
  mount(VueSpeedometer, {
    attachToDocument: true,
    ...options,
  })

describe("custom current text value", () => {
  // check the custom value text
  test.only("should display custom current text value", async () => {
    // checking the default value
    const full_dom_wrapper = _mount({
      propsData: {
        value: 333,
        currentValueText: "Porumai: ${value}",
      },
    })
    expect(full_dom_wrapper.find("text.current-value").text()).toBe(
      "Porumai: 333"
    )
    // change props to another text
    full_dom_wrapper.setProps({
      value: 555,
      currentValueText: "Current Value: ${value}",
    })

    await full_dom_wrapper.vm.$nextTick()
    await new Promise((resolve) => setTimeout(resolve, 0))

    expect(full_dom_wrapper.find("text.current-value").text()).toBe(
      "Current Value: 555"
    )
  })
})
