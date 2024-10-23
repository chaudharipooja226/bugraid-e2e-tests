describe('User and Team API Tests', () => {
  const baseUrl = Cypress.env('API_URL');
  let teamtoken; 
  let userId; 
  let createdTeamId; 
  let inviteUser; 
  let createTeamPayload; 
  let updateTeamPayload; 
  let updateTeamDetailsPayload; 

  const companyId = "TICFD0S2V";

  before(() => {
    cy.fixture('token').then((tokens) => {
      teamtoken = tokens.teamtoken.cookie;
      cy.log('Team Token Loaded:', teamtoken);
    }).then(() => {
      return cy.fixture('devpayload').then((payload) => {
        cy.log('Payload Loaded:', payload);
        inviteUser = payload.inviteUser; 
        createTeamPayload = payload.createTeam; 
        updateTeamPayload = payload.updateTeam; 
        updateTeamDetailsPayload = payload.updateTeamDetails; 
      });
    });
  });

  const getHeaders = () => ({
    'Authorization': `Bearer ${teamtoken.split('=')[1]}`,
    'Content-Type': 'application/json',
    'compid': companyId
  });

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
      body: userToInvite
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
      url: `${baseUrl}/teams/update/TKQSFQCCK`, // Use the created team ID
      headers: getHeaders(),
      body: {
        name: 'Updated Test Team',
        description: 'Updated description'
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
      url: `${baseUrl}/teams/update/TKQSFQCCK`, // Use the created team ID
      headers: getHeaders(),
      body: updateTeamDetailsPayload
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('should successfully get team by ID', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/teams/TKQSFQCCK`, // Use the created team ID
      headers: getHeaders()
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('data'); // Adjust based on your API response structure
    });
  });

});
