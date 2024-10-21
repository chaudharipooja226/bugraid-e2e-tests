const multiReporters = require('cypress-multi-reporters');

module.exports = (on, config) => {
  // Add the JUnit reporter
  multiReporters.register(on, config);
  
  return config; // Important to return the config object
};
