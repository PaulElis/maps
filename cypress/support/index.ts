import coords from "../fixtures/coords";
import '@testing-library/cypress/add-commands';

Cypress.Commands.add(
  "visitWithMockLocation",
  (url: string, options?: Partial<Cypress.VisitOptions>) =>
    cy.visit(url, {
      ...options,
      onBeforeLoad(win) {
        cy.stub(win.navigator.geolocation, "getCurrentPosition").callsFake(cb =>
          cb({ coords })
        );
      }
    })
);

Cypress.Commands.add("mockListingsResponse", (fixture = "listings") =>
  cy.route2(
    {
      url: "https://api-g.weedmaps.com/discovery/v1/location",
      query: {
        "include[]": "regions.listings",
        latlng: `${coords.latitude},${coords.longitude}`
      }
    },
    {
      fixture,
      headers: {
        "access-control-allow-origin": "*"
      }
    }
  )
);

Cypress.Commands.add("mockRetailersResponse", (wmid, fixture) =>
  cy.route2(
    {
      url: `https://api-g.weedmaps.com/discovery/v1/listings/${wmid}`,
    },
    {
      fixture,
      headers: {
        "access-control-allow-origin": "*"
      }
    }
  )
);

Cypress.Commands.add("getByTestId", (selector, ...args) => {
  return cy.get(`[data-testid=${selector}]`, ...args);
});
