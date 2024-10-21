
// context('Service APIs', () => { 
//     const baseURL = Cypress.env('apiBaseUrl');
//     let incidentToken;
//     let incidentPayload;
//     let multipleIncidentBase;
//     let acknowledgePayload;
//     let resolveIncident;
//     let assignincident;
//     let createUpdateTicket;
//     let createdIncidentId; // Variable to store created incident ID

//     before(() => {
//         cy.fixture('token').then((data) => {
//             incidentToken = data.incident.cookie; 
//         });
//         cy.fixture('qapayload').then((data) => {
//             incidentPayload = data.singleIncident; 
//             multipleIncidentBase = data.multipleIncidents.incidentBase; 
//             acknowledgePayload = data.acknowledgePayload;
//             resolveIncident = data.resolveincident;
//             assignincident = data.assignincident;
//         });
//     });

//     context('POST', () => {
//         describe('Validate create incident success', () => {
//             it('should create an incident successfully with valid data', () => {
//                 const URL = `${baseURL}/incidents/`;

//                 cy.request({
//                     method: 'POST',
//                     url: URL,
//                     headers: {
//                         "Content-Type": "application/json",
//                         "cookie": incidentToken
//                     },
//                     body: incidentPayload
//                 }).then((response) => {
//                     expect(response.status).to.eq(200); 
//                     expect(response.body.data).to.contain('INC-'); // Ensure the response contains an incident ID

//                     // Capture the created incident ID
//                     createdIncidentId = response.body.data; // Adjust this based on your actual response structure
//                 });
//             });
//         });
//     });
//     context('PUT', () => {
//     describe('Validate acknowledge incident success', () => {
//         it('should acknowledge the created incident successfully', () => {
//             const URL = `${baseURL}/incidents/${createdIncidentId}`; // Use the captured incident ID
    
//             // Define the acknowledge payload directly in the test
//             const acknowledgePayload = {
//                 action: "acknowledge",
//                 user: {
//                     first_name: "Pooja",
//                     last_name: "Chaudhari",
//                     email: "pooja.chaudhari@p99soft.com",
//                     id: "UCMGPAH8Y"
//                 }
//             };
    
//             // Log the payload for debugging
//             console.log('Acknowledge Payload:', acknowledgePayload);
    
//             cy.request({
//                 method: 'PUT',
//                 url: URL,
//                 headers: {
//                     "Content-Type": "application/json",
//                     "cookie": incidentToken 
//                 },
//                 body: acknowledgePayload
//             }).then((response) => {
//                 expect(response.status).to.eq(200);
//                 expect(response.body).to.have.property('message', 'Incident acknowledged successfully'); // Adjust as needed
//             });
//         });
//     });
// });
// context('PUT', () => {
//     describe('Validate Assign incident success', () => {
//          it('should assign the created incident successfully', () => {
//         const URL = `${baseURL}/incidents/${createdIncidentId}`;
    
//         const assignIncidentPayload = {
//             action: "assign",
//             assignee: {
//                 first_name: "Pooja",
//                 last_name: "Chaudhari"
//             },
//             user: {
//                 first_name: "Pooja",
//                 last_name: "Chaudhari",
//                 email: "pooja.chaudhari@p99soft.com", 
//                 id: "UCMGPAH8Y"
//             }
//         };
    
//         cy.request({
//             method: 'PUT',
//             url: URL,
//             headers: {
//                 "Content-Type": "application/json",
//                 "cookie": incidentToken 
//             },
//             body: assignIncidentPayload 
//         }).then((response) => {
//             expect(response.status).to.eq(200); 
//             expect(response.body).to.have.property('message', 'Incident assigned to Pooja Chaudhari successfully'); // Adjust message as needed
//         });
//     });
// });
// context('PUT', () => {
//         describe('Validate resolve incident success', () => {
//             it('should resolve the created incident successfully', () => {
//                 const URL = `${baseURL}/incidents/${createdIncidentId}`;
//                 const resolveIncident = {
//                     "action": "resolve",
//                     "rootCauseAnalysis": "Fixed issue.",
//                     "category": "Network Issue",
//                     "resolutionType": "Permanent Fix",
//                     "resolvedBy": "Pooja Chaudhari",
//                     "resolutionDateTime": "10/9/2024, 10:48:54 AM",
//                     "user": {
//                         "first_name": "Pooja",
//                         "last_name": "Chaudhari",
//                         "id": "UCMGPAH8Y",
//                         "email": "pooja.chaudhari@p99soft.com"
//                     }
//                 };
//              // Use the captured incident ID

//                 cy.request({
//                     method: 'PUT',
//                     url: URL,
//                     headers: {
//                         "Content-Type": "application/json",
//                         "cookie": incidentToken 
//                     },
//                     body: resolveIncident
//                 }).then((response) => {
//                     expect(response.status).to.eq(200);
//                     expect(response.body).to.have.property('message', 'Incident resolved successfully');
//                 });
//             });
//         });});
    

//     context('GET', () => {
//         describe('Validate get incident by ID', () => {
//             it('should retrieve the created incident by ID successfully', () => {
//                 const URL = `${baseURL}/incidents/${createdIncidentId}`; // Use the captured incident ID

//                 cy.request({
//                     method: 'GET',
//                     url: URL,
//                     headers: {
//                         "Content-Type": "application/json",
//                         "cookie": incidentToken 
//                     }
//                 }).then((response) => {
//                     expect(response.status).to.eq(200);
//                     expect(response.body).to.have.property('data');
//                     expect(response.body.data).to.have.property('id', createdIncidentId);
//                 });
//             });
//         });

//         // context('get', () => {
//         // describe('Validate get all incidents', () => {
//         //     it('should retrieve all incidents successfully', () => {
//         //         const URL = `${baseURL}/incidents/?search=''`; // Ensure the URL is correct
        
//         //         cy.request({
//         //             method: 'GET',
//         //             url: URL,
//         //             headers: {
//         //                 "Content-Type": "application/json",
//         //                 "cookie": incidentToken 
//         //             }
//         //         }).then((response) => {
//         //            expect(response.status).to.eq(200);
//         //             expect(response.body).to.have.property('data'); // Ensure response has data
//         //             expect(response.body.data).to.be.an('array'); // Ensure it is an array
        
//         //             // Optionally, check for a specific incident by ID if you have an expected ID
//         //             if (response.body.data.length > 0) {
//         //                 const specificIncidentId = 'INC-WP8RAETC'; // Replace with your actual incident ID to check
//         //                 const incident = response.body.data.find(inc => inc.id === specificIncidentId); // Adjust this according to your actual data structure
        
//         //                 expect(incident).to.not.be.undefined; // Ensure the incident exists
//         //                 expect(incident).to.have.property('id', specificIncidentId); // Check for correct ID
//         //             }
//         //         });
//         //     });
//         context('POST', () => {
//         describe('Validate Create Multiple Incidents Success', () => {
//             it('should create multiple incidents successfully with unique attributes', () => {
//                 const URL = `${baseURL}/incidents/`;
//                 const requests = [];
//                 const numberOfIncidentsToCreate = 2; 
        
//                 for (let i = 0; i < numberOfIncidentsToCreate; i++) {
//                     const incident = {
//                         title: `Incident Title ${Date.now()} - ${i + 1}`, 
//                         description: `Description for Incident ${i + 1}`,
//                         severity: 'high',
                        
//                     };
        
                    
//                     requests.push(
//                         cy.request({
//                             method: 'POST',
//                             url: URL,
//                             headers: {
//                                 "Content-Type": "application/json",
//                                 "cookie": incidentToken 
//                             },
//                             body: multipleIncidentBase
//                         }).then((response) => {
                           
//                             expect(response.status).to.eq(200);
//                             expect(response.body).to.have.property('data'); 
//                             expect(response.body.data).to.contain('INC-'); 
//                         })
//                     );
//                 }
//          cy.wrap(Promise.all(requests)).then(() => {
//         cy.log('All incidents created successfully');
//                 });
//             });
//         });
        
//         });
        
//     });

//     });});

context('Service APIs', () => {
    const baseURL = Cypress.env('apiBaseUrl');
    let incidentToken;
    let incidentPayload;
    let multipleIncidentBase;
    let createdIncidentId; // Variable to store created incident ID

    // Common Payloads
    const acknowledgePayload = {
        action: "acknowledge",
        user: {
            first_name: "Pooja",
            last_name: "Chaudhari",
            email: "pooja.chaudhari@p99soft.com",
            id: "UCMGPAH8Y"
        }
    };

    const assignIncidentPayload = {
        action: "assign",
        assignee: {
            first_name: "Pooja",
            last_name: "Chaudhari"
        },
        user: {
            first_name: "Pooja",
            last_name: "Chaudhari",
            email: "pooja.chaudhari@p99soft.com",
            id: "UCMGPAH8Y"
        }
    };

    const resolveIncidentPayload = {
        action: "resolve",
        rootCauseAnalysis: "Fixed issue.",
        category: "Network Issue",
        resolutionType: "Permanent Fix",
        resolvedBy: "Pooja Chaudhari",
        resolutionDateTime: new Date().toISOString(),
        user: {
            first_name: "Pooja",
            last_name: "Chaudhari",
            id: "UCMGPAH8Y",
            email: "pooja.chaudhari@p99soft.com"
        }
    };

    before(() => {
        cy.fixture('token').then((data) => {
            incidentToken = data.incident.cookie; 
        });
        cy.fixture('qapayload').then((data) => {
            incidentPayload = data.singleIncident; 
            multipleIncidentBase = data.multipleIncidents.incidentBase; 
        });
    });

    // POST Tests
    context('POST Requests', () => {
        describe('Create Incident', () => {
            it('should create an incident successfully with valid data', () => {
                const URL = `${baseURL}/incidents/`;
                cy.request({
                    method: 'POST',
                    url: URL,
                    headers: {
                        "Content-Type": "application/json",
                        "cookie": incidentToken
                    },
                    body: incidentPayload
                }).then((response) => {
                    expect(response.status).to.eq(200); 
                    expect(response.body.data).to.contain('INC-');
                    createdIncidentId = response.body.data; // Capture the incident ID
                });
            });
        });

    //     describe('Create Multiple Incidents', () => {
    //         it('should create multiple incidents successfully', () => {
    //             const URL = `${baseURL}/incidents/`;
    //             const requests = [];
    //             const numberOfIncidentsToCreate = 2; 

    //             for (let i = 0; i < numberOfIncidentsToCreate; i++) {
    //                 const incident = {
    //                     title: `Incident Title ${Date.now()} - ${i + 1}`, 
    //                     description: `Description for Incident ${i + 1}`,
    //                     severity: 'high',
    //                 };

    //                 requests.push(
    //                     cy.request({
    //                         method: 'POST',
    //                         url: URL,
    //                         headers: {
    //                             "Content-Type": "application/json",
    //                             "cookie": incidentToken 
    //                         },
    //                         body: multipleIncidentBase
    //                     }).then((response) => {
    //                         expect(response.status).to.eq(200);
    //                         expect(response.body).to.have.property('data'); 
    //                         expect(response.body.data).to.contain('INC-'); 
    //                     })
    //                 );
    //             }

    //             cy.wrap(Promise.all(requests)).then(() => {
    //                 cy.log('All incidents created successfully');
    //             });
    //         });
    //     });
    // });

    // PUT Tests
    context('PUT Requests', () => {
        describe('Acknowledge Incident', () => {
            it('should acknowledge the created incident successfully', () => {
                const URL = `${baseURL}/incidents/${createdIncidentId}`;
                cy.request({
                    method: 'PUT',
                    url: URL,
                    headers: {
                        "Content-Type": "application/json",
                        "cookie": incidentToken 
                    },
                    body: acknowledgePayload
                }).then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.body).to.have.property('message', 'Incident acknowledged successfully');
                });
            });
        });

        describe('Assign Incident', () => {
            it('should assign the created incident successfully', () => {
                const URL = `${baseURL}/incidents/${createdIncidentId}`;
                cy.request({
                    method: 'PUT',
                    url: URL,
                    headers: {
                        "Content-Type": "application/json",
                        "cookie": incidentToken 
                    },
                    body: assignIncidentPayload 
                }).then((response) => {
                    expect(response.status).to.eq(200); 
                    expect(response.body).to.have.property('message', 'Incident assigned to Pooja Chaudhari successfully');
                });
            });
        });

        describe('Resolve Incident', () => {
            it('should resolve the created incident successfully', () => {
                const URL = `${baseURL}/incidents/${createdIncidentId}`;
                cy.request({
                    method: 'PUT',
                    url: URL,
                    headers: {
                        "Content-Type": "application/json",
                        "cookie": incidentToken 
                    },
                    body: resolveIncidentPayload
                }).then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.body).to.have.property('message', 'Incident resolved successfully');
                });
            });
        });
    });

    // GET Tests
    context('GET Requests', () => {
        describe('Get Incident by ID', () => {
            it('should retrieve the created incident by ID successfully', () => {
                const URL = `${baseURL}/incidents/${createdIncidentId}`;
                cy.request({
                    method: 'GET',
                    url: URL,
                    headers: {
                        "Content-Type": "application/json",
                        "cookie": incidentToken 
                    }
                }).then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.body).to.have.property('data');
                    expect(response.body.data).to.have.property('id', createdIncidentId);
                });
            });
        });

        // Uncomment this block if you want to test getting all incidents
        // describe('Get All Incidents', () => {
        //     it('should retrieve all incidents successfully', () => {
        //         const URL = `${baseURL}/incidents/?search=''`;
        //         cy.request({
        //             method: 'GET',
        //             url: URL,
        //             headers: {
        //                 "Content-Type": "application/json",
        //                 "cookie": incidentToken 
        //             }
        //         }).then((response) => {
        //             expect(response.status).to.eq(200);
        //             expect(response.body).to.have.property('data');
        //             expect(response.body.data).to.be.an('array');
        //             // Optionally, check for a specific incident by ID
        //         });
        //     });
        // });
    });
});});
