var employeePage = {}
let addEmployee = require('../testAssets/addEmployee')
let deleteEmployee = require('../testAssets/deleteEmployee')
let editEmployee = require('../testAssets/editEmployee')
module.exports = {
    beforeEach: browser => {
        employeePage = browser.page.employeePage()
        employeePage.navigate()
    },
    after: browser => {
        employeePage.end()
    },

    
    'Add Employee': browser => {

        addEmployee(employeePage)
        deleteEmployee(employeePage,'@myEmployee')
    employeePage
        .pause(5000)
    },
    'Edit Employee and save': browser => {
    
        addEmployee(employeePage)
        employeePage.pause(5000)
        editEmployee(employeePage)
        employeePage.pause(5000)
    employeePage
        .verify.visible('@saveBtn')
        .click('@saveBtn')
        .expect.element('@editedEmployee').to.be.present
    employeePage
        deleteEmployee(employeePage,'@editedEmployee')
        

    },

    'Edit Employee and Cancel': browser => {

        addEmployee(employeePage)
        editEmployee(employeePage)
    employeePage
        .verify.visible('@cancelBtn')
        .click('@cancelBtn')
        .expect.element('@editedEmployee').to.not.be.present
    employeePage
        .expect.element('@myEmployee').to.be.present
    employeePage
        deleteEmployee(employeePage,'@myEmployee')

    },



}