
// context('Service APIs', () => {
//     const baseURL = Cypress.env('apiBaseUrl');
//     const compidValue = "TICFD0S2V";
//     let serviceToken;
//     let createService;
//     let updatedService;
//     let serviceId; // Store the ID of the created service

//     before(() => {
//         // Load the service token and payloads from fixtures
//         cy.fixture('token').then((data) => {
//             serviceToken = data.service.cookie; 
//         });
//         cy.fixture('qapayload').then((data) => {
//             createService = data.createService; 
//             updatedService = data.updatedService;
//             console.log('Loaded updatedService:', updatedService);  // Load updatedService from fixtures
//         });
//     });

//     context('api/v1/services', () => {
//         describe('Validate Create Service Success', () => {
//             it('should create a service successfully with valid data', () => {
//                 const URL = `${baseURL}/services`;

//                 // Generate a unique service name for this test run
//                 createService.service_name = `API Service ${Date.now()}`; // Create a unique service name

//                 cy.request({
//                     method: 'POST',
//                     url: URL,
//                     headers: {
//                         "Content-Type": "application/json",
//                         "cookie": serviceToken,
//                         "compid": compidValue
//                     },
//                     body: createService
//                 }).then((response) => {
//                     expect(response.status).to.eq(200);
//                     expect(response.body).to.have.property('data'); // Ensure 'data' exists
//                     serviceId = response.body.data; // Store the created service ID
//                 });
//             });
//         });

//         describe('Validate Update Service Success', () => {
//             it('should update the service successfully', () => {
//                 const URL = `${baseURL}/services/update/24DLB6LI`; 
        
//                 const updatedService = {
//                     "name": "test",
//                     "team": {
//                         "id": "TLXZFWVMA",
//                         "name": "New Dev"
//                     },
//                     "description": " ",
//                     "business_units": [
//                         "ZW6TGMV-"
//                     ],
//                     "escalation_policy": "EU5SW8R0"
//                 }
//                 cy.request({
//                     method: 'PUT',
//                     url: URL,
//                     headers: {
//                         "Content-Type": "application/json",
//                         "cookie": serviceToken,
//                         "compid": compidValue
//                     },
//                     body: updatedService
//                 }).then((response) => {
//                     // Assert the response status and body
//                     expect(response.status).to.eq(200); // Check for successful response
                    
//                 });
//             });
//             });
        

//         describe('Get Service by ID', () => {
//             it('should retrieve the service successfully by ID', () => {
//                 const URL = `${baseURL}/services/${serviceId}`; // Use the created service ID

//                 cy.request({
//                     method: 'GET',
//                     url: URL,
//                     headers: {
//                         "Content-Type": "application/json",
//                         "cookie": serviceToken,
//                         "compid": compidValue
//                     }
//                 }).then((response) => {
//                     expect(response.status).to.eq(200);
//                     // Additional assertions can be added here if needed
//                 });
//             });
//         });

//         describe('Validate Delete Service Success', () => {
//             it('should delete the service successfully', () => {
//                 const URL = `${baseURL}/services/${serviceId}`; // Use the created service ID

//                 cy.request({
//                     method: 'DELETE',
//                     url: URL,
//                     headers: {
//                         "Content-Type": "application/json",
//                         "cookie": serviceToken,
//                         "compid": compidValue
//                     }
//                 }).then((response) => {
//                     expect(response.status).to.eq(200); 
//                 });
//             });
//         });
//          describe('Validate Create Multiple Services Success', () => {
//             it('should create multiple services successfully with unique names', () => {
//                 const URL = `${baseURL}/services`;
//                 const requests = [];
//                 const numberOfServicesToCreate = 2; // Specify how many services you want to create

//                 for (let i = 0; i < numberOfServicesToCreate; i++) {
//                     const service = {
//                         service_name: `API Service ${Date.now()} - ${i + 1}`, // Unique service name
//                         description: `Description for API Service ${i + 1}`,
                       
//                     };

//                     requests.push(
//                         cy.request({
//                             method: 'POST',
//                             url: URL,
//                             headers: {
//                                 "Content-Type": "application/json",
//                                 "cookie": serviceToken,
//                                 "compid": compidValue
//                             },
//                             body: service
//                         }).then((response) => {
//                             expect(response.status).to.eq(200);
//                             expect(response.body).to.have.property('data'); // Ensure 'data' exists
//                         })
//                     );
//                 }
//                  return Promise.all(requests); 
//             });
//         });
//     });
//     it('should retrieve all services successfully with search parameter', () => {
//         const URL = `${baseURL}/services`;
//         const searchValue = ""; 
//          cy.request({
//             method: 'GET',
//             url: URL,
//             qs: { search: searchValue }, 
//             headers: {
//                 "Content-Type": "application/json",
//                 "cookie": serviceToken,
//                 "compid": compidValue
//             }
//         }).then((response) => {
//              console.log('Response:', response);
//             expect(response.status).to.eq(200); 
           
//         });
//     });
// });
context('Service APIs', () => {
    const baseURL = Cypress.env('apiBaseUrl');
    const compidValue = "TICFD0S2V";
    let serviceToken;
    let createService;
    let updatedService;
    let serviceId; // Store the ID of the created service

    before(() => {
        // Load the service token and payloads from fixtures
        cy.fixture('token').then((data) => {
            serviceToken = data.service.cookie; 
        });
        cy.fixture('qapayload').then((data) => {
            createService = data.createService; 
            updatedService = data.updatedService;
            console.log('Loaded updatedService:', updatedService);  // Load updatedService from fixtures
        });
    });

    context('api/v1/services', () => {
        describe('Create Service', () => {
            it('should create a service successfully with valid data', () => {
                const URL = `${baseURL}/services`;

                // Generate a unique service name for this test run
                createService.service_name = `API Service ${Date.now()}`;

                cy.request({
                    method: 'POST',
                    url: URL,
                    headers: {
                        "Content-Type": "application/json",
                        "cookie": serviceToken,
                        "compid": compidValue
                    },
                    body: createService
                }).then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.body).to.have.property('data'); // Ensure 'data' exists
                    serviceId = response.body.data; // Store the created service ID
                });
            });
        });

        describe('Update Service', () => {
            it('should update the service successfully', () => {
                const URL = `${baseURL}/services/update/${serviceId}`; // Use the created service ID

                const updatedServicePayload = {
                    "name": "test",
                    "team": {
                        "id": "TLXZFWVMA",
                        "name": "New Dev"
                    },
                    "description": " ",
                    "business_units": [
                        "ZW6TGMV-"
                    ],
                    "escalation_policy": "EU5SW8R0"
                };
                
                cy.request({
                    method: 'PUT',
                    url: URL,
                    headers: {
                        "Content-Type": "application/json",
                        "cookie": serviceToken,
                        "compid": compidValue
                    },
                    body: updatedServicePayload
                }).then((response) => {
                    expect(response.status).to.eq(200); // Assert the response status
                });
            });
        });

        describe('Get Service by ID', () => {
            it('should retrieve the service successfully by ID', () => {
                const URL = `${baseURL}/services/${serviceId}`; // Use the created service ID

                cy.request({
                    method: 'GET',
                    url: URL,
                    headers: {
                        "Content-Type": "application/json",
                        "cookie": serviceToken,
                        "compid": compidValue
                    }
                }).then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.body).to.have.property('data');
                });
            });
        });

        describe('Delete Service', () => {
            it('should delete the service successfully', () => {
                const URL = `${baseURL}/services/${serviceId}`; // Use the created service ID

                cy.request({
                    method: 'DELETE',
                    url: URL,
                    headers: {
                        "Content-Type": "application/json",
                        "cookie": serviceToken,
                        "compid": compidValue
                    }
                }).then((response) => {
                    expect(response.status).to.eq(200);
                });
            });
        });

        describe('Create Multiple Services', () => {
            it('should create multiple services successfully with unique names', () => {
                const URL = `${baseURL}/services`;
                const requests = [];
                const numberOfServicesToCreate = 2; // Specify how many services you want to create

                for (let i = 0; i < numberOfServicesToCreate; i++) {
                    const service = {
                        service_name: `API Service ${Date.now()} - ${i + 1}`, // Unique service name
                        description: `Description for API Service ${i + 1}`,
                    };

                    requests.push(
                        cy.request({
                            method: 'POST',
                            url: URL,
                            headers: {
                                "Content-Type": "application/json",
                                "cookie": serviceToken,
                                "compid": compidValue
                            },
                            body: service
                        }).then((response) => {
                            expect(response.status).to.eq(200);
                            expect(response.body).to.have.property('data'); // Ensure 'data' exists
                        })
                    );
                }

                // Wait for all requests to complete
                Cypress.Promise.all(requests).then(() => {
                    cy.log('All services created successfully');
                });
            });
        });

        describe('Retrieve All Services', () => {
            it('should retrieve all services successfully with search parameter', () => {
                const URL = `${baseURL}/services`;
                const searchValue = ""; // Adjust as needed

                cy.request({
                    method: 'GET',
                    url: URL,
                    qs: { search: searchValue },
                    headers: {
                        "Content-Type": "application/json",
                        "cookie": serviceToken,
                        "compid": compidValue
                    }
                }).then((response) => {
                    console.log('Response:', response);
                    expect(response.status).to.eq(200);
                    expect(response.body).to.have.property('data'); // Ensure 'data' exists
                });
            });
        });
    });
});
