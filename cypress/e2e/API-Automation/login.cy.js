describe('User API Tests', () => {
    const baseUrl = Cypress.env('API_URL'); // Base URL from environment variables
    let accessToken; // Variable to store the access token
    let loginPayload; // Valid login payload
    let invalidLoginPayload; // Invalid login payload
    let logintoken; // Variable to hold login token

    before(() => {
        // Load the login token from fixture
        cy.fixture('token').then((tokens) => {
            logintoken = tokens.logintoken.cookie; // Load the login token
            cy.log('Login Token Loaded:', logintoken); // Log the loaded token
        });

        // Load the login payloads from fixture
        cy.fixture('qapayload').then((payload) => {
            loginPayload = payload.loginPayload; // Valid login credentials
            invalidLoginPayload = payload.invalidLoginPayload; // Invalid login credentials
        });
    });

    it('should login successfully with valid credentials', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/users/login`,
            body:  {
                email: 'pooja.chaudhari@p99soft.com', // Invalid email
            password: 'Pooja@1234'}, // Using valid credentials from fixture
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            cy.log('Login Response:', JSON.stringify(response.body, null, 2));
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('status', 'SUCCESS');
            expect(response.body).to.have.property('response');

            // Store access token for later use
            accessToken = response.body.response.accessToken;
            cy.log('Access Token:', accessToken);
        });
    });

    it('should fail to login with invalid email', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/users/login`,
            body: {
                email: 'pooja.chaudhari+122@p99soft.com', // Invalid email
            password: 'Pooja@1234'},
            headers: {
                'Content-Type': 'application/json',
            },
            failOnStatusCode: false, // Allow Cypress to capture 4xx or 5xx errors
        }).then((response) => {
            cy.log('Invalid Email Response:', JSON.stringify(response.body, null, 2));
            expect(response.status).to.eq(400); // Verify the response status code
            expect(response.body).to.have.property('status', 'ERROR'); // Adjust if needed
        });
    });

    it('should fail to login with invalid password', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/users/login`,
            body: {
                email: 'pooja.chaudhari@p99soft.com', // Invalid email
            password: 'Pooja@4'},
            headers: {
                'Content-Type': 'application/json',
            },
            failOnStatusCode: false, // Allow Cypress to capture 4xx or 5xx errors
        }).then((response) => {
            cy.log('Invalid Password Response:', JSON.stringify(response.body, null, 2));
            expect(response.status).to.eq(400); // Verify the response status code
            expect(response.body).to.have.property('status', 'ERROR'); // Adjust if needed
        });
    });

    it('should fail to login with empty credentials', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/users/login`,
            body: {
                email: '', // Empty email
                password: '', // Empty password
            },
            headers: {
                'Content-Type': 'application/json',
            },
            failOnStatusCode: false, // Allow Cypress to capture 4xx or 5xx errors
        }).then((response) => {
            cy.log('Empty Credentials Response:', JSON.stringify(response.body, null, 2));
            expect(response.status).to.eq(400); // Verify the response status code
            expect(response.body).to.have.property('status', 'ERROR'); // Verify the error status
        });
    });
});
