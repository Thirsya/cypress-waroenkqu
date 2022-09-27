/// <reference types="cypress" />

describe('User can Open Login Page', () => {
    it('Login Page Can Be Open and have correct spesification', () => {
        cy.visit("http://127.0.0.1:8000/");
        cy.get('.main-menu > ul > :nth-child(1) > a').should('have.text','Home');
        cy.get(':nth-child(4) > .nav-link').click();
        cy.get(':nth-child(5) > .nav-link').click();
        cy.get('.main-menu > ul > :nth-child(3) > a').should('have.text', 'Shop');
        cy.get('.main-menu > ul > :nth-child(2) > a').should('have.text', 'About');
    })
})