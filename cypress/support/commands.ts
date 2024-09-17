// ***********************************************
// This example namespace declaration will help
// with Intellisense and code completion in your
// IDE or Text Editor.
// ***********************************************
declare namespace Cypress {
  interface Chainable<Subject = any> {
    getElement(id: any): Chainable<JQuery<HTMLElement>>;
  }
}

Cypress.Commands.add('getElement', function (id) {
  return cy.get(`[data-cy="${id}"]`);
});
