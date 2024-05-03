class ContactInfoPage {

    get fieldFirstName() { return cy.get(':nth-child(5) > :nth-child(1) > .form-input-group > input') }
    get fieldLastName() { return cy.get(':nth-child(5) > :nth-child(2) > .form-input-group > input') }
}

export default new ContactInfoPage();