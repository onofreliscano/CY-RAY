describe('ONOFRE - 1st Test', function() {
  it('BDJC-31', function() {
    expect(true).to.equal(true)
  })
})
 
describe('ONOFRE - 2nd test', function() {
  it('BDJC-32', function() {
    cy.visit('http://onofreliscano.com')

    //cy.contains('type').click()
    // cy.url().should('include', 'onofre')
 
    // cy.get('.main_page')
    //   .should('include', 'Apache2') 
  })

  it('BDJC-33', function() {
    cy.visit('http://onofreliscano.com')

    //cy.contains('type').click()
    // cy.url().should('include', 'onofre')
 
    // cy.get('.main_page')
    //   .should('include', 'Apache2') 
  })
})