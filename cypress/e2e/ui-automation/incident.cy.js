
import IncidentPage from '../../support/PageObject/IncidentPage';
describe('Incident Creation Test', () => {
    let loginData;
    let uniqueIncidentTitle;

    before(() => {
        // Load login credentials from a fixture
        cy.fixture('loginCredentials').then((data) => {
            loginData = data.login;
        });
    });

    beforeEach(() => {
        cy.login(loginData.username, loginData.password);
        cy.wait(8000);
        uniqueIncidentTitle = `Incident Title - ${Date.now()}`;
    });

    // it('should create an incident for the selected service', () => {
    //     IncidentPage.clickCreateIncident();
    //     cy.wait(3000);
    //     // Assuming additional actions to select service...
    //     IncidentPage.fillIncidentForm('New incident', 'This is the new incident');
    //     IncidentPage.submitIncident();
    //     // Add assertions to verify the incident was created
    // });

    it('should create an incident', () => {
        IncidentPage.clickIncidenttab();
        IncidentPage.clickCreateIncident();
        cy.wait(4000);
        IncidentPage.fillIncidentForm(uniqueIncidentTitle, 'This is the new incident');
        IncidentPage.submitIncident();
    });

    it('should create an incident and acknowledge', () => {
       IncidentPage.clickIncidenttab();
        IncidentPage.clickCreateIncident();
        
        cy.wait(4000);
        IncidentPage.fillIncidentForm(uniqueIncidentTitle, 'This is the new incident');
        IncidentPage.submitIncident();
        IncidentPage.acknowledgeIncident();
        //IncidentPage.serviceOption.click();
        cy.reload();
        // Further actions and assertions...
    });
    it('should create an incident and resolve', () => {
      IncidentPage.clickIncidenttab();
       IncidentPage.clickCreateIncident();
       //cy.wait(4000);
       IncidentPage.fillIncidentForm(uniqueIncidentTitle, 'This is the new incident');
       IncidentPage.submitIncident();
       IncidentPage.resolveIncident();
});
});