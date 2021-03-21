const Page = require('./page');

class TShirtsPage extends Page {
    get pageHeading() {
        return $('.cat-name');
    }

    get products() {
        return $$('.left-block .product-image-container');
    }

    get addToCart() {
        return $$('.ajax_add_to_cart_button');
    }

    /**
     * a method to return whether the page is displayed or not
     * @return {String} returns heading string
     */
    isDisplayed() {
        return this.pageHeading.getText();
    }

    /**
     * a method to add product to cart
     * @return {void} returns nothing
     */
    addToCartProduct(index) {
        this.products[index].scrollIntoView();
        this.products[index].moveTo();
        this.addToCart[index].scrollIntoView();
        this.addToCart[index].isExisting();
        this.addToCart[index].click();
    }
}

module.exports = new TShirtsPage();
