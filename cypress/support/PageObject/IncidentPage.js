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
    clickactivitytab(){
        cy.get('[data-testid="click-activity-tab"]').click();
    }
    clickcommenttab(){
        cy.get('[data-testid="click-comment-tab"]').click();
    }
    clickcommentinput(comment){
        cy.get('[data-testid="comment-input"]').type(comment);
    }
    clicksavecomment(){
        cy.get('[data-testid="save-button"]').click();
    }
    clickeditcomment(updatecomment) {
    cy.get('[style="display: flex; justify-content: flex-start; margin-top: 18px; margin-left: 38px;"] > [data-testid="edit-comment"]').first().click({force:true});
    cy.get('.ql-editor').clear().type(updatecomment);

    }
    clickdeletecomment()
    {
        cy.get(':nth-child(1) > [style="display: flex; justify-content: flex-start; margin-top: 18px; margin-left: 38px;"] > [data-testid="delete-button"]') .click()
    }
     clickconfirmdelete(){
        cy.get('[data-testid="confirm-delete"]').first().click({force:true});
     }

}

export default new IncidentPage();
