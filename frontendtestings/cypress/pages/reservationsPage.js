/// <reference types="cypress" />

const { startingdate, endingdate, customer, reservationroom, startingdatetodelete, endingdatetodelete } = require("../targets/targets")
const { reservations } = require("./dashboard")

/// Elements
const titleofDashboardPage = 'Testers Hotel'
const reservationbutton = ':nth-child(4) > .btn'
const createReservation = 'h2 > .btn'
const startDate = ':nth-child(1) > input'
const endDate = ':nth-child(2) > input'
const startDatetodelete = ':nth-child(1) > input'
const endDatetodelete = ':nth-child(2) > input'
const selectingperson = ':nth-child(3) > select'
const selectingroom = ':nth-child(4) > select'
const predeletereservation = ':nth-child(2) > .action > img'
const deletingreservation = '.menu > :nth-child(2)'
const save = '.blue'
const logout = '.user > .btn'

// Functions

function checkTitleOfBillsPage(cy){
    cy.title().should('eq', titleofDashboardPage)
}
function createaReservation(cy, contentToConfirm){
    cy.get(reservationbutton).click()
    cy.contains(contentToConfirm)
    cy.get(createReservation).click()
    cy.get(startDate).type(startingdate)
    cy.get(endDate).type(endingdate)
    cy.get(selectingperson).select(customer)
    cy.get(selectingroom).select(reservationroom)
    cy.get(save).click()
    cy.get(logout).click()
}
function createanddeletereservation(cy, contentToConfirm){
    cy.get(reservationbutton).click()
    cy.contains(contentToConfirm)
    cy.get(createReservation).click()
    cy.get(startDatetodelete).type(startingdatetodelete)
    cy.get(endDatetodelete).type(endingdatetodelete)
    cy.get(selectingperson).select(customer)
    cy.get(selectingroom).select(reservationroom)
    cy.get(save).click()
    cy.get(predeletereservation).click()
    cy.get(deletingreservation).click()
    cy.get(logout).click()
    
    
}


// exports
module.exports = {
    checkTitleOfBillsPage,
    createaReservation,
    createanddeletereservation
  

}
