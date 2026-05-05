import { profile1 } from '../../pages'
import { users } from '../../fixtures/users.js'
import { profileData } from '../../fixtures/profile.js'

describe('PROFILE', () => {

    beforeEach(() => {
        cy.loginSession(users.login.userName, users.login.password)
    })

    it('verify elements ', () => {
        cy.visit('/profile')
        cy.url().should('include', '/profile')

        profile1.getLabels().then(labels => {
            expect(labels.textLeft.trim()).to.eq(profileData.labels.textLeft.trim())
            expect(labels.textEnd.trim()).to.eq(profileData.labels.textEnd.trim())
        })
    });

});