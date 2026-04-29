import { login } from '../../pages'
import { users } from '../../fixtures/users.js'

describe('REGISTER DEMOQA', () => {
    it('fill the form', () => {
       // cy.visitWithoutAds('https://demoqa.com/login');
        login.open('/login')
        login.verifyHeaders()
        login.verifyLabels()
        login.verifyPlaceholders()
        login.fillOutTheForm(users.login)
        // When testing pages that require the user to be logged in, the custom command cy.login() will be used instead of the fillOutTheForm method:

        // cy.login(users.login)
        login.loginClick()

        cy.url().should('include', '/profile');
    });
});
