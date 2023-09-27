describe('Can login', () => {
  it('allows logging into the website', () => {
    cy.visit('https://pods2d.ddev.site/user/login')

    cy.get('input\[name=name\]').type('admin');
    cy.get('input\[name=pass\]').type('admin{enter}');

    cy.url().should('include', '/user/1');
    cy.get('h1').should('contain', 'admin');
  })
})
