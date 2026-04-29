import { login, profile } from '../../pages'
import { users } from '../../fixtures/users.js'
import { profileData } from '../../fixtures/profile.js'

describe('PROFILE', () => {
    it('fill the form', () => {
        cy.login(users.login)
        cy.url().should('include', '/profile')
        profile.verifyLabels(profileData.labels)
        profile.verifyButtons(profileData.buttons)
    });
});