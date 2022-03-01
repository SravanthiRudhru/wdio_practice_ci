describe('Emulate geolocation',async function(){
    
    it('Emulate geolocation to Japan >Tokyo from current location.',async function(){
        const params = {
            "latitude": 35.6762,
            "longitude":139.6503,
            "accuracy": 100
        }
          //Launch  URL.
        await browser.cdp('Emulation','setGeolocationOverride',params);
        await browser.url('https://kawasaki-india.com/dealer-locator/');

        await browser.pause(10000);
    })

});