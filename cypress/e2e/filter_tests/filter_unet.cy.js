const { should } = require("chai");
describe('TC-0017 : select one item in the filter',()=>{
    it('shluod display the company have same major',()=>{
        cy.visit('https://stacksinfo.web.app/');
        cy.get('.filter-button').click()
        cy.get(':nth-child(1) > .dropdown-title > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
        cy.get(':nth-child(1) > .dropdown-title > :nth-child(1) > :nth-child(2)').click()
        cy.get('.Not-found-container').should('not.contain', 'No results available.');
    })
    
})