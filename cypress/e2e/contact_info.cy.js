import MyAccountPage from "../fixtures/Page_Objects/myacct.page";
import ContactInfoPage from "../fixtures/Page_Objects/myacct.contactinfo.page";

let user;
let msg

describe('Contact Information Page tests', () => {
  before(() => {
    cy.fixture("userCredentials.json").then((data) => {
      user = data
    })
    cy.fixture("msgAlertsContactInfo.json").then((data) => {
      msg = data
    })
  })

  beforeEach(() => {
    cy.loginAPI(user.login, user.password);
  });

  // it('Should verify Contact Information', () => {
  //   cy.visit("/myaccount/");
  //   MyAccountPage.linkContactInfo.click()
  //   ContactInfoPage.fieldFirstName.invoke('val').should('eq', 'DIGITAL')
  //   ContactInfoPage.fieldLastName.invoke('val').should('eq', 'TESTING')

  // })

  it('Should be able to change First Name', () => {
    cy.visit("/myaccount/");
    MyAccountPage.linkContactInfo.click()
    ContactInfoPage.fieldFirstName.clear('').type('NEWNAME')
    ContactInfoPage.btnSaveChanges.click()
    ContactInfoPage.msgSavedSuccessfully.contains('Contact Saved Successfully.')
    ContactInfoPage.fieldFirstName.invoke('val').should('eq', 'NEWNAME')
    ContactInfoPage.fieldFirstName.clear('').type('DIGITAL')
    ContactInfoPage.btnSaveChanges.click()
    ContactInfoPage.msgSavedSuccessfully.should('have.text', msg.Successfull)
    ContactInfoPage.fieldFirstName.invoke('val').should('eq', 'DIGITAL')

  })

  it('Should not allow use digits in the First Name', () => {
    cy.visit("/myaccount/");
    MyAccountPage.linkContactInfo.click()
    ContactInfoPage.fieldFirstName.clear('').type('DIGITAL1')
    ContactInfoPage.btnSaveChanges.click()
    ContactInfoPage.msgError.should('contain', msg.ErrorFirstNameLimitations)
    ContactInfoPage.msgError.should('contain', msg.ErrorNotAllowedFirstName)
    cy.reload()
    ContactInfoPage.fieldFirstName.invoke('val').should('eq', 'DIGITAL')

  })

})