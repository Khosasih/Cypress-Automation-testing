describe("Edit Akun&User Page SISFWD", (dashboard, button) => {
  it("Visit Login SISFWD", () => {
    cy.visit("https://dev-fe.sisfwd.com");
  });
  it("Contains Close X", () => {
    // close popup
    cy.wait(3000);
    cy.get(".xbutton").click();
    cy.wait(1000);
  });
  it("Login button redirect to Login page", () => {
    // button Login
    cy.get('a[href="/login"]').eq(0).click();
  });
  it("Login", () => {
    //email
    const email = cy.get("input[name='email']");
    email.type("corporate@gmail.com");
    cy.wait(1000);
    //password
    const password = cy.get("input[name='password']");
    password.type("123456");
    //show password
    cy.get('label[for="password"]')
      .find('svg[class*="cursor-pointer"]')
      .click();
    //masuk
    button = cy.get("button");
    button.contains("Masuk").click();
    cy.wait(500);
  });
  it("Quotation", ()=>{
    cy.get('[href="/customer/quotation"]').click();
    cy.wait(1000);
    cy.get(".ml-auto > .text-white").click();
    cy.get('#headlessui-combobox-input-4').click();
    cy.get('#headlessui-combobox-options-22')
    cy.get('#headlessui-combobox-option-23 > .block').click()
    cy.get('#headlessui-combobox-input-6').click();
    cy.contains('KAB TIMOR TENGAH SELATAN').click();
  });
});
