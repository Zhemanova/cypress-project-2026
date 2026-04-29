import Base from '../base/Base.js'

export default class Profile extends Base {
    // selectors
    wrappers = {
       top: () => cy.get('#books-wrapper'),
        bottom: () => cy.get('.buttonWrap')
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

    userNameValue = () => cy.get('#userName-value')


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
}