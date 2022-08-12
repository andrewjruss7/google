import GooglePage from '../pages/googlePage';

const data = require('../../fixtures/data.json');
describe('Search on Google', () => {
  const google = new GooglePage();
  beforeEach(() => {
    cy.visit('/');
  });

  data.forEach(data => {
    it('Search Rises', () => {
      google.inputGoogleType().
          type(data.text).
          type('{enter}').
          should('have.value', data.text);
      google.assertSearchGoogle().
          contains(data.assert).
          should('be.visible');
    });
  });
});