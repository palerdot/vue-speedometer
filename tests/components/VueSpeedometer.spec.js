import { mount } from "cypress/vue"
// import VueSpeedometer from "../../src/index.vue"
import VueSpeedometer from "../../instrumented/index.vue"

describe("VueSpeedometer", () => {
  it("renders the component with correct value", () => {
    mount(VueSpeedometer, {
      propsData: {
        value: 333,
      },
    })

    // now we can use any Cypress command to interact with the component
    // https://on.cypress.io/api
    cy.contains("333")
  })

  it("displays default font weight correctly", () => {
    mount(VueSpeedometer, {
      propsData: {
        value: 333,
      },
    })

    // now we can use any Cypress command to interact with the component
    // https://on.cypress.io/api
    cy.get("svg.speedometer")
      .find(".current-value")
      // bold => 700
      .should("have.css", "font-weight", "700")
  })

  it("displays 'valueTextFontWeight' correctly", () => {
    mount(VueSpeedometer, {
      propsData: {
        valueTextFontWeight: "500",
      },
    })

    // now we can use any Cypress command to interact with the component
    // https://on.cypress.io/api
    cy.get("svg.speedometer")
      .find(".current-value")
      // bold => 700
      .should("have.css", "font-weight", "500")
  })
})
