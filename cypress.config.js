
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      BASE_URL: 'https://dev-app.bugraid.ai',
      API_URL: 'https://api-singapore.bugraid.ai/api/v1',
      LOGIN_EMAIL: 'pooja.chaudhari@p99soft.com',
      LOGIN_PASSWORD: 'Pooja@123'
    },
    reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'spec,xunit',
    xunitReporterOptions: {
      outputFile: `reports/results-${new Date().toISOString().replace(/:/g, '-')}.xml`, // Dynamic timestamp
      suiteTitleSeparatedBy: '-',
      useBrowserName: false,
    },
  },
    
  }
});
