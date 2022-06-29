import { mount } from "cypress/vue"
import VueSpeedometer from "../../../src/index.js"

const ForceRender = {
  template: `<div>
    <div>{{greeting}}</div>
    <button id="force-render" v-on:click="forceRenderComponent">Force Render</button>
    <button id="normal-update" v-on:click="normalUpdateComponent">Normal update</button>
    <vue-speedometer 
      :segments="segments" 
      :value="value" 
      :forceRender="forceRender" 
    />
  </div>`,

  components: { VueSpeedometer },

  data() {
    return {
      greeting: "porumai ... wait and hope !!!",
      value: 333,
      forceRender: false,
      segments: 5,
    }
  },

  methods: {
    forceRenderComponent: function () {
      this.forceRender = true
      this.value = 417
      this.segments = 10
    },

    normalUpdateComponent: function () {
      this.value = 777
    },
  },
}

describe("VueSpeedometer", () => {
  it("updates component normally", () => {
    mount(ForceRender)

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
    mount(ForceRender)

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
