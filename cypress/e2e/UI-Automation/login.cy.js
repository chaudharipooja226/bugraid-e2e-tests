// cypress/e2e/UI-Automation/LoginTest.js

import LoginPage from '../../support/PageObject/LoginPage'; 

describe('Login Tests', () => {
    beforeEach(() => {
        cy.login();
    });

    it('should log in successfully with valid credentials', () => {
        });
        it('should validate the logo', () => {
            LoginPage.getLogo();
        });
        it('should click each tab', () => {
            LoginPage.clickeachtab();
});
});