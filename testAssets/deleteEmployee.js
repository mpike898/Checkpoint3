module.exports = (page,selector) => {
    page
        .waitForElementVisible('@titleT')
        .click(selector)
        .click('@deleteBtn')
        page.api.acceptAlert()
    page
        .expect.element(selector).to.not.be.present
    page
        .pause(1000)

}
