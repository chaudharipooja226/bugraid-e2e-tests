// import IncidentPage from '../../support/PageObject/IncidentPage'; // Adjust the path as necessary

// describe('Incident Management', () => {
//     beforeEach(() => {
//         // Call the custom login command
//         cy.login();
//     });

//     it('should create and resolve an incident', () => {
//         IncidentPage.navigateToIncidentTab();
//         IncidentPage.createIncident('Test Incident', 'This is a test description.');
//         IncidentPage.acknowledgeIncident();
//         IncidentPage.assignIncident();
//         IncidentPage.resolveIncident();
        
        
//     });
// });
import IncidentPage from '../../support/PageObject/IncidentPage'; // Adjust the path as necessary

describe('Incident Management', () => {
    beforeEach(() => {
        // Call the custom login command
        cy.login();
    });

    it('should create an incident', () => {
        IncidentPage.navigateToIncidentTab();
        IncidentPage.createIncident('Test Incident 1', 'This is a test description for creating an incident.');
    });

    it('should create and acknowledge an incident', () => {
        IncidentPage.navigateToIncidentTab();
        IncidentPage.createIncident('Test Incident 2', 'This is a test description for acknowledging an incident.');
        IncidentPage.acknowledgeIncident();
    });

    it('should create and assign an incident', () => {
        IncidentPage.navigateToIncidentTab();
        IncidentPage.createIncident('Test Incident 3', 'This is a test description for assigning an incident.');
        IncidentPage.assignIncident();
    });

    // it('should create and resolve an incident', () => {
    //     IncidentPage.navigateToIncidentTab();
    //     IncidentPage.createIncident('Test Incident 4', 'This is a test description for resolving an incident.');
    //     IncidentPage.resolveIncident();
    // });
});
