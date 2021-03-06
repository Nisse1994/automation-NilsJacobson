/// <reference types="cypress" />
import * as indexfunctions from '../pages/indexPage'
import * as targets from '../targets/targets'
import * as billsPagefunctions from '../pages/billsPage'
import * as reservationsPagefunctions from '../pages/reservationsPage'
import * as clientsPagefunctions from '../pages/clientsPage'
import * as roomsPagefunctions from '../pages/roomsPage'
import * as dashBoardfunctions from '../pages/dashboard'

// test suite
describe (' Test suite 2', function() {

    beforeEach(()=>{
        cy.visit(targets.baseurl)
        indexfunctions.checkTitleOfIndexPage(cy)

    })
    // Test cases
    it('edit client', function(){
        indexfunctions.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        clientsPagefunctions.editClient(cy, 'Clients')
        dashBoardfunctions.logout(cy, 'Login')
    
    })
    it('create room', function(){
        indexfunctions.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        roomsPagefunctions.createaroom(cy, 'Rooms')
        dashBoardfunctions.logout(cy, 'Login')
    })
    
   
  
    it('create bill', function(){
        indexfunctions.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview') 
        billsPagefunctions.createBill(cy, 'Bills')
        dashBoardfunctions.logout(cy, 'Login')

    })
    it('create reservation and delete one', function (){
        indexfunctions.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        reservationsPagefunctions.createaReservationanddeleteone(cy, 'Reservations')
        dashBoardfunctions.logout(cy, 'Login')
    })
    
    
    
})