describe('dashboard', () => {
beforeEach(() => {
  cy.intercept('GET', 'http://localhost:3001/api/v1/orders', {
    statusCode: 200,
    fixture: 'orders.json'
  })
  .visit('http://localhost:3000/')
})

  it('should display 3 orders on page load', () => {
    cy.get('h1').contains('Burrito Builder')
    .get('input').should('be.visible')
    .get('[name="beans"]').contains('beans')
    .get('[name="steak"]').contains('steak')
    .get('[name="carnitas"]').contains('carnitas')
    .get('[name="sofritas"]').contains('sofritas')
    .get('[name="lettuce"]').contains('lettuce')
    .get('[name="queso fresco"]').contains('queso fresco')
    .get('[name="pico de gallo"]').contains('pico de gallo')
    .get('[name="hot sauce"]').contains('hot sauce')
    .get('[name="guacamole"]').contains('guacamole')
    .get('[name="jalapenos"]').contains('jalapenos')
    .get('[name="cilantro"]').contains('cilantro')
    .get('[name="sour cream"]').contains('sour cream')
    .get('p').contains('Order: Nothing selected')
    .get(':nth-child(15)').contains('Submit Order')
    .get('section > :nth-child(1)').contains('h3', 'Pat')
    .get('section > :nth-child(1)').contains('li', 'beans')
    .get('section > :nth-child(1)').contains('li', 'lettuce')
    .get('section > :nth-child(1)').contains('li', 'carnitas')
    .get('section > :nth-child(1)').contains('li', 'queso fresco')
    .get('section > :nth-child(1)').contains('li', 'jalapeno')
  })
})