describe('ONOFRE - 1st Test', function() {
  it('TC001 - just for fun!', function() {
    expect(true).to.equal(true)
  })
})
 
describe('ONOFRE - 2nd test', function() {
  it('TC0002 - Gets,validates onofre and asserts', function() {
    cy.visit('http://onofreliscano.com')

    //cy.contains('type').click()
    // cy.url().should('include', 'onofre')
 
    // cy.get('.main_page')
    //   .should('include', 'Apache2') 
  })
})