export declare const PcloudyConfig: {
    protocol: string;
    hostname: string;
    port: number;
    path: string;
    services: (string | {
        command: string;
        args: {
            relaxedSecurity: boolean;
            platformName: string;
            allowInsecure: string;
        };
    })[][];
    specs: string[];
    capabilities: {
        browserName: string;
        pCloudy_Username: string;
        pCloudy_ApiKey: string;
        pCloudy_ApplicationName: string;
        pCloudy_DurationInMinutes: string;
        pCloudy_DeviceManafacturer: string;
        pCloudy_DeviceVersion: string;
        platformName: string;
        automationName: string;
        newCommandTimeout: string;
        launchTimeout: string;
        appPackage: string;
        appActivity: string;
        noReset: boolean;
        nativeWebScreenshot: boolean;
        wdaConnectionTimeout: number;
        pCloudy_EnableVideo: boolean;
    };
    coloredLogs: boolean;
    deprecationWarnings: boolean;
    bail: number;
    screenshotPath: string;
    baseUrl: string;
    waitforTimeout: number;
    connectionRetryTimeout: number;
    connectionRetryCount: number;
};
