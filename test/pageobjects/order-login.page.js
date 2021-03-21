const Page = require('./page');

class OrderLoginPage extends Page {
    get orderStepBar() {
        return $('#order_step');
    }

    get loginIsActive() {
        return $('.step_current.second');
    }

    get loginField() {
        return $('#login_form input#email');
    }

    get passwordField() {
        return $('#login_form input#passwd');
    }

    get btnSignIn() {
        return $('#login_form .submit .btn');
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
     * a method to login
     * @return {void} returns nothing
     */
    login(username, password) {
        this.loginField.waitForExist(40000);
        this.loginField.setValue(username);
        this.passwordField.setValue(password);
        this.btnSignIn.click();
    }

}

module.exports = new OrderLoginPage();
