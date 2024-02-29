module.exports = {
  // extends: "@istanbuljs/nyc-config-babel",
  "report-dir": "cypress-coverage",
  "check-coverage": true,
  include: ["src"],
  extension: [".js", ".vue"],
  exclude: ["src/stories", "src/core", "src/__tests__", "src/index.d.ts"],
}
