describe('Login Test', () => {
  let loginData; 
  before(() => {
    cy.fixture('loginCredentials').then((data) => {
      console.log(data); 
      loginData = data.login;
    });
  });

  it('should log in successfully', () => {
    
    cy.visit(Cypress.env('url'), { failOnStatusCode: false });
    cy.get('input[name="email"]').first().should('be.visible').type(loginData.username);
    cy.get('input[type="password"]').first().should('be.visible').type(loginData.password);
    cy.get('.MuiGrid-item > .css-rfnosa > .MuiBox-root > form > .MuiButtonBase-root').first().click();
    cy.wait(4000);
    cy.get('img').should('be.visible');
    cy.get('.active > .MuiButtonBase-root').click();
    cy.wait(3000);
    cy.get(':nth-child(2) > a > .MuiButtonBase-root').click();
    cy.wait(2000);
    cy.get(':nth-child(3) > a > .MuiButtonBase-root').click();
    cy.wait(2000);
    cy.get(':nth-child(4) > a > .MuiButtonBase-root').click();
    cy.wait(2000);
    cy.get(':nth-child(5) > a > .MuiButtonBase-root').click();
    cy.wait(2000);
    cy.get(':nth-child(6) > a > .MuiButtonBase-root').click();
    cy.wait(2000);
    cy.get('.MuiTypography-root.MuiTypography-subtitle1.css-f3tly9').click();
    cy.get('.Mui-focusVisible > .MuiTypography-root').click();
    cy.get('[style="width: 150px; outline: none; border-radius: 26px; text-transform: capitalize; font-weight: 500; color: rgb(255, 255, 255); background-color: rgb(33, 48, 73); padding: 8px;"]').click();
  });
});