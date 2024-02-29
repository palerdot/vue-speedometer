import { mount } from "cypress/vue"
// import VueSpeedometer from "../../../src/index.vue"
// import VueSpeedometer from "../../../instrumented/index.vue"
import ForceRender from "./ForceRender.vue"

describe("VueSpeedometer", () => {
  it("updates component normally", () => {
    mount(ForceRender, {
      props: {},
    })

    // now we can use any Cypress command to interact with the component
    // https://on.cypress.io/api
    cy.contains("333")
    cy.get(".speedo-segment").should("have.length", 5)

    // click the button
    cy.get("button#normal-update").click()

    // now we should have the updated value
    cy.contains("777")

    // we did not force rendered; our segments should be the same(5)
    cy.get(".speedo-segment").should("have.length", 5)
  })

  it("force renders the component with correct value", () => {
    mount(ForceRender, {
      props: {},
    })

    // now we can use any Cypress command to interact with the component
    // https://on.cypress.io/api
    cy.contains("333")
    cy.get(".speedo-segment").should("have.length", 5)

    // click the button
    cy.get("button#force-render").click()

    // now we should have the updated value
    cy.contains("417")

    // we force rendered; our segments should be 10 (from 5)
    cy.get(".speedo-segment").should("have.length", 10)
  })
})
