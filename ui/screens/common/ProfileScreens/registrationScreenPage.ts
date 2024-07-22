import { Element } from 'webdriverio';
import { BaseScreen, XpathUtil } from '../../../../uiExport';

export class RegistrationScreen extends BaseScreen {
  private selectors = {
    registerHeader: { ios: '~txt-register-heading' },
    backButton: { android: "//android.widget.Button[@content-desc='Back']", ios: "//*[@name='btn-back']" },
    profileIcon: { android: "//android.widget.Button[@content-desc='Profile']", ios: '~icon-user-plus' },
    pageTitle: { android: "//android.widget.TextView[@text='Register']", ios: '~txt-register-heading' },
    fullNameInput: { android: "//android.widget.EditText[@content-desc='Full Name']", ios: '~inp-fullname' },
    emailInput: { android: "//android.widget.EditText[@content-desc='Email']", ios: '~inp-email' },
    passwordInput: { android: "//android.widget.EditText[@content-desc='Password']", ios: '~inp-password' },
    confirmPasswordInput: { android: "//android.widget.EditText[@content-desc='Confirm password']", ios: '~inp-confirm-password' },
    mobileNumberInput: { android: "//android.widget.EditText[@content-desc='Mobile number']", ios: '~inp-mobile-number' },
    mobileNumberLabelText: { ios: '~label-mobile-number' },
    registerButton: { android: "//android.widget.Button[@text='Register']", ios: '~btn-register' },
    loginLink: { android: "//android.widget.TextView[@text='Login']", ios: '~btn-login' },
    emptyFullName: { android: "//android.widget.TextView[@text='Full name cannot be empty']", ios: '~txt-full-name-cannot-be-empty' },
    emailError: { android: "//android.widget.TextView[@text='Email field cannot be empty']", ios: '~txt-email-format-is-incorrect' },
    passwordError: { android: "//android.widget.TextView[@text='Password field cannot be empty']", ios: '~txt-password-should-be-minimum-of-5-characters' },
    confirmPasswordError: { android: "//android.widget.TextView[@text='Confirm password field cannot be empty']", ios: '~txt-confirm-password-is-not-matched-with-password' },
    mobileNumberError: { android: "//android.widget.TextView[@text='Mobile number cannot be empty']", ios: '~txt-mobile-number-should-be-10-digits' },
    emptyEmail: { ios: '~txt-email-field-cannot-be-empty' },
    emptyConfirmPassword: { ios: '~txt-confirm-password-field-cannot-be-empty' },
    errorMessagePopup: { ios: '~' },
  };

  async backButtonEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.backButton));
  }

  async profileIconEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.profileIcon.ios);
  }

  async pageTitleEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.pageTitle.ios);
  }

  async fullNameInputEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.fullNameInput.ios);
  }

  async emailInputEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.emailInput.ios);
  }

  async passwordInputEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.passwordInput.ios);
  }

  async confirmPasswordInputEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.confirmPasswordInput.ios);
  }

  async mobileNumberInputEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.mobileNumberInput.ios);
  }

  async registerButtonEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.registerButton.ios);
  }

  async loginLinkEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.loginLink.ios);
  }

  async fullNameErrorEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.emptyFullName.ios);
  }

  async emailErrorEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.emptyEmail.ios);
  }

  async passwordErrorEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.passwordError.ios);
  }

  async confirmPasswordErrorEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.emptyConfirmPassword.ios);
  }

  async mobileNumberErrorEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.mobileNumberError.ios);
  }

  async emptyEmailError(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.emptyEmail.ios);
  }

  async registerHeader(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.registerHeader.ios);
  }

  async emptyConfirmPasswordError(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.emptyConfirmPassword.ios);
  }

  async mobileNumberLabelTextEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.mobileNumberLabelText.ios);
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
    const mobileNumberLabel = await this.mobileNumberLabelTextEle();
    await this.click(mobileNumberLabel);
  }

  async tapRegisterHeader() {
    const registerHeader = await this.registerHeader();
    await this.click(registerHeader);
  }

  async tapRegisterButton() {
    const registerButton = await this.registerButtonEle();
    await this.click(registerButton);
  }

  async tapLoginLink() {
    const loginLink = await this.loginLinkEle();
    await this.click(loginLink);
  }

  async tapOnFullName() {
    const fullName = await this.fullNameInputEle();
    await this.click(fullName);
  }

  async tapProfileIcon() {
    const profileIcon = await this.profileIconEle();
    await this.click(profileIcon);
  }

  async tapBackbutton() {
    const backButton = await this.backButtonEle();
    await this.click(backButton);
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

  async getEmptyEmailError(): Promise<string> {
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

  async getEmptyConfrimPasswordError(): Promise<string> {
    const errorElement = await this.emailErrorEle();
    return this.getText(errorElement);
  }

  async getMobileNumberError(): Promise<string> {
    const errorElement = await this.mobileNumberErrorEle();
    return this.getText(errorElement);
  }

  async isRegisterScreenDisplayed(): Promise<boolean> {
    const screen = await this.registerButtonEle();
    return this.isDisplayed(screen);
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

  async isErrorPopDisplayed(): Promise<boolean> {
    try {
      const successPopup = await this.getElement(this.selectors.errorMessagePopup.ios);
      return await this.isDisplayed(successPopup);
    } catch {
      return false;
    }
  }
}
