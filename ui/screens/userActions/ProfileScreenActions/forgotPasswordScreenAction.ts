import { Browser } from 'webdriverio';
import { BaseScreen, ForgotPasswordScreen } from '../../../../uiExport'; // Adjust the import path as needed

export class ResetPasswordScreenActions extends BaseScreen {
  forgotPasswordScreen : ForgotPasswordScreen;

  constructor(driver: Browser<'async'>) {
    super(driver);
    this.forgotPasswordScreen = new ForgotPasswordScreen(driver);
  }

  async enterEmail(email: string) {
    await this.setValue(await this.forgotPasswordScreen.emailInputEle(), email);
  }

  async tapSubmitButton() {
    await this.click(await this.forgotPasswordScreen.submitButtonEle());
  }

  async isForgotPasswordTextDisplayed(): Promise<boolean> {
    const forgotPasswordText = await this.forgotPasswordScreen.forgotPassworderHeader();
    return this.forgotPasswordScreen.isDisplayed(forgotPasswordText);
  }

  async resetPassword(email: string) {
    await this.enterEmail(email);
    await this.tapSubmitButton();
  }
}
