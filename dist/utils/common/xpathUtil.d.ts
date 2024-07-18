import { Browser } from 'webdriverio';
/**
 * Xpath helper will have common reusable methods related to xpath and getting locator
 */
export declare module XpathUtil {
    /**
    * this method will get xpath based on os version
    */
    function getXpath(driver: Browser<'async'>, xpathObject: {
        android: string;
        ios: string;
    }): string;
    /**
    * this method will replace ##PLACEHOLDER## with value passed
    */
    function getPlaceholderReplaced(xpath: string, replacement: string): string;
}
