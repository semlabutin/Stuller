class LoginForm {
    get btnAccount() { return cy.get('#Account'); }
    get fieldUserName() { return cy.get('[data-test="username"]'); }
    get fieldPassword() { return cy.get('[data-test="password"]') }
    get btnLogin() { return cy.get('[data-test="log-in"]') }
    get btnLogout() { return cy.get('[data-test="logout-button-in-account-dropdown"]') }

    login(user, password) {
        this.fieldUserName.click().clear().type(user)
        this.fieldPassword.click().clear().type(password)
        this.btnLogin.click();
    }
}

export default new LoginForm();