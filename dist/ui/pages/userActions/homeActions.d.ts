import { Browser } from 'webdriverio';
import { BasePage, DocsPage, HomePage } from '../../../uiExport';
export declare class HomeActions extends BasePage {
    homePage: HomePage;
    docsPage: DocsPage;
    constructor(driver: Browser<'async'>);
    clickingOnDocsLink(hyperLinkText: string): Promise<void>;
}
