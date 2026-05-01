import { profile } from '../../pages'
import { users } from '../../fixtures/users.js'
import { profileData } from '../../fixtures/profile.js'

describe('PROFILE', () => {

    beforeEach(() => {
        cy.loginSession(users.login.userName, users.login.password)
    })

    it('fill the form', () => {
        cy.visit('/profile')
        cy.url().should('include', '/profile')

        profile.verifyLabels(profileData.labels)
        profile.verifyButtons(profileData.buttons)
        profile.verifyPagination(profileData.pagination)
        profile.verifyInput()
        profile.verifyTableHeader(profileData.tableHeader)
        profile.verifyTableBody()
    });

});