### E2E (cypress)

This is a document with pointers how the `e2e cypress` tests is setup with code coverage with istanbul/nyc.

Uses `cypress-vue-unit-test`, a.k.a `@cypress/vue` - https://www.npmjs.com/package/cypress-vue-unit-test
Uses `@cypress/code-coverage/`. 

All `e2e` tests are within `tests` folder.

 There were some confusions ons correct package name to include in the config
files. This setup was done right at the time when the package is in the process of moving to `@cypress/vue` (it is not completely
moved at the time of this writing). As a result of this confusion, the setup was sourcing empty files from `@cypress/vue` (which did
not have files published in this namespace)


It is important to note that `@cypress/vue` works only with webpack setup. So we had to configure/provision `@cypress/webpack-preprocessor`,
just to make the `e2e` tests run for vue files. More on this setup in next section.

Following files are configured to use `cypress-vue-unit-test`, a.k.a `@cypress/vue`.

- Support file: `tests/support/index.js` 
- Config file: `tests/plugins/index.js` (main config file)

#### Configuration

All the configuration related logic is inside `tests/plugins/index.js`.
Custom webpack configuration which uses `babel-plugin-istanbul` for code coverage is inside `/tests/plugins/cypress-webpack-config.js`

Roughly this setup works in the following way
```javascript
@cypress/vue 
   |
   |
   |
reads `tests/support/index.js` and `tests/plugins/index.js`
   |
   |
   |
reads webpack config from `tests/plugins/cypress-webpack-config` with `babel-plugin-istanbul`
added in `plugins: [istanbul]`
   |
   |
   |
Generates code coverage and runs tests
```



