import { Element } from 'webdriverio';
import { BaseScreen } from '../../../../uiExport';

export class LoginScreen extends BaseScreen {
  private selectors = {
    usernameInput: { android: "//*[@text='Email']", ios: '~inp-email' },
    passwordInput: { android: "//*[@text='Password']", ios: '~inp-password' },
    loginButton: { android: "//*[@text='Login']", ios: '~btn-login' },
    forgotPasswordLink: { android: "//*[@text='Forgot Password?']", ios: '~txt-forgot-password' },
    registerLink: { ios: '~btn-register' },
    backButton: { ios: '~btn-back' },
    usernameFormateError: { ios: '~txt-email-format-is-incorrect' },
  };

  async usernameInputEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.usernameInput.ios);
  }

  async passwordInputEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.passwordInput.ios);
  }

  async loginButtonEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.loginButton.ios);
  }

  async forgotPasswordLinkEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.forgotPasswordLink.ios);
  }

  async registerLinkEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.forgotPasswordLink.ios);
  }

  async fillLoginDetails(accountDetails: { username: string; password: string }) {
    await this.setValue(await this.usernameInputEle(), accountDetails.username);
    await this.setValue(await this.passwordInputEle(), accountDetails.password);
    await this.click(await this.loginButtonEle());
  }

  async tapForgotPasswordLink() {
    await this.click(await this.forgotPasswordLinkEle());
  }

  async tapOnRegisterLink() {
    await this.click(await this.registerLinkEle());
  }
}
