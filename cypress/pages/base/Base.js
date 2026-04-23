export default class Base {
    open(path) {
        cy.visitWithoutAds(path);
    }
}