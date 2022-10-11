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
      email.type("superadmin@gmail.com");
      cy.wait(1000);
      //password
      const password = cy.get("input[name='password']");
      password.type("123123");
      //show password
      cy.get('label[for="password"]')
        .find('svg[class*="cursor-pointer"]')
        .click();
      //masuk
      button = cy.get("button");
      button.contains("Masuk").click();
      cy.wait(500);
    });
    it("Bidding", ()=>{
     cy.get('[href="/dashboard/bidding"]').click();
      cy.wait(100);
      cy.get('.ml-auto > .bg-secondary').contains("Create").click();
      cy.wait(100);
      const customer = cy.get("[name='customer']");
      customer.click();
      cy.get('#headlessui-combobox-options-24').contains("PT. Lion Wings").click();
      const type = cy.get("[name='type']");
      type.click();
      cy.get('#headlessui-combobox-options-29').contains("Offline").click();
      const layananPengiriman = cy.get("[name='deliveryService']");
      layananPengiriman.click();
      cy.get('#headlessui-combobox-options-33').contains("Door To Door").click();
      const kotaAsal = cy.get("[name='originCity']");
      kotaAsal.click();
      cy.get('#headlessui-combobox-options-39').contains("KOTA ADM. JAKARTA BARAT").click();
      const kotaTujuan = cy.get("[name='destinationCity']");
      kotaTujuan.click();
      cy.get('#headlessui-combobox-options-555').contains("KOTA MEDAN").click();
      const periodePengiriman = cy.get("[name='date']");
      periodePengiriman.click();
      cy.get('.rdrDayToday > .rdrDayNumber').click();
      cy.get(':nth-child(1) > .rdrDays > .rdrDayEndOfMonth > .rdrDayNumber').click();
      const jenisContainer = cy.get("[name='containerType']");
      jenisContainer.click();
      cy.get('#headlessui-combobox-options-1071').contains("Kontainer Dry").click();
      let Ton = 24;
      cy.get("[id='weight']").type(Ton);
      let Qty = 24;
      cy.get("[id='qty']").type(Qty);
      const comodity = cy.get("[name='comodity']");
      comodity.click();
      cy.get('#headlessui-combobox-options-1079').contains("General Cargo").click();
      const ukuranKontainer = cy.get("[name='containerSize']");
      ukuranKontainer.click();
      cy.get('#headlessui-combobox-options-1091').contains("40 Feet").click();
      const comodityDetail = cy.get("[name='comodityDetail']");
      comodityDetail.click();
      cy.get('#headlessui-combobox-options-1095').contains("Consumer Goods").click();
      cy.get("[id='soc']")
      cy.get("[id='food']")
      cy.get("[id='exim']").check();
      button = cy.get("button");
      button.contains("Next").click();
    });
  });
  