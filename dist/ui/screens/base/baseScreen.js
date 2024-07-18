"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseScreen = void 0;
class BaseScreen {
    constructor(driver) {
        this.driver = driver;
    }
    /**
     * return the element
     * @param locator
     * @returns
     */
    async getElement(locator) {
        const element = await this.driver.$(locator);
        return element;
    }
    /**
     * return the elements
     * @param locator
     * @returns
     */
    async getElements(locator) {
        const element = await this.driver.$$(locator);
        return element;
    }
    async click(element) {
        if (typeof element === 'string') {
            await (await this.getElement(element)).waitForDisplayed();
            await (await this.getElement(element)).click();
        }
        else {
            await element.waitForDisplayed();
            await element.click();
        }
    }
    async setValue(element, value) {
        if (typeof element === 'string') {
            await (await this.getElement(element)).waitForDisplayed();
            await (await this.getElement(element)).setValue(value);
        }
        else {
            await element.waitForDisplayed();
            await element.setValue(value);
        }
    }
    async clearValue(element) {
        if (typeof element === 'string') {
            await (await this.getElement(element)).clearValue();
        }
        else {
            await element.clearValue();
        }
    }
    async getText(element) {
        if (typeof element === 'string') {
            await (await this.getElement(element)).waitForDisplayed();
            const value = (await (await this.getElement(element)).getText()).trim();
            return value;
        }
        await element.waitForDisplayed();
        const value = (await element.getText()).trim();
        return value;
    }
    async waitForDisplayed(element) {
        if (typeof element === 'string') {
            await (await this.getElement(element)).waitForDisplayed();
        }
        else {
            await element.waitForDisplayed();
        }
    }
    async waitForExist(element) {
        if (typeof element === 'string') {
            await (await this.getElement(element)).waitForExist();
        }
        else {
            await element.waitForExist();
        }
    }
    async isDisplayed(element) {
        if (typeof element === 'string') {
            await (await this.getElement(element)).waitForDisplayed();
            const isElementDisplayed = await (await this.getElement(element)).isDisplayed();
            return isElementDisplayed;
        }
        await element.waitForDisplayed();
        const isElementDisplayed = await element.isDisplayed();
        return isElementDisplayed;
    }
    async isExisting(element) {
        if (typeof element === 'string') {
            const isElementExist = await (await this.getElement(element)).isExisting();
            return isElementExist;
        }
        const isElementExist = await element.isExisting();
        return isElementExist;
    }
    async clickAtCoordinates(element, x, y) {
        if (typeof element === 'string') {
            await (await this.getElement(element)).click({ x, y });
        }
        else {
            await element.click({ x, y });
        }
    }
    async isNotDisplayed(element) {
        if (typeof element === 'string') {
            await (await this.getElement(element)).waitForDisplayed({ reverse: true, timeout: 10000 });
            return !(await (await this.getElement(element)).isDisplayed());
        }
        await element.waitForDisplayed({ reverse: true, timeout: 10000 });
        return !element.isDisplayed();
    }
    async isEnabled(element) {
        await element.waitForExist();
        await element.waitForDisplayed();
        const isEnabled = await element.isEnabled();
        return isEnabled;
    }
    async waitForElementDisplayed(element, timeout, ignoreIfNotDisplayed) {
        try {
            if (typeof element === 'string') {
                await (await this.getElement(element)).waitForDisplayed({ timeout });
            }
            else {
                await element.waitForDisplayed({ timeout });
            }
            return true;
        }
        catch (error) {
            if (!ignoreIfNotDisplayed)
                throw new Error(`element ${element} not displayed even after waiting ${timeout}`);
            else
                return false;
        }
    }
}
exports.BaseScreen = BaseScreen;
