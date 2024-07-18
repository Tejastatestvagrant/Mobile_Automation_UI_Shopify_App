"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.localConfig = void 0;
const path_1 = __importDefault(require("path"));
const constants_1 = require("../constants");
const BROWSER = constants_1.Constants.commandLineArguments.browser;
const HEADLESS = constants_1.Constants.commandLineArguments.headless;
const IMPLICIT_TIMEOUT = constants_1.Constants.commandLineArguments.implicitTimeout;
const CHROME_CAPABILITY = {
    browserName: 'chrome',
    acceptInsecureCerts: true,
    'goog:chromeOptions': {
        args: HEADLESS === 'true' ? ['--headless', '--disable-gpu'] : ['--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream'],
        prefs: {
            'profile.managed_default_content_settings.popups': 2,
            'profile.managed_default_content_settings.notifications': 2,
            'download.default_directory': path_1.default.join(process.cwd(), 'tempDownload'),
        },
    },
};
const FIREFOX_CAPABILITY = {
    browserName: 'firefox',
    'moz:firefoxOptions': {
        args: HEADLESS === 'true' ? ['-headless'] : [],
    },
};
const SAFARI_CAPABILITY = {
    browserName: 'safari',
};
const getCapabilities = () => {
    switch (BROWSER) {
        case 'chrome':
            return CHROME_CAPABILITY;
        case 'firefox':
            return FIREFOX_CAPABILITY;
        case 'safari':
            return SAFARI_CAPABILITY;
        default:
            return CHROME_CAPABILITY;
    }
};
exports.localConfig = {
    logLevel: 'error',
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    bail: 0,
    waitforTimeout: IMPLICIT_TIMEOUT ?? 30000,
    automationProtocol: 'webdriver',
    hostname: 'localhost',
    port: 4444,
    path: '/wd/hub',
    capabilities: getCapabilities(),
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },
    framework: 'mocha',
};
