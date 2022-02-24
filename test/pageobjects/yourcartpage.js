


class YourCartPage {
    /**
     * define selectors using getter methods
     */
    get pageHeader() {
        return $('.title');
    }


    async getPageHeaderTitle(){
        return await this.pageHeader.getText();
    }

    async getItemPrice(){
        return await $(`.inventory_item_price`).getText();
    }


}

module.exports = new YourCartPage();
