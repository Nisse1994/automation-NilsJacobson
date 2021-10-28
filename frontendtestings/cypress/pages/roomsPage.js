/// <reference types="cypress" />

const { roomnumber, roomtype, createaroomnumber, floornr, priceofroom, roomfeaturing } = require("../targets/targets")

/// elements
const titleofDashboardPage = 'Testers Hotel'
const roomsButton = ':nth-child(1) > .btn'
const preedit   = ':nth-child(1) > .action > img'
const edit = '.menu > :nth-child(1)'
const editroomnumber = ':nth-child(4) > input'
const createroom = 'h2 > .btn'
const selectroomtype = ':nth-child(1) > select'
const createroomnumber = ':nth-child(2) > input'
const floor = ':nth-child(3) > input'
const availableroom = '.checkbox'
const roomprice = ':nth-child(5) > input'
const roomfeatures = ':nth-child(6) > select'
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
    cy.contains(contentToConfirm)
    

}
function createaroom(cy, contentToConfirm){
    cy.get(roomsButton).click()
    cy.contains(contentToConfirm)
    cy.get(createroom).click()
    cy.get(selectroomtype).select(roomtype)
    cy.get(createroomnumber).type(createaroomnumber)
    cy.get(floor).type(floornr)
    cy.get(availableroom).click()
    cy.get(roomprice).type(priceofroom)
    cy.get(roomfeatures).select(roomfeaturing)
    cy.get(save).click()
    cy.contains(contentToConfirm)
    

}


// exports
module.exports = {
    checkTitleOfRoomspage,
    editrooms,
    createaroom
}
