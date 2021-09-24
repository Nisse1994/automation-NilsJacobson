/// <reference types="cypress" />

const { roomnumber } = require("../targets/targets")

/// elements
const titleofDashboardPage = 'Testers Hotel'
const roomsButton = ':nth-child(1) > .btn'
const preedit   = ':nth-child(1) > .action > img'
const edit = '.menu > :nth-child(1)'
const editroomnumber = ':nth-child(4) > input'
const save = '.blue'
const logout = '.user > .btn'


// Functions

function checkTitleOfRoomspage(cy){
    cy.title().should('eq', titleofDashboardPage)
}
function editrooms(cy,  contentToConfirm){
    cy.get(roomsButton).click()
    cy.contains(contentToConfirm)
    cy.get(preedit).click()
    cy.get(edit).click()
    cy.get(editroomnumber).type(roomnumber)
    cy.get(save).click()
    cy.get(logout).click()

}


// exports
module.exports = {
    checkTitleOfRoomspage,
    editrooms
}
