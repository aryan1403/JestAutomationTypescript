const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "jsdom",
  transform: {
    ...tsJestTransformCfg,
  },
  setupFiles: ["./jest.setup.js"],
  reporters: [
    "default", 
    ["jest-html-reporters", {
      pubicPath: "./html-report", // file willbe saved loc
      filename: "report.html", // name of the html report
      expand: true, // detailed
      pageTitle: "Test Report" // title of html report
    }]
  ],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ]
};