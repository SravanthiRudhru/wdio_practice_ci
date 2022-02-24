/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class ProductsPage {
    get productspageHeader(){
        return $('.title');
    }

    get shoppingCartLink(){
        return $('.shopping_cart_link');
    }

    get shoppingCartQty(){
        return $('.shopping_cart_badge')
    }



    async getproductspageHeaderTitle(){
        await this.productspageHeader.waitForDisplayed({
            timeout: 6000*10,
            interval:1000,
            timeoutMsg: `productspageHeader is not displayed even after timeout`
       })
        return await this.productspageHeader.getText();
    }

    async clickAddToCartForItem(itemName){
        let updateName = itemName.toLowerCase().split(' ').join('-');
        return await $(`#add-to-cart-${updateName}`).click();
    }

    async clickShoppignCartLink(){
        return await this.shoppingCartLink.click();
    }

    async getShoppingCartQty(){
        return await this.shoppingCartQty.getText();
    }


}
module.exports = new ProductsPage();
