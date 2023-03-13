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
    cy.get('[name="destinationCity"]').click();
    cy.get('#headlessui-combobox-options-566').contains('KOTA MEDAN').click();
    cy.get('[name="typeProject"]').click();
    cy.get('#headlessui-combobox-options-1084').contains('Period').click();
    cy.get('[name="date"]').click();
    cy.get('.rdrDayToday > .rdrDayNumber').click();
    cy.get(':nth-child(2) > .rdrDays > .rdrDayEndOfMonth > .rdrDayNumber').click();
    cy.get('[name="containerType"]').click();
    cy.get('#headlessui-combobox-options-1089').contains('Kontainer Dry').click();
    cy.get('input[id="weight"]').type('24');
    cy.get('[name="comodity"]').click();
    cy.get('#headlessui-combobox-options-1097').contains('General Cargo').click();
    cy.get('[name="containerSize"]').click();
    cy.get('#headlessui-combobox-options-1109').contains('40 Feet').click();
    cy.get('[name="comodityDetail"]').click();
    cy.get('#headlessui-combobox-options-1113').contains('Consumer Goods').click();
    cy.get('.justify-end > .py-3').contains('Next').click();
    cy.wait(1000);

  });
});
