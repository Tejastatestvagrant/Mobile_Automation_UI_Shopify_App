"use strict";
/* eslint import/no-mutable-exports: "off" */
/* eslint no-param-reassign: "off" */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileDriverUtil = void 0;
const webdriverio_1 = require("webdriverio");
const webservicesExport_1 = require("../../../webservicesExport");
/**
 * this module will have common reusable methods for browser
 */
var MobileDriverUtil;
(function (MobileDriverUtil) {
    // export let loggerHelper: LoggerHelper;
    MobileDriverUtil.url = '';
    const listOfSpecs = [];
    /**
     * this method will help in setting up driver with some settings
     */
    async function setupMobileDriver(configJson, specName, envJsonFilePath) {
        let driver = null;
        try {
            // setup logger before even starting the execution
            // setup logger only one time for all parallel executions
            if (!listOfSpecs.includes(specName)) {
                // this.loggerHelper = new LoggerHelper();
                // this.loggerHelper.setupLogger(specName);
                webservicesExport_1.LoggerHelper.setupLogger(specName);
                webservicesExport_1.LOGGER.info(`------RUNNING SUITE: ${specName}------`);
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
            // assign spec name to the lambdatest config
            if (webservicesExport_1.Constants.commandLineArguments.platform.includes('lambdatest') && webservicesExport_1.Constants.commandLineArguments.os.includes('android'))
                configJson.capabilities.name = specName;
            else if (webservicesExport_1.Constants.commandLineArguments.platform.includes('lambdatest') && webservicesExport_1.Constants.commandLineArguments.os.includes('ios'))
                configJson.capabilities['lt:options'].name = specName;
            else if (webservicesExport_1.Constants.commandLineArguments.platform.includes('browserstack'))
                configJson.capabilities.build = specName;
            driver = await (0, webdriverio_1.remote)(configJson);
            const environmentToRun = webservicesExport_1.Constants.commandLineArguments.env;
            webservicesExport_1.LOGGER.info(`got the ENV as ${environmentToRun} from command line`);
            if (!(environmentToRun === undefined || environmentToRun === '')
                && EnvJson[environmentToRun] !== undefined)
                this.url = EnvJson[environmentToRun].url;
            else {
                webservicesExport_1.LOGGER.error('check environment you have passed seems to be not present within env.json');
                throw new Error('check environment you have passed seems to be not present within env.json');
            }
            webservicesExport_1.LOGGER.info(`Running tests on ${this.url}`);
            return driver;
        }
        catch (error) {
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
            throw new Error(`${error.stack}\n--------Driver setup failed(Make sure appium server running)--------`);
        }
    }
    MobileDriverUtil.setupMobileDriver = setupMobileDriver;
    /**
     * close app
     */
    async function closeApp(driver) {
        try {
            await driver.closeApp();
        }
        catch (error) {
            webservicesExport_1.LOGGER.error('error while closing mobile app');
            webservicesExport_1.LOGGER.error(error.stack);
            throw new Error(error);
        }
    }
    MobileDriverUtil.closeApp = closeApp;
    /**
     * launch app
     */
    async function launchApp(driver) {
        try {
            await driver.launchApp();
        }
        catch (error) {
            webservicesExport_1.LOGGER.error('error while launching mobile app');
            webservicesExport_1.LOGGER.error(error.stack);
            throw new Error(error);
        }
    }
    MobileDriverUtil.launchApp = launchApp;
})(MobileDriverUtil = exports.MobileDriverUtil || (exports.MobileDriverUtil = {}));
