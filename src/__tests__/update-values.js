// NOTE: use 'test.only' to prevent jsdom svg breaking
// NOTE: AVOID MORE THAN one timeout wait

import { mount } from "@vue/test-utils"
import VueSpeedometer from "../index"

class SVGPathElement extends HTMLElement {}
class SVGElement extends HTMLElement {}

window.SVGPathElement = SVGPathElement
window.SVGElement = SVGElement

const _mount = (options) =>
  mount(VueSpeedometer, {
    attachToDocument: true,
    ...options,
  })

describe("smooth update of values", () => {
  // should smoothly animate only the current value; not other breaking changes
  test.only("update values correctly", async () => {
    const value = 333
    const updatedValue = 470
    const full_dom_wrapper = _mount({
      propsData: {
        value,
      },
    })
    expect(full_dom_wrapper.find("text.current-value").text()).toBe(
      value.toString()
    )

    expect(
      full_dom_wrapper
        .findAll("path.speedo-segment")
        .at(0)
        .attributes("fill")
    ).toBe(`rgb(255, 71, 26)`) // rgb value of our default 'startColor'

    // set updated props
    full_dom_wrapper.setProps({
      value: updatedValue,
      startColor: "red",
    })

    await full_dom_wrapper.vm.$nextTick()
    await new Promise((resolve) => setTimeout(resolve, 0))

    // confirm our start color is intact
    expect(
      full_dom_wrapper
        .findAll("path.speedo-segment")
        .at(0)
        .attributes("fill")
    ).toBe(`rgb(255, 71, 26)`) // rgb value of our default 'startColor'

    expect(full_dom_wrapper.find("text.current-value").text()).toBe(
      updatedValue.toString()
    )
  })
})
