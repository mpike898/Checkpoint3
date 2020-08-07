module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
        .waitForElementPresent("#root")
    },
    after: browser => {
        browser.end()
    },
    'Edit Employee and save': browser => {

        browser
        .waitForElementVisible('.titleText')
        .click('[name="employee1"]')
        .verify.visible('#saveBtn')
        .setValue('[name="nameEntry"]',"This is edited")
        .click('#saveBtn')
        .verify.containsText('[name="employee1"]',"This is edited")
        

    },

    'Edit Employee and Cancel': browser => {

        browser
        .waitForElementVisible('.titleText')
        .click('[name="employee1"]')
        .verify.visible('[name="cancel"]')
        .setValue('[name="nameEntry"]',"This is edited")
        .click('[name="cancel"]')
        .verify.containsText('[name="employee1"]',"Bernice Ortiz")
        

    },

    'Switch between Employees': browser => {

        browser
        .waitForElementVisible('.titleText')
        .click('[name="employee1"]')
        .verify.visible('#saveBtn')
        .verify.containsText('#employeeTitle',"Bernice Ortiz")
        .click('[name="employee2"]')
        .verify.visible('#saveBtn')
        .verify.containsText('#employeeTitle',"Marnie Barnett")
        

    },

    'Add Employees': browser => {

        browser
        .waitForElementVisible('.titleText')
        .click('[name="addEmployee"]')
        .verify.visible('[name="employee11"]')
        .click('[name="employee11"]')
        .verify.visible('#saveBtn')
        .setValue('[name="nameEntry"]',"The Test Worked")
        .click('#saveBtn')
        .verify.containsText('#employeeTitle',"The Test Worked")
        .verify.containsText('[name="employee11"]',"The Test Worked")

    }



}