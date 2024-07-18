"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebView = exports.CONTEXT_REF = void 0;
const webservicesExport_1 = require("../../../webservicesExport");
const uiExport_1 = require("../../../uiExport");
exports.CONTEXT_REF = {
    NATIVE: 'native',
    WEBVIEW: 'webview',
};
const DOCUMENT_READY_STATE = {
    COMPLETE: 'complete',
    INTERACTIVE: 'interactive',
    LOADING: 'loading',
};
class WebView extends uiExport_1.BaseScreen {
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
    async waitForWebViewContextLoaded() {
        let currentContexts;
        await this.driver.waitUntil(async () => {
            currentContexts = await this.getCurrentContexts();
            return currentContexts.length > 1
                && currentContexts.find((context) => context.toLowerCase().includes(exports.CONTEXT_REF.WEBVIEW)) !== 'undefined';
        }, {
            // Wait a max of 90 seconds. Reason for this high amount is that loading
            // a webview for iOS might take longer
            timeout: 150000,
            timeoutMsg: `Webview context not loaded, even waitted for 150000 secs, current contexts are ${currentContexts}`,
            interval: 1000,
        });
    }
    /**
       * Switch to native or webview context
       */
    async switchToContext(context) {
        try {
            // The first context will always be the NATIVE_APP,
            // the second one will always be the WebdriverIO web page
            webservicesExport_1.LOGGER.info(`current contexts-${await this.getCurrentContexts()}, switching to context-${context}`);
            if (context === exports.CONTEXT_REF.WEBVIEW)
                await this.waitForWebViewContextLoaded();
            await this.driver.switchContext((await this.getCurrentContexts())[context === exports.CONTEXT_REF.NATIVE ? 0 : 1]);
            if (context === exports.CONTEXT_REF.WEBVIEW)
                await this.waitForDocumentFullyLoaded(this.driver);
        }
        catch (error) {
            webservicesExport_1.LOGGER.error(error.stack);
            throw new Error(error);
        }
    }
    /**
       * Returns an object with the list of all available contexts
       */
    async getCurrentContexts() {
        const value = await this.driver.getContexts();
        return value;
    }
    /**
       * Wait for the document to be fully loaded
       */
    async waitForDocumentFullyLoaded(driver) {
        await this.driver.waitUntil(
        // A webpage can have multiple states, the ready state is the one we need to have.
        // This looks like the same implementation as for the w3c implementation for `browser.url('https://webdriver.io')`
        // That command also waits for the readiness of the page, see also the w3c specs
        // https://www.w3.org/TR/webdriver/#dfn-waiting-for-the-navigation-to-complete
        async () => await driver.execute(() => document.readyState) === DOCUMENT_READY_STATE.COMPLETE, {
            timeout: 60000,
            timeoutMsg: 'Website not loaded',
            interval: 500,
        });
    }
    /**
       * Wait for the website in the webview to be loaded
       */
    async waitForWebsiteLoaded() {
        await this.waitForWebViewContextLoaded();
        await this.switchToContext(exports.CONTEXT_REF.WEBVIEW);
        await this.waitForDocumentFullyLoaded(this.driver);
        await this.switchToContext(exports.CONTEXT_REF.NATIVE);
    }
}
exports.WebView = WebView;
