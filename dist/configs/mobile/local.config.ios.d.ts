export declare const LocalConfigIos: {
    hostname: string;
    port: number;
    path: string;
    logLevel: string;
    services: (string | {
        command: string;
        args: {
            platformName: string;
        };
    })[][];
    capabilities: {
        'appium:app': string;
        platformName: string;
        'appium:deviceName': string;
        'appium:platformVersion': string;
        'appium:automationName': string;
        'appium:orientation': string;
        'appium:noReset': boolean;
        'appium:newCommandTimeout': number;
        'appium:autoGrantPermissions': boolean;
        'appium:autoAcceptAlerts': boolean;
    };
    coloredLogs: boolean;
    deprecationWarnings: boolean;
    bail: number;
    waitforTimeout: number;
    connectionRetryTimeout: number;
    connectionRetryCount: number;
};
