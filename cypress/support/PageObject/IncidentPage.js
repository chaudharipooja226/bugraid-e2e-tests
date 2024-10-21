class IncidentPage {
  // Selectors

  get Incidenttab() {
    
   return cy.get('.active > .MuiButtonBase-root');
  }
  get createIncidentButton() {
    return cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.app-button.css-1he7q0z');
   
  }

  get submitButton() {
      return cy.get('.css-1kcmdmk > :nth-child(2) > .MuiButtonBase-root');
  }

  get titleInput() {
      return cy.get('input[name="title"]');
  }

  get descriptionInput() {
      return cy.get('textarea[name="description"]');
  }

  get acknowledgeButton() {
      return cy.get('.p-4 > .justify-between > .flex > :nth-child(1)');
  }

  get serviceOption() {
      return cy.get("div[class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-5.8 rounded-xl css-1a7s85k'] button:nth-child(1)");
  }
  get resolvebutton() {
    return cy.get('.flex > :nth-child(3)')
}

get resolve() {
    return cy.get('.my-1 > .my-2 > :nth-child(3) > :nth-child(1)')
}
get enterreason() {
return cy.get('textarea[placeholder="Describe the root cause of the incident and the steps taken to address it."]') 
}
get resolveclick() {
    return cy.get('.MuiBox-root > .MuiButton-contained')
}
  clickIncidenttab(){

  this.Incidenttab.click();
  }

  clickCreateIncident() {
      this.createIncidentButton.click();
      
  }

  fillIncidentForm(title, description) {
      this.titleInput.type(title);
      this.descriptionInput.type(description);
  }

  submitIncident() {
      this.submitButton.click();
  }

  acknowledgeIncident() {
      this.acknowledgeButton.click();
  }
  resolveIncident() {
    this.resolvebutton.click();
    this.enterreason.type('Incident resolved succesfully');
    this.resolveclick.click();
    // this.resolve.click();
}
}

export default new IncidentPage();
