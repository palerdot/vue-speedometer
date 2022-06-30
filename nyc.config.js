module.exports = {
  // extends: "@istanbuljs/nyc-config-babel",
  "report-dir": "cypress-coverage",
  "check-coverage": true,
  include: ["src"],
  exclude: ["src/stories", "src/core", "src/__tests__", "src/index.d.ts"],
}
