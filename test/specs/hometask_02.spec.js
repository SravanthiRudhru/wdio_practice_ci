//Using JEST assertions:
let chaiexpect = require('chai').expect;

describe('Verify text present in herokuapp app using JEST assertions',async function(){
    it('Verify text present- in herokuapp page.',async function(){
        //Launch herokuapp URL.
       await browser.url('https://the-internet.herokuapp.com/dynamic_loading/1');

       //Wait for start button to be clickable.
       const btn = await $(`//button[contains(text(), 'Start')]`);
       await btn.waitForClickable({
           timeout: 6000*10,
           interval:1000,
           timeoutMsg: `Start is button is not clickable even after timeout`
       });

       //Click Start button.
       btn.click();
       const eleText = await $(`//h4[contains(text(),'Hello World!')]`);

       //Wait for the 'Hello World!' text to be displayed.
       await eleText.waitForDisplayed({
            timeout: 6000*10,
            interval:1000,
            timeoutMsg: `text is not displayed even after timeout`
       })
      
       expect(await eleText.isDisplayed()).toBe(true);
    })

});

//Using Chai assertions:
describe('Verify text present in herokuapp app using Chai assertions',async function(){
    it('Verify text present- in herokuapp page.',async function(){
        //Launch herokuapp URL.
       await browser.url('https://the-internet.herokuapp.com/dynamic_loading/1');

       //Wait for start button to be clickable.
       const btn = await $(`//button[contains(text(), 'Start')]`);
       await btn.waitForClickable({
           timeout: 6000*10,
           interval:1000,
           timeoutMsg: `Start is button is not clickable even after timeout`
       });

       //Click Start button.
       btn.click();
       const eleText = await $(`//h4[contains(text(),'Hello World!')]`);

       //Wait for the 'Hello World!' text to be displayed.
       await eleText.waitForDisplayed({
            timeout: 6000*10,
            interval:1000,
            timeoutMsg: `text is not displayed even after timeout`
       })

        chaiexpect(await eleText.isDisplayed()).to.equal(true);
    })

});