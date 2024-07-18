import { Browser } from 'webdriverio';
import { BaseScreen, ProfileScreen } from '../../../../uiExport'; // Adjust the import path as needed

export class ProfileScreenAction extends BaseScreen {
  profileScreen: ProfileScreen;

  constructor(driver: Browser<'async'>) {
    super(driver);
    this.profileScreen = new ProfileScreen(driver);
  }

  async goBack() {
    await this.profileScreen.tapBackButton();
  }

  async tapOnRegisterButton() {
    await this.profileScreen.tapRegisterButton();
  }

  async tapOnLoginButton() {
    await this.profileScreen.tapLoginButton();
  }

  async isLogoDisplayed(): Promise<boolean> {
    return this.profileScreen.isAppLogoDisplayed();
  }

  async getWelcomeText(): Promise<string> {
    return this.profileScreen.getWelcomeText();
  }

  async waitForProfileScreenLoaded() {
    await this.profileScreen.waitForLoginScreenLoaded();
  }
}
