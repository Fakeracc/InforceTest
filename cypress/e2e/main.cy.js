context("Table main", () => {
    // приложение должно открыться по адресу: http://localhost:3000
    it("Should open app", () => {
        cy.visit("http://localhost:3000");
    });
});