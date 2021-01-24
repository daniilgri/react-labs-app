/* eslint-disable no-undef */

describe("should login", () => {
  let email;
  before(() => {
    cy.visit("/login");

    email = "a.a@gmail.com";
  });

  after(() => {
    cy.get(".sc-eggNIi").should("be.visible").click();
    cy.get(".sc-dOSReg").should("be.visible").click();
    cy.visit("/login");
  });

  it("should login", () => {
    cy.get("#emailLogin").should("be.visible").type(email);
    cy.get("#passwordLogin").should("be.visible").type("admin123");
    cy.get(".sc-TmcTc").should("be.visible").click();

    cy.get(".sc-eggNIi").should("be.visible").click();
    cy.get('[href="/profile"]').should("be.visible").click();
    cy.get(".sc-idOhPF").contains(email);
  });
});
