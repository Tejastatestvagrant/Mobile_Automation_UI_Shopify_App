"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlipkartHomePage = void 0;
const uiExport_1 = require("../../../uiExport");
/**
 * Google Home page of application
 */
class FlipkartHomePage extends uiExport_1.BasePage {
    constructor() {
        super(...arguments);
        this.selectors = {
            loginButton: "(//div[@id='container']/div/div)[1]//a[text()='Login']",
            flipkartImg: "(//div[@id='container']/div/div)[1]//img[@title='Flipkart']",
            menuImg: "//img[@alt='##PLACEHOLDER##']",
            searchInput: "//input[@placeholder='Search for products, brands and more']",
        };
    }
    async getLoginButtonEle() {
        return this.getElement(this.selectors.loginButton);
    }
    async getFlipkartImgEle() {
        return this.getElement(this.selectors.flipkartImg);
    }
    async getMenuImgEle(menuName) {
        return this.getElement(uiExport_1.XpathUtil.getPlaceholderReplaced(this.selectors.menuImg, menuName));
    }
    async getSearchInputEle() {
        return this.getElement(this.selectors.searchInput);
    }
    async navigateToMenu(menuName) {
        await this.click(await this.getMenuImgEle(menuName));
    }
    async searchProduct(productName) {
        await this.setValue(await this.getSearchInputEle(), productName);
        await this.driver.keys('Enter');
    }
}
exports.FlipkartHomePage = FlipkartHomePage;
