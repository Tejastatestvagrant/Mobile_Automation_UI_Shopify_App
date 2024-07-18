import { Browser } from 'webdriverio';
export declare module WaitUtil {
    /**
     * wait during api automation
     * @param ms
     * @returns
     */
    function sleep(ms: number): Promise<void>;
    /**
     * this method will helps in waiting between different operations
     * @param milliseconds
     */
    function pause(driver: Browser<'async'>, milliseconds: number): Promise<void>;
    /**
     * this will wait until loading text disappear
     */
    function waitForLoadingDisappear(driver: Browser<'async'>, timeOut?: number): Promise<void>;
}
