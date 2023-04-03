describe('Login Page', () => {
    it('Valid Email Input', () => {
      cy.visit('https://z3t0c9.csb.app/');
      cy.get('input[type="email"]').type('test@test.com');
      cy.get('button[type="submit"]').click();
    });
  
    it('Invalid Email Input', () => {
      cy.visit('https://z3t0c9.csb.app/');
      cy.get('input[type="email"]').type('test');
      cy.get('button[type="submit"]').should('be.disabled');
      cy.contains('Please enter a valid email address');
    });
  
    it('Password Input Validation', () => {
      cy.visit('https://z3t0c9.csb.app/');
      cy.get('input[type="password"]').should('have.attr', 'type', 'password');
    });
  
    it('Submit Button Click Validation', () => {
      cy.visit('https://z3t0c9.csb.app/');
      cy.get('input[type="email"]').type('test@test.com');
      cy.get('input[type="password"]').type('test123');
      cy.get('button[type="submit"]').click();
      cy.url().should('include', '/dashboard');
    });
  });
  