// describe('Slack API Tests', () => {
//     const baseURL = 'https://api-singapore.bugraid.ai';
//     const oauthToken = ''; 

//     it('should test the /api/v1/slack/commands endpoint', () => {
//         cy.request({
//             method: 'POST',
//             url: `${baseURL}/slack/commands`,
//             headers: {
//                 'Authorization': `Bearer ${oauthToken}`,
//                 'Content-Type': 'application/json'
//             },
//             body: {
//                 command: '/dev_resolve_incident',
//                 text: 'Your text',
//                 user_id: 'U07HHFCDKKJ'
//             }
//         }).then((response) => {
//             expect(response.status).to.eq(200); 
            
//         });
//     });

//     it('should test the /api/v1/slack/oauth_redirect endpoint', () => {
//         cy.request({
//             method: 'GET',
//             url: `${baseURL}/slack/oauth_redirect?code=YOUR_CODE`,
//             headers: {
//                 'Authorization': `Bearer ${oauthToken}`
//             }
//         }).then((response) => {
//             expect(response.status).to.eq(200);
            
//         });
//     });

//     it('should test the /api/v1/slack/interactivity endpoint', () => {
//         cy.request({
//             method: 'POST',
//             url: `${baseURL}/slack/interactivity`,
//             headers: {
//                 'Authorization': `Bearer ${oauthToken}`,
//                 'Content-Type': 'application/json'
//             },
//             body: {
//                 type: 'block_actions',
//                 actions: [
//                     {
//                         action_id: 'button_click',
//                         block_id: 'block_1',
//                         value: 'value_1',
//                         user: {
//                             id: 'U07HHFCDKKJ'
//                         }
//                     }
//                 ]
//             }
//         }).then((response) => {
//             expect(response.status).to.eq(200);
          
//         });
//     });

//     it('should test the /api/v1/slack/events endpoint', () => {
//         cy.request({
//             method: 'POST',
//             url: `${baseURL}/slack/events`,
//             headers: {
//                 'Authorization': `Bearer ${oauthToken}`,
//                 'Content-Type': 'application/json'
//             },
//             body: {
//                 token: 'YOUR_VERIFICATION_TOKEN',
//                 team_id: 'T12345678',
//                 api_app_id: 'A12345678',
//                 event: {
//                     type: 'app_mention',
//                     user: 'U07HHFCDKKJ',
//                     text: '<@U12345678> Hello!',
//                     ts: '1611234567.000100',
//                     channel: '',
//                     event_ts: '1611234567.000100'
//                 }
//             }
//         }).then((response) => {
//             expect(response.status).to.eq(200);
            
//         });
//     });

//     it('should test the /api/incidents endpoint', () => {
//         cy.request({
//             method: 'GET', 
//             url: `${baseURL}/api/incidents`,
//             headers: {
//                 'Authorization': `Bearer ${oauthToken}`
//             }
//         }).then((response) => {
//             expect(response.status).to.eq(200);
            
//         });
//     });
// });
// // '/api/v1/slack/commands'
// // '/api/v1/slack/oauth_redirect'
// // '/api/v1/slack/interactivity'
// // '/api/v1/slack/events'
// // '/api/incidents'