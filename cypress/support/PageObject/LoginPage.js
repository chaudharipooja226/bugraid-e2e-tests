class LoginPage {
    visit() {
      return cy.visit(Cypress.env('url'), { failOnStatusCode: false });
    }
  
    enterEmail(email) {
      return cy.get('input[name="email"]').first().should('be.visible').type(email);
    }
  
    enterPassword(password) {
      return cy.get('input[type="password"]').first().should('be.visible').type(password);
    }
  
    clickLogin() {
    return cy.get('.MuiGrid-item > .css-rfnosa > .MuiBox-root > form > .MuiButtonBase-root').first().click();
    }
  
    verifylogo() {
      return cy.get('img').should('be.visible');
    }

    
  
    verifyTabs(tabs) {
      tabs.forEach(tabName => {
        cy.contains(tabName).should('be.visible').click();
        cy.wait(3000); // Consider removing this if unnecessary
      });
    }
  }
  
  export default new LoginPage();
  