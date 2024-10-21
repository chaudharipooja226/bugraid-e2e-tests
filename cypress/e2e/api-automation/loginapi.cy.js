// describe('Login API Test', () => {
//   const apiUrl = 'https://qa-api.bugraid.ai/api/v1/users/login'; 
  
  

 
//   it('should log in a user with valid credentials', () => {
//     const payload = {
//     email: 'pooja.chaudhari@p99soft.com', 
//     password: 'Pooja@1234' 
//   }
//     cy.request({
//       method: 'POST',
//       url: apiUrl,
//       body: payload,
//     }).then((response) => {
//       expect(response.status).to.eq(200); 

     
//       expect(response.body).to.have.property('status', 'SUCCESS');

    
//       const userResponse = response.body.response;
//       expect(userResponse).to.have.property('is_registered', true);
//       expect(userResponse).to.have.property('status', 'active');
//       expect(userResponse).to.have.property('role', 'ADMIN');
//       });
//   });
  

//   // Test for logging in 10 times
//   it('should log in a user with valid credentials 10 times', () => {
    
//   const payload = {
//     email: 'dharmnath.shinde@p99soft.com', 
//     password: 'Suraj@7888' 
//   }
//     // Create an array of requests to the API
//     const requests = Array.from({ length: 10 }, () => {
//       return cy.request({
//         method: 'POST',
//         url: apiUrl,
//         body: payload,
        
//       });
//     });

//     // Promise.all to handle all requests
//     Cypress.Promise.all(requests).then((responses) => {
//       responses.forEach((response, index) => {
//         expect(response.status).to.eq(200); 
//         expect(response.body).to.have.property('status', 'SUCCESS');
        
//         // Check the response object
       
//  const userResponse = response.body.response;
//         expect(userResponse).to.have.property('is_registered', true);
//         expect(userResponse).to.have.property('status', 'active');
//         expect(userResponse).to.have.property('role', 'ADMIN');
//       });
//     });
//   });
//   // it('should not log in a user with invalid credentials', () => {
//   //   const invalidCredentials = {
//   //     email: 'pooja.chau@p99soft.com',
//   //     password: 'pooja'
//   //   };

//   //   cy.request({
//   //     method: 'POST',
//   //     url: apiUrl,
//   //     body: invalidCredentials,
    
//   //   }).then((response) => {
//   //     expect(response.status).to.eq(200);
//   //     expect(response.body).to.have.property('error', 'Invalid credentials');
//   //   });
//   // });
//   // it('should log in 10 different users with valid credentials', () => {
//   //   // Array of different user credentials
//   //   const users = [
//   //     { email: 'dharmnath.shinde@p99soft.com', password: 'Suraj@7888' },
//   //     { email: 'ritambra.yadav@p99soft.com', password: 'Ritambra@2117' },
//   //      { email: 'pooja.chaudhari@p99soft.com', password: 'Pooja@123' },
//   //     // { email: 'user5@example.com', password: 'Password5' },
//   //     // { email: 'user6@example.com', password: 'Password6' },
//   //     // { email: 'user7@example.com', password: 'Password7' },
//   //     // { email: 'user8@example.com', password: 'Password8' },
//   //     // { email: 'user9@example.com', password: 'Password9' },
      
//   //   ];
  
    
//   //   const requests = users.map((user) => {
//   //     return cy.request({
//   //       method: 'POST',
//   //       url: apiUrl,
//   //       body: user,
//   //     });
//   //   });
  
//   //   // Promise.all to handle all requests
//   //   Cypress.Promise.all(requests).then((responses) => {
//   //     responses.forEach((response, index) => {
//   //       // Validate the response for each user
//   //       expect(response.status).to.eq(200);
//   //       expect(response.body).to.have.property('status', 'SUCCESS');
  
//   //       // Check the response object
//   //       const userResponse = response.body.response;
//   //       expect(userResponse).to.have.property('is_registered', true);
//   //       expect(userResponse).to.have.property('status', 'active');
//   //       expect(userResponse).to.have.property('role', 'ADMIN');
//   //     });
//   //   });
//   });
  
 


describe('Login API Test', () => {
  const apiUrl = 'https://qa-api.bugraid.ai/api/v1/users/login'; 

  // Function to validate the login response
  const validateLoginResponse = (response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('status', 'SUCCESS');
    
    const userResponse = response.body.response;
    expect(userResponse).to.have.property('is_registered', true);
    expect(userResponse).to.have.property('status', 'active');
    expect(userResponse).to.have.property('role', 'ADMIN');
  };

  it('should log in a user with valid credentials', () => {
    const payload = {
      email: 'pooja.chaudhari@p99soft.com', 
      password: 'Pooja@1234' 
    };
    
    cy.request({
      method: 'POST',
      url: apiUrl,
      body: payload,
    }).then(validateLoginResponse);
  });

  // Test for logging in 10 times with the same credentials
  it('should log in a user with valid credentials 10 times', () => {
    const payload = {
      email: 'dharmnath.shinde@p99soft.com', 
      password: 'Suraj@7888' 
    };

    // Create an array of requests to the API
    const requests = Array.from({ length: 10 }, () => {
      return cy.request({
        method: 'POST',
        url: apiUrl,
        body: payload,
      });
    });

    // Promise.all to handle all requests
    Cypress.Promise.all(requests).then((responses) => {
      responses.forEach(validateLoginResponse);
    });
  });

  // Test for logging in with invalid credentials
//   it('should not log in a user with invalid credentials', () => {
//     const invalidCredentials = {
//       email: 'pooja.chau@p99soft.com',
//       password: 'pooja'
//     };

//     cy.request({
//       method: 'POST',
//       url: apiUrl,
//       body: invalidCredentials,
//       failOnStatusCode: false, // Prevent failing on 4xx or 5xx responses
//     }).then((response) => {
//       expect(response.status).to.eq(400); // Adjust based on your API's error handling
//       expect(response.body).to.have.property('error', 'Invalid credentials'); // Adjust as needed
//     });
//   });

//   // Test for logging in with multiple users
//   it('should log in different users with valid credentials', () => {
//     const users = [
//       { email: 'dharmnath.shinde@p99soft.com', password: 'Suraj@7888' },
//       { email: 'ritambra.yadav@p99soft.com', password: 'Ritambra@2117' },
//       { email: 'pooja.chaudhari@p99soft.com', password: 'Pooja@123' },
//       // Add more user credentials as needed
//     ];

//     const requests = users.map((user) => {
//       return cy.request({
//         method: 'POST',
//         url: apiUrl,
//         body: user,
//       });
//     });

//     // Promise.all to handle all requests
//     Cypress.Promise.all(requests).then((responses) => {
//       responses.forEach(validateLoginResponse);
//     });
//   });
});



     