/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('PRD-2', () => {
  it('PRD-2', () => {
    cy.visit('https://example.cypress.io')
  })
})