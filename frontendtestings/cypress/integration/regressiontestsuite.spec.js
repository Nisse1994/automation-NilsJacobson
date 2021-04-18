/// <reference types="cypress" />

// Test suite
describe('Regression test suite', function(){
    
    // Test case
    it('Perform valid login', function (){
        // Går in på webbsidan
        cy.visit('http://localhost:3000')
        // Kolla om man har kommit rött
        cy.title().should('include', 'Tester')
        cy.contains('Login')
        // Loggarin
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        // Kollar om man har loggats in
        cy.contains('Logout')
        // Går in i olika länkar
        cy.get(':nth-child(1) > .btn').click()
        cy.get(':nth-child(3) > .btn').click()
        cy.get('.blocks > :nth-child(2) > .btn').click()
        cy.get(':nth-child(3) > .btn').click()
        cy.get(':nth-child(3) > .btn').click()
        cy.get(':nth-child(3) > .btn').click()
        cy.get(':nth-child(4) > .btn').click()
        cy.get(':nth-child(3) > .btn').click()
        // Loggar ut
        cy.get('.user > .btn').click()
        // Kolla om man har blivit utloggad
        cy.contains('Login')

    })


})