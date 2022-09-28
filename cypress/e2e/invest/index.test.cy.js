/// <reference types="cypress" />

describe('User can Open Login Page', () => {
    it('Index Home', () => {
        cy.visit("http://127.0.0.1:8000/");
        cy.get('.main-menu > ul > :nth-child(1) > a').should('have.text','Home');
    });
    it('Index Registasi', () => {
        cy.visit("http://127.0.0.1:8000/");
        cy.get(':nth-child(5) > .nav-link').click();
    });
    it('Index Login', () => {
        cy.visit("http://127.0.0.1:8000/");
        cy.get(':nth-child(4) > .nav-link').click();
    });
    it('Index Shop', () => {
        cy.visit("http://127.0.0.1:8000/");
        cy.get('.main-menu > ul > :nth-child(3) > a').should('have.text', 'Shop');
    });
    it('Index About', () => {
        cy.visit("http://127.0.0.1:8000/");
        cy.get('.main-menu > ul > :nth-child(2) > a').should('have.text', 'About');
    });
})