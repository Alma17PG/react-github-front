/// <reference types="Cypress" />
/// <reference types="cypress-react-selector" />

const serverUrl = Cypress.env('serverUrl');

describe('User search Mock', () => {
  beforeEach(() => {
    cy.fixture('users.json').as('usersJson');

    cy.visit('/users');
    cy.waitForReact();
  });

  it('should to be ok', () => {
    const userName = 'tetris';

    // Search
    cy.log('Search');

    cy
      .get('input[type="text"]')
      .type(userName)
      .should('have.value', userName);

    cy
      .intercept('GET', `${serverUrl}/users?q=tetris&page=1&per_page=10`, '@usersJson')
      .as('users');
  });
});
