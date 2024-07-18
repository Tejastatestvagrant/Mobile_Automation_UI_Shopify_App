import { Browser, Element } from 'webdriverio';
export declare class BaseScreen {
    driver: Browser<'async'>;
    constructor(driver: Browser<'async'>);
    /**
     * return the element
     * @param locator
     * @returns
     */
    getElement(locator: string): Promise<Element<'async'>>;
    /**
     * return the elements
     * @param locator
     * @returns
     */
    getElements(locator: string): Promise<Element<'async'>[]>;
    /**
     * click on the element
     * @param element pass webelement or locator string
     */
    click(element: string): Promise<void>;
    click(element: Element<'async'>): Promise<void>;
    /**
     * set value to text box
     * @param element pass webelement or locator string
     * @param value
     */
    setValue(element: string, value: string): Promise<void>;
    setValue(element: Element<'async'>, value: string): Promise<void>;
    /**
     * clear value of text box
     * @param element pass webelement or locator string
     */
    clearValue(element: string): Promise<void>;
    clearValue(element: Element<'async'>): Promise<void>;
    /**
     * get text of element
     * @param element pass webelement or locator string
     */
    getText(element: string): Promise<string>;
    getText(element: Element<'async'>): Promise<string>;
    /**
     * wait for element to be displayed
     * @param element pass webelement or locator string
     * @param value
     */
    waitForDisplayed(element: string): Promise<void>;
    waitForDisplayed(element: Element<'async'>): Promise<void>;
    /**
     * wait for element to exist
     * @param element pass webelement or locator string
     */
    waitForExist(element: string): Promise<void>;
    waitForExist(element: Element<'async'>): Promise<void>;
    /**
     * check if element is displayed
     * @param element pass webelement or locator string
     */
    isDisplayed(element: string): Promise<boolean>;
    isDisplayed(element: Element<'async'>): Promise<boolean>;
    /**
     * check if element exist
     * @param element pass webelement or locator string
     */
    isExisting(element: string): Promise<boolean>;
    isExisting(element: Element<'async'>): Promise<boolean>;
    /**
     * click on x,y coordinates
     * @param element pass webelement or locator string
     * @param x co-ordinate
     * @param y co-ordinate
     */
    clickAtCoordinates(element: string, x: number, y: number): Promise<void>;
    clickAtCoordinates(element: Element<'async'>, x: number, y: number): Promise<void>;
    /**
     * check element is not displayed
     * @param element pass webelement or locator string
     */
    isNotDisplayed(element: string): Promise<boolean>;
    isNotDisplayed(element: Element<'async'>): Promise<boolean>;
    /**
     * check button is enabled
     * @param element pass webelement or locator string
     */
    isEnabled(element: string): Promise<boolean>;
    isEnabled(element: Element<'async'>): Promise<boolean>;
    /**
     * this method waits for element to be visible and controlls whether to fail or ignore
     * @param element
     * @param timeout
     * @param ignoreIfNotDisplayed
     */
    waitForElementDisplayed(element: string, timeout: number, ignoreIfNotDisplayed?: boolean): Promise<boolean>;
    waitForElementDisplayed(element: Element<'async'>, timeout: number, ignoreIfNotDisplayed?: boolean): Promise<boolean>;
}
