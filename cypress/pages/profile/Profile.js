import Base from '../base/Base.js'

export default class Profile extends Base {
    // selectors
    userNameValue = () => cy.get('#userName-value')
    button = () => cy.get('button')
    span = () => cy.get('span')

    wrappers = {
       top: () => cy.get('#books-wrapper'),
        bottom: () => cy.get('.buttonWrap'),
        profile: () => cy.get('.profile-wrapper'),
    }

    labels= {
        textLeft: () => cy.get('.text-left > #userName-label'),
        textEnd: () => cy.get('.text-end > #userName-label')
    }

    buttons = {
        logout: () => cy.get('#submit'),
        goToStore: () => cy.get('#gotoStore'),
        deleteAccount: () => cy.get('.text-center > #submit'),
        deleteAllBooks: () => cy.get('.text-right > #submit'),
    }

    //methods
    verifyLabels =(data) => {
        this.wrappers.top().within(() => {
            this.labels.textLeft().should('have.text', data.textLeft)
            this.labels.textEnd().should('have.text', data.textEnd)
        })
    }

    verifyButtons = (data) => {
        this.wrappers.top().within(() => {
            this.buttons.logout().should('have.text', data.logout)
        })
        this.wrappers.bottom().within(() => {
            this.buttons.goToStore().should('have.text', data.goToStore)
            this.buttons.deleteAccount().should('have.text', data.deleteAccount)
            this.buttons.deleteAllBooks().should('have.text', data.deleteAllBooks)
        })
    }

    verifyPagination = (data) => {
        this.wrappers.profile().find('div[style*="display: flex"]')
            .within(() => {
                this.button().eq(0).should('have.text', data.previous)
                this.button().eq(1).should('have.text', data.next)
                this.span().should('have.text', data.text)
            })
    }
}