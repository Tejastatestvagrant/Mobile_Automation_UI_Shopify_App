import { Browser, Element } from 'webdriverio';
export declare class BasePage {
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
    click(element: string, timeout?: number): Promise<void>;
    click(element: Element<'async'>, timeout?: number): Promise<void>;
    /**
     * click on the button
     * @param buttonName pass button name
     */
    clickButton(buttonName: string): Promise<void>;
    /**
     * select dropdown by visible text
     * @param element pass webelement or locator string
     * @param value
     */
    selectByVisibleText(element: string, value: string): Promise<void>;
    selectByVisibleText(element: Element<'async'>, value: string): Promise<void>;
    /**
     * check element is clickable
     * @param element pass webelement or locator string
     */
    isClickable(element: string): Promise<boolean>;
    isClickable(element: Element<'async'>): Promise<boolean>;
    /**
     * set value to text box
     * @param element pass webelement or locator string
     * @param value
     */
    setValue(element: string, value: string, timeout?: number): Promise<void>;
    setValue(element: Element<'async'>, value: string, timeout?: number): Promise<void>;
    /**
     * set value to text box
     * @param placeholder pass placeholder string for the input
     * @param value
     */
    setTextboxValue(placeholder: string, value: string): Promise<void>;
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
    getText(element: string, timeout?: number): Promise<string>;
    getText(element: Element<'async'>, timeout?: number): Promise<string>;
    /**
     * right click on the element
     * @param element pass webelement or locator string
     */
    rightClick(element: string): Promise<void>;
    rightClick(element: Element<'async'>): Promise<void>;
    /**
     * wait for element to be displayed
     * @param element pass webelement or locator string
     * @param value
     */
    waitForDisplayed(element: string): Promise<void>;
    waitForDisplayed(element: Element<'async'>): Promise<void>;
    /**
     * wait for element to be clickable
     * @param element pass webelement or locator string
     */
    waitForClickable(element: string): Promise<void>;
    waitForClickable(element: Element<'async'>): Promise<void>;
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
    isDisplayed(element: string, timeout?: number): Promise<boolean>;
    isDisplayed(element: Element<'async'>, timeout?: number): Promise<boolean>;
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
    * scroll to webelement
    * @param element
    */
    scrollElement(element: string): Promise<void>;
    scrollElement(element: Element<'async'>): Promise<void>;
    /**
     * this method waits for element to be visible and controlls whether to fail or ignore
     * @param element
     * @param timeout
     * @param ignoreIfNotDisplayed
     */
    waitForElementDisplayed(element: string, timeout: number, ignoreIfNotDisplayed?: boolean): Promise<boolean>;
    waitForElementDisplayed(element: Element<'async'>, timeout: number, ignoreIfNotDisplayed?: boolean): Promise<boolean>;
    /**
     * upload a Document this method works both on mobile app and chrome
     * imageFilePath pass the image file path
     * elementLocator pass proper locator to input element
     */
    uploadDocument(fullFilePath: string, element: string): Promise<void>;
    uploadDocument(fullFilePath: string, element: Element<'async'>): Promise<void>;
    /**
     * helps in setting date picker value
     * @param inputDateLocator pass the xpath pointing to date ex. //input[@type='date']
     * @param date
     */
    setDateValue(element: string, date: Date): Promise<void>;
    setDateValue(element: Element<'async'>, date: Date): Promise<void>;
    /**
     * use to hide mobile keyboard
     */
    hideKeyboard(): Promise<void>;
}
