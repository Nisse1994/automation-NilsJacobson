/// <reference types="cypress" />

//Elements
const indexPageTitle = 'Testers Hotel'
const usernameTextfield = ':nth-child(1) > input'
const passwordTextfield = ':nth-child(2) > input'
const loginButton = '.btn'

//Functions

function checkTitleOfIndexPage(cy){
    cy.title().should('eq', indexPageTitle)
}

function performValidLogin(cy, username, password, contentToConfirm){
    cy.get(usernameTextfield).type(username)
    cy.get(passwordTextfield).type(password)
    cy.get(loginButton).click()
    cy.contains(contentToConfirm)

}

//Exports
module.exports = {
    checkTitleOfIndexPage,
    performValidLogin
}