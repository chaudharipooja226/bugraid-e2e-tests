// cypress/support/LoginPage.js

class LoginPage {
    visit() {
        cy.visit('/login'); // Adjust the URL as necessary
    }

    enterEmail(email) {
        cy.get('input[name="email"]').first().type(email, { force: true }); // Select the first matching element
    }

    enterPassword(password) {  
        cy.get('input[name="password"]').first().type(password, { force: true }); // Adjust selector as needed
    }

    submit() {
        cy.get('.MuiGrid-item > .css-rfnosa > .MuiBox-root > form > .MuiButtonBase-root').click(); // Adjust selector as needed
    }

    getLogo() {
        cy.get('img'); // Replace with the actual selector for the logo
    }

    getAppName() {
        return cy.contains('BugRaid.AI'); // Adjust the selector as necessary
    }

    getErrorMessage() {
        return cy.get('.error-message-selector'); // Replace with the actual selector for error messages
    }
}

export default new LoginPage();
