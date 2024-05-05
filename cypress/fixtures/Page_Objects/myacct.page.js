class MyAccountPage {
    get btnMessages() { return cy.get('#Messages'); }
    get linkContactInfo() { return cy.contains('Contact Information'); }
}

export default new MyAccountPage();