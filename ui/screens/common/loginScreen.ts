import { Element } from 'webdriverio';
import { BaseScreen, XpathUtil } from '../../../uiExport';

export class LoginScreen extends BaseScreen {
  private selectors = {
    usernameText: { android: "//*[@text='Username']", ios: "//*[@name='test-Username']" },
    passwordText: { android: "//*[@text='Password']", ios: "//*[@name='test-Password']" },
    loginButton: { android: "//*[@content-desc='test-LOGIN']", ios: "//*[@name='test-LOGIN']" },
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

  async fillLoginDetails(accountDetails:{username:string, password:string}) {
    await this.setValue(await this.usernameTextEle(), accountDetails.username);
    await this.setValue(await this.passwordTextEle(), accountDetails.password);
    await this.click(await this.loginButtonEle());
  }
}
