export class googlePage {
  url = "https://www.google.com/";

  navigateToGoogle(url) {
    cy.visit(url);
  }

  fillGoogleSearchBar() {
    cy.get("#APjFqb").type("automation{enter}");
  }

  //We need to use cy.origin() since Cypress is deseign to work on a single page application (SPA).
  selectFirstWIkipedialink() {
    cy.contains("a", "Wikipedia")
      .should("have.attr", "href")
      .and("include", "wikipedia.org")
      .then((urlWiki) => {
        cy.origin(urlWiki, { args: { urlWiki } }, ({ urlWiki }) => {
          cy.visit(urlWiki);
          cy.get("#Industrial_Revolution_in_Western_Europe").screenshot();
        });
      });
  }
}
