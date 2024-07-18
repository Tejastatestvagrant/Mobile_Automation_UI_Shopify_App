"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebViewScreen = void 0;
const WebView_1 = require("./WebView");
class WebViewScreen extends WebView_1.WebView {
    /**
     * Wait for the screen to be displayed based on Xpath
     */
    async waitForWebViewIsDisplayedByXpath(isShown = true) {
        const selector = (await this.driver.isAndroid)
            ? '*//android.webkit.WebView'
            : '*//XCUIElementTypeWebView';
        await (await this.getElement(selector)).waitForDisplayed({
            timeout: 45000,
            reverse: !isShown,
        });
    }
}
exports.WebViewScreen = WebViewScreen;
