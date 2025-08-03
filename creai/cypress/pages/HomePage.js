export class HomePage {
  visit() {
    cy.visit('/');
  }

  validateConsoleErrors() {
    cy.window().then(win => {
      cy.spy(win.console, 'error').as('consoleError');
    });
    cy.get('@consoleError').should('not.be.called');
  }

  waitForPageLoad() {
    cy.wait(3000);
  }

  acceptCookies() {
  cy.get('button').contains('Allow all').click({ force: true });
  }

  logoIsVisible() {
     cy.get('.navbar11_component.w-nav', { timeout: 10000 }).should('have.css', 'opacity', '1')
    cy.get('.navbar11_logo').should('be.visible');
  }

  contactButtonExists() {
    cy.contains('a, button', /Contacto|Contact us|Contactar/i).should('exist');
  }

  verifyVisibleSectionsCount(min = 3) {
    cy.get('main section, main div[class*="service"], main div[class*="section"]')
      .filter(':visible')
      .should('have.length.gte', min);
  }

  clickMenuItem(menuText) {
  cy.get('nav a').contains(menuText).click();
  }

  verifyCurrentUrl(expectedUrl) {
  cy.url().should('include', expectedUrl);
  }

}