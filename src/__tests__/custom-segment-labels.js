// NOTE: use 'test.only' to prevent jsdom svg breaking

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

describe("custom segment labels entering", () => {
  // check the custom value text
  test.only("display custom segment labels", async () => {
    const currentValueText = "Happiness Level"

    const customSegmentLabels = [
      {
        text: "Very Bad",
        position: "INSIDE",
        color: "#555",
      },
      {
        text: "Bad",
        position: "INSIDE",
        color: "#555",
      },
      {
        text: "Ok",
        position: "INSIDE",
        color: "#555",
        fontSize: "19px",
      },
      {
        text: "Good",
        position: "INSIDE",
        color: "#555",
      },
      {
        text: "Very Good",
        position: "INSIDE",
        color: "#555",
      },
    ]

    const full_dom_wrapper = _mount({
      propsData: {
        value: 777,
        customSegmentLabels,
        currentValueText,
      },
    })

    await full_dom_wrapper.vm.$nextTick()
    await new Promise((resolve) => setTimeout(resolve, 0))

    customSegmentLabels.forEach((label, index) => {
      const textNode = full_dom_wrapper.findAll("text.segment-value").at(index)

      expect(textNode.text()).toEqual(label.text)

      const raw_styles = textNode.attributes().style.split(";")
      let styles = {}
      // construct the styles
      raw_styles.forEach((style) => {
        if (style === "") {
          return
        }
        const [key, value] = style.split(":")
        styles[key.trim()] = value.trim()
      })

      expect(styles["fill"]).toEqual(label.color)

      if (label.fontSize) {
        expect(styles["font-size"]).toEqual(label.fontSize)
      }

      // destroy wrapper as per docs
      full_dom_wrapper.destroy()
    })
  })
})
