/// <reference types="cypress" />

import * as indexfunctions from '../pages/indexPage'
import * as dashBoardfunctions from  '../pages/dashboard'
import * as targets from '../targets/targets'
import * as roomsPagefunctions from '../pages/roomsPage'
import * as clientsPagefunctions from '../pages/clientsPage'




// test suite
describe (' Test suite', function() {

    beforeEach(()=>{
        cy.visit(targets.baseurl)
        indexfunctions.checkTitleOfIndexPage(cy)

    })

    // Test cases
    it('login, visit pages and logut', function(){
        indexfunctions.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashBoardfunctions.rooms(cy, 'Rooms')
        dashBoardfunctions.clients(cy, 'Clients')
        dashBoardfunctions.bills(cy, 'Bills')
        dashBoardfunctions.reservations(cy, 'Reservations')
        dashBoardfunctions.logout(cy, 'Login')
        
    })
   
    it('edit a room', function(){
        indexfunctions.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
         roomsPagefunctions.editrooms(cy, 'Rooms')
        
    })
    
   
    it('create client', function (){
        indexfunctions.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        clientsPagefunctions.createClient(cy, 'Clients')
    })
   
   
})

  
