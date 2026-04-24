import { register } from '../../pages'
import { users } from '../../fixtures/users.js'

describe("REGISTER DEMOQA", () => {
    it("register", () => {
        //cy.visitWithoutAds('https://demoqa.com/register')
        register.open('https://demoqa.com/register')
        register.verifyHeaders()
        register.verifyLabels()
        register.verifyPlaceholders()
        register.fillOutTheForm(users.register)
        register.verifyRegisterBtn()
        register.registerClick()
    })
})