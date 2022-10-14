describe("App test", () => {
  it("adding todo", function () {
    //when
    cy.visit("localhost:3000");
    cy.get('[data-testid="mainPage-addTodoBtn"]').click();
    cy.get('[data-testid="task-input"]').type("TestTodo");
    cy.get('[data-testid="name-input"]').type("TestUser");
    cy.get('[data-testid="deadline-input"]').click().type("2022-11-25");
    cy.get('[data-testid="description-textarea"]')
      .click()
      .type("TestDescription");
    cy.get('[data-testid="addTodoBtn"]').click();
    //then
    cy.get('[data-testid="AddTodo-form-wrapper"]')
      .last()
      .contains("Successfully added Todo");
    cy.get('[data-testid="main-page-todos-wrapper"]')
      .contains("h2", "TestTodo")
      .should("exist");
    cy.get('[data-testid="main-page-todos-wrapper"]')
      .contains("TestUser")
      .should("exist");
  });
  describe("todos icons functionality", () => {
    beforeEach(() => {
      cy.visit("localhost:3000");
      cy.get('[data-testid="main-page-todos-wrapper"]')
        .children()
        .contains("h2", "TestTodo")
        .parent()
        .parent()
        .as("TestTodoWrapper");
    });
    it("toggle todo as complete/uncomplete", () => {
      //when
      cy.get("@TestTodoWrapper").find('[data-testid="complete-icon"]').click();
      //then
      cy.get("@TestTodoWrapper").should(
        "have.css",
        "background-color",
        "rgb(0, 255, 0)"
      );
      //when
      cy.get("@TestTodoWrapper").find('[data-testid="complete-icon"]').click();
      //then
      cy.get("@TestTodoWrapper").should(
        "have.css",
        "background-color",
        "rgb(242, 242, 242)"
      );
    });

    it("toggle todo as urgent/not urgent", () => {
      //when
      cy.get("@TestTodoWrapper").find('[data-testid="urgent-icon"]').click();
      //then
      cy.get("@TestTodoWrapper").should(
        "have.css",
        "background-color",
        "rgb(255, 0, 0)"
      );
      //when
      cy.get("@TestTodoWrapper").find('[data-testid="urgent-icon"]').click();
      //then
      cy.get("@TestTodoWrapper").should(
        "have.css",
        "background-color",
        "rgb(242, 242, 242)"
      );
    });
    it("removing todo", () => {
      //when
      cy.get("@TestTodoWrapper").find('[data-testid="remove-icon"]').click();
      //then
      cy.get('[data-testid="main-page-todos-wrapper"]')
        .children()
        .contains("h2", "TestTodo")
        .should("not.exist");
    });
  });
});

export {};
