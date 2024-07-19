import { Element } from 'webdriverio';
import { BaseScreen } from '../../../../uiExport';

export class LoginScreen extends BaseScreen {
  private selectors = {
    header: { android: ' ', ios: '~txt-login-heading' },
    emailInput: { android: "//*[@text='Email']", ios: '~inp-email' },
    passwordInput: { android: "//*[@text='Password']", ios: '~inp-password' },
    loginButton: { android: "//*[@text='Login']", ios: '~btn-login' },
    forgotPasswordLink: { android: "//*[@text='Forgot Password?']", ios: '~txt-forgot-password' },
    registerLink: { ios: '~btn-register' },
    backButton: { ios: '~btn-back' },
    emailErrorField: { ios: '~txt-email-field-cannot-be-empty' },
    passwordErrorField: { ios: '~txt-password-field-cannot-be-empty' },
    emailFormatMessage: { ios: '~txt-email-format-is-incorrect' }, // Add selector for password error
  };

  async loginHeader(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.header.ios);
  }

  async emailInputEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.emailInput.ios);
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
    return this.getElement(this.selectors.registerLink.ios);
  }

  async emailEmptyErrorMsgMsg(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.emailErrorField.ios);
  }

  async emailFormatErrorMsg(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.emailFormatMessage.ios);
  }

  async passwordErrorEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.passwordErrorField.ios);
  }

  async isLoginScreenDisplayed() {
    await this.isDisplayed(await this.emailInputEle());
  }

  async fillLoginDetails(accountDetails: { username: string; password: string }) {
    await this.setValue(await this.emailInputEle(), accountDetails.username);
    await this.setValue(await this.passwordInputEle(), accountDetails.password);

    // you add the key you want to click
    if (await this.getElement('~Return')) {
      await this.hideKeyboard();
    }
    await this.click(await this.loginButtonEle());
  }

  async tapForgotPasswordLink() {
    await this.click(await this.forgotPasswordLinkEle());
  }

  async tapOnRegisterLink() {
    await this.click(await this.registerLinkEle());
  }

  async getEmailFieldErrorMessage(): Promise<string> {
    const errorElement = await this.emailEmptyErrorMsgMsg();
    return this.getText(errorElement);
  }

  async getEmailFormatErrorMessage(): Promise<string> {
    const errorElement = await this.emailFormatErrorMsg();
    return this.getText(errorElement);
  }

  async getPasswordFieldErrorMessage(): Promise<string> {
    const errorElement = await this.passwordErrorEle();
    return this.getText(errorElement);
  }

  async getEmailFormatErrorMsg(): Promise<string> {
    const errorElement = await this.emailFormatErrorMsg();
    return this.getText(errorElement);
  }
}
