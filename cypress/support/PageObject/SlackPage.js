class slackPage {
    
    navigateToServiceTab() {
        cy.get(':nth-child(7) > a > .MuiButtonBase-root').click(); 
    }

    clickCreateServiceButton() {
        cy.get('.css-1wxaqej > .MuiButtonBase-root').click(); 
    }
    clickviewbutton(){
        cy.get('[data-testid="view-button"]').first().click();
     }

    selectExistingBusinessUnit() {
        cy.get('.MuiSelect-select').click();
        cy.wait(4000);
        cy.get('[data-value="_O6QDLIG"]').should('be.visible').click(); // Select the option
    }
    enterServiceDetails(serviceName, description) {
        cy.get('input[name="service_name"]').type(serviceName); 
        cy.get('textarea[name="service_desc"]').type(description); 
    }

    selectTeam(teamName) {
        cy.get('.css-feqhe6 > .MuiInputBase-root').click(); // Open the team dropdown
        // Wait for the dropdown options to load
        cy.get('li.MuiMenuItem-root').contains(teamName).click(); // Select team by name
    }
    clickNextButton() {
        cy.get('.MuiButton-containedPrimary').click();
    }

    clickIntegration() {
        cy.get('[data-testid="integration"]').click();
    }

    clickCreateNewServiceButton() {
        cy.get('.css-dkbtxf').click(); 
    }

clickopenslackdetails(){
    cy.get('[data-testid="slsckopendetails"]').click();
}
clickhere(){
    cy.get('[data-testis="clickhere"]').click();
}
}
export default new slackPage();