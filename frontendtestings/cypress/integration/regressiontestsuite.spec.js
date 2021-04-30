/// <reference types="cypress" />

// Test suite
describe('Regression test suite', function(){
    
    // Test case
    it('Start the system', function (){
        // Går in på webbsidan
        cy.visit('http://localhost:3000')
    })
    it('See if you are on the right website', function(){
        // Kolla om man har kommit rött
        cy.title().should('include', 'Tester')
        cy.contains('Login')
    })

    it('log on to the site', function(){
        // Loggarin
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
    })
    
    it('See if you are logged in', function(){
        // Kollar om man har loggats in
        cy.contains('Logout')
    })

    it('Visit the links', function(){
        // Går in i olika länkar
        cy.get(':nth-child(1) > .btn').click()
        cy.get(':nth-child(3) > .btn').click()
        cy.get('.blocks > :nth-child(2) > .btn').click()
        cy.get(':nth-child(3) > .btn').click()
        cy.get(':nth-child(3) > .btn').click()
        cy.get(':nth-child(3) > .btn').click()
        cy.get(':nth-child(4) > .btn').click()
        cy.get(':nth-child(3) > .btn').click()
    })

    it('Logging out', function(){
        // Loggar ut
        cy.get('.user > .btn').click()
    
    })

    it('See if you are logged out', function (){
        // Kolla om man har blivit utloggad
        cy.contains('Login')
    })

    


})