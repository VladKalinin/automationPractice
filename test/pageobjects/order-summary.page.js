const Page = require('./page');

class OrderSummaryPage extends Page {
    get orderStepBar() {
        return $('#order_step');
    }

    get summaryIsActive() {
        return $('.step_current.first');
    }

    get numberItemsInCart() {
        return $$('.cart_item');
    }

    get btnProceed() {
        return $('.cart_navigation .btn[title=\'Proceed to checkout\']');
    }
    /**
     * a method to return whether popup is displayed or not
     * @return {boolean} returns heading string
     */
    isDisplayed() {
        this.orderStepBar.scrollIntoView();
        return this.orderStepBar.isExisting();
    }

    /**
     * a method to verify number of products in cart
     * @return {int} returns true or false
     */
    verifyNumberOfElements() {
    return this.numberItemsInCart.length;
    }
}

module.exports = new OrderSummaryPage();
