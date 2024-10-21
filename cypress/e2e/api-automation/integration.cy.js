// context('Integration APIs', () => {
//     const baseURL = Cypress.env('apiBaseUrl');
//    let incidentToken;
//    let newrelicPayload;
//    let pagerdutypayload;
//    let grafanapayload;
//    let awspayload;
  

//    before(() => {
//        // Load tokens and payloads from the fixtures
//        cy.fixture('token').then((data) => {
//            incidentToken = data.incident.cookie; 
//        });
//        cy.fixture('qapayload').then((data) => {
           
//            newrelicPayload = data.newrelicpayload;
//            pagerdutypayload = data.pagerdutypayload;
//            grafanapayload = data.grafanapayload;
//            awspayload = data.awspayload;
           
//        });
//    });
//     describe('Create incident from New Relic', () => {
//         it('should create an incident successfully', () => {
//             const incidentKey = 'NN5LQFJ1'; // Example incident key
//             const URL = `${baseURL}/integration/service-alerts/newrelic/I1U-QP_P/P8UrjKo_`;
        
//             cy.request({
//                 method: 'POST',
//                 url: URL,
//                 headers: {
//                     "Content-Type": "application/json",
//                     "cookie": incidentToken 
//                 },
//                 body: newrelicPayload, // Use the payload from the fixture
//             }).then((response) => {
//                 expect(response.status).to.eq(200); 
//                 expect(response.body).to.have.property('message', 'OK'); // Check for the message instead
//             });
//         });
//     });

//     describe('Create incident from Grafana', () => {
//         it('should create an incident successfully', () => {
//             const URL = `${baseURL}/integration/service-alerts/grafana/I1U-QP_P/a1l6Y0u-`; // Adjust the URL as needed

//             cy.request({
//                 method: 'POST',
//                 url: URL,
//                 headers: {
//                     "Content-Type": "application/json",
//                     "cookie": incidentToken 
//                 },
//                 body: grafanapayload, 
//             }).then((response) => {
//                 console.log(response.body); 
//                 expect(response.status).to.eq(200); 
//                 expect(response.body).to.have.property('message', 'OK'); // Adjust based on the expected response structure
//             });
//         });
//     });

//     describe('Create incident from AWS', () => {
//         it('should create an incident successfully', () => {
//             const URL = `${baseURL}/integration/service-alerts/cloudwatch/I1U-QP_P/Mvy7baPo`; // Adjust the URL as needed
            
//             cy.request({
//                 method: 'POST',
//                 url: URL,
//                 headers: {
//                     "Content-Type": "application/json",
//                     "cookie": incidentToken 
//                 },
//                 body: awspayload, 
//             }).then((response) => {
//                 console.log(response.body); 
//                 expect(response.status).to.eq(200); 
//                 expect(response.body).to.have.property('message', 'OK'); // Adjust based on the expected response structure
//             });
//         });
//     });

//     describe('Create incident from PagerDuty', () => {
//         it('should create an incident successfully', () => {
//             const URL = `${baseURL}/integration/service-alerts/pagerduty/I1U-QP_P/xzKRFBhl`; // Adjust the URL as needed

//             cy.request({
//                 method: 'POST',
//                 url: URL,
//                 headers: {
//                     "Content-Type": "application/json",
//                     "cookie": incidentToken 
//                 },
//                 body: pagerdutypayload, 
//             }).then((response) => {
//                 console.log(response.body);
//                 expect(response.status).to.eq(200); 
//                 expect(response.body).to.have.property('message', 'OK'); 
// });         });
// });
// });
context('Integration APIs', () => {
    const baseURL = Cypress.env('apiBaseUrl');
    let incidentToken;
    let newrelicPayload;
    let pagerdutypayload;
    let grafanapayload;
    let awspayload;

    before(() => {
        // Load tokens and payloads from the fixtures
        cy.fixture('token').then((data) => {
            incidentToken = data.incident.cookie; 
        });
        cy.fixture('qapayload').then((data) => {
            newrelicPayload = data.newrelicpayload;
            pagerdutypayload = data.pagerdutypayload;
            grafanapayload = data.grafanapayload;
            awspayload = data.awspayload;
        });
    });

    // Helper function to send requests and validate responses
    const createIncident = (integrationType, url, payload) => {
        cy.request({
            method: 'POST',
            url: url,
            headers: {
                "Content-Type": "application/json",
                "cookie": incidentToken 
            },
            body: payload,
        }).then((response) => {
            // Log the response for debugging
            console.log(`${integrationType} Response:`, response.body);
            
            // Assert the status and message
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('message', 'OK'); // Adjust based on expected response
        });
    };

    describe('Create Incidents', () => {
        context('From New Relic', () => {
            it('should create an incident successfully', () => {
                const url = `${baseURL}/integration/service-alerts/newrelic/I1U-QP_P/P8UrjKo_`;
                createIncident('New Relic', url, newrelicPayload);
            });
        });

        context('From Grafana', () => {
            it('should create an incident successfully', () => {
                const url = `${baseURL}/integration/service-alerts/grafana/I1U-QP_P/a1l6Y0u-`;
                createIncident('Grafana', url, grafanapayload);
            });
        });

        context('From AWS', () => {
            it('should create an incident successfully', () => {
                const url = `${baseURL}/integration/service-alerts/cloudwatch/I1U-QP_P/Mvy7baPo`;
                createIncident('AWS', url, awspayload);
            });
        });

        context('From PagerDuty', () => {
            it('should create an incident successfully', () => {
                const url = `${baseURL}/integration/service-alerts/pagerduty/I1U-QP_P/xzKRFBhl`;
                createIncident('PagerDuty', url, pagerdutypayload);
            });
        });
    });
});
