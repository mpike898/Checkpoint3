module.exports = (page) => {
    page
        .waitForElementVisible('@titleT')
        .click('@addEmployee')
        .click('@staticEmployee')
        .clearValue('@nameInput')
        .setValue('@nameInput', 'Matt Pike')
        .clearValue('@phoneInput')
        .setValue('@phoneInput', '7707127122')
        .clearValue('@emailInput')
        .setValue('@emailInput', 'Mpike898@gmail.com')
        .clearValue('@titleInput')
        .setValue('@titleInput', 'Cool Kid')
        .click('@saveBtn')
        .expect.element('@myEmployee').to.be.present
    page
        .pause(1000)

}
