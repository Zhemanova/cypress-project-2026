import Base from '../base/Base.js'

export default class Profile1 extends Base {
    // selectors
    userNameValue = '#userName-value'
    button = 'button'
    span = 'span'
    input = 'input#searchBox'
    mg = '.input-group'
    table = 'table'

    wrappers = {
       top: () => cy.get('#books-wrapper'),
        bottom: () => cy.get('.buttonWrap'),
        profile: () => cy.get('.profile-wrapper'),
    }

    labels= {
        textLeft: '.text-left > #userName-label',
        textEnd: '.text-end > #userName-label'
    }

    paginationBox = 'div[style*="display: flex"]'

    buttons = {
        logout: () => cy.get('#submit'),
        goToStore: () => cy.get('#gotoStore'),
        deleteAccount: () => cy.get('.text-center > #submit'),
        deleteAllBooks: () => cy.get('.text-right > #submit'),
    }

    tableBody = {
        img: () => cy.get('td img'),
        title: () => cy.get('td a'),
        author: () => cy.get('td').eq(2),
        publisher: () => cy.get('td').eq(3),
        action: () => cy.get('span[id^="delete-record-"]')
    }

    //methods

    getLabels =() => {
        return this.wrappers.top().then(($wrapper) => {
            const textLeft = $wrapper.find(this.labels.textLeft).text().trim()
            const textEnd =  $wrapper.find(this.labels.textEnd).first().text().trim()
            return {textLeft, textEnd}
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

    getPagination = () => {
        const pgn = {}
        return this.wrappers.profile()
            .then($wrapper => {
                pgn.prev = $wrapper.find(this.paginationBox).find(this.button).eq(0).text()
                pgn.next = $wrapper.find(this.paginationBox).find(this.button).eq(1).text()
                pgn.text = $wrapper.find(this.paginationBox).find(this.span).text()
            })
            .then(() => pgn)
    }

    getPagination1 = () => {
        const container = () => cy.get('.profile-wrapper')
            .find(this.paginationBox)

        return {
            prev: () => container().find(this.button).first(),
            next: () => container().find(this.button).last(),
            text: () => container().find(this.span)
     }
    }

    verifyPagination = (data) => {
        this.wrappers.profile().find('div[style*="display: flex"]')
            .within(() => {
                this.button().eq(0).should('have.text', data.previous)
                this.button().eq(1).should('have.text', data.next)
                this.span().should('have.text', data.text)
            })
    }

    verifyInput = () => {
        this.input().should('have.attr', 'placeholder', 'Type to search')
        this.mg().should('exist')
    }

    verifyTableHeader = (data) => {
        this.table().find('thead')
            .within(()=> {
                cy.get('th').each((el, i) => {
                    cy.wrap(el).should('have.text', data[i])
                })
            })
    }

    verifyTableBody = () => {
        this.table().find('tbody').within(() => {
            this.tableBody.img().should('have.attr', 'src')
                .and('include', "bookimage")
        })
        this.tableBody.title().should('have.attr', 'href')
            .and('include', 'books')
        this.tableBody.title().should('have.text', 'Git Pocket Guide')
        this.tableBody.author().should('have.text', 'Richard E. Silverman')
        this.tableBody.publisher().should('have.text', 'O\'Reilly Media')
        this.tableBody.action().should('have.attr', 'title', 'Delete')
    }

    verifyTableBody1 = () => {

        this.table().find('tbody').within(() => {

            this.tableBody.img().as('img')
            this.tableBody.title().as('title')
            this.tableBody.author().as('author')
            this.tableBody.publisher().as('publisher')
            this.tableBody.action().as('action')
        })

        cy.get('@img').should('have.attr', 'src').and('include', "bookimage")
        cy.get('@title').should('have.attr', 'href').and('include', 'books')
        cy.get('@title').should('have.text', 'Git Pocket Guide')
        cy.get('@author').should('have.text', 'Richard E. Silverman')
        cy.get('@publisher').should('have.text', 'O\'Reilly Media')
        cy.get('@action').should('have.attr', 'title', 'Delete')
    }
}