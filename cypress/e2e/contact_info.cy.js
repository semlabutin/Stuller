import MyAccountPage from "../fixtures/Page_Objects/myacct.page";
import ContactInfoPage from "../fixtures/Page_Objects/myacct.contactinfo.page";

let user

describe('Contact Information Page tests', () => {
  before(() => {
    cy.fixture("userCredentials.json").then((data) => {
      user = data
    })
  })

  beforeEach(() => {
    cy.loginAPI(user.login, user.password);
  });

  it('Should verify Contact Information', () => {
    cy.visit("/myaccount/");
    MyAccountPage.linkContactInfo.click()
    ContactInfoPage.fieldFirstName.invoke('val').should('eq', 'DIGITAL')
    ContactInfoPage.fieldLastName.invoke('val').should('eq', 'TESTING')

  })
})