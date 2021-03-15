context("Viewport", () => {
  beforeEach(() => {
    cy.visit("https://chuckjokes.vercel.app/");
  });

  it("cy.viewport() - set the viewport size and dimensions", () => {
    cy.viewport(2999, 2999);
    cy.get("#navbar-container").should("be.visible");
  });

  it("cy.viewport() - set mobile viewport size and dimensions", () => {
    cy.viewport(400, 400);
    cy.get("#mobile-navbar").should("be.visible");
  });
});
