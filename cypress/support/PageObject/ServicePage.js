class ServicePage {
    
    navigateToServiceTab() {
   
       cy.get("[data-testid='services']").click({force: true});
    }

    clickCreateServiceButton() {
      
        cy.get("[ data-testid='create new service']").click();
        
    }

    selectExistingBusinessUnit() {
        cy.get('[data-testid="existing-bussinessunit-dropdown"]').click();
        cy.wait(2000);
        cy.get('[ data-testid="select-bussinessunit"]').should('be.visible').first().click();

    }

    createNewBusinessUnit() {

        cy.get('[data-testid="radio-createnew"] > .PrivateSwitchBase-input', { timeout: 10000 }).click({ force: true });

        cy.get("[data-testid='new-division']", { timeout: 10000 }).type('New Business Unit Name');


    }
    selectexistingescaltionpolicy(){
        cy.get('[data-testid="escalation-policy-textfield"]').click();
        cy.contains('Bugraid Service- Escalation Policy').click();              
     }

    enterServiceDetails(serviceName, description) {
         
        cy.get("[data-testid='service-name']").type(serviceName); 
        cy.get("[data-testid='service-description']").type(description);
    }  

    selectTeam(teamName) {
        cy.get('[data-testid="team-dropdown"] > .MuiInputBase-root').click(); 
        cy.get('[data-testid="select-team-option"]').should('be.visible').first().click();
    }
//     selectTeam() {
//         cy.get("[data-testid='team-dropdown']").click();
//         cy.get('li.MuiMenuItem-root').first().click({ force: true });

// }
   clickNextButton() {
       
       cy.get('[data-testid="next-button"]').click();
        
    }

    clickIntegration() {
        cy.get('[data-testid="jira"] > .PrivateSwitchBase-input').click()
    }

    clickCreateNewServiceButton() {
        cy.get('[data-testid="skip-button"]').click(); 
    }

    editService() {
        cy.get('[data-testid="update-button"]').first().click();
       
    }
    Clickupdatebutton(){
 cy.get('[data-testid="update-button"]').first().click
    }
    
 Clickupdateservice(){
    cy.get('[data-testid="update-button"]').click();

 }    
 updatedescription(description){
    //cy.get('[data-testid="update-description"]').clear().type(description); 
    cy.get('[data-testid="update-description"]').type(description);

 }
 clickviewbutton(){
    cy.get('[data-testid="view-button"]').first().click();
 }
clickdeletebutton(){
    cy.get('[data-testid="delete-button"]').click();
    cy.get('[data-testid="confirm-delete"]').click();
}
clickskipbutton(){
   
    cy.get('[data-testid="skip-button"]').click();
}
clickfinalcreatenew(){
  cy.get ('[data-testid="create-new-service-button"]').click();

}}

export default new ServicePage();
