describe('Verify the empty messages notification text', () => {
  before(() => {
    cy.ignoreUncaughtException()
    cy.log(new Date().toLocaleString())
    cy.loginToApplication()
    /* Please disconnect any device if it is asked by webapp and then continue the run from Calls tab!
    If window with disconnect is not appear please continue test run. */
  })

  it('Should display the empty messages notification text', () => {
    cy.intercept('GET', '/mobile/v4/retrieve-threads?&limit=50', []).as('get')
    cy.visit('https://phone.onoff.app/messages')
    cy.wait('@get')
    cy.getByData('page-empty-state-title').contains('It’s so empty here...').should('be.visible')
    cy.getByData('page-empty-state-description').contains('Why not try texting someone?').should('be.visible')
  })
})
