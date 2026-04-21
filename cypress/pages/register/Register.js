import { faker } from '@faker-js/faker'

export default class Register {
    header1 = () => cy.get('h1')
    header4 = () => cy.get('h4')

    firstNameLabel = () => cy.get('#firstname-label')
    lastNameLabel = () => cy.get('#lastname-label')
    userNameLabel = () => cy.get('#userName-label')
    passwordLabel = () => cy.get('#password-label')

    firstNameInput = () => cy.get('#firstname')
    lastNameInput = () => cy.get('#lastname')
    userNameInput = () => cy.get('#userName')
    passwordInput = () => cy.get('#password')

    registerBtn = () => cy.get('#register')

    verifyHeaders = () => {
        this.header1().contains('Register')
        this.header4().contains('Register to Book Store')
    }

    verifyLabels = () => {
        this.firstNameLabel().should('have.text', 'First Name :')
        this.lastNameLabel().should('have.text', 'Last Name : ')
        this.userNameLabel().should('have.text', 'UserName : ')
        this.passwordLabel().should('have.text', 'Password : ')
    }

    verifyPlaceholders = () => {
        this.firstNameInput().should('have.attr', 'placeholder', 'First Name')
        this.lastNameInput().should('have.attr', 'placeholder', 'Last Name')
        this.userNameInput().should('have.attr', 'placeholder', 'UserName')
        this.passwordInput().should('have.attr', 'placeholder', 'Password')
    }

    fillOutTheForm = () => {
        this.firstNameInput().click().clear().type(faker.person.firstName('female'))
        this.lastNameInput().click().clear().type(faker.person.lastName('female'))
        this.userNameInput().click().clear().type(faker.internet.username())
        this.passwordInput().click().clear().type("!@Aa123123")
    }

    verifyRegisterBtn = () => {
        this.registerBtn().should('have.text', 'Register')
    }

    registerClick = () => {
        this.registerBtn().click()
    }
}