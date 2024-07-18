import { Element } from 'webdriverio';
import { BasePage } from '../../../uiExport';
/**
 * Home page of Ekam
 */
export declare class HomePage extends BasePage {
    private selectors;
    getEkamIconEle(): Promise<Element<'async'>>;
    getNavBarHyperLinkEle(hyperLinkText: string): Promise<Element<'async'>>;
    navigateUsingHyperLink(hyperLinkText: string): Promise<void>;
    getSuperchargedTitleEle(): Promise<Element<'async'>>;
    getSuperchargedTitleEleText(): Promise<string>;
    getGetStartedButtonEle(): Promise<Element<'async'>>;
}
