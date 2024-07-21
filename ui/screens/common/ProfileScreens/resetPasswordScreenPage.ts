import { Element } from 'webdriverio';
import { BaseScreen, XpathUtil } from '../../../../uiExport';

export class ResetPasswordScreen extends BaseScreen {
  private selectors = {
    forgotPasswordText: { android: "//*[@text='Forgot Password?']", ios: 'TODO: Implement iOS locator for Forgot Password Text' },
    newPasswordLabel: { android: "//*[@text='New password']", ios: 'TODO: Implement iOS locator for New Password Text' },
    newPasswordInputField: { android: "//*[@resource-id='com.yourapp.id:new_password_field']", ios: 'TODO: Implement iOS locator for New Password Input Field' },
    newPasswordEmptyErrorMsg: { ios: '~txt-Password-field-cannot-be-empty' },
    newPasswordIncorrectFormatErrorMsg: { ios: '-txt-Password-should-be-minimum-of-5-characters' },
    confirmPasswordLabel: { android: "//*[@text='Confirm password']", ios: 'TODO: Implement iOS locator for Confirm Password Text' },
    confirmPasswordInputField: { android: "//*[@resource-id='com.yourapp.id:confirm_password_field']", ios: 'TODO: Implement iOS locator for Confirm Password Input Field' },
    confirmPasswordEmptyErrorMsg: { ios: '~txt-Confirm-password-field-cannot-be-empty' },
    confirmPasswordNotMatchedErrorMsg: { ios: '~txt-Confirm-password-is-not-matched-with-password' },
    confirmPasswordIncorrectFormatErrorMsg: { ios: '-txt-Confirm-password-should-be-minimum-of-5-characters' },
    resetPasswordButton: { android: "//*[@text='Reset Password']", ios: 'TODO: Implement iOS locator for Reset Password Button' },
    errorMessageNewPassword: { android: "//*[@text='Password field cannot be empty']", ios: 'TODO: Implement iOS locator for Error Message New Password' },
    errorMessageConfirmPassword: { android: "//*[@text='Confirm password field cannot be empty']", ios: 'TODO: Implement iOS locator for Error Message Confirm Password' },
    successPopup: { android: "//*[@text='Password successfully updated']", ios: 'TODO: Implement iOS locator for Success Popup' },
  };

  async forgotPasswordTextEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.forgotPasswordText.ios);
  }

  async newPasswordTextEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.newPasswordLabel.ios);
  }

  async newPasswordInputFieldEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.newPasswordInputField.ios);
  }

  async confirmPasswordTextEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.confirmPasswordLabel.ios);
  }

  async confirmPasswordInputFieldEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.confirmPasswordInputField.ios);
  }

  async resetPasswordButtonEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.resetPasswordButton.ios);
  }

  async errorMessageNewPasswordEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.errorMessageNewPassword.ios);
  }

  async errorMessageConfirmPasswordEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.errorMessageConfirmPassword));
  }

  async isResetPasswordScreenDisplayed(): Promise<boolean> {
    return this.isDisplayed(await this.forgotPasswordTextEle());
  }

  async getPasswordFieldEmptyErrorMsg(): Promise<String> {
    return this.getText(this.selectors.newPasswordEmptyErrorMsg.ios);
  }

  async getPasswordFieldFormatErrorMsg(): Promise<String> {
    return this.getText(this.selectors.newPasswordIncorrectFormatErrorMsg.ios);
  }

  async getConfirmPasswordFieldEmptyErrorMsg(): Promise<String> {
    return this.getText(this.selectors.confirmPasswordEmptyErrorMsg.ios);
  }

  async getConfirmPasswordFieldFormatErrorMsg(): Promise<String> {
    return this.getText(this.selectors.confirmPasswordIncorrectFormatErrorMsg.ios);
  }

  async getConfirmPasswordNotMatchedErrorMsg(): Promise<String> {
    return this.getText(this.selectors.confirmPasswordNotMatchedErrorMsg.ios);
  }

  async enterNewPassword(newPassword: string) {
    const newPasswordInputField = await this.newPasswordInputFieldEle();
    await this.setValue(newPasswordInputField, newPassword);
  }

  async enterConfirmPassword(confirmPassword: string) {
    const confirmPasswordInputField = await this.confirmPasswordInputFieldEle();
    await this.setValue(confirmPasswordInputField, confirmPassword);
  }

  async tapResetPasswordButton() {
    const resetPasswordButton = await this.resetPasswordButtonEle();
    await this.click(resetPasswordButton);
  }

  async isNewPasswordErrorDisplayed(): Promise<boolean> {
    try {
      const errorMessage = await this.errorMessageNewPasswordEle();
      return await this.isDisplayed(errorMessage);
    } catch {
      return false;
    }
  }

  async isConfirmPasswordErrorDisplayed(): Promise<boolean> {
    try {
      const errorMessage = await this.errorMessageConfirmPasswordEle();
      return await this.isDisplayed(errorMessage);
    } catch {
      return false;
    }
  }

  async isSuccessPopupDisplayed(): Promise<boolean> {
    try {
      const successPopup = await this.getElement(XpathUtil.getXpath(this.driver, this.selectors.successPopup));
      return await this.isDisplayed(successPopup);
    } catch {
      return false;
    }
  }
}
