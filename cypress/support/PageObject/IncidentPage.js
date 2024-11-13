class IncidentPage {
    
     incidentTab() {
       
       cy.get("[data-testid='incidents']").click({force: true});
    }

     createIncidentButton() {
         
         cy.get("[data-testid='create new incident']").click();
    }

    titleField(title) { 
        cy.get("[data-testid='incident-tittle']").type(title);
    }

    descriptionField(description) { 
        cy.get("[data-testid='incident-description']").type(description);
    }
     submitButton() {
        
         cy.get("[data-testid='create-incident']").click();
    }
    incidenttittle(){
        cy.get('[data-testid="tittle"]').first().click();
    }
     acknowledgeButton() {
      
       cy.get("[ data-testid='acknowledged-button']").click();
    }

     incidentassignButton() {
          cy.get("[ data-testid='assignee-button']").click();
          cy.contains('li', 'Pooja Chaudhari').click();
         
    }
    ticketassigneedropdown(){
        cy.get('[data-testid="ticket-assignee-dropdown"]').click();
        cy.contains('li', 'Suraj Shinde').click();

    }

 clickresolveButton() {
        cy.get("[ data-testid='resolve-button']").click();
        }
    enterresolvereason(resolvereason){
        
        cy.get("[data-testid='resolve-input']").type(resolvereason);
    }
    clickresolve(){
        
        cy.get("[ data-testid='resolve']").click();

    }
    clickcreateticket(){
       
       cy.get("[data-testid='create-ticket-button']").click();
    }
    selectProject() {
    cy.get("[ data-testid='project-dropdown']").click();
    cy.contains('li', 'Bugraid.AI').click();
    }
    

    
    
    Clickcreate(){
        cy.get('form > .MuiBox-root > .MuiButtonBase-root').click();
    }
//     clickticketlink(){
//         cy.get('.MuiGrid-container > :nth-child(5) > .flex > .font-normal').click();
//     }

// }
}

export default new IncidentPage();
