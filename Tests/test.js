var employeePage = {}
let addEmployee = require('../testAssets/addEmployee')
let deleteEmployee = require('../testAssets/deleteEmployee')
let editEmployee = require('../testAssets/editEmployee')
const axios = require('axios').default;
var pass = 0

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
    },
    'Edit Employee and save': browser => {
    
        addEmployee(employeePage)
        editEmployee(employeePage)
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
// HTTP requests

'Get Employee List': browser => {

    axios.get('https://peaceful-inlet-88854.herokuapp.com/api/employees')
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });


},

'Add Employee via API': browser => {

    axios.post('https://peaceful-inlet-88854.herokuapp.com/api/employees',{
        id: '699',
        name: 'Matt Pike',
        phone: '1251261279',
        email: 'mattp@gmail.com',
        title: 'The coolest'

    })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });


},

'Edit Employee via API': browser => {

    axios.put('https://peaceful-inlet-88854.herokuapp.com/api/employees/699?name=Matt Pikee&phone=1234567899&email=mpike@gmail.com&title=I did it')
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });


},

'Delete Employee via API': browser => {

    axios.delete('https://peaceful-inlet-88854.herokuapp.com/api/employees/699')
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });


},


}