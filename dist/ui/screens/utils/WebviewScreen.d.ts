import { WebView } from './WebView';
export declare class WebViewScreen extends WebView {
    /**
     * Wait for the screen to be displayed based on Xpath
     */
    waitForWebViewIsDisplayedByXpath(isShown?: boolean): Promise<boolean | void>;
}
