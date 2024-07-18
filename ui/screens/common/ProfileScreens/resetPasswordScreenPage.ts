import { Element } from 'webdriverio';
import { BaseScreen, XpathUtil } from '../../../../uiExport';

export class ResetPasswordScreen extends BaseScreen {
  private selectors = {
    forgotPasswordText: { android: "//*[@text='Forgot Password?']", ios: 'TODO: Implement iOS locator for Forgot Password Text' },
    newPasswordText: { android: "//*[@text='New password']", ios: 'TODO: Implement iOS locator for New Password Text' },
    newPasswordInputField: { android: "//*[@resource-id='com.yourapp.id:new_password_field']", ios: 'TODO: Implement iOS locator for New Password Input Field' },
    confirmPasswordText: { android: "//*[@text='Confirm password']", ios: 'TODO: Implement iOS locator for Confirm Password Text' },
    confirmPasswordInputField: { android: "//*[@resource-id='com.yourapp.id:confirm_password_field']", ios: 'TODO: Implement iOS locator for Confirm Password Input Field' },
    resetPasswordButton: { android: "//*[@text='Reset Password']", ios: 'TODO: Implement iOS locator for Reset Password Button' },
    errorMessageNewPassword: { android: "//*[@text='Password field cannot be empty']", ios: 'TODO: Implement iOS locator for Error Message New Password' },
    errorMessageConfirmPassword: { android: "//*[@text='Confirm password field cannot be empty']", ios: 'TODO: Implement iOS locator for Error Message Confirm Password' },
    successPopup: { android: "//*[@text='Password successfully updated']", ios: 'TODO: Implement iOS locator for Success Popup' },
  };

  async forgotPasswordTextEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.forgotPasswordText));
  }

  async newPasswordTextEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.newPasswordText));
  }

  async newPasswordInputFieldEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.newPasswordInputField));
  }

  async confirmPasswordTextEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.confirmPasswordText));
  }

  async confirmPasswordInputFieldEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.confirmPasswordInputField));
  }

  async resetPasswordButtonEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.resetPasswordButton));
  }

  async errorMessageNewPasswordEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.errorMessageNewPassword));
  }

  async errorMessageConfirmPasswordEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.errorMessageConfirmPassword));
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
