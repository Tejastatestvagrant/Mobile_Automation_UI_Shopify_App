"use strict";
/* eslint import/no-mutable-exports: "off" */
/* eslint no-await-in-loop: "off" */
/* eslint func-names: "off" */
/* eslint no-param-reassign: "off" */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserUtil = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const webdriverio_1 = require("webdriverio");
const webservicesExport_1 = require("../../../webservicesExport");
/**
 * this module will have common reusable methods for browser
 */
var BrowserUtil;
(function (BrowserUtil) {
    // export let loggerHelper: LoggerHelper;
    BrowserUtil.url = '';
    const listOfSpecs = [];
    const sessionIdAndMainWindowHandle = new Map();
    /**
     * this method will help in setting up driver with some settings
     */
    async function setupBrowser(configJson, specName, envJsonFilePath, optURL) {
        let driver = null;
        try {
            // setup logger before even starting the execution
            // setup logger only one time for all parallel executions
            if (!listOfSpecs.includes(specName)) {
                // this.loggerHelper = new LoggerHelper();
                // this.loggerHelper.setupLogger(specName);
                webservicesExport_1.LoggerHelper.setupLogger(specName);
                webservicesExport_1.LOGGER.info(`------RUNNING SUITE: ${specName}------`);
                // LOGGER.info(optURL);
            }
            let EnvJson = {};
            // if user passed envjsonfilepath, then load the same
            if (!(envJsonFilePath === undefined || envJsonFilePath === '')) {
                EnvJson = webservicesExport_1.JsonReaderHelper.readAttribute('$', envJsonFilePath);
                webservicesExport_1.LOGGER.info(`Loaded env json file from -${envJsonFilePath}`);
            }
            else {
                // loading envs json file from default location
                // EnvJson = DefaultEnvJson;
                webservicesExport_1.LOGGER.info('Loaded env json present within framework');
            }
            if (webservicesExport_1.Constants.commandLineArguments.platform.includes('lambdatest'))
                configJson.capabilities['LT:Options'].name = specName;
            else if (webservicesExport_1.Constants.commandLineArguments.platform.includes('browserstack'))
                configJson.capabilities.build = specName;
            driver = await (0, webdriverio_1.remote)(configJson);
            await driver.setWindowSize(1200, 800);
            await driver.setTimeout({ pageLoad: 60000 });
            const environmentToRun = webservicesExport_1.Constants.commandLineArguments.env;
            webservicesExport_1.LOGGER.info(`got the ENV as ${environmentToRun} from command line`);
            if (!(environmentToRun === undefined || environmentToRun === '')
                && EnvJson[environmentToRun] !== undefined) {
                if (!(optURL === undefined)) {
                    this.url = optURL;
                }
                else {
                    this.url = EnvJson[environmentToRun].url;
                }
            }
            else {
                webservicesExport_1.LOGGER.error('check environment you have passed seems to be not present within env.json');
                throw new Error('check environment you have passed seems to be not present within env.json');
            }
            webservicesExport_1.LOGGER.info(`Running tests on ${this.url}`);
            await driver.navigateTo(this.url);
            if (!sessionIdAndMainWindowHandle.has(driver.sessionId)) {
                sessionIdAndMainWindowHandle.set(driver.sessionId, await driver.getWindowHandle());
                webservicesExport_1.LOGGER.info(`------saved parent window handle------${sessionIdAndMainWindowHandle.get(driver.sessionId)}`);
            }
            return driver;
        }
        catch (error) {
            console.error('something wrong while setting driver');
            if (!(webservicesExport_1.LOGGER === null || webservicesExport_1.LOGGER === undefined)) {
                webservicesExport_1.LOGGER.error(`something wrong while setting driver\n${error.message}`);
                webservicesExport_1.LOGGER.error(error.stack);
            }
            else {
                console.error(`something wrong while setting driver\n${error.message}`);
                console.error(error.stack);
            }
            if (!(driver === undefined || driver === null))
                driver.deleteSession();
            // reject('--------Driver setup failed--------');
            throw new Error('--------Driver setup failed--------');
        }
    }
    BrowserUtil.setupBrowser = setupBrowser;
    /**
     * deletes the cookie
     */
    async function deleteCookies(driver) {
        try {
            await driver.deleteCookies();
        }
        catch (error) {
            webservicesExport_1.LOGGER.error('error while deleting cookies');
            webservicesExport_1.LOGGER.error(error.stack);
            throw new Error(error);
        }
    }
    BrowserUtil.deleteCookies = deleteCookies;
    /**
     * deletes the session
     */
    async function deleteSession(driver) {
        try {
            await driver.deleteSession();
        }
        catch (error) {
            webservicesExport_1.LOGGER.error('error while deleting cookies');
            webservicesExport_1.LOGGER.error(error.stack);
            throw new Error(error);
        }
    }
    BrowserUtil.deleteSession = deleteSession;
    /**
     * close current window
     */
    async function closeWindow(driver) {
        try {
            await driver.closeWindow();
        }
        catch (error) {
            webservicesExport_1.LOGGER.error('error while closing window');
            webservicesExport_1.LOGGER.error(error.stack);
            throw new Error(error);
        }
    }
    BrowserUtil.closeWindow = closeWindow;
    /**
     * Opens a sub page of the page
     * @param path path of the sub page (e.g. /path/to/page.html)
     */
    async function open(driver, path) {
        try {
            await driver.url(path);
            await driver.pause(3000);
            await driver.acceptAlert();
        }
        catch (error) {
            webservicesExport_1.LOGGER.error('could not open path url');
            webservicesExport_1.LOGGER.info(error.stack);
            throw new Error(error);
        }
    }
    BrowserUtil.open = open;
    /**
     * get the title of the current window
     */
    async function getTitle(driver) {
        let title;
        try {
            title = await driver.getTitle();
        }
        catch (error) {
            webservicesExport_1.LOGGER.error('could not get title of the page');
            webservicesExport_1.LOGGER.info(error.stack);
            throw new Error(error);
        }
        return title;
    }
    BrowserUtil.getTitle = getTitle;
    /**
     * switch to child window
     */
    async function switchToChildWindow(driver, childWindowId) {
        try {
            const windowHandles = await driver.getWindowHandles();
            webservicesExport_1.LOGGER.info('below are window handles');
            windowHandles.forEach((windowHandle) => {
                webservicesExport_1.LOGGER.info(windowHandle);
            });
            if (childWindowId === undefined || childWindowId === '') {
                for (let index = 0; index < windowHandles.length; index += 1) {
                    if (!(windowHandles[index] === sessionIdAndMainWindowHandle.get(driver.sessionId))) {
                        webservicesExport_1.LOGGER.info(`switching to child window handle----${windowHandles[index]}`);
                        await driver.switchToWindow(windowHandles[index]);
                        break;
                    }
                }
            }
            else {
                webservicesExport_1.LOGGER.info(`switching to child window handle----${childWindowId}`);
                await driver.switchToWindow(childWindowId);
            }
        }
        catch (error) {
            webservicesExport_1.LOGGER.error('switch to child window was not successful\n');
            webservicesExport_1.LOGGER.info(error.stack);
            throw new Error(error);
        }
    }
    BrowserUtil.switchToChildWindow = switchToChildWindow;
    /**
     * switch to child window
     */
    async function switchToChildWindowWithTitle(driver, title) {
        try {
            const windowHandles = await driver.getWindowHandles();
            webservicesExport_1.LOGGER.info('below are window handles');
            windowHandles.forEach((windowHandle) => {
                webservicesExport_1.LOGGER.info(windowHandle);
            });
            let foundChildWindow = false;
            for (let index = 0; index < windowHandles.length; index += 1) {
                await driver.switchToWindow(windowHandles[index]);
                const currentTitle = await driver.getTitle();
                if (currentTitle === title) {
                    foundChildWindow = true;
                    webservicesExport_1.LOGGER.info(`Switched to webview with title - ${title}`);
                    break;
                }
            }
            if (!foundChildWindow) {
                webservicesExport_1.LOGGER.warn(`Could not find the webview with specified title-${title}, switching to ${windowHandles[0]}`);
                await driver.switchToWindow(windowHandles[0]);
            }
        }
        catch (error) {
            webservicesExport_1.LOGGER.error('switch to child window was not successful\n');
            webservicesExport_1.LOGGER.info(error.stack);
            throw new Error(error);
        }
    }
    BrowserUtil.switchToChildWindowWithTitle = switchToChildWindowWithTitle;
    async function switchToFrame(driver, iFrameLocator) {
        try {
            if (typeof iFrameLocator === 'string') {
                await driver.switchToFrame(await driver.$(iFrameLocator));
            }
            else {
                await driver.switchToFrame(iFrameLocator);
            }
        }
        catch (error) {
            webservicesExport_1.LOGGER.error('switch to iframe was not successful\n');
            webservicesExport_1.LOGGER.info(error.stack);
            throw new Error(error);
        }
    }
    BrowserUtil.switchToFrame = switchToFrame;
    /**
     * switch to parent frame
     */
    async function switchToParentFrame(driver) {
        try {
            await driver.switchToParentFrame();
        }
        catch (error) {
            webservicesExport_1.LOGGER.error('switch to parent frame was not successful\n');
            webservicesExport_1.LOGGER.info(error.stack);
            throw new Error(error);
        }
    }
    BrowserUtil.switchToParentFrame = switchToParentFrame;
    /**
     * switch to main window
     */
    async function switchToMainWindow(driver) {
        try {
            const windowHandles = await driver.getWindowHandles();
            const parentWindow = sessionIdAndMainWindowHandle.get(driver.sessionId);
            webservicesExport_1.LOGGER.info(`Window Handles - ${windowHandles}. Switching to Parent Window - ${parentWindow}`);
            await driver.switchToWindow(parentWindow);
        }
        catch (error) {
            webservicesExport_1.LOGGER.info(`Switching to main Window was not successful. Error : ${error.stack}`);
            throw new Error(`Switching to main Window was not successful. Error : ${error.stack}`);
        }
    }
    BrowserUtil.switchToMainWindow = switchToMainWindow;
    /**
     * close all child window and switch to main window
     */
    async function closeAllChildWindow(driver) {
        try {
            const windowHandles = await driver.getWindowHandles();
            const parentWindow = sessionIdAndMainWindowHandle.get(driver.sessionId);
            webservicesExport_1.LOGGER.info(`Window Handles - ${windowHandles}. Switching to Parent Window - ${parentWindow}`);
            for (let index = 0; index < windowHandles.length; index += 1) {
                const windowHandle = windowHandles[index];
                if (windowHandle !== sessionIdAndMainWindowHandle.get(driver.sessionId)) {
                    await driver.switchToWindow(windowHandle);
                    await driver.closeWindow();
                    await webservicesExport_1.WaitUtil.pause(driver, 200);
                    // if any popup shown accept that popup window
                    if ((await driver.getWindowHandles()).includes(windowHandle)
                        && (await driver.isAlertOpen())) {
                        await driver.acceptAlert();
                        webservicesExport_1.LOGGER.info('popup displayed while closing the window, accepted the popup');
                    }
                    webservicesExport_1.LOGGER.info(`closed child window-${windowHandle}`);
                }
            }
            webservicesExport_1.LOGGER.info(`switching to parent window handle----${sessionIdAndMainWindowHandle.get(driver.sessionId)}`);
            await driver.switchToWindow(sessionIdAndMainWindowHandle.get(driver.sessionId));
        }
        catch (error) {
            webservicesExport_1.LOGGER.error('close all child window was not successful\n');
            webservicesExport_1.LOGGER.info(error.stack);
            throw new Error(error);
        }
    }
    BrowserUtil.closeAllChildWindow = closeAllChildWindow;
    /**
     * executes the javascript
     * @param js
     */
    async function executeJavascript(driver, js) {
        try {
            await driver.execute(js);
        }
        catch (error) {
            webservicesExport_1.LOGGER.error('error while executing javascript');
            webservicesExport_1.LOGGER.info(error.stack);
            throw new Error(error);
        }
    }
    BrowserUtil.executeJavascript = executeJavascript;
    /**
     * get window handle
     * @param js
     */
    async function getWindowHandle(driver) {
        let windowHandle;
        try {
            windowHandle = await driver.getWindowHandle();
        }
        catch (error) {
            webservicesExport_1.LOGGER.error('error while executing javascript');
            webservicesExport_1.LOGGER.info(error.stack);
            throw new Error(error);
        }
        return windowHandle;
    }
    BrowserUtil.getWindowHandle = getWindowHandle;
    /**
     * get window handle
     * @param js
     */
    async function getWindowHandles(driver) {
        let windowHandles;
        try {
            windowHandles = await driver.getWindowHandles();
        }
        catch (error) {
            webservicesExport_1.LOGGER.error('error while executing javascript');
            webservicesExport_1.LOGGER.info(error.stack);
            throw new Error(error);
        }
        return windowHandles;
    }
    BrowserUtil.getWindowHandles = getWindowHandles;
    /**
   * Switch app to home
   * @param js
   */
    async function switchAppToHome(driver) {
        try {
            const KEYCODE_APP_SWITCH = 187;
            const windowHandles = await BrowserUtil.getWindowHandles(driver);
            webservicesExport_1.LOGGER.info(`Navigating to home Windows handles-${windowHandles}`);
            if (windowHandles.length === 1)
                await BrowserUtil.switchToChildWindow(driver, windowHandles[0]);
            if (windowHandles.length > 1) {
                await BrowserUtil.switchToChildWindow(driver, windowHandles[0]);
            }
            webservicesExport_1.LOGGER.info('Switching app');
            const homePageHeaderLabel = "//ons-toolbar/div[text()=' Hello! ']";
            let isDisplayed = false;
            try {
                await driver.$(homePageHeaderLabel).waitForDisplayed({ timeout: 3000 });
                isDisplayed = true;
            }
            catch (error) {
                isDisplayed = false;
            }
            if (!isDisplayed) {
                await driver.pressKeyCode(KEYCODE_APP_SWITCH);
                await webservicesExport_1.WaitUtil.pause(driver, 500);
                await driver.pressKeyCode(KEYCODE_APP_SWITCH);
                await webservicesExport_1.WaitUtil.pause(driver, 500);
            }
        }
        catch (error) {
            webservicesExport_1.LOGGER.info(error.stack);
            throw new Error(error);
        }
    }
    BrowserUtil.switchAppToHome = switchAppToHome;
    /**
     * navigates to default url
     * @param js
     */
    async function navigateToHomepage(driver) {
        try {
            await driver.navigateTo(BrowserUtil.url);
        }
        catch (error) {
            webservicesExport_1.LOGGER.info(error.stack);
            throw new Error(error);
        }
    }
    BrowserUtil.navigateToHomepage = navigateToHomepage;
    /**
     * save cookies from the browser driver
     * @param js
     */
    async function saveCookies(driver, cookieNames) {
        const savedCookies = [{}];
        savedCookies.pop();
        try {
            const cookies = await driver.getAllCookies();
            for (let index = 0; index < cookies.length; index += 1) {
                if (cookieNames.includes(cookies[index].name)) {
                    const tempObj = {};
                    tempObj.name = cookies[index].name;
                    tempObj.value = cookies[index].value;
                    tempObj.domain = cookies[index].domain;
                    tempObj.path = cookies[index].path;
                    tempObj.secure = cookies[index].secure;
                    tempObj.expiry = cookies[index].expiry;
                    savedCookies.push(tempObj);
                    webservicesExport_1.LOGGER.info(`saved cookie details for cookie name-${cookies[index].name}`);
                }
            }
        }
        catch (error) {
            webservicesExport_1.LOGGER.info(error.stack);
            throw new Error(error);
        }
        return savedCookies;
    }
    BrowserUtil.saveCookies = saveCookies;
    /**
     * save all cookies from the browser driver
     */
    async function saveAllCookies(driver, phoneNumber) {
        const userTokenFilePath = `${(0, path_1.join)(webservicesExport_1.Constants.tokensFolderPath, `${phoneNumber}_${webservicesExport_1.Constants.env}_cookies`)}.json`;
        try {
            const cookies = await driver.getAllCookies();
            (0, fs_1.writeFileSync)(userTokenFilePath, JSON.stringify(cookies));
        }
        catch (error) {
            webservicesExport_1.LOGGER.error(`Save cookies failed ${error.stack}`);
            throw new Error(error);
        }
    }
    BrowserUtil.saveAllCookies = saveAllCookies;
    /**
     * set all cookies to the browser driver
     */
    async function setAllCookies(driver, phoneNumber) {
        const userTokenFilePath = `${(0, path_1.join)(webservicesExport_1.Constants.tokensFolderPath, `${phoneNumber}_${webservicesExport_1.Constants.env}_cookies`)}.json`;
        try {
            const savedCookies = webservicesExport_1.JsonReaderHelper.readAttribute('$', userTokenFilePath);
            await driver.setCookies(savedCookies);
        }
        catch (error) {
            webservicesExport_1.LOGGER.error(`Save cookies failed ${error.stack}`);
            throw new Error(error);
        }
    }
    BrowserUtil.setAllCookies = setAllCookies;
    /**
     * save all storage from the browser driver
     */
    async function saveAllLocalStorage(driver, phoneNumber) {
        const localStorageDetails = [{}];
        localStorageDetails.pop(); // remove default object
        const userTokenFilePath = `${(0, path_1.join)(webservicesExport_1.Constants.tokensFolderPath, `${phoneNumber}_localStorage`)}.json`;
        try {
            const localStorageKeys = await driver.execute(function () { return Object.keys(this.localStorage); });
            // LOGGER.info(JSON.stringify(localStorageKeys));
            for (let index = 0; index < localStorageKeys.length; index += 1) {
                const localStorageValue = await driver.execute(`return this.localStorage.getItem('${localStorageKeys[index]}')`);
                localStorageDetails.push({ key: localStorageKeys[index], value: localStorageValue });
            }
            (0, fs_1.writeFileSync)(userTokenFilePath, JSON.stringify(localStorageDetails));
        }
        catch (error) {
            webservicesExport_1.LOGGER.error(`Save local storage failed ${error.stack}`);
            throw new Error(error);
        }
    }
    BrowserUtil.saveAllLocalStorage = saveAllLocalStorage;
    /**
     * set all local storage details to the browser driver
     */
    async function setAllLocalStorageValues(driver, phoneNumber) {
        const userTokenFilePath = `${(0, path_1.join)(webservicesExport_1.Constants.tokensFolderPath, `${phoneNumber}_localStorage`)}.json`;
        try {
            const localStorageDetails = webservicesExport_1.JsonReaderHelper.readAttribute('$', userTokenFilePath);
            for (let index = 0; index < localStorageDetails.length; index += 1) {
                await driver.execute(`this.localStorage.setItem('${localStorageDetails[index].key}','${localStorageDetails[index].value}')`);
            }
        }
        catch (error) {
            webservicesExport_1.LOGGER.error(`Set local storage failed ${error.stack}`);
            throw new Error(error);
        }
    }
    BrowserUtil.setAllLocalStorageValues = setAllLocalStorageValues;
    async function getDriver(configJson) {
        const browserObj = await (0, webdriverio_1.remote)(configJson);
        return browserObj;
    }
    BrowserUtil.getDriver = getDriver;
})(BrowserUtil = exports.BrowserUtil || (exports.BrowserUtil = {}));
