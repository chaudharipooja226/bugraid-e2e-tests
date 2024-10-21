describe('Register API Test', () => {
    const apiUrl = 'https://qa-api.bugraid.ai/api/v1/users/register'; 
    const payload = {
      
  first_name: "Pooja",
    last_name: "Chaudhari",
    email: "pooja.chaudhari8197@p99soft.com",
    password: "Pooja@3456",
    company_name: "P99.com",
    designation: "Incident solution",
    phone_no: 17289472389,
    user_created: "null",
    teams: [],
    role: "ADMIN",
    is_registered: true,
    is_verified: false,
    status: "draft"
        
    };
  
    
    it('should register with valid credentials', () => {
      cy.request({
        method: 'POST',
        url: apiUrl,
        body: payload,
      }).then((response) => {
        expect(response.status).to.eq(200); 
  
        
        expect(response.body).to.have.property('status', 'SUCCESS');
  
       
        
        });
    });
    
  
});