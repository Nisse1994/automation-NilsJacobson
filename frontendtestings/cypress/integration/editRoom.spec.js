/// <reference types="cypress" />

// Test suite
<<<<<<< HEAD
describe('Edit room', function(){
=======
describe('Edit a room', function(){
>>>>>>> commit
    
    // Test case
    it('Start the system', function (){
        // Går in på webbsidan
        cy.visit('http://localhost:3000')
    })
<<<<<<< HEAD
    it('See if you are on the right website', function(){
=======
    it('See if you have come the right website', function(){
>>>>>>> commit
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
  it('visit rooms', function(){
    cy.get(':nth-child(1) > .btn').click()
    })
    it ('edit room', function(){
        cy.get(':nth-child(1) > .action > img').click()
        cy.get('.menu > :nth-child(1)').click()
        cy.get(':nth-child(4) > input').type('32')
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
