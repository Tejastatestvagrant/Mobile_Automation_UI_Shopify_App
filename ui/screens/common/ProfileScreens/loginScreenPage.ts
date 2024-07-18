import { Element } from 'webdriverio';
import { BaseScreen, XpathUtil } from '../../../../uiExport';

export class LoginScreen extends BaseScreen {
  private selectors = {
    usernameText: { android: "//*[@text='Email']", ios: '~' },
    passwordText: { android: "//*[@text='Password']", ios: "//*[@name='test-Password']" },
    loginButton: { android: "//*[@text='Login']", ios: "//*[@name='test-LOGIN']" },
    forgotPasswordLink: { android: "//*[@text='Forgot Password?']", ios: 'TODO: Implement iOS locator for Forgot Password Link' },
  };

  async usernameTextEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.usernameText));
  }

  async passwordTextEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.passwordText));
  }

  async loginButtonEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.loginButton));
  }

  async forgotPasswordLinkEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.forgotPasswordLink));
  }

  async fillLoginDetails(accountDetails: { username: string; password: string }) {
    await this.setValue(await this.usernameTextEle(), accountDetails.username);
    await this.setValue(await this.passwordTextEle(), accountDetails.password);
    await this.click(await this.loginButtonEle());
  }

  async tapForgotPasswordLink() {
    await this.click(await this.forgotPasswordLinkEle());
  }
}
