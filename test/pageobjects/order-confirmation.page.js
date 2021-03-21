const Page = require('./page');

class OrderConfirmationPage extends Page {
    get confirmationOrder() {
        return $('.center_column .page-heading');
    }

    get orderCompletedMessage() {
        return $('.cheque-indent .dark');
    }

    /**
     * a method to return whether popup is displayed or not
     * @return {boolean} returns true or false
     */
    isDisplayed() {
        this.confirmationOrder.waitForDisplayed({timeout: 3000});
        let orderConfirmationHeading = this.confirmationOrder.getText();
        return orderConfirmationHeading.includes('ORDER CONFIRMATION');
    }

    /**
     * a method to return reference code
     * @return {boolean} returns true or false
     */
    verifyOrderIsCompleted() {
        let message = this.orderCompletedMessage.getText();
        return message.includes('Your order on My Store is complete.')
    }
}

module.exports = new OrderConfirmationPage();
