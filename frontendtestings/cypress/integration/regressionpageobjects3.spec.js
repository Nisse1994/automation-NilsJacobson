/// <reference types="cypress" />

import * as indexfunctions from '../pages/indexPage'
import * as targets from '../targets/targets'
import * as clientsPagefunctions from '../pages/clientsPage'
import * as billsPagefunctions from '../pages/billsPage'
import * as reservationsPagefunctions from '../pages/reservationsPage'



// test suite
describe (' Test suite', function() {

    beforeEach(()=>{
        cy.visit(targets.baseurl)
        indexfunctions.checkTitleOfIndexPage(cy)

    })
    it('create bill and delete it', function (){
        indexfunctions.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        billsPagefunctions.createBillandDelete(cy, 'Bills')
    })
    it('create client and delete it', function (){
        indexfunctions.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        clientsPagefunctions.createclientanddelete(cy, 'Clients')
    })
    it('create reservation', function(){
        indexfunctions.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview') 
        reservationsPagefunctions.createreservation(cy, 'Reservations')
    })
   
})