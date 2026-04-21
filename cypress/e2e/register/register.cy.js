import Register from '../../pages/register/Register.js'
const register = new Register()

describe("REGISTER DEMOQA", () => {
    it("register", () => {
        cy.visitWithoutAds('https://demoqa.com/register')
        register.verifyHeaders()
        register.verifyLabels()
        register.verifyPlaceholders()
        register.fillOutTheForm()
        register.verifyRegisterBtn()
        register.registerClick()
    })
})