import Base from "../base/Base.js";

export default class Register extends Base {
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

    fillOutTheForm = (user) => {
        this.firstNameInput().click().clear().type(user.firstName)
        this.lastNameInput().click().clear().type(user.lastName)
        this.userNameInput().click().clear().type(user.username)
        this.passwordInput().click().clear().type(user.password)
    }

    verifyRegisterBtn = () => {
        this.registerBtn().should('have.text', 'Register')
    }

    registerClick = () => {
        this.registerBtn().click()
    }

    open(path) {
        super.open(path)
    }
}