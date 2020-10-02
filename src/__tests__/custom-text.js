/*
 * NOTE:
 * IMPORTANT:
 *
 * This test limitation is fixed with e2e cypress tests (inside tests/)
 *
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

    /*
     * Please note the vue svg test limitation added at the start
     */
    expect(full_dom_wrapper.vm.$props.value).toEqual(555)

    full_dom_wrapper.destroy()
  })
})
