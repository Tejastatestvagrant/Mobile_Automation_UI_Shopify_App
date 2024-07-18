import { Logger } from 'winston';
/**
 * contains logger helper methods for logging
 */
export declare let LOGGER: Logger;
export declare module LoggerHelper {
    /**
     * this method will help in setting the logger
     */
    function setupLogger(specName?: string): void;
}
