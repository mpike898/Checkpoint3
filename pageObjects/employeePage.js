module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
    elements: {
//Title Text
    titleT: {selector: '.titleText'},
//Search
    searchBox: {selector: '[name="searchBox"]'},
    clearSearch: {selector: '[name="clearSearch"]'},
//Employee card
    employeeTitle: {selector: '#employeeTitle'},
    employeeID: {selector: '#employeeID'},
    saveBtn: {selector: '#saveBtn'},
    cancelBtn: {selector: '[name="cancel"]'},
    deleteBtn: {selector: '[name="delete"]'},
    nameInput: {selector: '[name="nameEntry"]'},
    phoneInput: {selector: '[name="phoneEntry"]'},
    emailInput: {selector: '[name="emailEntry"]'},
    titleInput: {selector: '[name="titleEntry"]'},

//Add Employee

    addEmployee: {selector: '[name="addEmployee"]'},

 //Employee List
    
    staticEmployee: {selector: '//li[text()="New Employee"]',
    locateStrategy: 'xpath'
    },
    myEmployee: {selector: '//li[text()="Matt Pike"]',
    locateStrategy: 'xpath'
    },
    editedEmployee: {selector: '//li[text()="Tamm Ekip"]',
    locateStrategy: 'xpath'
    },
}
    }

//(//li[contains(@class,"listText")])[last()]