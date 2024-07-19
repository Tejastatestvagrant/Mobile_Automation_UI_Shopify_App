import { Element } from 'webdriverio';
import { BaseScreen } from '../../../../uiExport';

export class ProfileScreen extends BaseScreen {
  private selectors = {
    backButton: { android: "//*[@content-desc='backButton']", ios: '~btn-back' },
    welcomeText: { android: "//*[@content-desc='welcomeText']", ios: '~txt-welcome-to-ulshopify' },
    welcomeImage: { android: "//*[@content-desc='appLogo']", ios: '~img-welcome-to-ulshopify' },
    registerButton: { android: "//*[@content-desc='registerButton']", ios: '~btn-register' },
    loginButton: { android: "//*[@content-desc='loginButton']", ios: '~btn-login' },
  };

  async backButtonEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.backButton.ios);
  }

  async welcomeTextEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.welcomeText.ios);
  }

  async appLogoEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.welcomeImage.ios);
  }

  async registerButtonEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.registerButton.ios);
  }

  async loginButtonEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.loginButton.ios);
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
