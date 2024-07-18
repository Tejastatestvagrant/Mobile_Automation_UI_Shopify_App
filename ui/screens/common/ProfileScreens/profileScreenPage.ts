import { Element } from 'webdriverio';
import { BaseScreen, XpathUtil } from '../../../../uiExport';

export class LoginScreen extends BaseScreen {
  private selectors = {
    backButton: { android: "//*[@content-desc='backButton']", ios: "//*[@name='backButton']" },
    welcomeText: { android: "//*[@content-desc='welcomeText']", ios: "//*[@name='welcomeText']" },
    appLogo: { android: "//*[@content-desc='appLogo']", ios: "//*[@name='appLogo']" },
    registerButton: { android: "//*[@content-desc='registerButton']", ios: "//*[@name='registerButton']" },
    loginButton: { android: "//*[@content-desc='loginButton']", ios: "//*[@name='loginButton']" },
  };

  async backButtonEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.backButton));
  }

  async welcomeTextEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.welcomeText));
  }

  async appLogoEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.appLogo));
  }

  async registerButtonEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.registerButton));
  }

  async loginButtonEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.loginButton));
  }

  async getWelcomeText(): Promise<string> {
    const welcomeTextElement = await this.welcomeTextEle();
    return this.getText(welcomeTextElement);
  }

  async tapBackButton() {
    const backButton = await this.backButtonEle();
    await this.click(backButton);
  }

  async tapRegisterButton() {
    const registerButton = await this.registerButtonEle();
    await this.click(registerButton);
  }

  async tapLoginButton() {
    const loginButton = await this.loginButtonEle();
    await this.click(loginButton);
  }

  async isAppLogoDisplayed(): Promise<boolean> {
    const appLogo = await this.appLogoEle();
    return this.isDisplayed(appLogo);
  }

  async waitForLoginScreenLoaded() {
    const welcomeText = await this.welcomeTextEle();
    await this.waitForDisplayed(welcomeText);
  }
}
