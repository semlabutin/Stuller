Cypress.Commands.add('loginAPI', (login, password) => {
    cy.request('POST', 'https://www.stuller.com/loginjson', {
        userName: login,
        password: password,
    })


})
