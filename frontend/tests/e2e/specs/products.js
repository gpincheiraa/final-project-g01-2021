describe('products test suite', () => {
  it('shows a list of products', () => {
    cy.visit('/')

    cy.get('[data-cy=username]').type('test-e2e@boolean.cl')
    cy.get('[data-cy=password]').type('booleanacademia')
    cy.get('[data-cy=login-btn]').click()

    cy.fixture('products.json')
      .then((products) => {
        cy.get('[data-cy="product-item"]').should('have.length', products.length)
      })
  })
})
