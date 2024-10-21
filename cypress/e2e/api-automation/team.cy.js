// context('User Invitation APIs', () => {
//     const baseURL = Cypress.env('apiBaseUrl'); 
//     let teamToken;
//     let inviteUserPayload;
//     let creatteam;
//     let updateTeamPayload;
//     let updateTeamdetailsPayload;
//     const compidValue = "TZPFOAU1W";

//     before(() => {
//         cy.fixture('token').then((data) => {
//             teamToken = data.team.cookie; 
//         });
//         cy.fixture('devpayload').then((data) => {
//             inviteUserPayload = data.inviteuser; 
//             creatteam = data.creatteam;
//         });
//     });

//     context('POST', () => {
//         describe('Invite user', () => {
//             it('should successfully invite a user with a unique email', () => {
//                 const URL = `${baseURL}/users/inviteUser`;
//                 const uniqueEmail = `testuser_${Date.now()}@example.com`; 
//                 inviteUserPayload.email = uniqueEmail; 
//                 cy.request({
//                     method: 'POST',
//                     url: URL,
//                     headers: {
//                         "Content-Type": "application/json",
//                         "cookie": teamToken
//                     },
//                     body: inviteUserPayload
//                 }).then((response) => {
//                     expect(response.status).to.eq(200); 
//                     expect(response.body).to.have.property('message', 'Email sent successfully!');
//                 });
//             });
//         });

//         describe('POST', () => {
//             it('should successfully create a team with a unique name', () => {
//                 const URL = `${baseURL}/teams/createteam`;
                
//                 // Create a unique team name
//                 creatteam.name = `Unique Team ${Date.now()}`; // Modify the team name to be unique
                
//                 cy.request({
//                     method: 'POST',
//                     url: URL,
//                     headers: {
//                         "Content-Type": "application/json",
//                         "cookie": teamToken,
//                         "compid": compidValue
//                     },
//                     body: creatteam
//                 }).then((response) => {
//                     expect(response.status).to.eq(200); 
//                     expect(response.body).to.have.property('message', 'Team created successfully');
//                 });
//             });
//         });
       

// context('PUT', () => {
//     describe('Update team', () => {
//         it('should successfully update the team', () => {
//             const URL = `${baseURL}/teams/update/TXPR5MR5J`; // Construct the URL for the PUT request

//             cy.request({
//                 method: 'PUT',
//                 url: URL,
//                 headers: {
//                     "Content-Type": "application/json",
//                     "cookie": teamToken,
//                     "compid": compidValue
//                 },
//                 body: updateTeamPayload 
//             }).then((response) => {
//                 expect(response.status).to.eq(200); // Check for successful response
                
                
//             });
//         });
//     });
//     context('PUT', () => {
//         describe('Update team details', () => {
//             it('should successfully update the team details', () => {
//                  // Replace with the actual team ID you want to update
//                 const URL = `${baseURL}/teams/update/TXPR5MR5J`; // Construct the URL for the PUT request

//                 cy.request({
//                     method: 'PUT',
//                     url: URL,
//                     headers: {
//                         "Content-Type": "application/json",
//                         "cookie": teamToken,
//                         "compid": compidValue
//                     },
//                     body: updateTeamdetailsPayload // Payload for the update
//                 }).then((response) => {
//                     expect(response.status).to.eq(200); // Check for successful response
                    
//                 });
//             });
//         });

//         context('GET', () => {
//             describe('Validate get team by ID', () => {
//                 it('should retrieve an team by ID successfully', () => {
//                     const teamId = 'TXPR5MR5J'; // Update with the correct incident ID
//                     const URL = `${baseURL}/teams/${teamId}`; // Ensure the URL is correct

//                     cy.request({
//                         method: 'GET',
//                         url: URL,
//                         headers: {
//                             "Content-Type": "application/json",
//                             "cookie": teamToken
//                         }
//                     }).then((response) => {
//                         expect(response.status).to.eq(200);
//                         expect(response.body.data).to.have.property('id', teamId);
//                     });
//                 });
//             });
//             // context('GET', () => {
//             //     describe('Validate get all teams', () => {
//             //         it('should retrieve all teams successfully', () => {
//             //             const URL = `${baseURL}/team/?search=''`; // Ensure the URL is correct
                        
//             //             cy.request({
//             //                 method: 'GET',
//             //                 url: URL,
//             //                 headers: {
//             //                     "Content-Type": "application/json",
//             //                     "cookie": teamToken // If authentication is required
//             //                 }
//             //             }).then((response) => {
//             //                 console.log(response);
//             //                expect(response.status).to.eq(200);
            
                           
                               
//             //                 });
//             //             });
//             //         });
//                 });
//             });
// });
// });
//     });//

context('Team APIs', () => {
    const baseURL = Cypress.env('apiBaseUrl'); 
    let teamToken;
    let inviteUserPayload;
    let createTeamPayload;
    let updateTeamPayload;
    let updateTeamDetailsPayload;
    const compidValue = "TZPFOAU1W";

    before(() => {
        cy.fixture('token').then((data) => {
            teamToken = data.team.cookie; 
        });
        cy.fixture('devpayload').then((data) => {
            inviteUserPayload = data.inviteuser; 
            createTeamPayload = data.creatteam;
            updateTeamPayload = data.updateTeam; // Assuming you have these in your fixture
            updateTeamDetailsPayload = data.updateTeamDetails; // Assuming you have these in your fixture
        });
    });

    context('User Invitation', () => {
        describe('Invite User', () => {
            it('should successfully invite a user with a unique email', () => {
                const URL = `${baseURL}/users/inviteUser`;
                const uniqueEmail = `testuser_${Date.now()}@example.com`; 
                inviteUserPayload.email = uniqueEmail; 

                cy.request({
                    method: 'POST',
                    url: URL,
                    headers: {
                        "Content-Type": "application/json",
                        "cookie": teamToken
                    },
                    body: inviteUserPayload
                }).then((response) => {
                    expect(response.status).to.eq(200); 
                    expect(response.body).to.have.property('message', 'Email sent successfully!');
                });
            });
        });
    });

    context('Team Management', () => {
        describe('Create Team', () => {
            it('should successfully create a team with a unique name', () => {
                const URL = `${baseURL}/teams/createteam`;
                
                // Create a unique team name
                createTeamPayload.name = `Unique Team ${Date.now()}`;
                
                cy.request({
                    method: 'POST',
                    url: URL,
                    headers: {
                        "Content-Type": "application/json",
                        "cookie": teamToken,
                        "compid": compidValue
                    },
                    body: createTeamPayload
                }).then((response) => {
                    expect(response.status).to.eq(200); 
                    expect(response.body).to.have.property('message', 'Team created successfully');
                });
            });
        });

        describe('Update Team', () => {
            it('should successfully update the team', () => {
                const URL = `${baseURL}/teams/update/TXPR5MR5J`; // Update with the correct team ID

                cy.request({
                    method: 'PUT',
                    url: URL,
                    headers: {
                        "Content-Type": "application/json",
                        "cookie": teamToken,
                        "compid": compidValue
                    },
                    body: updateTeamPayload 
                }).then((response) => {
                    expect(response.status).to.eq(200); // Check for successful response
                });
            });
        });

        describe('Update Team Details', () => {
            it('should successfully update the team details', () => {
                const URL = `${baseURL}/teams/update/TXPR5MR5J`; // Update with the correct team ID

                cy.request({
                    method: 'PUT',
                    url: URL,
                    headers: {
                        "Content-Type": "application/json",
                        "cookie": teamToken,
                        "compid": compidValue
                    },
                    body: updateTeamDetailsPayload 
                }).then((response) => {
                    expect(response.status).to.eq(200); // Check for successful response
                });
            });
        });

        describe('Get Team by ID', () => {
            it('should retrieve a team by ID successfully', () => {
                const teamId = 'TXPR5MR5J'; // Use the correct team ID
                const URL = `${baseURL}/teams/${teamId}`; 

                cy.request({
                    method: 'GET',
                    url: URL,
                    headers: {
                        "Content-Type": "application/json",
                        "cookie": teamToken
                    }
                }).then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.body.data).to.have.property('id', teamId);
                });
            });
        });

        // Uncomment this section if you want to include the "Get All Teams" test
        /*
        describe('Get All Teams', () => {
            it('should retrieve all teams successfully', () => {
                const URL = `${baseURL}/team/?search=''`; // Ensure the URL is correct

                cy.request({
                    method: 'GET',
                    url: URL,
                    headers: {
                        "Content-Type": "application/json",
                        "cookie": teamToken
                    }
                }).then((response) => {
                    expect(response.status).to.eq(200);
                    // Additional assertions can be added here if needed
                });
            });
        });
        */
    });
});
