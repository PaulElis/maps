describe("Hours", () => {
  describe("when clicking the locate me button", () => {
    it('can render retailer page without starting from homepage', () => {
      cy.server()
      cy.mockRetailersResponse(385959076, 'hours').as("getDoctor");
      cy.visitWithMockLocation("/doctors/385959076");
      cy.wait(['@getDoctor']);
      cy.getByTestId("full-star").should('exist')
      cy.url().should(
          'contain',
          'doctors/385959076',
        );
      cy.findByText("Arizona Medical Marijuana Certification Clinic").should('exist')
      cy.getByTestId('sunday').contains('sunday', { matchCase: false })
      cy.getByTestId('sunday-closed').contains('closed', { matchCase: false })
      cy.getByTestId('monday-open').contains('8:30am', { matchCase: false })
      cy.getByTestId('monday-close').contains('5:00pm', { matchCase: false })
      cy.getByTestId('tuesday-open').contains('8:30am', { matchCase: false })
      cy.getByTestId('tuesday-close').contains('5:00pm', { matchCase: false })
      cy.getByTestId('wednesday-open').contains('8:30am', { matchCase: false })
      cy.getByTestId('wednesday-close').contains('5:00pm', { matchCase: false })
      cy.getByTestId('thursday-open').contains('8:30am', { matchCase: false })
      cy.getByTestId('thursday-close').contains('5:00pm', { matchCase: false })
      cy.getByTestId('friday-open').contains('8:30am', { matchCase: false })
      cy.getByTestId('friday-close').contains('5:00pm', { matchCase: false })
      cy.getByTestId('saturday').contains('saturday', { matchCase: false })
      cy.getByTestId('saturday-closed').contains('closed', { matchCase: false })
    })
  });
});
