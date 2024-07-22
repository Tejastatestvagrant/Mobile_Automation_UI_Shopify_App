import { Element } from 'webdriverio';
import { BaseScreen } from '../../../../uiExport';

export class ResetPasswordScreen extends BaseScreen {
  private selectors = {
    forgotPasswordText: { android: "//*[@text='Forgot Password?']", ios: '~txt-forgot-password' },
    newPasswordLabel: { android: "//*[@text='New password']", ios: '~label-new-password' },
    newPasswordInputField: { android: "//*[@resource-id='com.yourapp.id:new_password_field']", ios: '~inp-new-password' },
    newPasswordEmptyErrorMsg: { ios: '~txt-password-field-cannot-be-empty' },
    newPasswordIncorrectFormatErrorMsg: { ios: '~txt-password-should-be-minimum-of-5-characters' },
    confirmPasswordLabel: { android: "//*[@text='Confirm password']", ios: '~label-confirm-password' },
    confirmPasswordInputField: { android: "//*[@resource-id='com.yourapp.id:confirm_password_field']", ios: '~inp-confirm-password' },
    confirmPasswordEmptyErrorMsg: { ios: '~txt-confirm-password-field-cannot-be-empty' },
    confirmPasswordNotMatchedErrorMsg: { ios: '~txt-confirm-password-is-not-matched-with-password' },
    confirmPasswordIncorrectFormatErrorMsg: { ios: '-txt-confirm-password-should-be-minimum-of-5-characters' },
    resetPasswordButton: { android: "//*[@text='Reset Password']", ios: '~txt-reset-password' },
    successPopup: { android: "//*[@text='Password successfully updated']", ios: '-ios predicate string:name == "txt-modal-message" AND label == "Your password has been reset"' },
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

  async isResetPasswordScreenDisplayed(): Promise<boolean> {
    return this.isDisplayed(await this.forgotPasswordTextEle());
  }

  async passwordFieldEmptyErrorMsgEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.newPasswordEmptyErrorMsg.ios);
  }

  async passwordFieldFormatErrorMsgEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.newPasswordIncorrectFormatErrorMsg.ios);
  }

  async confirmPasswordFieldEmptyErrorMsgEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.confirmPasswordEmptyErrorMsg.ios);
  }

  async confirmPasswordFieldFormatErrorMsgEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.confirmPasswordIncorrectFormatErrorMsg.ios);
  }

  async confirmPasswordNotMatchedErrorMsg(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.confirmPasswordNotMatchedErrorMsg.ios);
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

  async isSuccessPopupDisplayed(): Promise<boolean> {
    try {
      const successPopup = await this.getElement(this.selectors.successPopup.ios);
      return await this.isDisplayed(successPopup);
    } catch {
      return false;
    }
  }
}
