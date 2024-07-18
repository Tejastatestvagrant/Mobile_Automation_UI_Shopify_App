export declare const LambdaTestConfigIos: {
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
        'lt:options': {
            w3c: boolean;
            user: string;
            accessKey: string;
            build: string;
            name: string;
            deviceName: string;
            platformVersion: string;
            platformName: string;
            app: any;
            isRealMobile: boolean;
        };
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
