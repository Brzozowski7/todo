describe("router test", () => {
  it("logo click takes to homepage", () => {
    //when
    cy.visit("localhost:3000/user/Roman");
    cy.get("header").contains("Todoly").click();
    //then
    cy.location("pathname").should("eq", "/");
  });
  it("click on todo takes to todo page (mainpage)", () => {
    //when
    cy.visit("localhost:3000/");
    cy.get(':nth-child(1) > [data-testid="todo-info-container"] > p').click();
    //then
    cy.location("pathname").should("match", /\/todo/);
  });
  it("takes to users todos on All Todos of click (todopage)", () => {
    //when
    cy.visit("localhost:3000/todo/7Zl688PyD0leVPvfzW7x");
    cy.get('[data-testid="allTodos-link"]').click();
    //then
    cy.location("pathname").should("match", /\/user/);
  });
});
export {}