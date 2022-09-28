import LoginPage from  '../pageobjects/login.page';

describe('Volvo application', () => {
    
    it('To verify the volvo quotes is displayed or not', async () => {
        await LoginPage.open();
        await expect(LoginPage.volvoQuotes).toHaveTextContaining(
            'Ideas that change the world are often the most controversial.');
    });
    it('To verify the volvo quotes is displayed or not', async () => {
        await LoginPage.open();
        await expect(LoginPage.volvoQuotes).toHaveTextContaining(
            'Ideas that change the world are often the most controversial.');
    });

    
    it('To verify the volvo logo is displayed or not', async () => {
        // let elem = await $(`(//a[@aria-label='Volvo Homepage'])[1]`);
        // console.log(elem);
        let isDisplayed = await LoginPage.volvoLogo.isDisplayed();
        console.log(isDisplayed);
        
       
      });

      it('To check logo has link', async () => {
        await LoginPage.open();
        const linkValue = $(`(//a[@aria-label='Volvo Homepage'])[1]`)
        expect(linkValue).toHaveLink('https://www.volvocars.com/intl')
        
    });




    it('To get submenu', async () => {
        await LoginPage.open();

        LoginPage.getTextForEm;

    });


      
        it('should detect if menu is clickable', async () => {
        await LoginPage.open();
            const el = await $('#sitenav-sidenav-toggle')
            let clickable = await el.isClickable();
            console.log(clickable); // outputs: true or false
            // wait for element to be clickable
            // await LoginPage.waitUntil(() => el.isClickable())
            // LoginPage.pause(3000)

        });
});


