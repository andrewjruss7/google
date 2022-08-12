class GooglePage {
  elements = {
    inputGoogle: () => cy.get('[name="q"]'),
    assertRestaurants: () => cy.get('.YzSd'),
  };

  inputGoogleType() {
    return this.elements.inputGoogle();
  }

  assertSearchGoogle() {
    return this.elements.assertRestaurants();
  }
}

export default GooglePage;