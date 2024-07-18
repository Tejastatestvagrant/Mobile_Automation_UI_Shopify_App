export declare const dockerConfig: {
    logLevel: string;
    connectionRetryTimeout: number;
    connectionRetryCount: number;
    bail: number;
    waitforTimeout: number;
    hostname: string;
    port: number;
    path: string;
    services: string[];
    dockerLogs: string;
    dockerOptions: {
        healthCheck: string;
    };
    capabilities: {
        browserName: string;
        acceptInsecureCerts: boolean;
        'goog:chromeOptions': {
            args: string[];
        };
    };
};
