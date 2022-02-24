//Using JEST assertions:
let expect = require('chai').expect;
let login = require('../pageobjects/loginpage');
let products = require('../pageobjects/productspage');
let cart = require('../pageobjects/yourcartpage');



//Complete the task in POM/Modular pattern:
describe('Login to saucedemo application',async function(){

    it('Verify saucedemo Login page is displayed',async function(){
        //Launch herokuapp URL.
       await browser.url('https://www.saucedemo.com');

       //Wait for the loginLogo (SWAGLABS) to be displayed.
       await login.loginLogo.waitForDisplayed({
            timeout: 6000*10,
            interval:1000,
            timeoutMsg: `loginLogo is not displayed even after timeout`
       })

       expect(await login.loginLogo.isDisplayed()).to.equal(true);
    });

    it('Verify Login is suucessful for saucedemo application.',async function(){
        
        await login.enterUserName('standard_user');
        await login.enterPassword('secret_sauce');
        await login.clickLoginBtn();
        
       expect(await products.getproductspageHeaderTitle()).to.equal('PRODUCTS');
    });

    it('Add Item to Cart and very Qty added in shopping Cart Icon',async function(){
        
        await products.clickAddToCartForItem('Sauce Labs Bike Light');
        
       expect(await products.getShoppingCartQty()).to.equal('1');
    });

    it('Click shopping Cart Icon and verify the page tile.',async function(){
        await products.clickShoppignCartLink();
        
       expect(await cart.getPageHeaderTitle()).to.equal('YOUR CART');
    });

    it.skip('verify Item Price in Your Cart page.',async function(){
        
       expect(await cart.getItemPrice()).to.equal('$9.99');
    });
});