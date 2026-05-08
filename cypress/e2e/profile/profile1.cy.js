import { profile1 } from '../../pages'
import { users } from '../../fixtures/users.js'
import { profileData } from '../../fixtures/profile.js'

describe('PROFILE', () => {

    beforeEach(() => {
        cy.intercept("GET", '**/Account/v1/User/**').as('getUser')
        cy.loginSession(users.login.userName, users.login.password)
        cy.visit('/profile')
        cy.wait('@getUser')
        cy.document()
            .its('readyState')
            .should('eq', 'complete')
    })

    it('verify labels ', () => {
        profile1.getLabels().then(labels => {
            expect(labels.textLeft.trim()).to.eq(profileData.labels.textLeft.trim())
            expect(labels.textEnd.trim()).to.eq(profileData.labels.textEnd.trim())
        })
    });

    it('verify pagination ', () => {
        profile1.getPagination().then(pgn => {
            expect(pgn.prev).eq(profileData.pagination.previous)
            expect(pgn.next).eq(profileData.pagination.next)
            expect(pgn.text).eq(profileData.pagination.text)
        })
    });

    it('verify pagination -1  ', () => {

        const pagination = profile1.getPagination1()
        pagination.prev().should('have.text', profileData.pagination.previous)
        pagination.next().should('have.text', profileData.pagination.next)
        pagination.text().should('have.text', profileData.pagination.text)
        })


});