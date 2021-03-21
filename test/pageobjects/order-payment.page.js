const Page = require('./page');

class OrderPaymentPage extends Page {
    get orderStepBar() {
        return $('#order_step');
    }

    get paymentIsActive() {
        return $('.step_current.last');
    }

    get payBankWire() {
        return $('.payment_module .bankwire');
    }

    get wirePayment(){
        return $('.box .page-subheading');
    }

    get confirmOrder(){
        return $('.cart_navigation .btn .right');
    }

    /**
     * a method to verify if terms are selected
     * @return {boolean} returns terms is checked
     */
    verifyBankWirePayment() {
        this.wirePayment.waitForDisplayed({ timeout: 3000 });
        let termsIsSelected = this.wirePayment.getText();
        return termsIsSelected.includes('Bank-wire payment');
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

module.exports = new OrderPaymentPage();
