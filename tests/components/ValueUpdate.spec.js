import { mount } from "cypress/vue"
// import VueSpeedometer from "../../src/index.js"
// NOTE: we are manually instrumenting using NYC and using it for running cypress tests
import VueSpeedometer from "../../instrumented/index.js"

const ValueUpdate = {
  template: `<div>
    <div>{{greeting}}</div>
    <button id="reset-value" v-on:click="resetValue">Reset to zero</button>
    <button id="update-value" v-on:click="updateValue">Update Value</button>
    <vue-speedometer
      :value="value" 
    />
  </div>`,

  components: { VueSpeedometer },

  data() {
    return {
      greeting: "porumai ... wait and hope !!!",
      value: 333,
    }
  },

  methods: {
    resetValue: function () {
      this.value = 0
    },

    updateValue: function () {
      this.value = 333
    },
  },
}

describe("VueSpeedometer", () => {
  it("Updates component correctly", () => {
    mount(ValueUpdate)
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
