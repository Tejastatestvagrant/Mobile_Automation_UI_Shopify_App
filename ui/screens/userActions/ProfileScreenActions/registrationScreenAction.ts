import { Browser } from 'webdriverio';
import { BaseScreen, RegistrationScreen } from '../../../../uiExport';
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
    await this.registrationScreen.enterConfirmPassword(confirmPassword);
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
  
  async getEmailFormatInvalid(): Promise<string> {
    return this.registrationScreen.getEmailFormatError();
  }

  async getPasswordError(): Promise<string> {
    return this.registrationScreen.getPasswordError();
  }
  
  async getEmptyConfirmPasswordError(): Promise<string> {
    return this.registrationScreen.getEmptyConfrimPasswordError();
  }

  async getConfirmPasswordError(): Promise<string> {
    return this.registrationScreen.getConfirmPasswordError();
  }

  async getMobileNumberError(): Promise<string> {
    return this.registrationScreen.getMobileNumberError();
  }
  
  async getEmptyMobileNumberError(): Promise<string> {
    return this.registrationScreen.getEmptyMobileNumberError();
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

  async getFullNameheader(): Promise<string> {
    const header = await this.registrationScreen.fullNameLabelTextEle();
    return this.getText(header);
  }

  async getEmailheader(): Promise<string> {
    const header = await this.registrationScreen.emailLabelTextEle();
    return this.getText(header);
  }

  async getPasswordheader(): Promise<string> {
    const header = await this.registrationScreen.passwordLabelTextEle();
    return this.getText(header);
  }

  async getConfirmPasswordheader(): Promise<string> {
    const header = await this.registrationScreen.confirmPasswordLabelTextEle();
    return this.getText(header);
  }

  async getMobileNumberheader(): Promise<string> {
    const header = await this.registrationScreen.mobileNumberLabelTextEle();
    return this.getText(header);
  }
}
