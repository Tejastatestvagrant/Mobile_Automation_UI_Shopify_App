"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaitUtil = void 0;
const loggerHelper_1 = require("../reporting/loggerHelper");
var WaitUtil;
(function (WaitUtil) {
    const loadingTextXpath = "//*[contains(text(),'Loading...')]";
    /**
     * wait during api automation
     * @param ms
     * @returns
     */
    async function sleep(ms) {
        loggerHelper_1.LOGGER.info(`waiting for ${ms} milliseconds`);
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    WaitUtil.sleep = sleep;
    /**
     * this method will helps in waiting between different operations
     * @param milliseconds
     */
    async function pause(driver, milliseconds) {
        loggerHelper_1.LOGGER.info(`waiting for ${milliseconds} milliseconds`);
        await driver.pause(milliseconds);
    }
    WaitUtil.pause = pause;
    /**
     * this will wait until loading text disappear
     */
    async function waitForLoadingDisappear(driver, timeOut) {
        try {
            let tempTimeOut = timeOut;
            let loaderDisappered = false;
            if (timeOut === undefined)
                tempTimeOut = (await driver.getTimeouts()).implicit;
            loggerHelper_1.LOGGER.info(`waiting until loading text disappear for maximum ${tempTimeOut} milliseconds`);
            if (driver.isMobile)
                await WaitUtil.pause(driver, 2000);
            else
                await WaitUtil.pause(driver, 500);
            // const loadingTextEle = await (await driver.$(loadingTextXpath))
            if (await (await driver.$(loadingTextXpath)).isDisplayed()) {
                for (let index = 0; index < tempTimeOut / 1000; index += 1) {
                    if (!(await driver.$(loadingTextXpath).isClickable())) {
                        loaderDisappered = true;
                        break;
                    }
                    else {
                        await driver.pause(1000);
                    }
                }
                if (!loaderDisappered)
                    throw new Error(`page still loading even after waiting ${timeOut}`);
            }
        }
        catch (error) {
            loggerHelper_1.LOGGER.error(error.stack);
            throw new Error(error);
        }
    }
    WaitUtil.waitForLoadingDisappear = waitForLoadingDisappear;
})(WaitUtil = exports.WaitUtil || (exports.WaitUtil = {}));
