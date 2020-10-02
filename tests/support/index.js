// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Component Testing resets
// NOTE: enable this after migration to '@cypress/vue' is complete
// require('@cypress/vue/dist/support')
require("cypress-vue-unit-test/dist/support")
require("@cypress/code-coverage/support")

// Import commands.js using ES2015 syntax:
// import './commands'

// Alternatively you can use CommonJS syntax:
require("./commands")

// Import any global stylesheets here
// require('../../src/styles/index.scss') // 💅
