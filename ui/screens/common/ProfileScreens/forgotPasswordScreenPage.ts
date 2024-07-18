import { Element } from 'webdriverio';
import { BaseScreen } from '../../../../uiExport';

export class ForgotPasswordScreen extends BaseScreen {
  private selectors = {
    forgotPasswordText: { android: "//*[@text='Forgot Password?']", ios: '~Forgot password?' },
    emailInputField: { android: "//*[@resource-id='com.yourapp.id:email_field']", ios: '~Enter your email' },
    submitButton: { android: "//*[@resource-id='com.yourapp.id:submit_button']", ios: '~submit' },
    backButton: { android: "//*[@resource-id='com.yourapp.id:back_button']", ios: '~back' },
  };

  async forgotPasswordTextEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.forgotPasswordText.ios);
  }

  async emailInputFieldEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.emailInputField.ios);
  }

  async submitButtonEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.submitButton.ios);
  }

  async backButtonEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.backButton.ios);
  }

  async enterEmail(email: string) {
    const emailInputField = await this.emailInputFieldEle();
    await this.setValue(emailInputField, email);
  }

  async tapSubmitButton() {
    const submitButton = await this.submitButtonEle();
    await this.click(submitButton);
  }

  async tapBackButton() {
    const backButton = await this.backButtonEle();
    await this.click(backButton);
  }
}
