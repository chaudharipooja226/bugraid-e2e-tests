Cypress.Commands.add('login', () => {
    cy.fixture('credentials').then((creds) => {
        cy.visit(creds.loginUrl, { failOnStatusCode: false });
        
        // Ensure you're selecting the right elements
        cy.get('input[name="email"]').first().type(creds.email, { force: true });
        cy.get('input[name="password"]').first().type(creds.password, { force: true });
        
        cy.get('.MuiGrid-item > .css-rfnosa > .MuiBox-root > form > .MuiButtonBase-root').click();
    });
});
