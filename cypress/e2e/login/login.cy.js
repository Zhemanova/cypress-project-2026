import { login } from '../../pages'
import { users } from '../../fixtures/users.js'

describe('REGISTER DEMOQA', () => {
    it('fill the form', () => {
       // cy.visitWithoutAds('https://demoqa.com/login');
        login.open('https://demoqa.com/login')
        cy.login(users.login)

        login.verifyHeaders()
        login.verifyLabels()
        login.verifyPlaceholders()
        login.fillOutTheForm()
        login.loginClick()

        cy.url().should('include', '/profile');
    });
});
