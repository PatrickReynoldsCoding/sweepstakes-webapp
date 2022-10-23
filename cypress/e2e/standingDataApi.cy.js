describe('pulls standing data from the api', () => {
  it('shows', () => {
    cy.visit('http://localhost:3000/leaderboard')

    cy.contains('Qatar').should('be.visible')

  })
})