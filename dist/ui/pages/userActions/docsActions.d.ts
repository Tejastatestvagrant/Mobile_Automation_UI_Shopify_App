import { Browser } from 'webdriverio';
import { BasePage, DocsPage, HomePage } from '../../../uiExport';
export declare class DocsActions extends BasePage {
    homePage: HomePage;
    docsPage: DocsPage;
    constructor(driver: Browser<'async'>);
    isGettingStartedTextVisible(expectedText: string): Promise<boolean>;
}
