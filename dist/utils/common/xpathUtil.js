"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XpathUtil = void 0;
const webservicesExport_1 = require("../../webservicesExport");
/**
 * Xpath helper will have common reusable methods related to xpath and getting locator
 */
var XpathUtil;
(function (XpathUtil) {
    /**
    * this method will get xpath based on os version
    */
    function getXpath(driver, xpathObject) {
        let xpath = '';
        try {
            if (driver.isIOS)
                xpath = xpathObject.ios;
            else
                xpath = xpathObject.android;
        }
        catch (error) {
            webservicesExport_1.LOGGER.error(error.stack);
            throw new Error(error);
        }
        return xpath;
    }
    XpathUtil.getXpath = getXpath;
    /**
    * this method will replace ##PLACEHOLDER## with value passed
    */
    function getPlaceholderReplaced(xpath, replacement) {
        let resultStr = '';
        try {
            resultStr = xpath.replace(/##PLACEHOLDER##/g, replacement);
        }
        catch (error) {
            webservicesExport_1.LOGGER.error(error.stack);
            throw new Error(error);
        }
        return resultStr;
    }
    XpathUtil.getPlaceholderReplaced = getPlaceholderReplaced;
})(XpathUtil = exports.XpathUtil || (exports.XpathUtil = {}));
