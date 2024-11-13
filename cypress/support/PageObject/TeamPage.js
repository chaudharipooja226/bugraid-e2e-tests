class TeamPage {
    
    clickToTeamTab() {
        
        cy.get("[data-testid='teams']").click({force: true});
    }

    clickInviteUserbutton() {
        cy.get('[data-testid="invite-user-button"]').click();
      
    }
 Enteruserinfo(firstname, lastname, email, designation, phonenumber) {
        cy.get('[data-testid="first-name-input"]').type(firstname);
        cy.get('[data-testid="last-name-input"]').type(lastname);
        cy.get('[data-testid="email-input"]').type(email);
        cy.get('[data-testid="designation-input"]').type(designation);
        //cy.get('[data-testid="phone-number-input"]').type(designation);
         cy.get('input[placeholder="Enter phone number"]').clear().type(phonenumber); 
    }
    clickfinalinviteuser(){
       cy.get('[data-testid="invite-user-button"]').first().click({force: true});
    }

    clickTeamstab() {
        cy.get('[ data-testid="teams-tab"]').click();
        
         }
clickCreatenewteam(){
    cy.get('[data-testid="create-team-button"]').click();
}
enterteaminfo(teamname,description){
    cy.get('[data-testid="team-name"]').type(teamname);
   cy.get('[data-testid="team-description"]').type(description);
    

}
createTeam(){
  
   cy.get('[data-testid="submit"]').click();

   
}
    editteam() {
        cy.get('[data-testid="existing-team"]').first().click();
        cy.get('[data-testid="edit-team"]').click();
    }
    updateTeamInfo(description) {
        cy.get('[data-testid="update-description"]').clear().type(description); 
    }
    
    clickupdate(){
        cy.get('.MuiBox-root > .MuiButton-root').click();
    }

    addteamuser() {
        
        cy.get('[data-testid="existing-team"]').first().click();
        cy.get('[data-testid="add-user-team"]').click
    }
    createschedule(){
        cy.get('[ data-testid="schedules-tab"]').click();
        cy.get('[data-testid="create-schedules-button"]').click();
    }
    enterschedulename(schedulename){
        cy.get('[data-testid="enter-schedule-name"]').type(schedulename);
    }
    selecttimezone(){
        cy.get('[data-testid="timezone-dropdown"]').click();
     //cy.wait(500); 
     cy.contains('li', 'Africa/Asmara +03:00').click();
    }
    selectuser(){
        cy.get('[data-testid="user-dropdown"]').first().click();
        cy.contains('li', 'Pooja Chaudhari').click();
    }
    selectdate(){
       cy.get('[data-testid="select-date"]').then(($input) => {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
            const day = String(now.getDate()).padStart(2, '0');
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}`;
           cy.wrap($input).first().type(formattedDate);
          });
       
}
removelayer(){
    cy.get('[data-testid="remove-layer"]').click();
}
finalcreateschedule(){
    cy.get('[data-testid="create-schedule"]').click();    
}
clickscheduletab(){
    cy.get('[ data-testid="schedules-tab"]').click();
    cy.get('[data-testid="schedule-list"]').first().click();
}
 editSchedule(schedulename) {
     cy.get('[data-testid="edit-schedule"]').click();
      cy.get('[data-testid="enter-schedule-name"]').clear().should('have.value', '').type(schedulename); 
    }  
    escalationtab() {
        cy.get('[data-testid="escalation-policies-tab"]').click();
        
    }
    createescalationpolicy(){
        cy.get('[data-testid="create-escalation-button"]').click();
      
    }
    enterscheduleinfo(schedulename, description){
        cy.get('[data-testid="escalation-name-input"]').type(schedulename);
        cy.get('[data-testid="escalation-description-input"]').type(description);
    }
    addnotificationrule(){
        cy.get('[data-testid="add-notofication-rule"]').click();
    }
    selectscheduleuser(){
        cy.get('.MuiAutocomplete-popupIndicator').first().click( {force: true});
        cy.contains('li', 'Bugraid-Scheudle').should('be.visible').click();
 }
 finalclickcreatepolicy(){
    cy.get('[data-testid="create-policy"]').click({force:true})
 }
 escalatepolicytime(time){
    cy.get('[ data-testid="escalate-policy-time"]').type(time)
 }
 escalationpolicylist(){
    cy.get('[data-testid="escalation-policy-list"]').first().click()
 }
 editescalationpolicy(policyname){
    cy.get('[data-testid="edit-escalation-policy"]').click();
    cy.get('[data-testid="escalation-name-input"] input')  
        .clear()                                            
        .should('have.value', '')                           
        .type(policyname);                                
}
 
}
export default new TeamPage();
