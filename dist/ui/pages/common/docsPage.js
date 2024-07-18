"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocsPage = void 0;
const uiExport_1 = require("../../../uiExport");
/**
 * Ekam Docs page
 */
class DocsPage extends uiExport_1.BasePage {
    constructor() {
        super(...arguments);
        this.selectors = {
            ekamLogo: "//img[@alt='ekam logo']",
            gettingStartedTitle: "//h1[text()='Getting started']",
            githubIcon: "//span[text()='GitHub']",
            toggleDarkIcon: "//span[@class='toggle-dark']",
            docsSearchBar: "//input[@id='userinput']",
        };
    }
    async getEkamLogoEle() {
        return this.getElement(this.selectors.ekamLogo);
    }
    async getGettingStartedTitleEle() {
        return this.getElement(this.selectors.gettingStartedTitle);
    }
    async getGithubIconEle() {
        return this.getElement(this.selectors.githubIcon);
    }
    async getToggleDarkIconEle() {
        return this.getElement(this.selectors.toggleDarkIcon);
    }
    async getDocsSearchBarEle() {
        return this.getElement(this.selectors.docsSearchBar);
    }
    async enterTextToBeSearchedInDocs(text) {
        await this.setValue(await this.getDocsSearchBarEle(), text);
    }
    async getGettingStartedTitleEleText() {
        return this.getText(await this.getGettingStartedTitleEle());
    }
}
exports.DocsPage = DocsPage;
