/// <reference types="cypress" />

describe('User can Open Barang Page', () => {
    it('Login Page Can Be Open (Test)', () => {
        cy.visit("http://127.0.0.1:8000/login");
        cy.get(':nth-child(2) > .col-md-4').should('have.text','Username');
        cy.get(':nth-child(3) > .col-md-4').should('have.text','Password');
        cy.get('.btn-primary').contains("Login").and("be.enabled");
        cy.get('#username').type("admin123",{ force: true });
        cy.get('#password').type('admin123',{ force: true });
        cy.get('.btn-primary').click({ force: true });
        cy.get('.swal2-confirm').click({ force: true });
    });
    it('CRUD Kategori', () => {
        cy.visit("http://127.0.0.1:8000/login");
        cy.get(':nth-child(2) > .col-md-4').should('have.text','Username');
        cy.get(':nth-child(3) > .col-md-4').should('have.text','Password');
        cy.get('.btn-primary').contains("Login").and("be.enabled");
        cy.get('#username').type("admin123",{ force: true });
        cy.get('#password').type('admin123',{ force: true });
        cy.get('.btn-primary').click({ force: true });
        cy.get('.swal2-confirm').click({ force: true });
        //create
        cy.get(':nth-child(3) > .nav-link > p').click();
        cy.get('.card-title').should('have.text',' Tabel Kategori Produk ');
        cy.get('.btn-danger').should('have.text','Refresh');
        cy.get('.btn-warning').should('have.text','Tambah');
        cy.get('tr > :nth-child(1)').contains("No").and("be.visible");
        cy.get('tr > :nth-child(2)').contains("Nama").and("be.visible");
        cy.get('tr > :nth-child(3)').contains('Aksi').and('be.visible');
        cy.get('.btn-warning').click({ force: true });
        cy.get('.card-header').contains('Tambah Kategori').and('be.visible');
        cy.get('label').should('have.text','Nama Kategori');
        cy.get('#nama').type("Makanan Ringan",{ force: true });
        cy.get('.btn').click({ force: true });
        cy.get('.swal2-confirm').click({ force: true });
        cy.get('a.btn-danger').click({ force: true });
        //update
        cy.get('.btn-primary').click({ force: true });
        cy.get('.card-header').contains('Edit Kategori').and('be.visible');
        cy.get('label').contains('Nama').and('be.visible');
        cy.get('#nama').type("Minuman",{ force: true });
        cy.get('.btn').click({ force: true });
        cy.get('.swal2-confirm').click({ force: true });
        cy.get('a.btn-danger').click({ force: true });
        //delete
        cy.get('form > .btn-danger').click();
        cy.get('.swal2-confirm').click();

    })
})