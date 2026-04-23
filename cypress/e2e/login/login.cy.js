import { login } from '../../pages'

describe('REGISTER DEMOQA', () => {
    it('fill the form', () => {
       // cy.visitWithoutAds('https://demoqa.com/login');
        login.open('https://demoqa.com/login')
        cy.login('KrystalMiller', '!@Aa123123')

        // login.verifyHeaders()
        // login.verifyLabels()
        // login.verifyPlaceholders()
        // login.fillOutTheForm()
        login.loginClick()
        // cy.url().should('include', '/profile');
    });
});
