/// <reference types="cypress" />

const { name, email, telephone, clientedit, clienttodelete, emailtodelete, phonenumberdelete } = require("../targets/targets")



/// Elements
const titleofDashboardPage = 'Testers Hotel'
const ClientsButton = '.blocks > :nth-child(2) > .btn'
const createAclient = 'h2 > .btn'
const typeName = ':nth-child(1) > input'
const typeEmail = ':nth-child(2) > input'
const typeTelepohone = ':nth-child(3) > input'
const preEdit = ':nth-child(1) > .action > img'
const edit = '.menu > :nth-child(1)'
const editname = ':nth-child(3) > input'
const save = '.blue'
const clientoptions = ':nth-child(4) > .action > img'
const deleteclient = '.menu > :nth-child(2)'
const logout = '.user > .btn'

///functions
function checkTitleofClientsPage(cy){
    cy.title().should('eq', titleofDashboardPage)
}
function createClient(cy, contentToConfirm){
    cy.get(ClientsButton).click()
    cy.contains(contentToConfirm)
    cy.get(createAclient).click()
    cy.get(typeName).type(name)
    cy.get(typeEmail).type(email)
    cy.get(typeTelepohone).type(telephone)
    cy.get(save).click()
    

}
function createclientanddelete(cy,contentToConfirm){
    cy.get(ClientsButton).click()
    cy.contains(contentToConfirm)
    cy.get(createAclient).click()
    cy.get(typeName).type(clienttodelete)
    cy.get(typeEmail).type(emailtodelete)
    cy.get(typeTelepohone).type(phonenumberdelete)
    cy.get(save).click()
    cy.get(clientoptions).click()
    cy.get(deleteclient).click()
    
}
function editClient(cy, contentToConfirm){
    cy.get(ClientsButton).click()
    cy.contains(contentToConfirm)
    cy.get(preEdit).click()
    cy.get(edit).click()
    cy.get(editname).type(clientedit)
    cy.get(save).click()
   
}
// exports 
module.exports = {
    checkTitleofClientsPage,
    createClient,
    createclientanddelete,
    editClient
}

