it("visits the app", () => {
  cy.visit("/");
});

describe("test stations list", () => {
  it("displays stations list", () => {
    cy.get("ul").children().should("have.length", 5);
  });

  it("toggles stations", () => {
    cy.get("li")
      .first()
      .then($li => {
        cy.wrap($li).find("button").should("not.exist");
        cy.wrap($li).find("img").should("not.exist");

        cy.wrap($li).click();

        cy.wrap($li).find("button").should("exist");
        cy.wrap($li).find("img").should("exist");

        cy.wrap($li).click();

        cy.wrap($li).find("button").should("not.exist");
        cy.wrap($li).find("img").should("not.exist");
      });
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

  it("displays selected station on widget footer", () => {
    cy.get(`[data-testid="widget-footer"]`).children().should("not.exist");

    cy.get("li").first().click();

    cy.get(`[data-testid="widget-footer"]`).then($footer => {
      cy.wrap($footer).children().should("exist");
      cy.wrap($footer).contains("currently playing", { matchCase: false });
      cy.wrap($footer).contains("putin fm", { matchCase: false });
    });

    cy.get("li").first().click();

    cy.get(`[data-testid="widget-footer"]`).children().should("not.exist");
  });
});
