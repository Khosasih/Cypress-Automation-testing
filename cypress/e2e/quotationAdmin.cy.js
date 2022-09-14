describe("SISFWD", (dashboard, button) => {
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
    it("Quotation STEP 1", ()=>{
      cy.get('[href="/dashboard/quotation"]').click();
      cy.wait(2000);
      cy.get('[href="/dashboard/quotation/create/1"]').click();
      cy.get("[name='customer']").click();
      cy.get('#headlessui-combobox-options-26').contains('RIRI').click();
      cy.get("[name='type']").click();
      cy.get('#headlessui-combobox-options-33').contains('Offline').click();
      cy.get("[name='deliveryService']").click();
      cy.get('#headlessui-combobox-options-37').contains('Door To Door').click();
      cy.get("[name='originCity']").click();
      cy.get('#headlessui-combobox-options-43').contains('KOTA ADM. JAKARTA SELATAN').click();
      cy.get("[name='destinationCity']").click();
      cy.get('#headlessui-combobox-options-559').contains('KOTA ADM. JAKARTA TIMUR').click();
      cy.get("[name='date']").click();
      cy.get('.rdrDayToday > .rdrDayNumber').click();
      cy.get(':nth-child(1) > .rdrDays > .rdrDayEndOfMonth > .rdrDayNumber').click();
      cy.get("[name='containerType']").click();
      cy.get('#headlessui-combobox-options-1075').contains('Container Dry').click();
      const weight = cy.get("input[name='weight']").click();
      weight.type('24');
      const qty = cy.get("input[name='qty']").clear();
      qty.type('10');
      cy.get("input[name='comodity']").click();
      cy.get('#headlessui-combobox-options-1080').contains('General Cargo').click();
      cy.get("[name='containerSize']").click();
      cy.get('#headlessui-combobox-options-1092').contains('40 Feet').click();
      cy.get("[name='comodityDetail']").click();
      cy.get('#headlessui-combobox-options-1096').contains('Consumer Goods').click();
      cy.get("[name='is_soc']").click();
      cy.get('#headlessui-combobox-options-1103').contains('SOC').click();
      cy.get('[id="exim"]').check();
    //   cy.get('[id="food"]').check();
      cy.get('.flex > .py-3').contains('Next').click();
    });
    it("Quotation STEP 2", ()=>{
    //    cy.get('.col-span-8 > .py-5 > :nth-child(1)');
       const button = cy.get(".text-secondary.flex.mt-4").first();
       button.contains("Tambah Lokasi").click();
       const namaLokasi = cy.get("[name='name']");
       namaLokasi.type('Setiabudi');
       const province = cy.get("[name=province]").click();
       province.type('DKI');
       cy.get('#headlessui-combobox-option-1127').contains('DKI JAKARTA').click();
       const city = cy.get("[name=city]").click();
       city.type('KOTA ADM ');
       cy.get('#headlessui-combobox-option-1157').contains('KOTA ADM. JAKARTA SELATAN').click();
       const address = cy.get("[name=address]").click();
       address.type('setiabudi');
       const aturLokasi = cy.get("[type='button']");
       aturLokasi.contains("Atur Lokasi").click();
       cy.get("[placeholder='Cari Lokasi']").type('setiabudi').click();
    //    const search =  cy.get('.mb-6 > .ml-2').click();
    //    search.contains("Search").click();
    //    const fixLokasi = cy.get('.w-\[957px\] > .justify-end > .text-white');
    //    fixLokasi.contains("Terapkan Lokasi").click();
    //    cy.get('#headlessui-combobox-option-1116').contains('DKI JAKARTA').click();
    //    cy.get('.col-span-8 > .py-5 > :nth-child(2)');
      });
  });
  