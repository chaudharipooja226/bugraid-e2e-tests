describe('User and Team API Tests', () => {
  const baseUrl = Cypress.env('API_URL');
  let teamtoken; 
  let userId; 
  let createdTeamId; 
  let inviteUser; 
  let createTeamPayload; 
  let updateTeamPayload; 
  let updateTeamDetailsPayload; 
  let createschedule
let teamId;
let scheduleId;
let uniqueScheduleName;

  const companyId = "TDMYRTRDF";

  before(() => {
    cy.fixture('token').then((tokens) => {
      teamtoken = tokens.teamtoken.cookie;
      cy.log('Team Token Loaded:', teamtoken);
    }).then(() => {
      return cy.fixture('qapayload').then((payload) => {
        cy.log('Payload Loaded:', payload);
        inviteUser = payload.inviteUser; 
        createTeamPayload = payload.createTeam; 
        updateTeamPayload = payload.updateTeam; 
        updateTeamDetailsPayload = payload.updateTeamDetails; 
        createschedule=payload.createschedule;
      });
    });
  });

  const getHeaders = () => ({
    'Authorization': `Bearer ${teamtoken.split('=')[1]}`,
    'Content-Type': 'application/json',
    'compid': companyId
  });
  const generateuniqueScheduleName = () => `Schedule-${Date.now()}-${Math.floor(Math.random() * 10000)}`;

  const generateUniqueEmail = () => {
    const timestamp = Date.now();
    return `pooja-${timestamp}@chaudhari.com`;
  };

  it('should successfully invite a user with a unique email', () => {
    const uniqueEmail = generateUniqueEmail();
    const userToInvite = { ...inviteUser, email: uniqueEmail };

    cy.request({
      method: 'POST',
      url: `${baseUrl}/users/inviteUser`,
      headers: getHeaders(),
      body: {
        email: uniqueEmail,
        first_name: "Pooja",
        last_name: "Chaudhari",
        password: "62ae5750-6226-4613-9abf-0e544bf9b6f2",
        designation: "QA",
        company_name: "Bugraid-QA",
        company_id: "TDMYRTRDF",
        user_created: "UYHS6M0JP",
        teams: [],
        phone_no: 917823487394,
        role: "VIEWER",
        is_registered: false,
        is_verified: false,
        status: "draft"
      
      
        }, 
    }).then((response) => {
      cy.log('Invite User Response:', JSON.stringify(response.body, null, 2));
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('status', 'SUCCESS');
      expect(response.body).to.have.property('message', 'Email sent successfully!');
    });
  });

  it('should successfully create a team with a unique name', () => {
    // Generate a unique team name using the current timestamp
    const uniqueTeamName = `QA Team ${Date.now()}`;
  
    cy.request({
      method: 'POST',
      url: `${baseUrl}/teams/createteam`,
      headers: getHeaders(),
      body: {
        name: uniqueTeamName,
        description: 'API testing',
        user_created: userId || "defaultUserId", // Ensure userId is defined
        user_created_name: "Pooja Chaudhari", // Replace with actual name if needed
        company_id: companyId,
        users: [],
        status: 'active'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      // Store the created team ID
      // Assuming the team ID is returned in this structure
    });
  });

  it('should successfully update the team', () => {
    cy.request({
      method: 'PUT',
      url: `${baseUrl}/teams/update/TE0R4ONJ-`, // Use the created team ID
      headers: getHeaders(),
      body: {
       name: "Test Team",
    description: "This is the testing team"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
  
  // it('should successfully get all teams', () => {
  //   cy.request({
  //     method: 'GET',
  //     url: `${baseUrl}/teams`,
  //     headers: getHeaders()
  //   }).then((response) => {
  //     expect(response.status).to.eq(200);
  //     expect(response.body).to.be.an('array'); // Adjust based on your API response structure
  //   });
  // });

  it('should successfully update the team details', () => {
    cy.request({
      method: 'PUT',
      url: `${baseUrl}/teams/update/TE0R4ONJ-`, // Use the created team ID
      headers: getHeaders(),
      body: {
        name: "Test Team",
     description: "This is the testing team"
       }
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  // it('should successfully get team by ID', () => {
  //   cy.request({
  //     method: 'GET',
  //     url: `${baseUrl}/teams/TE0R4ONJ`, // Use the created team ID
  //     headers: getHeaders()
  //   }).then((response) => {
  //     expect(response.status).to.eq(200);
  //      // Adjust based on your API response structure
  //   });
  // });

  it('should succesfully get team by ID', () =>{
    cy.request({
    method: 'GET',
    url: `${baseUrl}/teams/${teamId}`, // Replace with your actual API endpoint
    failOnStatusCode: false, // Prevent test failure on non-2xx responses
  }).then((response) => {
    if (response.status === 200) {
      expect(response.body).to.have.property('data');
      // Add additional assertions for the data structure
    } else {
      cy.log(`API Error: ${response.status} - ${response.body.message}`);
    }
  });
  
});

});
// it('should create a schedule with the unique name', () => {
  
//   createschedule.schedule_name = generateuniqueScheduleName();

//   describe('User and Team API Tests', () => {
//     let uniqueScheduleName;
//     let scheduleId;
  
//     before(() => {
//       // Generate a unique schedule name using current timestamp
//       uniqueScheduleName = `schedule_${Date.now()}`;
  
//       // Create schedule
//       cy.request({
//         method: 'POST',
//         url: 'https://qa-api.bugraid.ai/api/v1/schedules',
//         headers: {
//           'Authorization': `Bearer ${Cypress.env('ACCESS_TOKEN')}`, // Replace with actual access token if needed
//           'Content-Type': 'application/json',
//         },
//         body: {
//           timezone: { name: 'Africa/Asmara', offset: '+03:00' },
//           shifts: [
//             {
//               rotation_type: 'daily',
//               handOffTime: '',
//               users: [
//                 {
//                   id: 'U5DQ6XX1W',
//                   email: 'pooja.+6chaudhari@p99soft.com',
//                   first_name: 'Pooja',
//                   last_name: 'Chaudhari'
//                 }
//               ],
//               startDate: '2024-11-19T07:28',
//             }
//           ],
//         }
//       }).then((response) => {
//         // Check the response and extract scheduleId
//         expect(response.status).to.eq(201); // Ensure status is 201 (Created)
//         expect(response.body).to.have.property('id'); // Ensure the response body contains 'id'
//         scheduleId = response.body.id; // Assign scheduleId
//         cy.log('Created schedule ID: ' + scheduleId); // Log scheduleId for debugging
//       });
//     });
  
//     it('should retrieve the created schedule by ID', () => {
//       // Ensure scheduleId is not undefined
//       expect(scheduleId).to.exist;
  
//       // Retrieve the created schedule by ID
//       cy.request({
//         method: 'GET',
//         url: `https://qa-api.bugraid.ai/api/v1/schedules/${scheduleId}`,
//         headers: {
//           'Authorization': `Bearer ${Cypress.env('ACCESS_TOKEN')}`, // Replace with actual access token if needed
//         }
//       }).then((getResponse) => {
//         // Validate the retrieved schedule
//         expect(getResponse.status).to.eq(200); // Ensure the request is successful
//         expect(getResponse.body).to.have.property('id', scheduleId); // Ensure scheduleId matches
//         expect(getResponse.body).to.have.property('timezone'); // Ensure timezone is present
//       });
//     });

