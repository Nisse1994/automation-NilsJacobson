/// <reference types="cypress" />

// Test suite
describe('Create a reservation', function(){
    
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
    it('Visit reservations', function (){
        cy.get(':nth-child(4) > .btn').click()
        // edit reservations
    })
   it('Create reservation', function(){
    cy.get('h2 > .btn').click()
    cy.get(':nth-child(1) > input').type('2022-05-16')
    cy.get(':nth-child(2) > input').type('2022-05-19')
    cy.get(':nth-child(3) > select').select('Mikael Eriksson (#2)')
    cy.get(':nth-child(4) > select').select('Floor 1, Room 102')
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