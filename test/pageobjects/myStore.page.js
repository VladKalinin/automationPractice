const Page = require('./page');

class MyStorePage extends Page {
    get btnWomenMenu() {
        return $('.sf-menu [title=\'Women\'].sf-with-ul');
    }

    get sliderMenu() {
        return $('#slider_row');
    }

    get womenDropdownMenu() {
        return $('.sfHover .submenu-container [title=\'Tops\']');
    }

    get menuBtnTshorts() {
        return $('.sfHover .submenu-container [title=\'T-shirts\']');
    }

    /**
     * a method to check whether if the women dropdown menu is visible
     * @return {boolean} returns true or false
     */
    isDropDownWomenMenuVisible() {
        this.womenDropdownMenu.waitForExist(60000);
        return this.womenDropdownMenu.isExisting();
    }

    /**
     * a method to check whether the new workspace create page is displayed
     * @return {void} returns nothing
     */
    clickTShirts() {
        this.womenDropdownMenu.waitForExist(60000);
        this.menuBtnTshorts.isExisting();
        this.menuBtnTshorts.click();
    }

    /**
     * a method to return whether the page is displayed or not
     * @return {boolean} returns true or false
     */
    isDisplayed() {
        return this.sliderMenu.isExisting();
    }
}

module.exports = new MyStorePage();
