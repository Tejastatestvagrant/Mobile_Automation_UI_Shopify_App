"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserStackConfig = void 0;
const webservicesExport_1 = require("../../webservicesExport");
const basicConfig_1 = require("../basicConfig");
const constants_1 = require("../constants");
const appUrlFromPipeline = process.env.APP_URL;
let appCloudUrl = webservicesExport_1.JsonReaderHelper.readAttribute(`$.${constants_1.Constants.commandLineArguments.env}.appCloudUrl`, basicConfig_1.BasicConfig);
// if app url passed from pipeline then pick that url, else it will picked up from the config file
appCloudUrl = (appUrlFromPipeline === undefined || appUrlFromPipeline === '') ? appCloudUrl : appUrlFromPipeline;
let CAPABILITY = null;
const ANDROID_CAPABILITY = {
    os_version: '11.0',
    device: 'Google Pixel 5',
};
const IOS_CAPABILITY = {
    os_version: '16',
    device: 'iPhone 14',
};
CAPABILITY = constants_1.Constants.commandLineArguments.os === 'android' ? ANDROID_CAPABILITY : IOS_CAPABILITY;
exports.BrowserStackConfig = {
    hostname: 'hub-cloud.browserstack.com',
    path: '/wd/hub',
    logLevel: 'error',
    services: [
        'browserstack',
    ],
    capabilities: {
        ...CAPABILITY,
        app: appCloudUrl,
        'browserstack.appium_version': '1.22.0',
        'browserstack.networkLogs': 'true',
        'browserstack.user': constants_1.Constants.commandLineArguments.cloudUserName,
        'browserstack.key': constants_1.Constants.commandLineArguments.cloudKey,
        project: 'TypeScript Framework',
        build: 'your spec name',
    },
    coloredLogs: true,
    deprecationWarnings: true,
    waitforTimeout: 30000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 1,
};
