import { Browser } from 'webdriverio';
import { BaseScreen, ResetPasswordScreen } from '../../../../uiExport';

export class ResetPasswordScreenActions extends BaseScreen {
  resetPasswordScreen: ResetPasswordScreen;

  constructor(driver: Browser<'async'>) {
    super(driver);
    this.resetPasswordScreen = new ResetPasswordScreen(driver);
  }

  async enterNewPassword(newPassword: string) {
    await this.resetPasswordScreen.enterNewPassword(newPassword);
  }

  async enterConfirmPassword(confirmPassword: string) {
    await this.resetPasswordScreen.enterConfirmPassword(confirmPassword);
  }

  async tapResetPasswordButton() {
    await this.resetPasswordScreen.tapResetPasswordButton();
  }

  async getPasswordEmptyErrorMsg(): Promise<String> {
    const error = await this.resetPasswordScreen.passwordFieldEmptyErrorMsgEle();
    return this.getText(error);
  }

  async getPasswordFormatErrorMsg(): Promise<String> {
    const error = await this.resetPasswordScreen.passwordFieldFormatErrorMsgEle();
    return this.getText(error);
  }

  async getConfirmPasswordEmptyErrorMsg(): Promise<String> {
    const error = await this.resetPasswordScreen.confirmPasswordFieldEmptyErrorMsgEle();
    return this.getText(error);
  }

  async getConfirmPasswordFormatErrorMsg(): Promise<String> {
    const error = await this.resetPasswordScreen.confirmPasswordFieldFormatErrorMsgEle();
    return this.getText(error);
  }

  async getConfirmPasswordNotMatchedErrorMsg(): Promise<String> {
    const error = await this.resetPasswordScreen.confirmPasswordNotMatchedErrorMsg();
    return this.getText(error);
  }

  checkSuccessPopup(): Promise<boolean> {
    return this.resetPasswordScreen.isSuccessPopupDisplayed();
  }

  async resetPassword(accountDetails: {newPassword: string, confirmPassword: string }) {
    await this.enterNewPassword(accountDetails.newPassword);
    await this.enterConfirmPassword(accountDetails.confirmPassword);
    await this.hideKeyboard();
    await this.tapResetPasswordButton();
  }

  async validateSuccessPopup(): Promise<boolean> {
    return this.checkSuccessPopup();
  }
}
