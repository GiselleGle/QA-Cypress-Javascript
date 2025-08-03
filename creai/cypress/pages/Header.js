export class Header {
  verifyLogoIsVisible() {
    cy.get('header img[alt="CREAI"]').should('be.visible');
  }

  clickMenuItem(itemText) {
    cy.get('header nav a').contains(itemText).click();
  }

  verifyMenuItemExists(itemText) {
    cy.get('header nav a').contains(itemText).should('exist');
  }
}