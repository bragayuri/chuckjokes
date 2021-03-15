describe("Sample Test", () => {
  it("Basic Expect", () => {
    expect(true).to.equal(true);
  });
});

context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/");
    cy.viewport(2999, 2999);
  });

  it("has anchor tags with valid href", () => {
    cy.viewport(2999, 2999);
    cy.get("#norris-website-link").should("not.have.attr", "href", "#undefined");
  });

  it("click ar flag", () => {
    cy.get("#ar-flag").click();
    cy.contains("#main-title", "نكت السيد نوريس").should("be.visible");
  });

  it("click en flag", () => {
    cy.get("#en-flag").click();
    cy.contains("#main-title", "Mr. Norris Jokes").should("be.visible");
  });

  it("click pt flag", () => {
    cy.get("#pt-flag").click();
    cy.contains("#main-title", "Mr. Norris Jokes").should("be.visible");
  });

  it("click random joke", () => {
    cy.get("#clickable-random").click();
    cy.get("#clickable-random").click();
  });

  it("click categories", () => {
    cy.wait(2000);
    cy.get("#animal").click();
    cy.contains("#category-title", "Animal").should("be.visible");

    cy.get("#movie").click();
    cy.contains("#category-title", "Movie").should("be.visible");

    cy.get("#career").click();
    cy.contains("#category-title", "Career").should("be.visible");

    cy.get("#celebrity").click();
    cy.contains("#category-title", "Celebrity").should("be.visible");

    cy.get("#dev").click();
    cy.contains("#category-title", "Dev").should("be.visible");

    cy.get("#fashion").click();
    cy.contains("#category-title", "Fashion").should("be.visible");

    cy.get("#food").click();
    cy.contains("#category-title", "Food").should("be.visible");

    cy.get("#history").click();
    cy.contains("#category-title", "History").should("be.visible");

    cy.get("#money").click();
    cy.contains("#category-title", "Money").should("be.visible");

    cy.get("#music").click();
    cy.contains("#category-title", "Music").should("be.visible");

    cy.get("#political").click();
    cy.contains("#category-title", "Political").should("be.visible");

    cy.get("#religion").click();
    cy.contains("#category-title", "Religion").should("be.visible");

    cy.get("#science").click();
    cy.contains("#category-title", "Science").should("be.visible");

    cy.get("#sport").click();
    cy.contains("#category-title", "Sport").should("be.visible");

    cy.get("#travel").click();
    cy.contains("#category-title", "Travel").should("be.visible");

    cy.get("#explicit").click();
    cy.contains("#category-title", "Explicit").should("be.visible");
  });
});
