class ServicePage {
    visitServiceTab() {
      cy.get(':nth-child(6) > a > .MuiButtonBase-root').click();
      cy.wait(4000); // Click on the service tab
    }
  
    createStandaloneService(serviceName) {
      cy.get('.css-1wxaqej > .MuiButtonBase-root').click(); // Click on create new
      cy.get('.MuiButton-containedInherit').click(); // Click to proceed
      cy.get('[name="service_name"]').type(serviceName); // Enter service name
      cy.get('.MuiButton-containedPrimary').click(); // Click save
      cy.get("button[title='Open'] svg").click(); // Open the service
      cy.get('.MuiBox-root > .MuiButtonBase-root > .PrivateSwitchBase-input').check(); // Check the integration
      cy.get('.MuiButton-containedPrimary').click(); // Click save
      cy.get(':nth-child(4) > .MuiPaper-root > .MuiGrid-container > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').click(); // Click to confirm
      cy.get('.css-dkbtxf').click(); // Finalize the action
      cy.wait(5000); // Adjust wait time as needed
    }
  
    updateService(updatedServiceName) {
      cy.get(':nth-child(1) > .MuiListItem-root > .MuiListItemText-root > .MuiListItemText-primary > .css-1bntj9o > .css-70qvj9 > .MuiTypography-root').click(); // Select service
      cy.get('.MuiButton-outlinedPrimary').first().click(); // Click to update
      cy.wait(6000);
      cy.get('[name="description"]').type('This the service for integration'); // Enter description
      cy.get(':nth-child(5) > .MuiGrid-root > .MuiButtonBase-root').click(); // Save updated service
      cy.wait(5000);
    }
  
    deleteService() {
      cy.get(':nth-child(1) > .MuiListItem-root > .MuiListItemText-root > .MuiListItemText-primary > .css-1bntj9o > .css-70qvj9 > .MuiTypography-root').click(); // Select service
      cy.get('.MuiButton-outlinedError').click(); // Click delete
      cy.get('.MuiDialogActions-root > .MuiButton-contained').click(); // Confirm deletion
      cy.wait(5000);
    }
  
    createServiceWithNewBusinessUnit(serviceName, divisionName) {
      cy.get('.css-1wxaqej > .MuiButtonBase-root').click();// Click create new
      cy.get(':nth-child(2) > div > .MuiButtonBase-root > .PrivateSwitchBase-input').check(); // Select new division
      cy.get('input.MuiInputBase-input.MuiOutlinedInput-input').first().type(divisionName); // Enter division name
      cy.get('.MuiButton-containedPrimary').click(); // Click Next
      cy.get('[name="service_name"]').type(serviceName); // Enter service name
      cy.get('[name="service_desc"]').type('This is a description for the new service.'); // Enter description
      cy.get('.css-feqhe6 > .MuiInputBase-root').click(); // Team dropdown
      cy.get('li[data-value="TDYSGKK0J"]').contains('Dev Team').click({ force: true }); // Select team
      cy.get('.MuiButton-containedPrimary').click(); // Click Next
      cy.get('button[aria-label="Open"]').click(); // Open escalation policy dropdown
      cy.get('.MuiBox-root .MuiTypography-body1').contains('Bugraid Service- Escalation Policy').click({ force: true }); // Select escalation policy
      cy.get('.MuiButton-containedPrimary').click(); // Click Next
      cy.get(':nth-child(4) > .MuiPaper-root > .MuiGrid-container > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').click(); // Click integration
      cy.get('.css-dkbtxf').click(); // Click Next
      cy.wait(5000); // Adjust wait time as needed
    }
  
    createServiceWithExistingBusinessUnit(serviceName) {
     cy.get('.css-1wxaqej > .MuiButtonBase-root').click(); // Click create new
      cy.get('.MuiSelect-select').click(); // Select existing division
      cy.get('[data-value="FDIWEBMT"]').contains('Bugraid qa business').click({ force: true });
      cy.get('.MuiButton-containedPrimary').click(); // Click Next
      cy.get('[name="service_name"]').type(serviceName); // Enter service name
      cy.get('[name="service_desc"]').type('This is a description for the new service.'); // Enter description
      cy.get('.css-feqhe6 > .MuiInputBase-root').click(); // Team dropdown
      cy.get('li[data-value="TDYSGKK0J"]').contains('Dev Team').click({ force: true }); // Select team
      cy.get('.MuiButton-containedPrimary').click(); // Click Next
      cy.get('button[aria-label="Open"]').click(); // Open escalation policy dropdown
      cy.get('.MuiBox-root .MuiTypography-body1').contains('Bugraid Service- Escalation Policy').click({ force: true }); // Select escalation policy
      cy.get('.MuiButton-containedPrimary').click(); // Click Next
      cy.get(':nth-child(4) > .MuiPaper-root > .MuiGrid-container > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').click(); // Click integration
      cy.get('.css-dkbtxf').click(); // Click Next
      cy.wait(5000); // Adjust wait time as needed
    }
   }
  
  export default new ServicePage();
  