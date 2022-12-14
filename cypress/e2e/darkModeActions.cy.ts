describe("dark mode test", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });
  it("toggles darkmode", () => {
    cy.get("header").within(() => {
      cy.contains("title", "moon-icon")
        //when
        .click({ force: true })
        //then
        .should("contain", "sun-icon");
      cy.contains("title", "sun-icon")
        //when
        .click({ force: true })
        //then
        .should("contain", "moon-icon");
    });
  });
  it("remebers dark mode after refresh", () => {
    //when
    cy.get("header").contains("title", "moon-icon").click({ force: true });
    cy.reload();
    //then
    cy.get("header").should("contain", "sun-icon");
  });
  it("remebers light mode after refresh", () => {
    //when
    cy.get("header").contains("title", "moon-icon").click({ force: true });
    cy.get("header").contains("title", "sun-icon").click({ force: true });
    cy.reload();
    //then
    cy.get("header").should("contain", "moon-icon");
  });
  it("remebers dark mode after changing pages", () => {
    //when
    cy.get("header").contains("title", "moon-icon").click({ force: true });
    cy.visit("localhost:3000/user/Roman");
    //then
    cy.get("header").should("contain", "sun-icon");
  });
  it("remebers light mode after changing pages", () => {
    //when
    cy.get("header").contains("title", "moon-icon").click({ force: true });
    cy.get("header").contains("title", "sun-icon").click({ force: true });
    cy.visit("localhost:3000/user/Roman");
    //then
    cy.get("header").should("contain", "moon-icon");
  });
});
export {};
