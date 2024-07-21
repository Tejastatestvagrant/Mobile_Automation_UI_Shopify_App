import { Browser } from 'webdriverio';
import { BaseScreen, LoginScreen } from '../../../../uiExport'; // Adjust the import path as needed

export class LoginScreenActions extends BaseScreen {
  loginScreen: LoginScreen;

  constructor(driver: Browser<'async'>) {
    super(driver);
    this.loginScreen = new LoginScreen(driver);
  }

  async login(accountDetails: { email: string; password: string }) {
    await this.loginScreen.fillLoginDetails(accountDetails);// Adjust the method call as needed
  }
}
