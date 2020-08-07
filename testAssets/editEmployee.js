module.exports = (page) => {
    page
        .waitForElementVisible('@titleT')
        .click('@myEmployee')
        .clearValue('@nameInput')
        .setValue('@nameInput', 'Tamm Ekip')
        .clearValue('@phoneInput')
        .setValue('@phoneInput', '2217217077')
        .clearValue('@emailInput')
        .setValue('@emailInput', 'edit@gmail.com')
        .clearValue('@titleInput')
        .setValue('@titleInput', 'Edit')
        .pause(1000)

}
