/// <reference types="cypress" />

describe('User can Open Register Page', () => {
    it('Can Register Test', () => {
        cy.visit("http://127.0.0.1:8000/register");
        cy.get('.card-header').should('have.text', 'Register');
        cy.get(':nth-child(2) > .col-md-4').should('have.text', 'Username');
        cy.get(':nth-child(3) > .col-md-4').should('have.text', 'Name');
        cy.get(':nth-child(4) > .col-md-4').should('have.text', 'Email Address');
        cy.get(':nth-child(5) > .col-md-4').should('have.text', 'Password');
        cy.get(':nth-child(6) > .col-md-4').should('have.text', 'Confirm Password');
        cy.get('#username').type("user",{ force: true });
        cy.get('#name').type('thirsya',{ force: true });
        cy.get('#email').type('user@mail.com',{ force: true });
        cy.get('#password').type('user',{ force: true });
        cy.get('#password-confirm').type('user',{ force: true });
        cy.get('.btn').click({ force: true });
    });
    it('Can Not Register Because Usename and Email Already', () => {
        cy.visit("http://127.0.0.1:8000/register");
        cy.get('#username').type("user123",{ force: true });
        cy.get('#name').type('thirsya',{ force: true });
        cy.get('#email').type('user123@mail.com',{ force: true });
        cy.get('#password').type('user123',{ force: true });
        cy.get('#password-confirm').type('user123',{ force: true });
        cy.get('.btn').click({ force: true });
    });
    it('Can Not Register Because Password Confirmation Does Not Match.', () => {
        cy.visit("http://127.0.0.1:8000/register");
        cy.get('#username').type("userr",{ force: true });
        cy.get('#name').type('thirsya',{ force: true });
        cy.get('#email').type('userr@mail.com',{ force: true });
        cy.get('#password').type('user',{ force: true });
        cy.get('#password-confirm').type('user1234',{ force: true });
        cy.get('.btn').click({ force: true });
    })
})