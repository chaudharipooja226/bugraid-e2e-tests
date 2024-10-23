
    
    describe('Service API Tests', () => {
        const baseUrl = Cypress.env('API_URL');
        let serviceId;
        let servicetoken;
        let createservice;
        let updatePayload;
        let standaloneservice; // Variable to hold update payload
        const companyId = "TNMX5EX_6";
    
        before(() => {
            cy.fixture('token').then((tokens) => {
                servicetoken = tokens.servicetoken.cookie;
                cy.log('Service Token Loaded:', servicetoken);
            });
    
            cy.fixture('devpayload').then((payload) => {
                createservice = payload.createservice;
                createservice.companyId = companyId;
                updatePayload = payload.updatePayload;
                standaloneservice = payload.standaloneservice // Load the update payload
                cy.log('Create Service Payload:', JSON.stringify(createservice, null, 2));
                cy.log('Update Payload Loaded:', JSON.stringify(updatePayload, null, 2));
            });
        });
    
        const getHeaders = () => ({
            'Authorization': `Bearer ${servicetoken.split('=')[1]}`,
            'Content-Type': 'application/json',
            'compid': companyId
        });
    
        const generateUniqueServiceName = () => `Service-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    
        it('should create services successfully with valid data', () => {
            createservice.service_name = generateUniqueServiceName();
            cy.request({
                method: 'POST',
                url: `${baseUrl}/services`,
                headers: getHeaders(),
                body: createservice
            }).then((response) => {
                cy.log('Create Service Response:', JSON.stringify(response.body, null, 2));
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('data');
    
                serviceId = response.body.data.id || response.body.data;
                cy.log('Created Service ID:', serviceId);
            });
        });
    
        it('should create standalone services successfully with valid data', () => {
            standaloneservice.service_name = generateUniqueServiceName();
            cy.request({
                method: 'POST',
                url: `${baseUrl}/services`,
                headers: getHeaders(),
                body: standaloneservice
            }).then((response) => {
                cy.log('Create Service Response:', JSON.stringify(response.body, null, 2));
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('data');
    
                serviceId = response.body.data.id || response.body.data;
                cy.log('Created Service ID:', serviceId);
            });
        });
        it('should update the service successfully with a unique name', () => {
            expect(updatePayload).to.not.be.undefined; // Ensure updatePayload is defined
            updatePayload.serviceId = serviceId; // Include the service ID in the update payload
            
            // Generate a unique name for the service update
            updatePayload.name = generateUniqueServiceName();
    
            cy.request({
                method: 'PUT',
                url: `${baseUrl}/services/update/${serviceId}`, // Use the dynamically created serviceId
                headers: getHeaders(),
                body: updatePayload
            })
        });
    
        it('should get service by ID', () => {
            cy.request({
                method: 'GET',
                url: `${baseUrl}/services/${serviceId}`,
                headers: getHeaders()
            }).then((response) => {
                cy.log('Get Service by ID Response:', JSON.stringify(response.body, null, 2));
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('data');
                expect(response.body.data.id).to.eq(serviceId);
            });
        });
    
        it('should get all services', () => {
            cy.request({
                method: 'GET',
                url: `${baseUrl}/services`,
                headers: getHeaders()
            }).then((response) => {
                cy.log('Get All Services Response:', JSON.stringify(response.body, null, 2));
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('data');
                expect(response.body.data).to.be.an('array');
            });
        });
    
        it('should delete the service successfully', () => {
            cy.request({
                method: 'DELETE',
                url: `${baseUrl}/services/${serviceId}`,
                headers: getHeaders()
            }).then((response) => {
                expect(response.status).to.eq(200);
            });
        });
    
        // New Test: Create Multiple Services
        it('should create multiple services successfully', () => {
            const numberOfServices = 3; // Define how many services to create
            const createRequests = [];
    
            for (let i = 0; i < numberOfServices; i++) {
                const newService = {
                    ...createservice,
                    service_name: generateUniqueServiceName()
                };
    
                createRequests.push(
                    cy.request({
                        method: 'POST',
                        url: `${baseUrl}/services`,
                        headers: getHeaders(),
                        body: newService
                    }).then((response) => {
                        cy.log('Create Multiple Service Response:', JSON.stringify(response.body, null, 2));
                        expect(response.status).to.eq(200);
                        expect(response.body).to.have.property('data');
                        return response.body.data.id; // Return the created service ID
                    })
                );
            }
    
            // Use Cypress's built-in promise handling to wait for all requests
            cy.wrap(Promise.all(createRequests)).then((serviceIds) => {
                cy.log('Created Multiple Service IDs:', serviceIds);
                expect(serviceIds).to.have.lengthOf(numberOfServices); // Verify that the expected number of services were created
            });
        });
    });
    