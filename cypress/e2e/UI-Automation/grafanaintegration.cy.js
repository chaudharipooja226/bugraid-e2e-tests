// // describe('Integrate Grafana with the Application', () => {
//     import SlackPage from '../../support/PageObject/SlackPage';
  
//     it('should integrate Grafana for alert notifications', () => {
//         cy.login();
        
//         SlackPage.navigateToServiceTab();
//         SlackPage.clickviewbutton();
//         SlackPage.clickIntegration();
//         SlackPage.clickopenslackdetails();
//         cy.get("path[d='M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z']").click({force: true})
//     });
    
  

// describe('Integrate Grafana with the Application', () => {
//    describe('Grafana Integration Tests', () => {
//         it('should log in to Grafana and configure a webhook', () => {
//         cy.visit('http://grafana.bugraid.ai/login');
//         cy.get('input[data-testid="data-testid Username input field"]').type('admin', { force: true });
//         cy.get('input[data-testid="data-testid Password input field"]').type('prom-operator', { force: true });
//         cy.get('button.css-1b7vft8-button[type="submit"][data-testid="data-testid Login button"]').click();
//         cy.wait(2000);
//         cy.get("path[d='M3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z']") .click();
//         cy.get(':nth-child(5) > .css-njbp03 > .css-s36ff2 > .css-2jmhat > [data-testid="data-testid Nav menu item"] > .css-fdcm0z > .css-1go40k3 > .css-uantyg')  .click();
//         cy.get(':nth-child(3) > .css-jprp5p > .css-14ayxrz').click();
//         cy.get('.css-td06pi-button > .css-1riaxdn').click();
//         cy.get('input[name="name"]') .type('new234');
//         cy.get('.css-1nmqu8c-input-wrapper') .should('be.visible') .click({ force: true }); // Click the dropdown
//         cy.get('.css-1nmqu8c-input-wrapper input').first().type('web')
//         cy.get('#react-select-6-option-20 > .css-1nm1mhl-grafana-select-option-body > span').click();
//         cy.get('input[name="items.0.settings.url"]').click().type('https://qa-api.bugraid.ai/api/v1/integration/service-alerts/grafana/TCIQKOJO/qgJxbtIJ');
//         cy.get('.css-1vzm4al > :nth-child(1) > .css-1riaxdn').click();
//         cy.get('.css-18y4qyh > .css-td06pi-button > .css-1riaxdn').click();
        
//         });

// });
    

//             // Optional Step: Return to the main application and verify changes
//             // it('Should return to the main application', () => {
//             //     cy.visit(Cypress.env('BASE_URL'));
//             //     cy.reload();
//             //     cy.get('your-element-selector').should('contain', 'Expected Value');
//             // });
//     //    });
// //     describe('Integrate Grafana with the Application', () => {
// //         let copiedUrl; // Declare a variable to hold the copied URL
    
//         // describe('Grafana Webhook Integration', () => {
//         //     it('should integrate Grafana webhook for alert notifications', () => {
//         //         cy.login(); // Assume you have a custom login command
    
//         //         // Navigation and URL copying
//         //         cy.get(':nth-child(7) > a > .MuiButtonBase-root').click();
//         //         cy.wait(10000);
//         //         cy.get(':nth-child(1) > .MuiListItem-root > .MuiListItemText-root > .MuiListItemText-primary > .css-1bntj9o > .css-1h6mny2 > .css-1b3p7z8').click();
//         //         cy.get('.mb-10 > :nth-child(2) > .text-primary').click();
//         //         cy.get(':nth-child(2) > .MuiGrid-container > :nth-child(1) > .MuiPaper-root > .css-1hw29i9 > .MuiButtonBase-root').click();
    
//         //         // Assuming you are interacting with an input field to get the URL
//         //         cy.get("path[d='M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z']")
//         //             .click({ force: true })
//         //             .invoke('val') // Get the value if it's an input
//         //             .then((url) => {
//         //                 // Log the extracted URL
//         //                 cy.log('Extracted URL: ' + url); // Log the URL directly
//         //                 copiedUrl = url; // Save the copied URL into the variable
//         //                 expect(copiedUrl).to.exist; // Assert that copiedUrl is not undefined
//         //             });
//         //     });
// //             it('should log in to Grafana and configure a webhook', () => {
// //                 // Visit Grafana login page
// //                 cy.visit('http://grafana.bugraid.ai/login');
    
// //                 // Login into Grafana
// //                 cy.get('input[data-testid="data-testid Username input field"]').type('admin', { force: true });
// //                 cy.get('input[data-testid="data-testid Password input field"]').type('prom-operator', { force: true });
// //                 cy.get('button.css-1b7vft8-button[type="submit"][data-testid="data-testid Login button"]').click();
// //                 cy.wait(2000);
    
// //                 // Navigate to webhook configuration
// //                 cy.get("path[d='M3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z']")
// //                     .click();
// //                 cy.get(':nth-child(5) > .css-njbp03 > .css-s36ff2 > .css-2jmhat > [data-testid="data-testid Nav menu item"] > .css-fdcm0z > .css-1go40k3 > .css-uantyg')
// //                     .click();
// //                 cy.get(':nth-child(3) > .css-jprp5p > .css-14ayxrz').click();
// //                 cy.get('.css-td06pi-button > .css-1riaxdn').click();
// //                 cy.get('input[name="name"]').type('new234');
    
// //                 // Clicking the dropdown for selection
// //                 cy.get('.css-1nmqu8c-input-wrapper', { timeout: 10000 }).should('be.visible').click({ force: true });
// //                 cy.get('.css-1nmqu8c-input-wrapper input').first().type('web');
// //                 cy.get('#react-select-6-option-20 > .css-1nm1mhl-grafana-select-option-body > span').click();
    
// //                 // Ensure copiedUrl is defined before using it
// //                 cy.log('Attempting to use copiedUrl: ' + copiedUrl); // Log the URL before using it
// //             if (copiedUrl) {
// //                 cy.get('input[name="items.0.settings.url"]')
// //                     .invoke('val', copiedUrl) // Set the value of the input directly
// //                     .trigger('change'); // Trigger the change event if necessary

// //                 // Verify the URL is entered correctly
// //                 cy.get('input[name="items.0.settings.url"]').should('have.value', copiedUrl);
// //             } else {
// //                 throw new Error('copiedUrl is undefined or null'); // More descriptive error
// //             }
// //         });
// //     });

// });