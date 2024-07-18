import { Element } from 'webdriverio';
import { BasePage } from '../../../uiExport';
/**
 * Google Home page of application
 */
export declare class FlipkartHomePage extends BasePage {
    private selectors;
    getLoginButtonEle(): Promise<Element<'async'>>;
    getFlipkartImgEle(): Promise<Element<'async'>>;
    getMenuImgEle(menuName: string): Promise<Element<'async'>>;
    getSearchInputEle(): Promise<Element<'async'>>;
    navigateToMenu(menuName: string): Promise<void>;
    searchProduct(productName: string): Promise<void>;
}
