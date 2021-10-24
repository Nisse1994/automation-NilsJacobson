/// <reference types="cypress" />

const { startingdate, endingdate, customer, reservationroom, startingdatetodelete, endingdatetodelete, selectroom, datestartdelete, dateenddelete } = require("../targets/targets")


/// Elements
const titleofDashboardPage = 'Testers Hotel'
const reservationbutton = ':nth-child(4) > .btn'
const createReservation = 'h2 > .btn'
const startDate = ':nth-child(1) > input'
const endDate = ':nth-child(2) > input'
const selectingperson = ':nth-child(3) > select'
const selectingroom = ':nth-child(4) > select'
const startdelete = ':nth-child(1) > input'
const enddelete = ':nth-child(2) > input'
const save = '.blue'
const pre = ':nth-child(2) > .action > img'
const deleting = ':nth-child(2) > .menu > :nth-child(2)'
const logout = '.user > .btn'

// Functions

function checkTitleOfBillsPage(cy){
    cy.title().should('eq', titleofDashboardPage)
}
function createaReservationtodelete(cy, contentToConfirm){
    cy.get(reservationbutton).click()
    cy.contains(contentToConfirm)
    cy.get(createReservation).click()
    cy.get(startdelete).type(datestartdelete)
    cy.get(enddelete).type(dateenddelete)
    cy.get(selectingperson).select(customer)
    cy.get(selectingroom).select(reservationroom)
    cy.get(save).click()
    cy.get(pre).click()
    cy.get(deleting).click()
    cy.get(logout).click()
}


function createreservation(cy, contentToConfirm){
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


// exports
module.exports = {
    checkTitleOfBillsPage,
    createaReservationtodelete,
    createreservation
  

}
