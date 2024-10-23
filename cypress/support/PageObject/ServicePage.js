// cypress/support/PageObject/ServicePage.js

class ServicePage {
    // Navigate to the Service tab
    navigateToServiceTab() {
        cy.get(':nth-child(7) > a > .MuiButtonBase-root').click(); 
    }
  clickCreateServiceButton() {
    cy.get('.css-1wxaqej > .MuiButtonBase-root').click(); 
    }

    
    selectExistingBusinessUnit() {
        cy.get('.MuiSelect-select').click(); 
        cy.get('[data-value="-BW4WIKT"]').select('Bugraid dev bussiness'); 
    }

    createNewBusinessUnit() {
        cy.get("input[value='createnew']").click(); 
        cy.get('input[type="text"][required]').type('New Business Unit Name'); }

   
    enterServiceDetails(serviceName, description) {
        cy.get('input[name="service_name"]').type(serviceName); 
        cy.get('textarea[name="service_desc"]').type(description); 
    }

    
    selectTeam(teamName) {
        cy.get('div[role="combobox"].MuiSelect-select').click;
        cy.get('li.MuiMenuItem-root[data-value="TKQSFQCCK"]').select('Test Team 1'); // Replace with actual selector
    }

    
    selectEscalationPolicy(policyName) {
        cy.get('.MuiSvgIcon-root[data-testid="ArrowDropDownIcon"]').click();
        cy.get('#\:rf\:-option-3 > .MuiBox-root > .MuiTypography-body1').click; // Replace with actual selector
    }

    
    clickNextButton() {
        cy.get('.MuiButton-containedPrimary').click();
    }

   
    clickCreateNewServiceButton() {
        cy.get('.css-1tpkql9').click(); 
    }
    editservice(){
        cy.get('.MuiButton-outlinedPrimary').click();
        // cy.get('#mui-component-select-team').click();
        // cy.get('[data-value="TJXQAOQS-"]').click();
        cy.get('button[type="button"].MuiButton-containedPrimaryt').click();
    }
}

export default new ServicePage();
