module.exports = {
  "extends": "@istanbuljs/nyc-config-typescript",
  "excludes": [
    "src/models/MongoModel.ts",
  ],
  "reporter": [
    "text",
    "text-summary",
    "json-summary",
    "html",
    "lcov"
  ],
}
