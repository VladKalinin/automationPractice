const Page = require('./page');

class OrderAddressPage extends Page {
    get orderStepBar() {
        return $('#order_step');
    }

    get addressIsActive() {
        return $('.step_current.third');
    }

    get btnProceed() {
        return $('.cart_navigation .btn[name=\'processAddress\']');
    }
    /**
     * a method to return whether popup is displayed or not
     * @return {boolean} returns heading string
     */
    isDisplayed() {
        this.orderStepBar.scrollIntoView();
        return this.orderStepBar.isExisting();
    }
}

module.exports = new OrderAddressPage();
