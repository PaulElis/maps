describe("Routing", () => {
  describe("when clicking the locate me button", () => {
    it("routes to a dispensary", () => {
      cy.server()
      cy.mockListingsResponse().as("getListings");
      cy.mockRetailersResponse(170903161, 'listings/dispensary').as("getDispensary");
      cy.visitWithMockLocation("/");
      cy.contains(/locate me/i).click();
      cy.wait(["@getListings"]);
      cy.findByText("Earth's Healing North").click();
      cy.wait(['@getDispensary']);
      cy.url().should(
          'contain',
          'dispensaries/170903161',
        );
      cy.findByText("Earth's Healing North").should('exist')
    });

    it('routes a delivery', () => {
      cy.server()
      cy.mockListingsResponse().as("getListings");
      cy.mockRetailersResponse(573353402, 'listings/delivery').as("getDelivery");
      cy.visitWithMockLocation("/");
      cy.contains(/locate me/i).click();
      cy.wait(["@getListings"]);
      cy.findByText("Earth's Healing Delivery").click();
      cy.wait(['@getDelivery']);
      cy.url().should(
          'contain',
          'deliveries/573353402',
        );
      cy.findByText("Earth's Healing Delivery").should('exist')
    })

    it('can navigate between the two', () => {
      cy.server()
      cy.mockListingsResponse().as("getListings");
      cy.mockRetailersResponse(170903161, 'listings/dispensary').as("getDispensary");
      cy.mockRetailersResponse(573353402, 'listings/delivery').as("getDelivery");
      cy.visitWithMockLocation("/");
      cy.contains(/locate me/i).click();
      cy.wait(["@getListings"]);
      cy.findByText("Earth's Healing North").click();
      cy.wait(['@getDispensary']);
      cy.url().should(
          'contain',
          'dispensaries/170903161',
        );
      cy.findByText("Earth's Healing North").should('exist')
      cy.go('back')
      cy.findByText("Earth's Healing Delivery").click();
      cy.wait(['@getDelivery']);
      cy.url().should(
          'contain',
          'deliveries/573353402',
        );
      cy.findByText("Earth's Healing Delivery").should('exist')
    })

    it('can render retailer page without starting from homepage', () => {
      cy.server()
      cy.mockRetailersResponse(573353402, 'listings/delivery').as("getDelivery");
      cy.visitWithMockLocation("/deliveries/573353402");
      cy.wait(['@getDelivery']);
      cy.url().should(
          'contain',
          'deliveries/573353402',
        );
      cy.findByText("Earth's Healing Delivery").should('exist')
    })
  });
});
