import { register } from '../../pages'

describe("REGISTER DEMOQA", () => {
    it("register", () => {
        //cy.visitWithoutAds('https://demoqa.com/register')
        register.open('https://demoqa.com/register')
        register.verifyHeaders()
        register.verifyLabels()
        register.verifyPlaceholders()
        register.fillOutTheForm()
        register.verifyRegisterBtn()
        register.registerClick()
    })
})