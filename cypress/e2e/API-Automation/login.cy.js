describe('User API Tests', () => {
    const baseUrl = Cypress.env('API_URL');
  let accessToken; 
  let loginPayload; 
  let invalidLoginPayload; 
  let logintoken; // Variable to hold invalid login payload

  before(() => {
      // Load the incident token and payload before all tests
      cy.fixture('token').then((tokens) => {
        logintoken = tokens.logintoken.cookie; 
          cy.log('login Token Loaded:', logintoken); // Log the loaded token
      });
      // Load valid login payload from fixture
      cy.fixture('devpayload').then((payload) => {
          loginPayload = payload.loginPayload; // Valid login credentials
          invalidLoginPayload = payload.invalidLoginPayload; // Invalid login credentials
      });
  });

  it('should login successfully with valid credentials', () => {
      cy.request({
          method: 'POST',
          url: `${baseUrl}/users/login`,
          body: loginPayload,
          headers: {
              'Content-Type': 'application/json'
          }
      }).then((response) => {
          cy.log('Login Response:', JSON.stringify(response.body, null, 2));
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('status', 'SUCCESS');
          expect(response.body).to.have.property('response');

          // Store access token from response for later use
          accessToken = response.body.response.accessToken; // Adjust based on your actual response structure
          cy.log('Access Token:', accessToken);
      });
  });

  it('should fail to login with invalid email', () => {
      cy.request({
          method: 'POST',
          url: `${baseUrl}/users/login`,
          body: {
              email: 'invalid.email@example.com', // Invalid email
              password: loginPayload.password
          },
          headers: {
              'Content-Type': 'application/json'
          },
          failOnStatusCode: false // Prevent Cypress from failing the test on 4xx or 5xx status
      }).then((response) => {
          cy.log('Invalid Email Response:', JSON.stringify(response.body, null, 2));
          expect(response.status).to.eq(400); // Adjust based on expected status code
         
      });
  });

  it('should fail to login with invalid password', () => {
      cy.request({
          method: 'POST',
          url: `${baseUrl}/users/login`,
          body: {
              email: loginPayload.email,
              password: 'wrongPassword' // Invalid password
          },
          headers: {
              'Content-Type': 'application/json'
          },
          failOnStatusCode: false // Prevent Cypress from failing the test on 4xx or 5xx status
      }).then((response) => {
          cy.log('Invalid Password Response:', JSON.stringify(response.body, null, 2));
          expect(response.status).to.eq(400); // Adjust based on expected status code
         
      });
  });

  it('should fail to login with empty credentials', () => {
      cy.request({
          method: 'POST',
          url: `${baseUrl}/users/login`,
          body: {
              email: '',
              password: ''
          },
          headers: {
              'Content-Type': 'application/json'
          },
          failOnStatusCode: false // Prevent Cypress from failing the test on 4xx or 5xx status
      }).then((response) => {
          cy.log('Empty Credentials Response:', JSON.stringify(response.body, null, 2));
          expect(response.status).to.eq(400); // Adjust based on expected status code
          expect(response.body).to.have.property('status', 'ERROR');
          
      });
  });
});
