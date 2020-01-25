// NOTE: use 'test.only' to prevent jsdom svg breaking

import { mount } from "@vue/test-utils"
import VueSpeedometer from "../index"

const _mount = (options) =>
  mount(VueSpeedometer, {
    attachToDocument: true,
    ...options,
  })

window.SVGPathElement = () => {}

describe("value format", () => {
  // check the format of the values
  test.only("display the format of the values correctly", async () => {
    // checking the default value
    const full_dom_wrapper = _mount({
      propsData: {
        value: 0,
        valueFormat: "d",
      },
    })
    expect(full_dom_wrapper.find("text.current-value").text()).toBe("0")
    // setting label format to "d" and verifying the resulting value
    let passed_value = 477.7,
      transformed_value = "478"
    // change the props
    full_dom_wrapper.setProps({
      value: passed_value,
    })

    await full_dom_wrapper.vm.$nextTick()
    await new Promise((resolve) => setTimeout(resolve, 0))

    expect(full_dom_wrapper.find("text.current-value").text()).toBe(
      transformed_value
    )
  })
})
