// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// Cypress.Commands.add('login', (username, password) => {
//   cy.visit('https://qa-app.bugraid.ai/login/', { failOnStatusCode: false });

//     cy.get('input[name="email"]').should('be.visible').type(username);
//     cy.get('input[type="password"]').should('be.visible').type(password);
//     cy.get('.MuiGrid-item > .css-rfnosa > .MuiBox-root > form > .MuiButtonBase-root').should('be.visible').click();
    
//   });
  Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://qa-app.bugraid.ai/login/', { failOnStatusCode: false });
  
    cy.get('input[name="email"]').first().should('be.visible').type(username).then(() => {
      cy.log(`Typing username: ${username}`);
    });
  
    cy.get('input[type="password"].MuiInputBase-input.MuiOutlinedInput-input').should('be.visible').type(password).then(() => {
      cy.log(`Typing password: ${password}`);
    });
  
    cy.get('.MuiGrid-item > .css-rfnosa > .MuiBox-root > form > .MuiButtonBase-root') // Update to the actual selector for the submit button
      .should('be.visible')
      .click()
      .then(() => {
        cy.log('Clicked submit button');
      });
      
      
  });
  Cypress.Commands.add('runTestsWithReport', () => {
    cy.exec('npx cypress run --reporter cypress-multi-reporters')
  });