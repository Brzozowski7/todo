describe("Searchbar actions", () => {
  it("Can search by name and task on homepage", () => {
    //when
    cy.visit("localhost:3000");
    cy.get('[data-testid="search-input"]');
    cy.get('[data-testid="search-input"]').type("Roman");
    //then
    cy.get('[data-testid="main-page-todos-wrapper"]').should(
      "contain",
      "Roman"
    );
    cy.get('[data-testid="main-page-todos-wrapper"]').should(
      "contain",
      "Go to doctor"
    );
    cy.get('[data-testid="main-page-todos-wrapper"]').should(
      "contain",
      "Homework"
    );
    cy.get('[data-testid="main-page-todos-wrapper"]')
      .contains("Franek")
      .should("not.exist");
    //when
    cy.get('[data-testid="search-input"]').clear();
    cy.get('[data-testid="search-input"]');
    cy.get('[data-testid="search-input"]').type("Go shopping");
    //then
    cy.get('[data-testid="main-page-todos-wrapper"]').should("contain", "Ania");
    cy.get('[data-testid="main-page-todos-wrapper"]').should(
      "contain",
      "Franek"
    );
    cy.get('[data-testid="main-page-todos-wrapper"]')
      .contains("Roman")
      .should("not.exist");
  });
  it("Disabled on todo subpage", () => {
    //when
    cy.visit("localhost:3000/todo");
    //then
    cy.get('[data-testid="search-input"]').should("be.disabled");
  });
  it("Can search only by task on user subpage", () => {
    //when
    cy.visit("localhost:3000/user/Roman");
    cy.get('[data-testid="search-input"]').type("Homework");
    //then
    cy.get('[data-testid="user-todos-wrapper"]').contains("Homework");
    //when
    cy.get('[data-testid="search-input"]').clear();
    cy.get('[data-testid="search-input"]').type("Roman");
    //then
    cy.get('[data-testid="user-todos-wrapper"]')
      .contains("Homework")
      .should("not.exist");
  });
  it("Searchbar not visible on mobile", () => {
    cy.visit("localhost:3000");
    cy.viewport(500, 500);
    cy.get('[data-testid="search-input"]').should("not.be.visible");
  });
  it("Searchbar toggles after icon click on mobile", () => {
    //when
    cy.visit("localhost:3000");
    cy.viewport(500, 500);
    //then
    cy.get('[data-testid="search-input"]').should("not.be.visible");
    //when
    cy.get(".sc-jSMfEi > .svg-inline--fa").click();
    //then
    cy.get('[data-testid="search-input"]').should("be.visible");
    //when
    cy.get(".sc-jSMfEi > .svg-inline--fa").click();
    //then
    cy.get('[data-testid="search-input"]').should("not.be.visible");
  });
});
