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

    userNameValue = () => cy.get('#userName-value')


    //methods
    verifyLabels =(data) => {
        this.wrappers.top().within(() => {
            this.labels.textLeft().should('have.text', data.textLeft)
            this.labels.textEnd().should('have.text', data.textEnd)
        })
    }
}