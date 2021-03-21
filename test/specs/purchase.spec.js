const MyStorePage = require('../pageobjects/myStore.page');
const TShirtsPage = require('../pageobjects/tshorts.page');
const AddedToCartPopup = require('../pageobjects/productAddedToCart.popup');
const OrdersSummaryPage = require('../pageobjects/order-summary.page');
const OrdersLoginPage = require('../pageobjects/order-login.page');
const OrderAddressPage = require('../pageobjects/order-address.page');
const OrderShippingPage = require('../pageobjects/order-shipping.page');
const OrderPaymentPage = require('../pageobjects/order-payment.page');
const OrderConfirmationPage = require('../pageobjects/order-confirmation.page');
const {assert} = require('chai');


describe('My-Store purchase test', () => {
    // let availableWorkspaces = null;
    // const workspaceName = TestData.createData.name + Date.now().toString();
    // let editedWorkspaceName = null;
    before(() => {
        browser.navigateTo(config.url);
        assert.equal(MyStorePage.isDisplayed(), true, 'Login page is not displayed');
    });

    describe('Auto_Test_001 -> E2E purchase first women t-shirt', () => {
        it('Hover on women menu and open t-shirts page', () => {
            MyStorePage.btnWomenMenu.moveTo();
            assert.equal(MyStorePage.isDropDownWomenMenuVisible(), true, 'Sub menu is not visible');
            MyStorePage.clickTShirts();
        });
        it('Add to cart first product', () => {
            assert.equal(TShirtsPage.isDisplayed(), "T-SHIRTS ", "T-Shirts page opened");
            TShirtsPage.addToCartProduct(0);
        });
        it('Check product added to curt and proceed to checkout', () => {
            assert.equal(AddedToCartPopup.isDisplayed(), true, "Popup added to cart is displayed");
            AddedToCartPopup.proceedToCheckout();
        });
        it('Verify number of products in cart and proceed to sign in', () => {
            assert.equal(OrdersSummaryPage.isDisplayed(), true, "Orders page is not opened");
            assert.equal(OrdersSummaryPage.summaryIsActive.isExisting(), true, "Not on summary step");
            assert.equal(OrdersSummaryPage.verifyNumberOfElements(), 1, "Not expected number of products in cart");
            OrdersSummaryPage.btnProceed.click();
        });
        it('Sign in the user', () => {
            assert.equal(OrdersLoginPage.isDisplayed(), true, "Orders page is not opened");
            assert.equal(OrdersLoginPage.loginIsActive.isExisting(), true, "Not on login step");
            OrdersLoginPage.login(config.username, config.password);
        });
        it('Proceed to checkout on address page', () => {
            assert.equal(OrderAddressPage.isDisplayed(), true, "Orders page is not opened");
            assert.equal(OrderAddressPage.addressIsActive.isExisting(), true, "Not on address step");
            OrderAddressPage.btnProceed.click();
        });
        it('Agree with terms and proceed to pay', () => {
            assert.equal(OrderShippingPage.isDisplayed(), true, "Orders page is not opened");
            assert.equal(OrderShippingPage.addressIsActive.isExisting(), true, "Not on address step");
            OrderShippingPage.termsOfService.click();
            OrderShippingPage.verifyIsTermsSelected()
            OrderShippingPage.btnProceed.click();
        });
        it('Choose bank wire and go to orders page', () => {
            assert.equal(OrderPaymentPage.isDisplayed(), true, "Orders page is not opened");
            assert.equal(OrderPaymentPage.paymentIsActive.isExisting(), true, "Not on payment step");
            OrderPaymentPage.payBankWire.click();
            OrderPaymentPage.verifyBankWirePayment();
            OrderPaymentPage.confirmOrder.click();
        });
        it('Verify the t-shirt ordered and get reference number', () => {
            assert.equal(OrderConfirmationPage.isDisplayed(), true, "Orders page is not opened");
            assert.equal(OrderConfirmationPage.verifyOrderIsCompleted(), true, "Message is not displayed, order is not completed");
        });

    });
});