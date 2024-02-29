import { mount } from "cypress/vue"
// import VueSpeedometer from "../../src/index.vue"
// NOTE: we are manually instrumenting using NYC and using it for running cypress tests
// import VueSpeedometer from "../../instrumented/index.vue"
import ValueUpdate from "./ValueUpdate.vue"

describe("VueSpeedometer", () => {
  it("Updates component correctly", () => {
    mount(ValueUpdate, {
      props: {},
    })
    // now we can use any Cypress command to interact with the component
    // https://on.cypress.io/api
    cy.get(".current-value").contains("333")

    // click the button
    cy.get("button#reset-value").click()

    // now we should have the updated value
    cy.get(".current-value").contains("0")

    // we will update the value again
    cy.get("button#update-value").click()

    // we should get the updated value again
    cy.get(".current-value").contains("333")
  })
})
