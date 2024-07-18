export declare const LambdaTestConfig: {
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
        build: string;
        name: string;
        user: string;
        accessKey: string;
        app: any;
        platformName: string;
        noReset: boolean;
        nativeWebScreenshot: boolean;
        deviceName: string;
        region: string;
        platformVersion: string;
        isRealMobile: boolean;
        autoGrantPermissions: boolean;
        autoAcceptAlerts: boolean;
        appiumVersion: string;
        devicelog: boolean;
        network: boolean;
        appProfiling: boolean;
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
