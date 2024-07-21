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
