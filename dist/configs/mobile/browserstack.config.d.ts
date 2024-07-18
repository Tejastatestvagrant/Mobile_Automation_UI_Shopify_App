export declare const BrowserStackConfig: {
    hostname: string;
    path: string;
    logLevel: string;
    services: string[];
    capabilities: {
        app: any;
        'browserstack.appium_version': string;
        'browserstack.networkLogs': string;
        'browserstack.user': string;
        'browserstack.key': string;
        project: string;
        build: string;
        os_version: string;
        device: string;
    };
    coloredLogs: boolean;
    deprecationWarnings: boolean;
    waitforTimeout: number;
    connectionRetryTimeout: number;
    connectionRetryCount: number;
};
