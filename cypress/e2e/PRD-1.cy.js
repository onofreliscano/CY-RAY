/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('PRD-1', () => {
  it('PRD-1', () => {
    cy.visit('https://example.cypress.io')
  })
})