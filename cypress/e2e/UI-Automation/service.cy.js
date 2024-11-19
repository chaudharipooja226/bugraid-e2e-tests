import ServicePage from '../../support/PageObject/ServicePage';

describe('Service Module Tests', () => {
    beforeEach(() => {
        // Call the custom login command
        cy.login();
    });

    

    it('should create a service with a new business unit', () => {
        const uniqueServiceName = `Service ${Date.now()}`; // Generates a unique service name
        const uniqueBusinessUnitName = `Business Unit ${Date.now()}`; // Generates a unique business unit name

        ServicePage.navigateToServiceTab();
      
        ServicePage.clickCreateServiceButton();
        ServicePage.createNewBusinessUnit(uniqueBusinessUnitName); // Pass unique name to create new business unit
        ServicePage.clickNextButton();
        ServicePage.enterServiceDetails(uniqueServiceName, 'Service Description');
        ServicePage.selectTeam('QA Team');
        ServicePage.clickNextButton();
        ServicePage.selectexistingescaltionpolicy();
        ServicePage.clickNextButton();
        ServicePage.clickCreateNewServiceButton();

        
    });

    it('should create a standalone service', () => {
        const uniqueServiceName = `Service ${Date.now()}`; // Generates a unique service name

        ServicePage.navigateToServiceTab();
        ServicePage.clickCreateServiceButton();
        ServicePage.clickskipbutton(); // Adjust if you want a unique name
        ServicePage.enterServiceDetails(uniqueServiceName, 'Service Description');
        ServicePage.selectTeam('QA Team');
        ServicePage.clickNextButton();
        ServicePage.selectexistingescaltionpolicy();
        ServicePage.clickNextButton();
        ServicePage.clickIntegration();
        ServicePage.clickfinalcreatenew();

    });

    it('should create a service with an existing business unit', () => {
        const uniqueServiceName = `Service ${Date.now()}`; // Generates a unique service name

        // Steps for service creation
        ServicePage.navigateToServiceTab();
        ServicePage.clickCreateServiceButton();
        ServicePage.selectExistingBusinessUnit();
        ServicePage.clickNextButton();
        ServicePage.enterServiceDetails(uniqueServiceName, 'Service Description');
        ServicePage.selectTeam();
        ServicePage.clickNextButton();
        ServicePage.selectexistingescaltionpolicy();
        ServicePage.clickNextButton();
        ServicePage.clickCreateNewServiceButton();

       
     });

    it('should update a service', () => {
        ServicePage.navigateToServiceTab();
        cy.wait(1000);
        ServicePage.editService();
        ServicePage.Clickupdatebutton();
        ServicePage.updatedescription('service description');
        ServicePage.Clickupdateservice();
    });

<<<<<<< HEAD
    it('should delete a service', () => {
        ServicePage.navigateToServiceTab();
        cy.wait(3000);
        ServicePage.clickviewbutton();
        ServicePage.clickdeletebutton();
    });
=======
    
>>>>>>> 122cc15a399a388d32ba61c0ac2034e44c15a223
    it('should disable a service', () => {
        ServicePage.navigateToServiceTab();
        cy.wait(1000);
        ServicePage.clickviewbutton();
        ServicePage.clickdisableservice();
        ServicePage.clickenableservice();
    });
});
