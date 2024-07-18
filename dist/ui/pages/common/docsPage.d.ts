import { Element } from 'webdriverio';
import { BasePage } from '../../../uiExport';
/**
 * Ekam Docs page
 */
export declare class DocsPage extends BasePage {
    private selectors;
    getEkamLogoEle(): Promise<Element<'async'>>;
    getGettingStartedTitleEle(): Promise<Element<'async'>>;
    getGithubIconEle(): Promise<Element<'async'>>;
    getToggleDarkIconEle(): Promise<Element<'async'>>;
    getDocsSearchBarEle(): Promise<Element<'async'>>;
    enterTextToBeSearchedInDocs(text: string): Promise<void>;
    getGettingStartedTitleEleText(): Promise<string>;
}
