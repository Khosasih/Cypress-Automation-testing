describe("Login Page SISFWD", () => {
    it("Visit Login SISFWD", () => {
        cy.visit("https://dev-fe.sisfwd.com");
    });
    it("Contains Close X", () => {
        // close popup
        cy.wait(3000)
        cy.get('.xbutton').click()
        cy.wait(1000)

    });
    it("Login button redirect to Login page", () => {
        // button Login
        cy.get('a[href="/login"]').eq(0).click()
    });
    it("Login", () => {
        //email
        const email = cy.get("input[name='email']");
        email.type("adminsuper@gmail.com")
        cy.wait(1000)
        //password
        const password = cy.get("input[name='password']");
        password.type("123123")
        //masuk
        const button = cy.get("button")
        button.contains("Masuk").click()
        cy.get('.swal2-popup').contains("User Tidak Terdaftar!").should("be.visible")
    });
});