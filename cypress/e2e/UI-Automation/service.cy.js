

import ServicePage from '../../support/PageObject/ServicePage';

describe('Service Module Tests', () => {
    beforeEach(() => {
        // Call the custom login command
        cy.login();
    });

    it('should create a service successfully with a unique name', () => {
        const uniqueServiceName = `Service ${Date.now()}`; // Generates a unique service name

        ServicePage.navigateToServiceTab();
        ServicePage.clickCreateServiceButton();
        ServicePage.createNewBusinessUnit();
        ServicePage.clickNextButton(); // or ServicePage.selectExistingBusinessUnit();
        ServicePage.enterServiceDetails(uniqueServiceName, 'Service Description');
        // ServicePage.selectTeam('Testing Team');
        ServicePage.clickNextButton();
        // ServicePage.selectEscalationPolicy('ESC');
        ServicePage.clickNextButton();
        ServicePage.clickCreateNewServiceButton();

        // Add assertions to validate service creation
        cy.contains(uniqueServiceName).should('exist');
    });

    it('should update service', () => {
        const uniqueServiceName = `Service ${Date.now()}`; // Generates a unique service name
        const uniqueBusinessUnitName = `Business Unit ${Date.now()}`; // Generates a unique business unit name
    
        ServicePage.navigateToServiceTab();
        ServicePage.clickCreateServiceButton();
        ServicePage.createNewBusinessUnit(uniqueBusinessUnitName); // Pass unique name to create new business unit
        ServicePage.clickNextButton(); // or ServicePage.selectExistingBusinessUnit();
        ServicePage.enterServiceDetails(uniqueServiceName, 'Service Description');
        // ServicePage.selectTeam('Testing Team');
        ServicePage.clickNextButton();
        // ServicePage.selectEscalationPolicy('ESC');
        ServicePage.clickNextButton();
        ServicePage.clickCreateNewServiceButton();
        ServicePage.editservice(); // Assuming this method is defined for editing the service
    });
    // it('should create multiple services successfully', () => {
    //     const numberOfServices = 5; // Specify the number of services to create
    //     const servicesToCreate = Array.from({ length: numberOfServices }, (_, index) => ({
    //         name: `Service ${index + 1} ${Date.now()}`, // Unique service name
    //         description: `Description for Service ${index + 1}`,
    //     }));

    //     servicesToCreate.forEach((service) => {
    //         ServicePage.navigateToServiceTab();
    //         ServicePage.clickCreateServiceButton();
    //         ServicePage.createNewBusinessUnit();
    //         ServicePage.clickNextButton(); // or ServicePage.selectExistingBusinessUnit();
    //         ServicePage.enterServiceDetails(service.name, service.description);
    //         // ServicePage.selectTeam('Testing Team');
    //         ServicePage.clickNextButton();
    //         // ServicePage.selectEscalationPolicy('ESC');
    //         ServicePage.clickNextButton();
    //         ServicePage.clickCreateNewServiceButton();

    //         // Add assertions to validate each service creation
    //         cy.contains(service.name).should('exist');
    //     });
    // });
});

