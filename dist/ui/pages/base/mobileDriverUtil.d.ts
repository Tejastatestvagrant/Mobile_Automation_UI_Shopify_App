import { Browser } from 'webdriverio';
/**
 * this module will have common reusable methods for browser
 */
export declare module MobileDriverUtil {
    const url: string;
    /**
     * this method will help in setting up driver with some settings
     */
    function setupMobileDriver(configJson: any, specName: string, envJsonFilePath?: string | Object): Promise<Browser<'async'>>;
    /**
     * close app
     */
    function closeApp(driver: Browser<'async'>): Promise<void>;
    /**
     * launch app
     */
    function launchApp(driver: Browser<'async'>): Promise<void>;
}
