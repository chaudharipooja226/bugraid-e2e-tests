// cypress/e2e/UI-Automation/LoginTest.js

import LoginPage from '../../support/PageObject/LoginPage'; 

describe('Login Tests', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('BASE_URL')}/login`, { failOnStatusCode: false });
    });

    it('should log in successfully', () => {
        const email = 'pooja.chaudhari@p99soft.com';
        const password = 'Pooja@123';

        LoginPage.enterEmail(email); // Call method to enter email
        LoginPage.enterPassword(password); // Call method to enter password
        LoginPage.submit(); // Call method to submit  
    });
});
