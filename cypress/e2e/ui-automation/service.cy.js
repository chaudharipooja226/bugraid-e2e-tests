import ServicePage from '../../support/PageObject/ServicePage'; // Adjust the import path accordingly

describe('Service Creation Test', () => {
  let loginData;
  let uniqueServiceName;
  let uniqueDivisionName;

  function generateUniqueName() {
    const timestamp = Date.now();
    return `Service-${timestamp}`;
  }

  before(() => {
    cy.fixture('loginCredentials').then((data) => {
      loginData = data.login;
    });
  });

  beforeEach(() => {
    cy.login(loginData.username, loginData.password);
    cy.wait(8000);
    uniqueServiceName = generateUniqueName();
    uniqueDivisionName = `Division-${Date.now()}`;
  });

  it('should create a new standalone service', () => {
    ServicePage.visitServiceTab();
    ServicePage.createStandaloneService(uniqueServiceName);
  });

  it('should update the created service', () => {
    ServicePage.visitServiceTab();
    ServicePage.updateService(`${uniqueServiceName}-Updated`);
  });

  it('should delete the created service', () => {
    ServicePage.visitServiceTab();
    ServicePage.deleteService();
  });

  it('should create a new service with a new business unit', () => {
    ServicePage.visitServiceTab();
    ServicePage.createServiceWithNewBusinessUnit(uniqueServiceName, uniqueDivisionName);
  });

  it('should create a new service with an existing business unit', () => {
    ServicePage.visitServiceTab();
    ServicePage.createServiceWithExistingBusinessUnit(uniqueServiceName);
  });
});
