class ContactInfoPage {

    get fieldFirstName() { return cy.get(':nth-child(5) > :nth-child(1) > .form-input-group > input') }
    get fieldLastName() { return cy.get(':nth-child(5) > :nth-child(2) > .form-input-group > input') }
    get btnSaveChanges() { return cy.contains('[type="submit"]', 'Save Changes') }
    get msgSavedSuccessfully() { return cy.get('[data-bind="text: Success"]') }
    get msgError() { return cy.get('[data-bind="text: $data"]') }

}

export default new ContactInfoPage();