const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://creai.mx', 
    supportFile: false,
    setupNodeEvents(on, config) {
     
    },
    specPattern: 'cypress/e2e/**/*.cy.js', 
  },
  viewportWidth: 1280,
  viewportHeight: 800,
  video: true,
  screenshotOnRunFailure: true, 
})