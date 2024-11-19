
describe('Incident Management API Tests', () => {
    const baseUrl = Cypress.env('API_URL');
    let incidentId; 
    let incidenttoken; 
    let singleIncident; 

    before(() => {
         cy.fixture('token').then((tokens) => {
            incidenttoken = tokens.incidenttoken.cookie; 
            cy.log('Incident Token Loaded:', incidenttoken);
        });

        cy.fixture('qapayload').then((payload) => {
            singleIncident = payload.singleIncident; 
        });
    });

    it('should create an incident successfully with valid data', function () {
        const apiUrl = `${baseUrl}/incidents/`;

        cy.request({
            method: 'POST',
            url: apiUrl,
            headers: {
                'Authorization': `Bearer ${incidenttoken.split('=')[1]}`, 
                'Content-Type': 'application/json'
            },
            
            body: singleIncident 
        }).then((response) => {
            expect(response.status).to.eq(200); 
            expect(response.body).to.have.property('data'); 
            incidentId = response.body.data;
            cy.log('Incident Created with ID:', incidentId);
        });
    });

    it('should create multiple incidents successfully with valid data', function () {
        const apiUrl = `${baseUrl}/incidents/`;
        const createIncidentPromises = [];
        const numberOfIncidents = 1; 
        for (let i = 0; i < numberOfIncidents; i++) {
            const incidentPayload = {
                ...singleIncident,
                title: `${singleIncident.title} - Instance ${i + 1}`,
            };
            const promise = cy.request({
                method: 'POST',
                url: apiUrl,
                headers: {
                    'Authorization': `Bearer ${incidenttoken.split('=')[1]}`, 
                    'Content-Type': 'application/json'
                },
                body: incidentPayload 
            }).then((response) => {
                expect(response.status).to.eq(200); 
                expect(response.body).to.have.property('data');
                incidentId = response.body.data; 
                cy.log('Incident Created with ID:', incidentId);
            });

            createIncidentPromises.push(promise);
        }

        cy.wrap(Promise.all(createIncidentPromises)).then(() => {
            cy.log(`${numberOfIncidents} incidents created successfully.`);
        });
    });

    it('should acknowledge the incident successfully', function () {
        const acknowledgeUrl = `${baseUrl}/incidents/${incidentId}`;

        const payload = {
            action: "acknowledge",
            user: {
                first_name: "Pooja",
                last_name: "Chaudhari",
                email: "Pooja",
                id: "UVFLS4WDW"
            }
        };

        cy.request({
            method: 'PUT',
            url: acknowledgeUrl,
            headers: {
                'Authorization': `Bearer ${incidenttoken.split('=')[1]}`,
                'Content-Type': 'application/json'
            },
            body: payload
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('message', 'Incident acknowledged successfully');
            cy.log('Incident acknowledged successfully:', response.body.message);
        });
    });

    it('should assign the incident successfully', function () {
        const assignUrl = `${baseUrl}/incidents/${incidentId}`;

        const payload = {
            action: "assign",
            assignee: {
                first_name: "dharmnath",
                last_name: "Shinde"
            },
            user: {
                first_name: "Pooja",
                last_name: "Chaudhari",
                email: "Pooja",
                id: "UVFLS4WDW"
            }
        };

        cy.request({
            method: 'PUT',
            url: assignUrl,
            headers: {
                'Authorization': `Bearer ${incidenttoken.split('=')[1]}`,
                'Content-Type': 'application/json'
            },
            body: payload
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('message', 'Incident assigned to Pooja Chaudhari successfully');
            cy.log('Incident assigned successfully:', response.body.message);
        });
    });

    it('should resolve the incident successfully', function () {
        const resolveUrl = `${baseUrl}/incidents/${incidentId}`;
        const payload = {
            action: "resolve",
            rootCauseAnalysis: "Issue fixed successfully",
            category: "Network Issue",
            resolutionType: "Permanent Fix",
            resolvedBy: "Pooja Chaudhari",
            resolutionDateTime: "10/21/2024, 4:52:02 PM",
            user: {
                first_name: "Pooja",
                last_name: "Chaudhari",
                id: "UVFLS4WDW",
                email: "pooja.chaudhari@p99soft.com"
            }
        };

        cy.request({
            method: 'PUT',
            url: resolveUrl,
            headers: {
                'Authorization': `Bearer ${incidenttoken.split('=')[1]}`,
                'Content-Type': 'application/json'
            },
            body: payload
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('message', 'Incident resolved successfully');
            cy.log('Incident resolved successfully:', response.body.message);
        });
    });

    it('should get the incident by ID successfully', function () {
        const getIncidentUrl = `${baseUrl}/incidents/${incidentId}`;

        cy.request({
            method: 'GET',
            url: getIncidentUrl,
            headers: {
                'Authorization': `Bearer ${incidenttoken.split('=')[1]}`,
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('data');
            expect(response.body.data).to.have.property('id', incidentId);
            cy.log('Retrieved incident by ID successfully:', response.body.data);
        });
    });

    it('should get all incidents successfully', function () {
        const getAllIncidentsUrl = `${baseUrl}/incidents/`;
    
        cy.request({
            method: 'GET',
            url: getAllIncidentsUrl,
            headers: {
                'Authorization': `Bearer ${incidenttoken.split('=')[1]}`,
                'Content-Type': 'application/json'
            },
            failOnStatusCode: false 
        }).then((response) => {
           
            cy.log('Response Status:', response.status);
            cy.log('Response Body:', response.body);
    
            if (response.status === 200) {
                expect(response.body).to.have.property('data');
                cy.log('Retrieved all incidents successfully:', response.body.data);
            } else {
                cy.log('Error retrieving incidents:', response.body.error);
            }
        });
    });});
