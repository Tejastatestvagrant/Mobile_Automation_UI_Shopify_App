export declare const browserstackWebConfig: {
    logLevel: string;
    connectionRetryTimeout: number;
    connectionRetryCount: number;
    bail: number;
    port: number;
    waitforTimeout: number;
    protocol: string;
    services: string[][];
    automationProtocol: string;
    user: string;
    key: string;
    capabilities: {
        browserName: string;
        browser_version: string;
        os: string;
        os_version: string;
        resolution: string;
        'browserstack.local': string;
        'browserstack.debug': string;
        'browserstack.networkLogs': string;
    };
    mochaOpts: {
        ui: string;
        timeout: number;
    };
    framework: string;
};
