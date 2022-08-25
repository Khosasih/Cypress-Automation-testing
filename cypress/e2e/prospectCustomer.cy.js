describe("Login Page SISFWD", (dashboard,button) => {
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
        email.type("superadmin@gmail.com")
        cy.wait(1000)
        //password
        const password = cy.get("input[name='password']");
        password.type("123123")
        //show password
        cy.get('label[for="password"]').find('svg[class*="cursor-pointer"]').click()
        //masuk
        button = cy.get("button")
        button.contains("Masuk").click()
    });
    it("Dashboard",()=>{
        dashboard = cy.get('.pt-20').children();
        // dashboard.get('[href="/dashboard"]')
        // dashboard.get('[href="/dashboard/subscribe"]')
        // dashboard.get('[href="/dashboard/projection"]')
        // dashboard.get('[href="/dashboard/quotation"]')
        // dashboard.get('[href="/dashboard/project"]')
        // dashboard.get('[href="/dashboard/payment"]')
        // dashboard.get('[href="/dashboard/sales"]')
        // dashboard.get('[href="/dashboard/job-order"]')
        // dashboard.get('[href="/dashboard/spe-container"]')
        // dashboard.get('[href="/dashboard/accounts"]')
        // dashboard.get('[href="/dashboard/schedule"]')
        // dashboard.get('[href="/dashboard/user-customer"]')
        // dashboard.get('[href="/dashboard/prospect-customer"]')
        // dashboard.get('[href="/dashboard/company-profile"]')
        // dashboard.get('[href="/dashboard/Article"]')
        // dashboard.get('[href="/dashboard/master-data"]')
        // dashboard.get('[href="/dashboard/promo"]')
        // dashboard.get('[href="/dashboard/setting"]')
        dashboard.get('[href="/dashboard/prospect-customer"]').click()
        cy.wait(2000)
    });
    it("Prospect Customer",()=>{
        cy.get('.ml-auto > .text-white').click()
        cy.get(':nth-child(1) > :nth-child(1) > .mb-3').click()
        cy.wait(1000)
        cy.get('input[id="inputFile"]').selectFile('cypress/e2e/images/jengjeng.jpg')
        cy.get('[name="source"]').click()
        cy.get('#headlessui-combobox-options-26').contains("Email").click()
        cy.wait(500)
        const name = cy.get('[name="name"]')
        name.type('Adam Maulana')
        const email = cy.get('[name="email"]')
        email.type('adammaulanakh1@gmail.com')
        const phoneNumber = cy.get('[name = "mobile_number"]')
        phoneNumber.type('54621457845')
        cy.get('[name="province_id"]').click()
        cy.get('#headlessui-combobox-options-33').contains('MALUKU').click()
        cy.get('[name="city_id"]').click()
        cy.get('#headlessui-combobox-options-69').contains('TUAL').click()
        cy.get('[name="district_id"]').click()
        cy.get('#headlessui-combobox-options-82').contains('TAYANDO TAM').click()
        cy.get('[name="vilage_id"]').click()
        cy.get('#headlessui-combobox-options-89').contains('TAYANDO YAMTEL').click()
        const alamat = cy.get('[name = "address" ]')
        alamat.type('Jl. TAYANDO YAMTEL 3 ')
        const delegation = cy.get('[name="pic[0][pic_name]"]')
        delegation.type('Akbar')
        const position = cy.get('[name="pic[0][pic_position]"]')
        position.type('QA AUTOMATION')
        cy.wait(500)
        const emailDelegation = cy.get('[name="pic[0][pic_email]"]')
        emailDelegation.type('akbar11@gmail.com')
        cy.wait(500)
        const phone = cy.get('[name="pic[0][phone]"]')
        phone.type('7845145745')
        cy.wait(500)
        button = cy.get("button")
        button.contains("Add Person").click()
        cy.wait(500)
        const delegation1 = cy.get('[name="pic[1][pic_name]"]')
        delegation1.type('Adi')
        cy.wait(500)
        const position1 = cy.get('[name="pic[1][pic_position]"]')
        position1.type('QA MANUAL')
        cy.wait(500)
        const emailDelegation1 = cy.get('[name="pic[1][pic_email]"]')
        emailDelegation1.type('adiadi@gmail.com')
        cy.wait(500)
        const phone1 = cy.get('[name="pic[1][phone]"]')
        phone1.type('74414545745')
        cy.wait(500)
        cy.get('#date').click()
        // untuk manual cari tanggal
        // cy.get(':nth-child(33) > .rdrDayNumber')
        cy.get('.rdrDayToday > .rdrDayNumber').click()
        const sales = cy.get('.ck-blurred')
        sales.type('Test prospect adam')
        const type = cy.get('[name = "alamat[0][is_main]"]').click()
        type.get('#headlessui-combobox-options-97').contains('Head Office').click()
        const provinsi = cy.get('[name="alamat[0][province_id]"]').click()
        provinsi.get('#headlessui-combobox-options-101').contains('DKI JAKARTA').click()
        const kota = cy.get('[name="alamat[0][city_id]"]').click()
        kota.get('#headlessui-combobox-options-137').contains('KOTA ADM. JAKARTA BARAT').click()
        const kecamatan = cy.get('[name="alamat[0][district_id]"]').click()
        kecamatan.get('#headlessui-combobox-options-156').contains('TAMBORA').click()
        const kelurahan = cy.get('[name="alamat[0][vilage_id]"]').click()
        kelurahan .get('#headlessui-combobox-options-166').contains('TAMBORA').click()
        const alamatDetail = cy.get('[name="alamat[0][address]"]')
        alamatDetail.type('Gedung Merah')
        cy.get('.h-auto > :nth-child(12)').click()

        
    });
    // it("Logout", () => {
    //     cy.wait(1000)
    //     cy.get('.pt-20 > :nth-child(20)').click()
    //     cy.wait(1000)
    //     cy.get('.swal2-cancel').click()
    //     cy.get('.pt-20 > :nth-child(20)').click()
    //     cy.wait(1000)
    //     cy.get('.swal2-confirm').click()
    // });
});