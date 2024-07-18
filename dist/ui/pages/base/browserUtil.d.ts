import { Browser } from 'webdriverio';
/**
 * this module will have common reusable methods for browser
 */
export declare module BrowserUtil {
    const url: string;
    /**
     * this method will help in setting up driver with some settings
     */
    function setupBrowser(configJson: any, specName: string, envJsonFilePath?: string | Object, optURL?: string): Promise<Browser<'async'>>;
    /**
     * deletes the cookie
     */
    function deleteCookies(driver: Browser<'async'>): Promise<void>;
    /**
     * deletes the session
     */
    function deleteSession(driver: Browser<'async'>): Promise<void>;
    /**
     * close current window
     */
    function closeWindow(driver: Browser<'async'>): Promise<void>;
    /**
     * Opens a sub page of the page
     * @param path path of the sub page (e.g. /path/to/page.html)
     */
    function open(driver: Browser<'async'>, path: string): Promise<void>;
    /**
     * get the title of the current window
     */
    function getTitle(driver: Browser<'async'>): Promise<string>;
    /**
     * switch to child window
     */
    function switchToChildWindow(driver: Browser<'async'>, childWindowId?: string): Promise<void>;
    /**
     * switch to child window
     */
    function switchToChildWindowWithTitle(driver: Browser<'async'>, title: string): Promise<void>;
    /**
     * switch to frame
     */
    function switchToFrame(driver: Browser<'async'>, iFrameLocator: string): Promise<void>;
    /**
     * switch to parent frame
     */
    function switchToParentFrame(driver: Browser<'async'>): Promise<void>;
    /**
     * switch to main window
     */
    function switchToMainWindow(driver: Browser<'async'>): Promise<void>;
    /**
     * close all child window and switch to main window
     */
    function closeAllChildWindow(driver: Browser<'async'>): Promise<void>;
    /**
     * executes the javascript
     * @param js
     */
    function executeJavascript(driver: Browser<'async'>, js: string): Promise<void>;
    /**
     * get window handle
     * @param js
     */
    function getWindowHandle(driver: Browser<'async'>): Promise<string>;
    /**
     * get window handle
     * @param js
     */
    function getWindowHandles(driver: Browser<'async'>): Promise<string[]>;
    /**
   * Switch app to home
   * @param js
   */
    function switchAppToHome(driver: Browser<'async'>): Promise<void>;
    /**
     * navigates to default url
     * @param js
     */
    function navigateToHomepage(driver: Browser<'async'>): Promise<void>;
    /**
     * save cookies from the browser driver
     * @param js
     */
    function saveCookies(driver: Browser<'async'>, cookieNames: string[]): Promise<any>;
    /**
     * save all cookies from the browser driver
     */
    function saveAllCookies(driver: Browser<'async'>, phoneNumber: string): Promise<void>;
    /**
     * set all cookies to the browser driver
     */
    function setAllCookies(driver: Browser<'async'>, phoneNumber: string): Promise<void>;
    /**
     * save all storage from the browser driver
     */
    function saveAllLocalStorage(driver: Browser<'async'>, phoneNumber: string): Promise<void>;
    /**
     * set all local storage details to the browser driver
     */
    function setAllLocalStorageValues(driver: Browser<'async'>, phoneNumber: string): Promise<void>;
    function getDriver(configJson: {}): Promise<Browser<'async'>>;
}
