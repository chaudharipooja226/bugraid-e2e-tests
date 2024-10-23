class IncidentPage {
    // Locators
    get incidentTab() {
        return cy.get("div[class='MuiGrid-root MuiGrid-container css-95imkh'] div:nth-child(1) button:nth-child(1)");
    }

    get createIncidentButton() {
        return cy.get('.MuiGrid-container > .MuiButtonBase-root');
    }

    get titleField() {
        return cy.get('input.MuiInputBase-input.MuiOutlinedInput-input[name="title"]');
    }

    get descriptionField() {
        return cy.get('textarea[name="description"]');
    }

    get submitButton() {
        return cy.get('.css-1kcmdmk > :nth-child(2) > .MuiButtonBase-root');
    }

    get acknowledgeButton() {
        return cy.get('.p-4 > .flex-col > .flex > :nth-child(1)');
    }

    get assignButton() {
        return cy.get('.p-4 > .flex-col > .flex > :nth-child(2)');
    }

    get resolveButton() {
       // return cy.get('#resolveButton'); 
    }

  
    navigateToIncidentTab() {
        this.incidentTab.click(); // Call click directly on the getter
    }

    // Method to create an incident
    createIncident(title, description) {
        this.createIncidentButton.click();
        this.titleField.type(title);
        this.descriptionField.type(description);
        this.submitButton.click();
    }

    // Method to acknowledge the incident
    acknowledgeIncident() {
        this.acknowledgeButton.click();
    }

    // Method to assign the incident
    assignIncident() {
        this.assignButton.click();
    }

    // Method to resolve the incident
    resolveIncident() {
        this.resolveButton.click();
    }
}

export default new IncidentPage();
