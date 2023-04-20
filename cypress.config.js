const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": "https://phone.onoff.app",

    env: {
      "login": "test.aut.onoffapp@gmail.com",
      "password": "testOnOff@"
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
});
