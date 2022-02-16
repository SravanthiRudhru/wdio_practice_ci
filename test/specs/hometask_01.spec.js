describe('Login functionality for herokuapp page.',async function(){
    it('Verify Login functionality for herokuapp page.',async function(){
        //Launch herokuapp URL.
       await browser.url('https://the-internet.herokuapp.com/login');

       //Wait for application to load.
       await browser.pause(3000);

       //Print page tile:

        console.log('Title: '+ await browser.getTitle())

       //print Home Page Header:
       console.log('Home Page Header: '+await $('h2').getText());

       //Print Sub Header text:
       console.log('Sub Header text: '+await $('.subheader').getText());

       //Enter UserName:
       await $('#username').setValue('tomsmith');

       //Enter Password:
       await $('#password').setValue('SuperSecretPassword');

       //Click Login button:
       await $(`//button[@type='submit']`).click();
    })

});