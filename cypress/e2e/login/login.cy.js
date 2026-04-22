import Login from '../../pages/login/Login.js'

const login = new Login()

describe('REGISTER DEMOQA', () => {
    it('fill the form', () => {

        cy.visitWithoutAds('https://demoqa.com/login');
        login.verifyHeaders()
        login.verifyLabels()
        login.verifyPlaceholders()
        login.fillOutTheForm()
        login.loginClick()
        cy.url().should('include', '/profile');
    });
});
