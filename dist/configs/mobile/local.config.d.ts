export declare const LocalConfig: {
    hostname: string;
    port: number;
    path: string;
    logLevel: string;
    services: (string | {
        command: string;
        args: {
            relaxedSecurity: boolean;
            platformName: string;
            allowInsecure: string;
        };
    })[][];
    capabilities: {
        platformName: string;
        'appium:deviceName': string;
        'appium:app': string;
        'appium:automationName': string;
        'appium:appPackage': string;
        'appium:appActivity': string;
        'appium:noReset': boolean;
        'appium:gpsEnabled': boolean;
        'appium:newCommandTimeout': number;
        'appium:nativeWebScreenshot': boolean;
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
