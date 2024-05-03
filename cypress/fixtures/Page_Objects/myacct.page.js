class MyAccountPage {
    get btnMessages() { return cy.get('[id="Messages"]'); }
    get linkContactInfo() { return cy.contains('Contact Information'); }
}

export default new MyAccountPage();