"use strict";
/* eslint no-dupe-class-members: "off" */
/* eslint no-unused-vars: "off" */
/* eslint class-methods-use-this: "off" */
/* eslint no-return-assign: "off" */
/* eslint no-param-reassign: "off" */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePage = void 0;
const fs_1 = require("fs");
const uiExport_1 = require("../../../uiExport");
const webservicesExport_1 = require("../../../webservicesExport");
class BasePage {
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
    async click(element, timeout) {
        const timeOut = timeout ?? 30000;
        if (typeof element === 'string') {
            await (await this.getElement(element)).waitForDisplayed({ timeout: timeOut });
            await (await this.getElement(element)).waitForClickable({ timeout: timeOut });
            await (await this.getElement(element)).click();
        }
        else {
            await element.waitForDisplayed({ timeout: timeOut });
            await element.waitForClickable({ timeout: timeOut });
            await element.click();
        }
    }
    /**
     * click on the button
     * @param buttonName pass button name
     */
    async clickButton(buttonName) {
        const genericButtonXpath = "(//ons-button[normalize-space(text())='##PLACEHOLDER##'])|(//button[normalize-space(text())='##PLACEHOLDER##'])";
        const finalXpath = uiExport_1.XpathUtil.getPlaceholderReplaced(genericButtonXpath, buttonName);
        await this.click(finalXpath);
    }
    async selectByVisibleText(element, value) {
        if (typeof element === 'string') {
            await (await this.getElement(element)).waitForDisplayed();
            await (await this.getElement(element)).waitForClickable();
            await (await this.getElement(element)).selectByVisibleText(value);
        }
        else {
            await element.waitForDisplayed();
            await element.waitForClickable();
            await element.selectByVisibleText(value);
        }
    }
    async isClickable(element) {
        if (typeof element === 'string') {
            await (await this.getElement(element)).waitForExist();
            await (await this.getElement(element)).waitForClickable();
            const isClickable = await (await this.getElement(element)).isClickable();
            return isClickable;
        }
        await element.waitForExist();
        await element.waitForClickable();
        const isClickable = element.isClickable();
        return isClickable;
    }
    async setValue(element, value, timeout) {
        const timeOut = timeout ?? 30000;
        if (typeof element === 'string') {
            await (await this.getElement(element)).waitForDisplayed({ timeout: timeOut });
            await (await this.getElement(element)).waitForClickable({ timeout: timeOut });
            await (await this.getElement(element)).setValue(value);
        }
        else {
            await element.waitForDisplayed({ timeout: timeOut });
            await element.waitForClickable({ timeout: timeOut });
            await element.setValue(value);
        }
    }
    /**
     * set value to text box
     * @param placeholder pass placeholder string for the input
     * @param value
     */
    async setTextboxValue(placeholder, value) {
        const genericButtonXpath = "(//input[normalize-space(@placeholder)='##PLACEHOLDER##'])|(//ons-input[normalize-space(@placeholder)='##PLACEHOLDER##']/input)";
        const finalXpath = uiExport_1.XpathUtil.getPlaceholderReplaced(genericButtonXpath, placeholder);
        await this.setValue(finalXpath, value);
    }
    async clearValue(element) {
        if (typeof element === 'string') {
            await (await this.getElement(element)).waitForClickable();
            await (await this.getElement(element)).waitForClickable();
            await (await this.getElement(element)).clearValue();
        }
        else {
            await element.waitForClickable();
            await element.clearValue();
        }
    }
    async getText(element, timeout) {
        const timeOut = timeout ?? 30000;
        if (typeof element === 'string') {
            await (await this.getElement(element)).waitForDisplayed({ timeout: timeOut });
            const value = (await (await this.getElement(element)).getText()).trim();
            return value;
        }
        await element.waitForDisplayed({ timeout: timeOut });
        const value = (await element.getText()).trim();
        return value;
    }
    async rightClick(element) {
        if (typeof element === 'string') {
            await (await this.getElement(element)).waitForClickable();
            await (await this.getElement(element)).click({ button: 'right' });
        }
        else {
            await element.waitForClickable();
            await element.click({ button: 'right' });
        }
    }
    async waitForDisplayed(element) {
        if (typeof element === 'string') {
            await (await this.getElement(element)).waitForDisplayed();
        }
        else {
            await element.waitForDisplayed();
        }
    }
    async waitForClickable(element) {
        if (typeof element === 'string') {
            await (await this.getElement(element)).waitForClickable();
        }
        else {
            await element.waitForClickable();
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
        // const timeOut = timeout ?? 20000;
        if (typeof element === 'string') {
            // await (await this.getElement(element)).waitForDisplayed({ timeout: timeOut });
            const isPresent = await (await this.getElement(element)).isDisplayed();
            return isPresent;
        }
        // await element.waitForDisplayed({ timeout: timeOut });
        const isPresent = await element.isDisplayed();
        return isPresent;
    }
    async isExisting(element) {
        if (typeof element === 'string') {
            const isExist = await (await this.getElement(element)).isExisting();
            return isExist;
        }
        const isExist = await element.isExisting();
        return isExist;
    }
    async clickAtCoordinates(element, x, y) {
        if (typeof element === 'string') {
            await (await this.getElement(element)).waitForClickable();
            await (await this.getElement(element)).click({ x, y });
        }
        else {
            await element.waitForClickable();
            await element.click({ x, y });
        }
    }
    async isNotDisplayed(element) {
        if (typeof element === 'string') {
            await (await this.getElement(element)).waitForDisplayed({ reverse: true, timeout: 10000 });
            const isNotPresent = !(await (await this.getElement(element)).isDisplayed());
            return isNotPresent;
        }
        await element.waitForDisplayed({ reverse: true, timeout: 10000 });
        const isNotPresent = !(await element.isDisplayed());
        return isNotPresent;
    }
    async isEnabled(element) {
        await element.waitForExist();
        await element.waitForDisplayed();
        const isEnable = element.isEnabled();
        return isEnable;
    }
    async scrollElement(element) {
        if (typeof element === 'string') {
            await (await this.getElement(element)).waitForExist();
            await (await this.getElement(element)).scrollIntoView();
        }
        await element.waitForExist();
        element.isClickable();
    }
    async waitForElementDisplayed(element, timeout, ignoreIfNotDisplayed) {
        try {
            webservicesExport_1.LOGGER.info(`waiting for element to be displayed max ${timeout} milliseconds`);
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
    async uploadDocument(fullFilePath, element) {
        try {
            let remoteFilePath = fullFilePath;
            await this.driver.execute(
            // assign style to elem in the browser
            (elem) => elem.style.display = 'block', 
            // pass in element so we don't need to query it again in the browser
            await this.driver.$(element));
            await this.waitForDisplayed(await this.getElement(element));
            await webservicesExport_1.WaitUtil.pause(this.driver, 2000);
            remoteFilePath = fullFilePath;
            if (this.driver.isMobile) {
                // this helps in uploading file while running from lambdatest app
                const data = (0, fs_1.readFileSync)(fullFilePath, 'base64');
                const filePathSplit = fullFilePath.split('/');
                const onDeviceFilePath = `/data/local/tmp/file/${filePathSplit[filePathSplit.length - 1]}`;
                await this.driver.pushFile(onDeviceFilePath, data);
                remoteFilePath = onDeviceFilePath;
            }
            else {
                // this helps in uploading file while running from browserstack, lambdatest web
                remoteFilePath = await this.driver.uploadFile(fullFilePath);
            }
            if (typeof element === 'string')
                await (await this.getElement(element)).setValue(remoteFilePath);
            else
                await element.setValue(remoteFilePath);
            await webservicesExport_1.WaitUtil.pause(this.driver, 2000);
        }
        catch (err) {
            webservicesExport_1.LOGGER.error(`Error while Uploading Document ${err.message}\n${err.stack}`);
            throw err;
        }
    }
    async setDateValue(element, date) {
        let daysFromCurrentDate = Math.floor(await webservicesExport_1.DateTimeUtil.getDifferenceInDays(new Date(), date));
        const currentDate = await webservicesExport_1.DateTimeUtil.convertDate(new Date(), 'dd mmmm yyyy');
        const dateToSelect = await webservicesExport_1.DateTimeUtil.convertDate(date, 'dd mmmm yyyy');
        const nextMonth = '//*[@content-desc="Next month"]';
        const dateToSelectXpath = `//*[@content-desc="${dateToSelect}"]`;
        const availableDates = `//*[@content-desc="${currentDate}"]/following-sibling::*`;
        const setButton = "//*[@text='SET']";
        // if non zero then select date, else no need to select
        const dateDiff = await webservicesExport_1.DateTimeUtil.getDifferenceInHours(new Date(), date);
        if (daysFromCurrentDate > 0 || dateDiff > 23) {
            let inputDateElement = element;
            if (typeof element === 'string')
                inputDateElement = await this.getElement(element);
            const location = await inputDateElement.getLocation();
            const size = await inputDateElement.getSize();
            webservicesExport_1.LOGGER.info(`location-${JSON.stringify(location)}, size-${JSON.stringify(size)}`);
            const clickPoint = { x: Math.floor((size.width / 2) - 5), y: Math.floor(location.y) };
            webservicesExport_1.LOGGER.info(`clicking at - ${JSON.stringify(clickPoint)}`);
            await this.waitForDisplayed(inputDateElement);
            await inputDateElement.click({ x: clickPoint.x });
            await webservicesExport_1.WaitUtil.pause(this.driver, 1000);
            if (this.driver.isMobile) {
                const webViewScreen = new uiExport_1.WebViewScreen(this.driver);
                await webViewScreen.switchToContext(uiExport_1.CONTEXT_REF.NATIVE);
                const availableFollowingDates = (await this.getElements(availableDates)).length;
                if (daysFromCurrentDate > availableFollowingDates)
                    await (await this.getElement(nextMonth)).click();
                await (await this.getElement(dateToSelectXpath)).click();
                await webservicesExport_1.WaitUtil.pause(this.driver, 1000);
                await (await this.getElement(setButton)).click();
                await webViewScreen.switchToContext(uiExport_1.CONTEXT_REF.WEBVIEW);
            }
            else {
                if (dateDiff > 23 && dateDiff < 24)
                    daysFromCurrentDate = 1;
                for (let index = 0; index < daysFromCurrentDate; index += 1) {
                    await this.driver.keys('Right arrow');
                }
                await webservicesExport_1.WaitUtil.pause(this.driver, 1000);
                await this.driver.keys('Enter');
            }
        }
    }
    /**
     * use to hide mobile keyboard
     */
    async hideKeyboard() {
        if (this.driver.isMobile) {
            await this.driver.hideKeyboard();
        }
    }
}
exports.BasePage = BasePage;
