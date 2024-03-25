const { should } = require("chai");

describe('TC-005:Search about exist value', () => {
  it('should return all cards that contain frontend', () => {
    cy.visit('https://stacksinfo.web.app/');
    cy.get('.search-bar').type("front end")
    cy.get('.card-container').should('exist');
    cy.get('.card-container > :nth-child(2)').should('exist');
    cy.get(':nth-child(1) > .card-body > .simple-slider > .slick-slider > .slick-list > .slick-track > .slick-active > :nth-child(1) > .slider-element').should('have.text', 'Frontend');
  });
  
});
