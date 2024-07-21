import { Browser } from 'webdriverio';
import { BaseScreen, RegistrationScreen } from '../../../../uiExport'; // Adjust the import path as needed
import OtpScreenAction from './otpScreenAction';

export class RegistrationScreenActions extends BaseScreen {
  registrationScreen: RegistrationScreen;

  otpScreen : OtpScreenAction;

  constructor(driver: Browser<'async'>) {
    super(driver);
    this.registrationScreen = new RegistrationScreen(driver);
  }

  async registerNewUser(fullName: string, email: string, password: string, confirmPassword :string, mobileNumber: string) {
    await this.registrationScreen.enterFullName(fullName);
    await this.registrationScreen.enterEmail(email);
    await this.registrationScreen.enterPassword(password);
    await this.registrationScreen.enterConfirmPassword(password);
    await this.registrationScreen.enterMobileNumber(mobileNumber);
    await this.registrationScreen.tapRegisterHeader();
    await this.registrationScreen.tapRegisterButton();
  }

  async validateEmptyFieldErrors() {
    await this.registrationScreen.tapRegisterButton();
    const fullNameError = await this.registrationScreen.isFullNameErrorDisplayed();
    const emailError = await this.registrationScreen.isEmailErrorDisplayed();
    const passwordError = await this.registrationScreen.isPasswordErrorDisplayed();
    const confirmPasswordError = await this.registrationScreen.isConfirmPasswordErrorDisplayed();
    const mobileNumberError = await this.registrationScreen.isMobileNumberErrorDisplayed();

    return fullNameError && emailError && passwordError && confirmPasswordError && mobileNumberError;
  }

  async tapBackButton() {
    await this.registrationScreen.tapBackbutton();
  }

  async tapRegisterHeader() {
    await this.registrationScreen.tapRegisterHeader();
  }

  async tapOnFullNameButton() {
    await this.registrationScreen.tapOnFullName();
  }

  async tapProfileIcon() {
    await this.registrationScreen.tapProfileIcon();
  }

  async getPageTitle(): Promise<string> {
    return this.registrationScreen.getPageTitle();
  }

  async getFullNameError(): Promise<string> {
    return this.registrationScreen.getFullNameError();
  }

  async getEmailError(): Promise<string> {
    return this.registrationScreen.getEmailError();
  }

  async getPasswordError(): Promise<string> {
    return this.registrationScreen.getPasswordError();
  }

  async getConfirmPasswordError(): Promise<string> {
    return this.registrationScreen.getConfirmPasswordError();
  }

  async getMobileNumberError(): Promise<string> {
    return this.registrationScreen.getMobileNumberError();
  }

  async isFullNameErrorDisplayed(): Promise<boolean> {
    return this.registrationScreen.isFullNameErrorDisplayed();
  }

  async isEmailErrorDisplayed(): Promise<boolean> {
    return this.registrationScreen.isEmailErrorDisplayed();
  }

  async isPasswordErrorDisplayed(): Promise<boolean> {
    return this.registrationScreen.isPasswordErrorDisplayed();
  }

  async isConfirmPasswordErrorDisplayed(): Promise<boolean> {
    return this.registrationScreen.isConfirmPasswordErrorDisplayed();
  }

  async isMobileNumberErrorDisplayed(): Promise<boolean> {
    return this.registrationScreen.isMobileNumberErrorDisplayed();
  }

  async tapLoginLink() {
    await this.registrationScreen.tapLoginLink();
  }
}
