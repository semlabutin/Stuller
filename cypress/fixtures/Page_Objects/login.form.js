class LoginForm {
    get fieldUserName() { return cy.get('[data-test="username"]'); }
    get fieldPassword() { return cy.get('[data-test="password"]') }
    get btnLogin() { return cy.get('[data-test="log-in"]') }
}

export default new LoginForm();