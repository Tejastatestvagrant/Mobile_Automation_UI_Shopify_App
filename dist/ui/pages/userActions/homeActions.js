"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeActions = void 0;
const uiExport_1 = require("../../../uiExport");
class HomeActions extends uiExport_1.BasePage {
    constructor(driver) {
        super(driver);
        this.homePage = new uiExport_1.HomePage(driver);
        this.docsPage = new uiExport_1.DocsPage(driver);
    }
    async clickingOnDocsLink(hyperLinkText) {
        await this.waitForDisplayed(await this.homePage.getSuperchargedTitleEle());
        return this.homePage.navigateUsingHyperLink(hyperLinkText);
    }
}
exports.HomeActions = HomeActions;
