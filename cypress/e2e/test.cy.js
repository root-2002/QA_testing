const { should } = require("chai");

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://stacksinfo.web.app/');
    cy.get('.search-bar').type("front end")
    cy.get('.card-container').should('exist');
    cy.get('.card-container > :nth-child(2)').should('exist');
  });
  
});
