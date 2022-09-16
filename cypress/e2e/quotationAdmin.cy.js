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
      cy.wait(500);
      cy.get('#headlessui-combobox-options-26').contains('RIRI').click();
      cy.get("[name='type']").click();
      cy.wait(500);
      cy.get('#headlessui-combobox-options-33').contains('Offline').click();
      cy.get("[name='deliveryService']").click();
      cy.wait(500);
      cy.get('#headlessui-combobox-options-37').contains('Door To Door').click();
      cy.get("[name='originCity']").click();
      cy.wait(500);
      cy.get('#headlessui-combobox-options-43').contains('KOTA ADM. JAKARTA SELATAN').click();
      cy.get("[name='destinationCity']").click();
      cy.wait(500);
      cy.get('#headlessui-combobox-options-559').contains('KOTA ADM. JAKARTA TIMUR').click();
      cy.get("[name='date']").click();
      cy.wait(500);
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
      cy.get('.flex > .py-3').contains('Next').click();
    });
    it("Quotation STEP 2", ()=>{
       const buttonLokasi = cy.get(".text-secondary.flex.mt-4").first();
       buttonLokasi.contains("Tambah Lokasi").click();
       const namaLokasi = cy.get("[name='name']");
       namaLokasi.type('Setiabudi');
       cy.wait(500);
       const province = cy.get("[name=province]").click();
       province.type('DKI');
       cy.get('.px-7').contains('DKI JAKARTA').click();
       const city = cy.get("[name=city]").click();
       city.type('KOTA ADM ');
       cy.get('.px-7').contains('KOTA ADM. JAKARTA SELATAN').click();
       cy.wait(500);
       const address = cy.get("[name=address]").click();
       address.type('setiabudi');
       const aturLokasi = cy.get("[type='button']");
       aturLokasi.contains("Atur Lokasi").click();
       cy.get("[placeholder='Cari Lokasi']").type('setiabudi{enter}');
       cy.wait(500);
    //    const search =  cy.get('.mb-6 > .ml-2').click();
    //    search.contains("Search").click();
       const fixLokasi = cy.get('.px-5.py-3.font-semibold.text-white.bg-secondary.rounded-xl');
       fixLokasi.contains("Terapkan Lokasi").click();
       const submit = cy.get("[type='submit']");
       submit.contains('Save').click();
       const button2 = cy.get(".text-secondary.flex.mt-4").last();
       button2.contains("Tambah Lokasi").click();
       cy.wait(500);
       const namaLokasi2 = cy.get("[name='name']");
       namaLokasi2.type('Timur');
       cy.wait(500);
       const province2 = cy.get("[name=province]").click();
       province2.type('DKI');
       cy.get('form > :nth-child(1)').contains('DKI JAKARTA').click();
       const city2 = cy.get("[name=city]").click();
       city2.type('KOTA ADM.');
       cy.get('.px-7').contains('KOTA ADM. JAKARTA TIMUR').click();
       cy.wait(500);
       const address2 = cy.get("[name=address]").click();
       address2.type('timur');
       cy.wait(500);
       const aturLokasi2 = cy.get("[type='button']");
       aturLokasi2.contains("Atur Lokasi").click();
       cy.get("[placeholder='Cari Lokasi']").type('cakung jakarta timur{enter}');
       cy.wait(500);
       const fixLokasi2 = cy.get('.px-5.py-3.font-semibold.text-white.bg-secondary.rounded-xl');
       fixLokasi2.contains("Terapkan Lokasi").click();
       cy.wait(500);
       const submit2 = cy.get("[type='submit']");
       submit2.contains("Save").click();
       cy.get('.col-span-8 > .py-5').find('.justify-end > .py-3').contains('Next').click();
      });
      // it("Quotation STEP 3", () => {
      //   const shipperName = cy.get("[name='shipperName']")
      //   shipperName.type('test')
      // });
      // it("Quotation STEP 4", () => {

      // });
  });
  