describe('Category', () => {
  it('should navigate to the category page', () => {
    cy.visit('http://localhost:3000/category');
  });

  it('should contain "Popular Categories" typo', () => {
    cy.contains('Popular Categories');
  });
});