import LoginForm from "../fixtures/Page_Objects/login.form";
import MyAccountPage from "../fixtures/Page_Objects/myacct.page";


let user

describe('Positive log in', () => {
  before(() => {
    cy.fixture("userCredentials.json").then((data) => {
      user = data
    })
  })

  beforeEach(() => {
    cy.visit("/");
  });

  it('Should log it with user credentials', () => {
    cy.get('#Account').click()
    LoginForm.fieldUserName.click().clear().type(user.login)
    LoginForm.fieldPassword.click().clear().type(user.password)
    LoginForm.btnLogin.click()
    MyAccountPage.btnMessages.should("be.visible")
  })
})