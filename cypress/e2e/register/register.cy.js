import { faker } from "@faker-js/faker";

describe("REGISTER DEMOQA", () => {
    it("register", () => {
        cy.visitWithoutAds('https://demoqa.com/register')
        //headers
        cy.get('h1').contains('Register')
        cy.get('h4').contains('Register to Book Store')

        //labels
        cy.get('#firstname-label').should('have.text', 'First Name :')
        cy.get('#lastname-label').should('have.text', 'Last Name : ')
        cy.get('#userName-label').should('have.text', 'UserName : ')
        cy.get('#password-label').should('have.text', 'Password : ')

        //placeholders
        cy.get('#firstname').should('have.attr', 'placeholder', 'First Name')
        cy.get('#lastname').should('have.attr', 'placeholder', 'Last Name')
        cy.get('#userName').should('have.attr', 'placeholder', 'UserName')
        cy.get('#password').should('have.attr', 'placeholder', 'Password')

        //fill out the form
        cy.get('#firstname').click().clear().type("Mary")
        cy.get('#lastname').click().clear().type("Smith")
        cy.get('#userName').click().clear().type("userName")
        cy.get('#password').click().clear().type("!@Aa123123")

        //register
        cy.get("#register").should('have.text', 'Register').click()
    })
})