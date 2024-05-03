// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import LoginForm from "../fixtures/Page_Objects/login.form";
import MyAccountPage from "../fixtures/Page_Objects/myacct.page";


Cypress.Commands.add('loginUI', (login, password) => {
    cy.visit("/")
    cy.get('#Account').click()
    LoginForm.fieldUserName.click().clear().type(login)
    LoginForm.fieldPassword.click().clear().type(password)
    LoginForm.btnLogin.click()
    MyAccountPage.btnMessages.should("be.visible")
})
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })