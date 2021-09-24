/// <reference types="cypress" />

// elements
const titleofDashboardPage = 'Testers Hotel'
const logoutButton = '.user > .btn'
const roomsButton = ':nth-child(1) > .btn'
const clientsButton = '.blocks > :nth-child(2) > .btn'
const billsButton = ':nth-child(3) > .btn'
const reservationsButton = ':nth-child(4) > .btn'

// Functions

function checkTitleOfDashboardage(cy){
    cy.title().should('eq', titleofDashboardPage)
}



function rooms(cy, contentToConfirm){
    cy.get(roomsButton).click()
    cy.contains(contentToConfirm)
    cy.get(':nth-child(3) > .btn').click()
}

function clients(cy, contentToConfirm){
    cy.get(clientsButton).click()
    cy.contains(contentToConfirm)
    cy.get(':nth-child(3) > .btn').click()
    
}

function bills(cy, contentToConfirm){
    cy.get(billsButton).click()
    cy.contains(contentToConfirm)
    cy.get(':nth-child(3) > .btn').click()

    
}

function reservations(cy, contentToConfirm){
    cy.get(reservationsButton).click()
    cy.contains(contentToConfirm)
    cy.get(':nth-child(3) > .btn').click()


}

function logout(cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)

}
// exports
module.exports = {
    checkTitleOfDashboardage,
    logout,
    rooms,
    clients,
    bills,
    reservations
}