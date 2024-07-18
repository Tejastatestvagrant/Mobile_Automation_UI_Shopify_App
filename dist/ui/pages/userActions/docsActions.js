"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocsActions = void 0;
const uiExport_1 = require("../../../uiExport");
class DocsActions extends uiExport_1.BasePage {
    constructor(driver) {
        super(driver);
        this.homePage = new uiExport_1.HomePage(driver);
        this.docsPage = new uiExport_1.DocsPage(driver);
    }
    async isGettingStartedTextVisible(expectedText) {
        await this.waitForDisplayed(await this.homePage.getSuperchargedTitleEle());
        await this.homePage.navigateUsingHyperLink(uiExport_1.EkamNavBarHyperLinks.Docs);
        await this.waitForDisplayed(await this.docsPage.getEkamLogoEle());
        const actualText = await this.docsPage.getGettingStartedTitleEleText();
        return actualText === expectedText;
    }
}
exports.DocsActions = DocsActions;
