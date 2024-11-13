// cypress/support/LoginPage.js

class LoginPage {
    visit() {
        cy.visit('/login'); 
    }

    enterEmail(email) {
        cy.get('input[name="email"]').first().type(email, { force: true }); 
    }

    enterPassword(password) {  
        cy.get('input[name="password"]').first().type(password, { force: true }); 
    }

    submit() {
        cy.get('[data-testid="submit"]').click(); }

    getLogo() {
        cy.get('[ data-testid="image"]'); 
    }

    clickeachtab() {
    cy.get("[data-testid='incidents']").click({force: true});
    cy.get("[data-testid='automation']").click({force: true});
    cy.get("[data-testid='analytics']").click({force: true});
    cy.get("[data-testid='integrations']").click({force: true});
    cy.get("[data-testid='teams']").click({force: true});
    cy.get("[data-testid='services']").click({force: true});

} 
getAppName() {
    return cy.contains('BugRaid.AI'); 

}



    submit() {
        cy.get('button').contains('Login').click();}
}

 

export default new LoginPage();
