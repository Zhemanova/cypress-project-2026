import { login } from '../pages/'
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (user) => {
    cy.visit('/login')
    cy.get('#userName').clear().type(user.userName)
    cy.get('#password').clear().type(user.password)
    cy.get('#login').click()
})

Cypress.Commands.add('loginSession', (username, password) => {
    cy.session([username, password], () => {
    cy.visit('/login')
    cy.get('#userName').clear().type(username)
    cy.get('#password').clear().type(password)
    cy.get('#login').click()
        cy.url().should('include', '/profile')
    }, {
        validate(){
            cy.visit('profile')
            cy.get('#userName-value').should('exist')
        }
    })
})

Cypress.Commands.add('visitWithoutAds', (url, options = {}) => {

    cy.intercept('GET', '**/*ads*', { statusCode: 204 })
    cy.intercept('GET', '**/ads/**', { statusCode: 204 })
    cy.intercept('GET', '**/doubleclick.net/**', { statusCode: 204 })
    cy.intercept('GET', '**/googlesyndication/**', { statusCode: 204 })
    cy.intercept('GET', '**/pagead/**', { statusCode: 204 })
    cy.intercept('GET', '**/securepubads.g.doubleclick.net/**', { statusCode: 204 })

    cy.visit(url, {
        ...options,
        onBeforeLoad(win) {
            Object.defineProperty(win, 'googletag', { value: undefined })
            Object.defineProperty(win, 'google_tag_manager', { value: undefined })

            if (options.onBeforeLoad) {
                options.onBeforeLoad(win)
            }
        }
    })

    cy.document().then((doc) => {
        doc.querySelectorAll('iframe, .ad, [id*="ad"], [class*="ad"]')
            .forEach(el => el.remove())

        const style = doc.createElement('style')
        style.innerHTML = `
      iframe, .ad, [id*="ad"], [class*="ad"] {
        display: none !important;
        visibility: hidden !important;
        pointer-events: none !important;
      }
    `
        doc.head.appendChild(style)
    })
})