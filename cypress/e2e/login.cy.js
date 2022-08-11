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
        // dashboard = cy.get('.pt-20').children();
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
        cy.get('a[href*="/dashboard/accounts"]').click()
        cy.wait(2500)
        cy.get('.justify-between > .px-6').click()
        const username = cy.get("input[name='name']").clear();
        username.type("ROOT ADMIN")
        const phoneNumber = cy.get("input[name='mobile_number']").clear();
        phoneNumber.type("2154645578414")
        cy.wait(500)
        cy.get('[name="province"]').click();
        cy.get('#headlessui-combobox-options-12').contains('ACEH').click();
        cy.wait(500)
        cy.get('[name="city"]').click();
        cy.get('#headlessui-combobox-options-48').contains('KABUPATEN ACEH TIMUR').click();
        cy.wait(500)
        cy.get('[name="district"]').click();
        cy.wait(500)
        cy.get('#headlessui-combobox-options-73').contains('JULOK').click()
        cy.get('[name="village"]').click();
        cy.wait(500)
        cy.get('#headlessui-combobox-options-99').contains('BLANG JAMBEE').click()
        const alamat = cy.get('[placeholder="Alamat"]').clear();
        alamat.type("Jelambar")
        const kodePos = cy.get("input[name='post_code']").clear();
        kodePos.type("1254667")
        const button = cy.get('.space-y-5 > .justify-between > div.flex > .px-6')
        button.contains("Simpan").click()
        cy.get('.swal2-popup').contains("Berhasil update profile.")
        cy.wait(3000)
        // dashboard.get('a[href*="/dashboard/accounts"]').click()
        const button1 = cy.get("button")
        button1.contains("Ubah Foto").click()
        cy.wait(1000)
        cy.get('input[type="file"]').selectFile('cypress/e2e/images/jengjeng.jpg')
        const button2 = cy.get('.justify-end > .px-6')
        button2.contains("Simpan").click()
        cy.get('#swal2-title').contains("Avatar berhasil diubah")
        cy.wait(3000)
        cy.get('.justify-between > .text-s').click()
        const password = cy.get("input[name='password']");
        password.type("123123")
        cy.get('label[for="password"]').find('svg[class*="cursor-pointer"]').click()
        const password1 = cy.get("input[name='password_confirmation']");
        password1.type("123123")
        cy.get('button').contains("Terapkan dan Masuk").click()
        cy.get('.swal2-popup').contains("Password berhasil diubah, silahkan login ulang")
        cy.wait(3000)
    });
    // it("Akun & User",()=>{
    //     dashboard.get('a[href*="/dashboard/accounts"]').click()
    //     button = cy.get("button")
    //     button.contains("Edit Profile").click()
    // });
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