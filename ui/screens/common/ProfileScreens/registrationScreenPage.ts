import { Element } from 'webdriverio';
import { BaseScreen, XpathUtil } from '../../../../uiExport';

export class RegistrationScreen extends BaseScreen {
  private selectors = {
    backButton: { android: "//android.widget.Button[@content-desc='Back']", ios: "//XCUIElementTypeButton[@name='Back']" },
    profileIcon: { android: "//android.widget.Button[@content-desc='Profile']", ios: "//XCUIElementTypeButton[@name='Profile']" },
    pageTitle: { android: "//android.widget.TextView[@text='Register']", ios: "//XCUIElementTypeStaticText[@name='Register']" },
    fullNameInput: { android: "//android.widget.EditText[@content-desc='Full Name']", ios: "//XCUIElementTypeTextField[@name='Full Name']" },
    emailInput: { android: "//android.widget.EditText[@content-desc='Email']", ios: "//XCUIElementTypeTextField[@name='Email']" },
    passwordInput: { android: "//android.widget.EditText[@content-desc='Password']", ios: "//XCUIElementTypeSecureTextField[@name='Password']" },
    confirmPasswordInput: { android: "//android.widget.EditText[@content-desc='Confirm password']", ios: "//XCUIElementTypeSecureTextField[@name='Confirm password']" },
    mobileNumberInput: { android: "//android.widget.EditText[@content-desc='Mobile number']", ios: "//XCUIElementTypeTextField[@name='Mobile number']" },
    registerButton: { android: "//android.widget.Button[@text='Register']", ios: "//XCUIElementTypeButton[@name='Register']" },
    loginLink: { android: "//android.widget.TextView[@text='Login']", ios: "//XCUIElementTypeLink[@name='Login']" },
    fullNameError: { android: "//android.widget.TextView[@text='Full name cannot be empty']", ios: "//XCUIElementTypeStaticText[@name='Full name cannot be empty']" },
    emailError: { android: "//android.widget.TextView[@text='Email field cannot be empty']", ios: "//XCUIElementTypeStaticText[@name='Email field cannot be empty']" },
    passwordError: { android: "//android.widget.TextView[@text='Password field cannot be empty']", ios: "//XCUIElementTypeStaticText[@name='Password field cannot be empty']" },
    confirmPasswordError: { android: "//android.widget.TextView[@text='Confirm password field cannot be empty']", ios: "//XCUIElementTypeStaticText[@name='Confirm password field cannot be empty']" },
    mobileNumberError: { android: "//android.widget.TextView[@text='Mobile number cannot be empty']", ios: "//XCUIElementTypeStaticText[@name='Mobile number cannot be empty']" },
  };

  async backButtonEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.backButton));
  }

  async profileIconEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.profileIcon));
  }

  async pageTitleEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.pageTitle));
  }

  async fullNameInputEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.fullNameInput));
  }

  async emailInputEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.emailInput));
  }

  async passwordInputEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.passwordInput));
  }

  async confirmPasswordInputEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.confirmPasswordInput));
  }

  async mobileNumberInputEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.mobileNumberInput));
  }

  async registerButtonEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.registerButton));
  }

  async loginLinkEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.loginLink));
  }

  async fullNameErrorEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.fullNameError));
  }

  async emailErrorEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.emailError));
  }

  async passwordErrorEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.passwordError));
  }

  async confirmPasswordErrorEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.confirmPasswordError));
  }

  async mobileNumberErrorEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.mobileNumberError));
  }

  async enterFullName(fullName: string) {
    const fullNameInput = await this.fullNameInputEle();
    await this.setValue(fullNameInput, fullName);
  }

  async enterEmail(email: string) {
    const emailInput = await this.emailInputEle();
    await this.setValue(emailInput, email);
  }

  async enterPassword(password: string) {
    const passwordInput = await this.passwordInputEle();
    await this.setValue(passwordInput, password);
  }

  async enterConfirmPassword(password: string) {
    const confirmPasswordInput = await this.confirmPasswordInputEle();
    await this.setValue(confirmPasswordInput, password);
  }

  async enterMobileNumber(mobileNumber: string) {
    const mobileNumberInput = await this.mobileNumberInputEle();
    await this.setValue(mobileNumberInput, mobileNumber);
  }

  async tapRegisterButton() {
    const registerButton = await this.registerButtonEle();
    await this.click(registerButton);
  }

  async tapLoginLink() {
    const loginLink = await this.loginLinkEle();
    await this.click(loginLink);
  }

  async tapBackButton() {
    const backButton = await this.backButtonEle();
    await this.click(backButton);
  }

  async tapProfileIcon() {
    const profileIcon = await this.profileIconEle();
    await this.click(profileIcon);
  }

  async getPageTitle(): Promise<string> {
    const pageTitle = await this.pageTitleEle();
    return this.getText(pageTitle);
  }

  async getFullNameError(): Promise<string> {
    const errorElement = await this.fullNameErrorEle();
    return this.getText(errorElement);
  }

  async getEmailError(): Promise<string> {
    const errorElement = await this.emailErrorEle();
    return this.getText(errorElement);
  }

  async getPasswordError(): Promise<string> {
    const errorElement = await this.passwordErrorEle();
    return this.getText(errorElement);
  }

  async getConfirmPasswordError(): Promise<string> {
    const errorElement = await this.confirmPasswordErrorEle();
    return this.getText(errorElement);
  }

  async getMobileNumberError(): Promise<string> {
    const errorElement = await this.mobileNumberErrorEle();
    return this.getText(errorElement);
  }

  async isFullNameErrorDisplayed(): Promise<boolean> {
    const errorElement = await this.fullNameErrorEle();
    return this.isDisplayed(errorElement);
  }

  async isEmailErrorDisplayed(): Promise<boolean> {
    const errorElement = await this.emailErrorEle();
    return this.isDisplayed(errorElement);
  }

  async isPasswordErrorDisplayed(): Promise<boolean> {
    const errorElement = await this.passwordErrorEle();
    return this.isDisplayed(errorElement);
  }

  async isConfirmPasswordErrorDisplayed(): Promise<boolean> {
    const errorElement = await this.confirmPasswordErrorEle();
    return this.isDisplayed(errorElement);
  }

  async isMobileNumberErrorDisplayed(): Promise<boolean> {
    const errorElement = await this.mobileNumberErrorEle();
    return this.isDisplayed(errorElement);
  }

  async registerNewUser(fullName: string, email: string, password: string, mobileNumber: string) {
    await this.enterFullName(fullName);
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.enterConfirmPassword(password);
    await this.enterMobileNumber(mobileNumber);
    await this.tapRegisterButton();
  }

  async validateEmptyFieldErrors() {
    await this.tapRegisterButton();
    const fullNameError = await this.isFullNameErrorDisplayed();
    const emailError = await this.isEmailErrorDisplayed();
    const passwordError = await this.isPasswordErrorDisplayed();
    const confirmPasswordError = await this.isConfirmPasswordErrorDisplayed();
    const mobileNumberError = await this.isMobileNumberErrorDisplayed();

    return fullNameError && emailError && passwordError && confirmPasswordError && mobileNumberError;
  }
}
