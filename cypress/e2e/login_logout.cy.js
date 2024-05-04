import LoginForm from "../fixtures/Page_Objects/login.form";
import MyAccountPage from "../fixtures/Page_Objects/myacct.page";


let user

describe('Positive log in, log out', () => {
  before(() => {
    cy.fixture("userCredentials.json").then((data) => {
      user = data
    })
  })


  it('Should log it with valid user credentials', () => {
    cy.visit("/");
    LoginForm.btnAccount.click()
    LoginForm.login(user.login, user.password)
    MyAccountPage.btnMessages.should("be.visible")
  })

  it('Should log out', () => {
    cy.loginAPI(user.login, user.password);
    cy.visit("/");
    LoginForm.btnAccount.click()
    LoginForm.btnLogout.click()
    LoginForm.btnAccount.click()
    LoginForm.btnLogin.should("be.visible")

  })

})