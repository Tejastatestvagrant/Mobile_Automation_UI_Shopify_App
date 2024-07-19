import { Element } from 'webdriverio';
import { BaseScreen } from '../../../../uiExport';

export class ForgotPasswordScreen extends BaseScreen {
  private selectors = {
    emailInput: { android: "//*[@text='Enter your email']", ios: '~inp-email' },
    submitButton: { android: "//*[@text='Submit']", ios: '~icon-next' },
    forgotPasswordHeader: { ios: '~txt-forgot-password' },
    emptyEmailField: { ios: '~txt-email-field-cannot-be-empty' },
    newPasswordInput: { android: "//*[@text='Enter your new password']", ios: '~inp-new-password' },
    confirmPasswordInput: { android: "//*[@text='Confirm password']", ios: '~inp-confirm-password' },
    resetPasswordButton: { android: "//*[@text='Reset password']", ios: '~btn-reset-password' },
    resetpasswordSuccessfull: { ios: "//*[@name='Your password has been reset Successfully'])[5]" },
  };

  async emailInputEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.emailInput.ios);
  }

  async submitButtonEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.submitButton.ios);
  }

  async forgotPassworderHeader(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.forgotPasswordHeader.ios);
  }

  async emptyEmailEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.emptyEmailField.ios);
  }

  async fillForgotPasswordEmail(email: string) {
    await this.setValue(await this.emailInputEle(), email);
    await this.click(await this.submitButtonEle());
  }

  async newPasswordInputEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.newPasswordInput.ios);
  }

  async confirmPasswordInputEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.confirmPasswordInput.ios);
  }

  async resetPasswordButtonEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.resetPasswordButton.ios);
  }

  async fillResetPasswordDetails(passwordDetails: { newPassword: string; confirmPassword: string }) {
    await this.setValue(await this.newPasswordInputEle(), passwordDetails.newPassword);
    await this.setValue(await this.confirmPasswordInputEle(), passwordDetails.confirmPassword);
    await this.click(await this.resetPasswordButtonEle());
  }
}
