const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viesportHeight: 960,
  viewportWidth: 1536,
  e2e: {
    baseUrl: "https://www.stuller.com",
  },
});
