describe("Stars", () => {
  it("renders 0 stars", () => {
    cy.mockListingsResponse("stars/0stars");
    cy.visitWithMockLocation("/");
    cy.contains(/locate me/i).click();
    cy.getByTestId("empty-star").should("have.length", 5);
    cy.getByTestId("half-star").should("have.length", 0);
    cy.getByTestId("full-star").should("have.length", 0);
    cy.getByTestId("rating").should("have.text", "0.0");
  });

  it("renders 5 stars", () => {
    cy.mockListingsResponse("stars/5stars");
    cy.visitWithMockLocation("/");
    cy.contains(/locate me/i).click();
    cy.getByTestId("empty-star").should("have.length", 0);
    cy.getByTestId("half-star").should("have.length", 0);
    cy.getByTestId("full-star").should("have.length", 5);
    cy.getByTestId("rating").should("have.text", "5.0");
  });

  it("renders 0.1 stars", () => {
    cy.mockListingsResponse("stars/0-1stars");
    cy.visitWithMockLocation("/");
    cy.contains(/locate me/i).click();
    cy.getByTestId("empty-star").should("have.length", 5);
    cy.getByTestId("half-star").should("have.length", 0);
    cy.getByTestId("full-star").should("have.length", 0);
    cy.getByTestId("rating").should("have.text", "0.1");
  });

  it("renders 3.7 stars", () => {
    cy.mockListingsResponse("stars/3-7stars");
    cy.visitWithMockLocation("/");
    cy.contains(/locate me/i).click();
    cy.getByTestId("empty-star").should("have.length", 1);
    cy.getByTestId("half-star").should("have.length", 1);
    cy.getByTestId("full-star").should("have.length", 3);
    cy.getByTestId("rating").should("have.text", "3.7");
  });

  it("renders 3.75 stars", () => {
    cy.mockListingsResponse("stars/3-75stars");
    cy.visitWithMockLocation("/");
    cy.contains(/locate me/i).click();
    cy.getByTestId("empty-star").should("have.length", 1);
    cy.getByTestId("half-star").should("have.length", 0);
    cy.getByTestId("full-star").should("have.length", 4);
    cy.getByTestId("rating").should("have.text", "3.8");
  });

  it("renders 3.749 stars", () => {
    cy.mockListingsResponse("stars/3-749stars");
    cy.visitWithMockLocation("/");
    cy.contains(/locate me/i).click();
    cy.getByTestId("empty-star").should("have.length", 1);
    cy.getByTestId("half-star").should("have.length", 1);
    cy.getByTestId("full-star").should("have.length", 3);
    cy.getByTestId("rating").should("have.text", "3.7");
  });

  it("renders 4.4 stars", () => {
    cy.mockListingsResponse("stars/4-4stars");
    cy.visitWithMockLocation("/");
    cy.contains(/locate me/i).click();
    cy.getByTestId("empty-star").should("have.length", 0);
    cy.getByTestId("half-star").should("have.length", 1);
    cy.getByTestId("full-star").should("have.length", 4);
    cy.getByTestId("rating").should("have.text", "4.4");
  });

  it("renders 4.5 stars", () => {
    cy.mockListingsResponse("stars/4-5stars");
    cy.visitWithMockLocation("/");
    cy.contains(/locate me/i).click();
    cy.getByTestId("empty-star").should("have.length", 0);
    cy.getByTestId("half-star").should("have.length", 1);
    cy.getByTestId("full-star").should("have.length", 4);
    cy.getByTestId("rating").should("have.text", "4.5");
  });
});
