const Page = require('./page');

class ProductInCartPopup extends Page {
    get popupAddedToCart() {
        return $('#layer_cart .layer_cart_product');
    }

    get btnProceedCheckout() {
        return $('.layer_cart_cart a.btn');
    }

    /**
     * a method to click button proceed to checkout
     * @return {void} returns nothing
     */
    proceedToCheckout() {
        this.btnProceedCheckout.isExisting();
        this.btnProceedCheckout;
        this.btnProceedCheckout.click();
    }

    /**
     * a method to return whether popup is displayed or not
     * @return {boolean} returns true or false
     */
    isDisplayed() {
        //this.popupAddedToCart.waitForExist(60000);
        this.popupAddedToCart.waitForDisplayed({ timeout: 3000 });
        this.btnProceedCheckout.waitForDisplayed({ timeout: 3000 });
        return this.popupAddedToCart.isExisting();
    }
}

module.exports = new ProductInCartPopup();
