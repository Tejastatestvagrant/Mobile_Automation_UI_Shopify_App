export declare const lambdaTestWebConfig: {
    logLevel: string;
    connectionRetryTimeout: number;
    connectionRetryCount: number;
    bail: number;
    hostname: string;
    port: number;
    waitforTimeout: number;
    services: (string | {
        tunnel: boolean;
        lambdatestOpts: {
            logFile: string;
        };
    })[][];
    automationProtocol: string;
    user: string;
    key: string;
    capabilities: {
        'LT:Options': {
            browserName: string;
            version: string;
            platformName: string;
            build: string;
            name: string;
            visual: boolean;
            console: boolean;
            network: boolean;
            project: string;
            w3c: boolean;
            plugin: string;
        };
    };
    mochaOpts: {
        ui: string;
        timeout: number;
    };
    framework: string;
};
