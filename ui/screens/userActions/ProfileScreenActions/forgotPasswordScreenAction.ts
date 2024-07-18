import { Browser } from 'webdriverio';
import { BaseScreen, ForgotPasswordScreen } from '../../../../uiExport'; // Adjust the import path as needed

export class ResetPasswordScreenActions extends BaseScreen {
  forgotPasswordScreen : ForgotPasswordScreen;

  constructor(driver: Browser<'async'>) {
    super(driver);
    this.forgotPasswordScreen = new ForgotPasswordScreen(driver);
  }

  async enterEmail(email: string) {
    await this.forgotPasswordScreen.enterEmail(email);
  }

  async tapSubmitButton() {
    await this.forgotPasswordScreen.tapSubmitButton();
  }

  async tapBackButton() {
    await this.forgotPasswordScreen.tapBackButton();
  }

  async isForgotPasswordTextDisplayed(): Promise<boolean> {
    const forgotPasswordText = await this.forgotPasswordScreen.forgotPasswordTextEle();
    return this.forgotPasswordScreen.isDisplayed(forgotPasswordText);
  }

  async resetPassword(email: string) {
    await this.enterEmail(email);
    await this.tapSubmitButton();
  }
}
