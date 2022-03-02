describe('Home', () => {
  it('should navigate to the home page', () => {
    cy.visit('http://localhost:3000/home');
  });

  it('should click connected button', () => {
    cy.get('#web3Button').click();
  });
});