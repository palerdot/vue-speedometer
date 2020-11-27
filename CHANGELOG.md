# Change Log

## 1.8.0
- **Bugfix**: Always take new value for `value` prop. This fixes the bug when value will not go to `0`. 
Resolves https://github.com/palerdot/vue-speedometer/issues/22

## 1.7.0
- [`CORE`][0.14.0]
- `valueTextFontWeight` config/prop. ref: https://codesandbox.io/s/competent-grothendieck-73cz8?file=/src/App.vue
- `cypress` tests for `valueTextFontWeight`

## 1.6.0
- [`CORE`][0.13.1]
- `CustomSegmentLabelPosition`, `Transition` types for both Typescript and JS. ref - https://codesandbox.io/s/modest-cookies-tnhqx?file=/src/App.vue
- `100%` Test coverage
- `codecov`, `github actions` integration
- `cypress` e2e tests

## 1.5.0
- removed `@babel/runtime-corejs2` as dependency

## 1.4.0
 - [`CORE`][0.11.0]
 - migrated to `lodash-es` from `lodash` for better tree shaking. Exporting `themes` from core for better reusablility.
 - removed `lodash` dependency. ref: https://codesandbox.io/s/fragrant-haze-f3cqz

## 1.3.1
- link banner gif from github master tree

## 1.3.0
- [`CORE`][0.10.0]

## 1.2.1
- *Fix Typescript declaration*. Use proper Vue type declaration. Fixes typescript support problem for Vue/Typescript.

## 1.2.0
- `Typescript` support. [CORE][0.9.0]

## 1.1.0
- [bugfix] Fix `forceRender` prop not updating from `true => false`. Fixes - https://github.com/palerdot/vue-speedometer/issues/4

## 1.0.4
- [CORE][0.8.0]

## 1.0.3
- core sync `[v0.7.2, v0.7.3]`

## 1.0.2
- core sync `[v0.7.1]`

## 1.0.1 beta
- minor `README` fixes
## 1.0.0.beta
- Initial `beta` release - https://codesandbox.io/s/vue-template-5yuw8