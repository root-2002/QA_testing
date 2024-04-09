const { should } = require("chai");
describe('filter',()=>{
    it('TC-0017:shluod return the company have same major',()=>{
        cy.visit('https://stacksinfo.web.app/');
        cy.get('.filter-button').click()
        cy.get(':nth-child(1) > .dropdown-title > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
        cy.get(':nth-child(1) > .dropdown-title > :nth-child(1) > :nth-child(2)').click()
        cy.get('.Not-found-container').should('not.contain', 'No results available.');
    })

    it("TC-0018 : shoud return  mixes company have same options I selected",()=>{
        cy.visit('https://stacksinfo.web.app/');
        cy.get('.filter-button').click()
        cy.get(':nth-child(1) > .dropdown-title > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
        cy.get(':nth-child(2) > .dropdown-title > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
        cy.get('.Not-found-container').should('not.contain', 'No results available.');
    })
    it.only("TC-0019 : should return the content of checkbox i selected",()=>{
        cy.visit('https://stacksinfo.web.app/');
        cy.get('.filter-button').click()
        cy.get(':nth-child(1) > .dropdown-title > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').dblclick()
        cy.get('.Not-found-container').should('not.contain', 'No results available.');
    })
it("TC-0014 : should be responsive", () => {
    cy.visit('https://stacksinfo.web.app/');
    cy.viewport(412, 915);
    cy.get('.filter-button').should('be.visible').click();
    cy.get('.filters-container').should('be.visible');
});
it("TC-0013 : should ", () => {
    cy.visit('https://stacksinfo.web.app/');

    cy.get('.filter-button').click();

    cy.get(':nth-child(1) > .dropdown-title > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').click();
   
    cy.get('.clear-all-btn').click();

    cy.get('.selected-filters').should('not.exist');
});
    
})


describe("TC-0012: Test search about backend field then filter to backend", () => {
  it.only("should return all companies that has backend servises", () => {
    cy.visit("https://stacksinfo.web.app/");
    cy.get(".search-bar").type("Backend");
    cy.get(".search-window-overlay").click();
    cy.get(".filter-button").click();
    cy.get(
      ":nth-child(1) > .dropdown-title > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input"
    ).click();
    cy.get(".page-body").should("contain", ".card-container > :nth-child(4)");
  });
});

