it("visits the app", () => {
  cy.visit("/");
});

describe("test stations list", () => {
  it("toggles stations", () => {
    cy.get(`[data-testid="station-main"]`).first().click();

    cy.get("li").first().find("[data-testid=btn-minus]").should("exist");
    cy.get("li").first().find("[data-testid=btn-plus]").should("exist");
    cy.get("li").first().find("[data-testid=station-img]").should("exist");

    cy.get(`[data-testid="station-main"]`).first().click();

    cy.get("li").first().find("[data-testid=btn-minus]").should("not.exist");
    cy.get("li").first().find("[data-testid=btn-plus]").should("not.exist");
    cy.get("li").first().find("[data-testid=station-img]").should("not.exist");
  });

  it("displays selected station on widget footer", () => {
    cy.get(`[data-testid="footer-title"]`).should("not.exist");
    cy.get(`[data-testid="selected-station"]`).should("not.exist");

    cy.get(`[data-testid="station-main"]`).first().click();

    cy.get(`[data-testid="footer-title"]`).should("exist");
    cy.get(`[data-testid="selected-station"]`).should("exist");

    cy.get(`[data-testid="station-main"]`).first().click();

    cy.get(`[data-testid="footer-title"]`).should("not.exist");
    cy.get(`[data-testid="selected-station"]`).should("not.exist");
  });

  it("click on expanded station info does not toggle it", () => {
    cy.get("li").first().click();

    cy.get("li").first().find("[data-testid=btn-minus]").should("exist");
    cy.get("li").first().find("[data-testid=btn-plus]").should("exist");
    cy.get("li").first().find("[data-testid=station-img]").should("exist");

    cy.get("[data-testid=station-expanded]").click();

    cy.get("li").first().find("[data-testid=btn-minus]").should("exist");
    cy.get("li").first().find("[data-testid=btn-plus]").should("exist");
    cy.get("li").first().find("[data-testid=station-img]").should("exist");
  });
});
