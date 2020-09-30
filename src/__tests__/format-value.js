/*
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

    /*
     * Please note the vue svg test limitation added at the start
     */
    expect(full_dom_wrapper.vm.$props.value).toEqual(passed_value)

    full_dom_wrapper.destroy()
  })
})
