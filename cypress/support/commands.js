Cypress.Commands.add('login', () => {
    cy.fixture('credentials').then((creds) => {
        cy.visit(creds.loginUrl, { failOnStatusCode: false });
        
        
        cy.get('input[name="email"]').first().type(creds.email, { force: true });
        cy.get('input[name="password"]').first().type(creds.password, { force: true });
        cy.get('[data-testid="submit"]').first().click();
    });
});
