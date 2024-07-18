"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Driver = void 0;
const local_config_1 = require("../../../configs/mobile/local.config");
const local_config_ios_1 = require("../../../configs/mobile/local.config.ios");
const browserstack_config_1 = require("../../../configs/mobile/browserstack.config");
const browserUtil_1 = require("./browserUtil");
const lambdaTest_config_1 = require("../../../configs/mobile/lambdaTest.config");
const lambdaTest_config_ios_1 = require("../../../configs/mobile/lambdaTest.config.ios");
const lambdatest_config_1 = require("../../../configs/web/lambdatest.config");
const uiExport_1 = require("../../../uiExport");
const basicConfig_1 = require("../../../configs/basicConfig");
const local_config_2 = require("../../../configs/web/local.config");
const webservicesExport_1 = require("../../../webservicesExport");
const browserstack_config_2 = require("../../../configs/web/browserstack.config");
const env_properties_enums_1 = require("../../../configs/env.properties.enums");
const basicConfigEnvJson = basicConfig_1.BasicConfig;
var Driver;
(function (Driver) {
    async function getMobileDriver(specName, platform) {
        const cloudPlatform = webservicesExport_1.Constants.commandLineArguments.platform ?? platform;
        switch (cloudPlatform) {
            case env_properties_enums_1.EnvPropertiesEnums.Platform.localApp:
                if (webservicesExport_1.Constants.commandLineArguments.os !== undefined && webservicesExport_1.Constants.commandLineArguments.os === 'ios')
                    return uiExport_1.MobileDriverUtil.setupMobileDriver(local_config_ios_1.LocalConfigIos, specName, basicConfigEnvJson);
                return uiExport_1.MobileDriverUtil.setupMobileDriver(local_config_1.LocalConfig, specName, basicConfigEnvJson);
            case env_properties_enums_1.EnvPropertiesEnums.Platform.lambdatestApp:
                if (webservicesExport_1.Constants.commandLineArguments.os !== undefined && webservicesExport_1.Constants.commandLineArguments.os === 'ios')
                    return uiExport_1.MobileDriverUtil.setupMobileDriver(lambdaTest_config_ios_1.LambdaTestConfigIos, specName, basicConfigEnvJson);
                return uiExport_1.MobileDriverUtil.setupMobileDriver(lambdaTest_config_1.LambdaTestConfig, specName, basicConfigEnvJson);
            case env_properties_enums_1.EnvPropertiesEnums.Platform.browserstackApp:
                return uiExport_1.MobileDriverUtil.setupMobileDriver(browserstack_config_1.BrowserStackConfig, specName, basicConfigEnvJson);
            default:
                return uiExport_1.MobileDriverUtil.setupMobileDriver(local_config_1.LocalConfig, specName, basicConfigEnvJson);
        }
    }
    Driver.getMobileDriver = getMobileDriver;
    async function getWebDriver(specName, platform, optURL) {
        let localOrCloudPlatform = webservicesExport_1.Constants.commandLineArguments.platform ?? platform;
        localOrCloudPlatform = localOrCloudPlatform ?? env_properties_enums_1.EnvPropertiesEnums.Platform.localWeb; // if undefined then reset to web
        switch (localOrCloudPlatform) {
            case env_properties_enums_1.EnvPropertiesEnums.Platform.localWeb:
                return browserUtil_1.BrowserUtil.setupBrowser(local_config_2.localConfig, specName, basicConfigEnvJson, optURL);
            case env_properties_enums_1.EnvPropertiesEnums.Platform.lambdatestWeb:
                return browserUtil_1.BrowserUtil.setupBrowser(lambdatest_config_1.lambdaTestWebConfig, specName, basicConfigEnvJson, optURL);
            case env_properties_enums_1.EnvPropertiesEnums.Platform.browserstackWeb:
                return browserUtil_1.BrowserUtil.setupBrowser(browserstack_config_2.browserstackWebConfig, specName, basicConfigEnvJson, optURL);
            default:
                return browserUtil_1.BrowserUtil.setupBrowser(local_config_2.localConfig, specName, basicConfigEnvJson, optURL);
        }
    }
    Driver.getWebDriver = getWebDriver;
    async function attachScreenshots(driver, reporter) {
        try {
            const viewPortScreenshotSource = await driver.takeScreenshot();
            const viewPortScreenshot = Buffer.from(viewPortScreenshotSource, 'base64');
            reporter.addAttachment('View Port Screenshot', viewPortScreenshot, 'image/png');
        }
        catch (error) {
            console.log(`Screenshot was not taken successfully. Error : ${error}`);
        }
    }
    Driver.attachScreenshots = attachScreenshots;
    /**
     * get driver based on PLATFORM parameter
     * @param specName
     * @param platform
     * @returns
     */
    async function getDriver(specName, platform, optURL) {
        let localOrCloudPlatform = webservicesExport_1.Constants.commandLineArguments.platform ?? platform;
        localOrCloudPlatform = localOrCloudPlatform ?? env_properties_enums_1.EnvPropertiesEnums.Platform.localWeb; // if undefined then reset to web
        console.log(`Running tests on PLATFORM-${localOrCloudPlatform}`);
        switch (localOrCloudPlatform) {
            case env_properties_enums_1.EnvPropertiesEnums.Platform.localWeb:
                return getWebDriver(specName, undefined, optURL);
            case env_properties_enums_1.EnvPropertiesEnums.Platform.lambdatestWeb:
            case env_properties_enums_1.EnvPropertiesEnums.Platform.browserstackWeb:
                return getWebDriver(specName);
            case env_properties_enums_1.EnvPropertiesEnums.Platform.localApp:
            case env_properties_enums_1.EnvPropertiesEnums.Platform.lambdatestApp:
            case env_properties_enums_1.EnvPropertiesEnums.Platform.browserstackApp:
                return getMobileDriver(specName, localOrCloudPlatform);
            default:
                return getWebDriver(specName);
        }
    }
    Driver.getDriver = getDriver;
    /**
     * helps in closing the drivers
     * @param drivers
     */
    async function closeDrivers(drivers) {
        for (let index = 0; index < drivers.length; index += 1) {
            if (drivers[index].isMobile) {
                await drivers[index].closeApp();
                await drivers[index].deleteSession();
            }
            else
                await drivers[index].deleteSession();
        }
    }
    Driver.closeDrivers = closeDrivers;
})(Driver = exports.Driver || (exports.Driver = {}));
