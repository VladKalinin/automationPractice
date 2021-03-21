const Page = require('./page');

class OrderShippingPage extends Page {
    get orderStepBar() {
        return $('#order_step');
    }

    get addressIsActive() {
        return $('.step_current.four');
    }

    get termsOfService() {
        return $('.checker#uniform-cgv span');
    }

    get btnProceed() {
        return $('.cart_navigation .btn[name=\'processCarrier\']');
    }

    /**
     * a method to verify if terms are selected
     * @return {boolean} returns terms is checked
     */
    verifyIsTermsSelected() {
        let termsIsSelected = this.termsOfService.getAttribute('class');
        return termsIsSelected.includes('checked');
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

module.exports = new OrderShippingPage();
