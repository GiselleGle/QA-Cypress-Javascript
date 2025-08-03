describe('Page Load Validation for https://creai.mx', () => {
  const baseUrl = 'https://creai.mx'

  it('Should return HTTP 200', () => {
    cy.request(baseUrl).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('Should not show console errors on load', () => {
    cy.visit(baseUrl, {
      onBeforeLoad(win) {
        cy.spy(win.console, 'error').as('consoleError')
      }
    })

    cy.get('@consoleError').should('not.be.called')
  })
})