const { should } = require("chai");

describe('TC-005: Search for existing value', () => {
  it('should return all cards that contain "frontend"', () => {
    cy.visit('https://stacksinfo.web.app/');
    cy.get('.search-bar').type("front end");
    cy.get('.card-container').should('exist');
    cy.get('.card-container > :nth-child(2)').should('exist');
    cy.get(':nth-child(1) > .card-body > .simple-slider > .slick-slider > .slick-list > .slick-track > .slick-active > :nth-child(1) > .slider-element').should('have.text', 'Frontend');
  });
});

describe("TC-0011 : Test the output of existing value", () => {
  it.skip("should return all companies in Nablus and Backend", () => {
    cy.visit('https://stacksinfo.web.app/');
    cy.get('.search-bar').type("Nablus and Backend");
    cy.get('.Not-found-container').should('not.contain', 'No results available.');
  });
});

describe('TC-006: Search for Non-Existent Value', () => {
  it('should return "No results available"', () => {
    cy.visit('https://stacksinfo.web.app/');
    cy.get('.search-bar').type('car');
    cy.contains('Oops, No Matches Found :(').should('be.visible');
  });
});

describe('TC-007: Search for Non-Existent Value', () => {
  it('displays "No Matches Found" for Injection Query', () => {
    cy.visit('https://stacksinfo.web.app');
    cy.get('.search-bar').type("SELECT * FROM users WHERE username = '' OR '1'='1' AND password = 'input_password';");
    cy.contains('Oops, No Matches Found :(').should('be.visible');
  });
});

describe('TC-008: Search for Frontend Companies', () => {
  it('should return companies operating in the field of Frontend', () => {
    cy.visit('https://stacksinfo.web.app/');
    cy.get('.search-bar').type("Front");
    cy.get('.card-container').should('exist');
    cy.contains('.card-body', 'Frontend').should('exist');
  });
});

describe('TC-009: verify from the result if we search about "Fro" keyword', () => {
  it('shows companies operating in the field of Frontend', () => {
    cy.visit('https://stacksinfo.web.app/');
    cy.get('.search-bar').type("Fro");
    cy.get('.card-container').should('exist');
    cy.contains('.card-body', 'Frontend').should('exist');
  });
});

describe("TC-0010: This test scenario verifies the functionality of the search if we search about company, city, technology, and language", () => {
  it("should return cards containing all the requirements that were searched for", () => {
    cy.visit('https://stacksinfo.web.app/');
    cy.get('.search-bar').type('Asal Backend Rawabi c++');
    cy.get('.company-name').should('contain', 'ASAL Technologies');
    cy.get('.slick-active > :nth-child(1) > .slider-element').should('contain', 'Backend');
    cy.get('.company-slogan').should('contain', 'Rawabi');
    cy.get(':nth-child(1) > .card-body > .card-result > :nth-child(1) > .result-item')
      .invoke('attr', 'alt')
      .should('contain', 'C++');
  });
});

describe("TC-0012: Test search about backend field", () => {
  it("should return all companies that has backend servises", () => {
    cy.visit("https://stacksinfo.web.app/");
    cy.get(".search-bar").type("Backend");
    cy.get(".slick-active > :nth-child(1) > .slider-element").should("contain", "Backend");
    cy.get(".page-body").should("contain", ".card-container > :nth-child(4)");
  });
});


