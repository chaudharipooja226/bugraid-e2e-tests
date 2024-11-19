
// const { defineConfig } = require('cypress');

// module.exports = defineConfig({
//   e2e: {
    
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//     env: {
//       BASE_URL: 'https://qa-app.bugraid.ai/',
//       API_URL: 'https://qa-api.bugraid.ai/api/v1',
//       LOGIN_EMAIL: 'pooja.chaudhari@p99soft.com',
//       LOGIN_PASSWORD: 'Pooja@1234'
      
//     },
//     pageLoadTimeout: 120000, // Increased timeout to 2 minutes
//     reporter: 'cypress-multi-reporters',
//   reporterOptions: {
//     reporterEnabled: 'spec,xunit',
//     xunitReporterOptions: {
//       outputFile: `reports/results-${new Date().toISOString().replace(/:/g, '-')}.xml`, // Dynamic timestamp
//       suiteTitleSeparatedBy: '-',
//       useBrowserName: false,
//     },
//   },
    
//   }
// });
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    env: {
      BASE_URL: 'https://qa-app.bugraid.ai/',
      API_URL: 'https://qa-api.bugraid.ai/api/v1',
      LOGIN_EMAIL: 'pooja.chaudhari@p99soft.com',
      LOGIN_PASSWORD: 'Pooja@1234',
    },
    pageLoadTimeout: 120000, // Increased timeout to 2 minutes
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      reporterEnabled: 'spec, xunit',
      xunitReporterOptions: {
        outputFile: `reports/results-${new Date().toISOString().replace(/:/g, '-')}.xml`, // Dynamic timestamp
        suiteTitleSeparatedBy: '-',
        useBrowserName: false,
      },
    },
    video: true, // Enable videos for CI/CD
    screenshotsFolder: 'reports/screenshots', // Save screenshots in the reports folder
    videosFolder: 'reports/videos', // Save videos in the reports folder
  },
});
