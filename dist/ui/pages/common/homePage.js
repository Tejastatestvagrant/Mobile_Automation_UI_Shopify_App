"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const uiExport_1 = require("../../../uiExport");
/**
 * Home page of Ekam
 */
class HomePage extends uiExport_1.BasePage {
    constructor() {
        super(...arguments);
        this.selectors = {
            ekamLogo: "//img[@alt='ekam']",
            navBarHyperLink: "//a[text()='##PLACEHOLDER##']",
            getStartedButton: '//span[text()="Get Started"]',
            superchargedTitle: "//span[text()='Supercharged']",
        };
    }
    async getEkamIconEle() {
        return this.getElement(this.selectors.ekamLogo);
    }
    async getNavBarHyperLinkEle(hyperLinkText) {
        return this.getElement(uiExport_1.XpathUtil.getPlaceholderReplaced(this.selectors.navBarHyperLink, hyperLinkText));
    }
    async navigateUsingHyperLink(hyperLinkText) {
        await this.click(await this.getNavBarHyperLinkEle(hyperLinkText));
    }
    async getSuperchargedTitleEle() {
        return this.getElement(this.selectors.superchargedTitle);
    }
    async getSuperchargedTitleEleText() {
        return this.getText(await this.getSuperchargedTitleEle());
    }
    async getGetStartedButtonEle() {
        return this.getElement(this.selectors.getStartedButton);
    }
}
exports.HomePage = HomePage;
