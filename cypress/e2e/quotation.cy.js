describe("Edit Akun&User Page SISFWD", (dashboard, button) => {
  it("Visit Login SISFWD", () => {
    cy.visit("https://trial.rpl.id/");
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
    email.type("rplkeysuper@gmail.com");
    //password
    const password = cy.get("input[name='password']");
    password.type("rpl12345");
    //show password
    cy.get('label[for="password"]')
      .find('svg[class*="cursor-pointer"]')
      .click();
    //masuk
    button = cy.get("button");
    button.contains("Masuk").click();
    cy.wait(1000);
  });
  it("Quotation", ()=>{
    cy.get('.z-20')
    cy.get('.block > .w-6').click();
    cy.wait(1000);
    cy.get('[href="/dashboard/quotation"]').click();
    cy.get('[href="/dashboard/quotation/create/1"]').click();
    cy.get('[name="customer"]').click();
    cy.get('[role="listbox"]').contains('PT . Angsa Logistik').click();
    cy.get('input[id="project_name"]').type('Jakarta-Medan');
    cy.get('[name="deliveryService"]').click();
    cy.get('[role="listbox"]').contains('Door To Door').click();
    cy.get('[name="originCity"]').click();
    cy.get('#headlessui-combobox-option-467').contains('KOTA ADM. JAKARTA TIMUR').click(); 
    // cy.get('[role="listbox"]').contains('KOTA ADM. JAKARTA TIMUR');
    // cy.wait(1000);
    // cy.get(".ml-auto > .text-white").click();
    // cy.get('[name="m_service_id"]').click();
    // cy.get('#headlessui-combobox-options-22').contains('Door To Door').click();
    // cy.get('[name="origin_city_id"]').click();
    // cy.get('[aria-labelledby="headlessui-combobox-button-5"]').contains('KOTA ADM. JAKARTA BARAT').click();
    // cy.get('[name="destination_city_id"]').click();
    // cy.get('[aria-labelledby="headlessui-combobox-button-7"]').contains('KOTA ADM. JAKARTA SELATAN').click();
    // cy.get('[name="date"]').click();
    // cy.get('.rdrMonths > :nth-child(1)').contains('16').click();
    // cy.get('[name = "origin_city_id"]').click();

  });
});
