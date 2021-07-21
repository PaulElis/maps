describe("List view", () => {
  describe("when clicking the locate me button", () => {
    it("makes a request to the correct API endpoint", () => {
      cy.mockListingsResponse().as("getListings");
      cy.visitWithMockLocation("/");
      cy.contains(/locate me/i).click();
      cy.wait(["@getListings"]);
    });

    it("displays the deliveries heading", () => {
      cy.mockListingsResponse();
      cy.visitWithMockLocation("/");
      cy.contains(/locate me/i).click();
      cy.contains(/deliveries/i);
    });

    it("displays the dispensaries heading", () => {
      cy.mockListingsResponse();
      cy.visitWithMockLocation("/");
      cy.contains(/locate me/i).click();
      cy.contains(/dispensaries/i);
    });

    it("displays the doctors heading", () => {
      cy.mockListingsResponse();
      cy.visitWithMockLocation("/");
      cy.contains(/locate me/i).click();
      cy.contains(/doctors/i);
    });
  });
});
