/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    visitWithMockLocation(url: string, options?: Partial<Cypress.VisitOptions>): Chainable<AUTWindow>
    mockListingsResponse(): Chainable<null>
  }
}