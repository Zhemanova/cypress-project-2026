import { faker } from '@faker-js/faker'
import Base from "../base/Base.js";

export default class Login extends Base {
header = {
    h1: () => cy.get('h1'),
    h2: () => cy.get('h2'),
    h5: () => cy.get('h5'),
}
label = {
    userName: () => cy.get('#userName-label'),
    password: () => cy.get('#password-label'),
}

placeholders = {
    userName: () => cy.get('#userName'),
    password: () => cy.get('#password'),
}

button = {
    login: () => cy.get('#login'),
}

verifyHeaders = () => {
    this.header.h1().should('have.text', 'Login')
    this.header.h2().should('have.text', 'Welcome,')
    this.header.h5().should('have.text', 'Login in Book Store')
}

verifyLabels = () => {
    this.label.userName().should('have.text', 'UserName : ')
    this.label.password().should('have.text', 'Password : ')
}

verifyPlaceholders = () => {
    this.placeholders.userName().should('have.attr', 'placeholder','UserName')
    this.placeholders.password().should('have.attr', 'placeholder','Password')
}

fillOutTheForm = () => {
    this.placeholders.userName().clear().type('KrystalMiller')
    this.placeholders.password().clear().type('!@Aa123123')
}

loginClick = () => {
    this.button.login().click()
}

open(path) {
        super.open(path)
    }
}