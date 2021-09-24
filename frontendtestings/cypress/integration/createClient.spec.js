/// <reference types="cypress" />

// Test suite
describe('Create a client', function(){
    
    // Test case
    it('Start the system', function (){
        // Går in på webbsidan
        cy.visit('http://localhost:3000')
    })
    it('See if you are on the right website', function(){
        // Kolla om man har kommit rätt
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
    it('Visit clients', function (){
        // Gå in i clients sidan
        cy.get('.blocks > :nth-child(2) > .btn').click()
    })
    it('Create a client', function (){
        // Skapa en client
        cy.get('h2 > .btn').click()
        cy.get(':nth-child(1) > input').type('Konrad')
        cy.get(':nth-child(2) > input').type('Konrad@email.com')
        cy.get(':nth-child(3) > input').type('07444894564')
        cy.get('.blue').click()
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