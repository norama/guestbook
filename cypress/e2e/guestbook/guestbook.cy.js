/// <reference types="cypress" />

const addVisitor = () => {
  cy.get('[data-cy=name]').type('John Smith')
  cy.get('[data-cy=email]').type('john.smith@gmail.com')
  cy.get('[data-cy=agreement]').click()
  cy.get('[data-cy=submit]').click()
}

const assertVisitor = () => {
  cy.get('.MuiDataGrid-root').contains('John Smith')
}

const assertNoVisitor = () => {
  cy.get('.MuiDataGrid-root').contains('John Smith').should('not.exist')
}

describe('add-visitor-form', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('reset', () => {
    cy.get('[data-cy=name]').type('John Smith')
    cy.get('[data-cy=email]').type('john.smith@gmail.com')
    cy.get('[data-cy=agreement]').click()
    cy.get('[data-cy=reset]').click()
    cy.get('[data-cy="name"]').should('have.text', '')
    cy.get('[data-cy="email"]').should('have.text', '')
    cy.get('[data-cy="department"]').should('have.value', 'Marketing')
    cy.get('[data-cy=agreement]').should('not.be.checked')
  })

  it('validation', () => {
    cy.get('[data-cy=submit]').should('be.disabled')
    cy.get('[data-cy=agreement]').click()
    cy.get('[data-cy=submit]').should('not.be.disabled')
    cy.get('[data-cy=submit]').click()
    cy.get('form').contains('Email is required')
  })

  it('submit', () => {
    addVisitor()
    assertVisitor()
  })
})

describe('visitors-table', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('persistence', () => {
    addVisitor()
    assertVisitor()
    cy.reload()
    assertVisitor()
  })

  it('remove', () => {
    addVisitor()
    assertVisitor()
    cy.get('.MuiDataGrid-root input[type="checkbox"]').check()
    cy.get('[data-cy=remove]').click()
    assertNoVisitor()
  })
})
