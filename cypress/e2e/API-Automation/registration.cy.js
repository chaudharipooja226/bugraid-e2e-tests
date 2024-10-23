// describe('User Registration Tests', () => {
//   it('Should register a new user successfully with a unique email', () => {
//       const registrationUrl = 'https://api-singapore.bugraid.ai/api/v1/users/register';
//       const uniqueEmail = `pooja.chaudhari+${Date.now()}@p99soft.com`;
//       const requestBody = {
//           first_name: "Pooja",
//           last_name: "Chaudhari",
//           email: uniqueEmail,
//           password: "Pooja@123",
//           company_name: "QA",
//           designation: "QA",
//           phone_no: 918938743859,
//           user_created: null, // Use null without quotes
//           teams: [],
//           role: "ADMIN",
//           is_registered: true,
//           is_verified: false,
//           status: "draft"
//       };

//       cy.request({
//           method: 'POST',
//           url: registrationUrl,
//           headers: {
//               'Content-Type': 'application/json',
              
//           },
//           body: requestBody,
//           failOnStatusCode: false 
//       }).then((response) => {
//           cy.log('Response:', response);
//           expect(response.status).to.eq(400);
//           expect(response.body.status).to.eq('SUCCESS');
//           expect(response.body.message).to.eq('User registered successfully, Check your email for verification');
//       });
//   });
// });
