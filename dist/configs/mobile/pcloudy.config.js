"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PcloudyConfig = void 0;
const webservicesExport_1 = require("../../webservicesExport");
exports.PcloudyConfig = {
    protocol: 'https',
    hostname: 'device.pcloudy.com',
    port: 443,
    path: '/appiumcloud/wd/hub',
    services: [
        [
            'appium',
            {
                command: 'appium',
                args: {
                    relaxedSecurity: true,
                    platformName: 'Android',
                    allowInsecure: 'chromedriver_autodownload',
                },
            },
        ],
    ],
    specs: [''],
    capabilities: {
        browserName: '',
        pCloudy_Username: webservicesExport_1.Constants.commandLineArguments.cloudUserName,
        pCloudy_ApiKey: webservicesExport_1.Constants.commandLineArguments.cloudKey,
        pCloudy_ApplicationName: 'app-weview-qa.apk',
        pCloudy_DurationInMinutes: '10',
        pCloudy_DeviceManafacturer: 'SAMSUNG',
        pCloudy_DeviceVersion: '11.0.0',
        platformName: 'Android',
        automationName: 'uiautomator2',
        newCommandTimeout: '600',
        launchTimeout: '300000',
        appPackage: 'com.nc.trader',
        appActivity: 'com.nc.trader.activities.TraderWebAppActivity',
        noReset: true,
        nativeWebScreenshot: true,
        wdaConnectionTimeout: 600000,
        pCloudy_EnableVideo: true,
    },
    coloredLogs: true,
    deprecationWarnings: true,
    bail: 0,
    screenshotPath: './errorShots/',
    baseUrl: 'https://device.pcloudy.com',
    waitforTimeout: 30000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
};
