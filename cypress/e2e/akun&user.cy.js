describe("Edit Akun&User Page SISFWD", (dashboard, button) => {
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
        email.type("corporate@gmail.com")
        cy.wait(1000)
        //password
        const password = cy.get("input[name='password']");
        password.type("123456")
        //show password
        cy.get('label[for="password"]').find('svg[class*="cursor-pointer"]').click()
        //masuk
        button = cy.get("button")
        button.contains("Masuk").click()
        cy.get('[href="/customer/accounts"]').click()
        cy.get('.justify-between > .ml-2').click()
        cy.get('div[class*="w-[579px]"]')
        cy.wait(1000)
        const name = cy.get('div[class*="w-[579px]"]').find('input[name="name"]').clear()
        name.type('adam corporate')
        const number = cy.get('#mobile_number').clear()
        number.type('1235547856214')
        cy.get('[name="province"]').click()
        cy.contains('MALUKU').click()
        cy.wait(500)
})});