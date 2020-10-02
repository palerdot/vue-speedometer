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

class SVGPathElement extends HTMLElement {}
class SVGElement extends HTMLElement {}

window.SVGPathElement = SVGPathElement
window.SVGElement = SVGElement

const _mount = (options) => {
  const div = document.createElement("div")
  div.id = "root"
  document.body.appendChild(div)

  return mount(VueSpeedometer, {
    attachTo: div,
    ...options,
  })
}

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

    /*
     * Please note the vue svg test limitation added at the start
     */
    expect(full_dom_wrapper.vm.$props.value).toEqual(updatedValue)

    // confirm our start color is intact
    /* expect(
      full_dom_wrapper
        .findAll("path.speedo-segment")
        .at(0)
        .attributes("fill")
    ).toBe(`rgb(255, 71, 26)`) // rgb value of our default 'startColor'

    expect(full_dom_wrapper.find("text.current-value").text()).toBe(
      updatedValue.toString()
    ) */

    full_dom_wrapper.destroy()
  })
})
