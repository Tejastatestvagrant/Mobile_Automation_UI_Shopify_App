"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lambdaTestWebConfig = void 0;
const webservicesExport_1 = require("../../webservicesExport");
const dateForReporting = `${new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}`;
exports.lambdaTestWebConfig = {
    logLevel: 'error',
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    bail: 0,
    hostname: 'hub.lambdatest.com',
    port: 80,
    waitforTimeout: 30000,
    services: [
        [
            'lambdatest',
            {
                tunnel: false,
                lambdatestOpts: {
                    logFile: 'tunnel.log',
                },
            },
        ],
    ],
    automationProtocol: 'webdriver',
    user: webservicesExport_1.Constants.commandLineArguments.cloudUserName,
    key: webservicesExport_1.Constants.commandLineArguments.cloudKey,
    capabilities: {
        'LT:Options': {
            browserName: webservicesExport_1.Constants.commandLineArguments.browser || 'chrome',
            version: 'latest',
            platformName: process.env.HYPEREXECUTE_PLATFORM || 'macOS Monterey',
            build: `TypeScript_Framwwork_Sanity - ${dateForReporting}`,
            name: 'Spec name will be replaced here',
            visual: true,
            console: true,
            network: true,
            project: 'TypeScript Framework',
            w3c: true,
            plugin: 'node_js-webdriverio',
        },
    },
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },
    framework: 'mocha',
};
