import { Browser } from 'webdriverio';
import { BaseScreen, ResetPasswordScreen } from '../../../../uiExport'; // Adjust the import path as needed

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

  checkNewPasswordError(): Promise<boolean> {
    return this.resetPasswordScreen.isNewPasswordErrorDisplayed();
  }

  checkConfirmPasswordError(): Promise<boolean> {
    return this.resetPasswordScreen.isConfirmPasswordErrorDisplayed();
  }

  checkSuccessPopup(): Promise<boolean> {
    return this.resetPasswordScreen.isSuccessPopupDisplayed();
  }

  async resetPassword(newPassword: string, confirmPassword: string) {
    await this.enterNewPassword(newPassword);
    await this.enterConfirmPassword(confirmPassword);
    await this.tapResetPasswordButton();
  }

  async validatePasswordErrors(): Promise<boolean> {
    const newPasswordError = await this.checkNewPasswordError();
    const confirmPasswordError = await this.checkConfirmPasswordError();

    return newPasswordError && confirmPasswordError;
  }

  async validateSuccessPopup(): Promise<boolean> {
    return this.checkSuccessPopup();
  }
}
