/// <reference types="cypress" />

const { bill, bill2 } = require("../targets/targets")

//elements

const titleofDashboardPage = 'Testers Hotel'
const visitBills = ':nth-child(3) > .btn'
const billsButton = 'h2 > .btn'
const typeBill = 'input'
const check = '.checkbox'
const save = '.blue'
const predelete = ':nth-child(2) > .action > img'
const deleting = '.menu > :nth-child(2)'
const logout = '.user > .btn'


// functions
function checkTitleOfBillsPage(cy){
    cy.title().should('eq', titleofDashboardPage)
}
function createBillandDelete(cy, contentToConfirm){
    cy.get(visitBills).click()
    cy.contains(contentToConfirm)
    cy.get(billsButton).click()
    cy.get(typeBill).type(bill)
    cy.get(check).click()
    cy.get(save).click()
    cy.get(predelete).click()
    cy.get(deleting).click()
    
}
function createBill(cy, contentToConfirm){
    cy.get(visitBills).click()
    cy.contains(contentToConfirm)
    cy.get(billsButton).click()
    cy.get(typeBill).type(bill2)
    cy.get(save).click()
    
}

// exports
module.exports = {
createBillandDelete,
checkTitleOfBillsPage,
createBill
}