
// const { defineConfig } = require('cypress');

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: "https://qa-app.bugraid.ai", // Base URL without /login
//     setupNodeEvents(on, config) {
//       // Any event listeners can go here
//     },
//     env: {
//       apiBaseUrl: "https://qa-api.bugraid.ai/api/v1", 
//     },
  
//     reporter: 'mocha-multi-reporters',
//     reporterOptions: {
//       config: {
//         reporters: [
//           {
//             reporter: 'mocha-junit-reporter',
//             options: {
//               mochaFile: 'cypress/reports/junit/results.xml', // Path to save JUnit report
//             },
//           },
//           {
//             reporter: 'mocha-html-reporter',
//             options: {
//               output: 'cypress/reports/html/report.html', // Path to save HTML report
//             },
//           },
//         ],
//       },
//     },
//   },
// });
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://qa-app.bugraid.ai", // Base URL without /login
    setupNodeEvents(on, config) {
      // Any event listeners can go here
    },
    env: {
      apiBaseUrl: "https://qa-api.bugraid.ai/api/v1", 
    },
    reporter: 'mocha-multi-reporters',
    reporterOptions: {
      config: {
        reporters: [
          {
            reporter: 'mocha-junit-reporter',
            options: {
              mochaFile: 'cypress/reports/junit/results.xml',
            },
          },
          {
            reporter: 'mocha-html-reporter',
            options: {
              output: 'cypress/reports/html/report.html',
            },
          },
        ],
      },
    },
  },
});
