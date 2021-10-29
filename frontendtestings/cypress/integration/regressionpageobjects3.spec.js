/// <reference types="cypress" />

import * as indexfunctions from '../pages/indexPage'
import * as targets from '../targets/targets'
import * as clientsPagefunctions from '../pages/clientsPage'
import * as billsPagefunctions from '../pages/billsPage'
import * as reservationsPagefunctions from '../pages/reservationsPage'
import * as dashBoardfunctions from '../pages/dashboard'



// test suite
describe (' Test suite', function() {

    beforeEach(()=>{
        cy.visit(targets.baseurl)
        indexfunctions.checkTitleOfIndexPage(cy)

    })
    it('create bill and delete one', function (){
        indexfunctions.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        billsPagefunctions.createBillandDeleteone(cy, 'Bills')
        dashBoardfunctions.logout(cy, 'Login')
    })
    it('create client and delete one', function (){
        indexfunctions.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        clientsPagefunctions.createclientanddeleteone(cy, 'Clients')
        dashBoardfunctions.logout(cy, 'Login')
    })
    it('create reservation', function(){
        indexfunctions.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview') 
        reservationsPagefunctions.createreservation(cy, 'Reservations')
        dashBoardfunctions.logout(cy, 'Login')
    })
   
})