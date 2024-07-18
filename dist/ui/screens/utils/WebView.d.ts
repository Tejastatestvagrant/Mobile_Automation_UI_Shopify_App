import { Browser } from 'webdriverio';
import { BaseScreen } from '../../../uiExport';
export declare const CONTEXT_REF: {
    NATIVE: string;
    WEBVIEW: string;
};
export declare class WebView extends BaseScreen {
    /**
       * Wait for the webview context to be loaded
       *
       * By default you have `NATIVE_APP` as the current context. If a webview is loaded it will be
       * added to the current contexts and will looks something like this for iOS
       * `["NATIVE_APP","WEBVIEW_28158.2"]`
       * The number behind `WEBVIEW` will be a random number in random order.
       *
       * For Android you can get something like
       * ["NATIVE_APP","WEBVIEW_com.wdiodemoapp", "WEBVIEW_com.chrome"]`.
       * The string behind `WEBVIEW` will the package name of the app that holds
       * the webview
       */
    waitForWebViewContextLoaded(): Promise<void>;
    /**
       * Switch to native or webview context
       */
    switchToContext(context: string): Promise<void>;
    /**
       * Returns an object with the list of all available contexts
       */
    getCurrentContexts(): Promise<any[]>;
    /**
       * Wait for the document to be fully loaded
       */
    waitForDocumentFullyLoaded(driver: Browser<'async'>): Promise<void>;
    /**
       * Wait for the website in the webview to be loaded
       */
    waitForWebsiteLoaded(): Promise<void>;
}
