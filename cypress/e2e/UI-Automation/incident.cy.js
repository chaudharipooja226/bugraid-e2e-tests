
import IncidentPage from '../../support/PageObject/IncidentPage'; // Adjust the path as necessary

describe('Incident Management', () => {
    beforeEach(() => {
       
        cy.login();
        cy.wait(4000);
    });

    it('should create an incident', () => {
        const uniqueTitle = `Title ${Date.now()}`; 
        const uniqueDescription = `Description ${Date.now()}`; 
    
        IncidentPage.incidentTab();
        IncidentPage.createIncidentButton();
        IncidentPage.titleField(uniqueTitle);
        IncidentPage.descriptionField(uniqueDescription);
        IncidentPage.submitButton();
        IncidentPage.incidenttittle();
        IncidentPage.acknowledgeButton();
        IncidentPage.clickcreateticket();
        IncidentPage.Clickcreate();
    });
it('should create and aknowledge incident', () => {
    IncidentPage.incidentTab();
    cy.wait(4000);
    IncidentPage.createIncidentButton();
    cy.wait(5000);
    IncidentPage.titleField('Tittle');
    IncidentPage.descriptionField('description');
    IncidentPage.submitButton();
    IncidentPage.incidenttittle();
    IncidentPage.acknowledgeButton();
});
    it('should create and resolve an incident', () => {
        // IncidentPage.incidentTab();
        // IncidentPage.createIncidentButton();
        // IncidentPage.titleField('Tittle');
        // IncidentPage.descriptionField('description');
        // IncidentPage.submitButton();
        IncidentPage.incidenttittle();
        cy.wait(2000);
        IncidentPage.acknowledgeButton();
        IncidentPage.clickresolveButton();
        IncidentPage.enterresolvereason('Issue fixed succesfully');
        IncidentPage.clickresolve();
    });
    

    it('should create jira ticket for incident', () => {
        const uniqueTitle = `Title ${Date.now()}`; 
        const uniqueDescription = `Description ${Date.now()}`; 
        IncidentPage.incidentTab();
        IncidentPage.createIncidentButton();
        IncidentPage.titleField('Tittle');
        IncidentPage.descriptionField('description');
        IncidentPage.submitButton();
        IncidentPage.incidenttittle();
        IncidentPage.acknowledgeButton();
        IncidentPage.clickcreateticket();
        IncidentPage.selectProject();
        IncidentPage.ticketassigneedropdown();
        IncidentPage.Clickcreate();
       
    });


});
