module.exports = {
  roots: [
    "<rootDir>"
  ],
  testMatch: [
    "<rootDir>/__tests__/*-routes/*.+(ts|tsx|js)",
    "<rootDir>/__tests__/__dependency_tests__/trinax/*.+(ts|tsx|js)"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testEnvironment: "node",
  "reporters": [
    "default",
    ["jest-html-reporters", {
      "publicPath": "./html-report",
      "filename": "report.html",
      "expand": true,
      "openReport": false
    }]
  ],
  testTimeout: 10000
}