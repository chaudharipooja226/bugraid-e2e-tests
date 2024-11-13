import SlackPage from '../../support/PageObject/SlackPage';



// describe('Slack Integration ', () => {
//     beforeEach(() => {
//         // Call the custom login command
//         cy.login();
//     });

    // it('should Integrate slack with Service', () => {
    //      // Generates a unique service name
    //     const webhookURL = 'https://bugraidai.slack.com';
    //     const email = 'pooja.chaudhari@p99soft.com';
    //     const otpEmailLogin = 'pooja.chaudhari@p99soft.com';
    //     const otpEmailPassword = 'dhanu@1101991';


    //     // Steps for service creation
    //     SlackPage.navigateToServiceTab();
    //     SlackPage.clickviewbutton();
    //     SlackPage.clickIntegration();
    //     SlackPage.clickopenslackdetails();
    //     SlackPage.clickhere();



       
    // });
    // it('should Integrate Slack with Service', () => {
    //     // Variables for integration details
    
    //     SlackPage.navigateToServiceTab();
    //     SlackPage.clickviewbutton();
    //     SlackPage.clickIntegration();
    //     SlackPage.clickopenslackdetails();
    
    //     // Step 2: Click on the link to open Slack details and set up webhook
    //     SlackPage.clickhere();
    
    //     // Step 3: Enter Webhook URL and proceed
    //     cy.get('[data-testid="webhook-input"]').type(webhookURL); // Adjust selector as needed
    //     cy.get('[data-testid="continue-button"]').click();
    
       
    //     cy.get('[data-testid="email-input"]').type(email);
    //     cy.get('[data-testid="sign-in-button"]').click();
    
       
    //     cy.task('getOTP', { login: otpEmailLogin, password: otpEmailPassword }).then((otp) => {
    //          cy.get('[data-testid="otp-input"]').type(otp);
    //         cy.get('[data-testid="confirm-button"]').click();
    //     });
    // });
    
       
    // });
