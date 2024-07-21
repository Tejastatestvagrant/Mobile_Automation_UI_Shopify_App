import { Element } from 'webdriverio';
import { BaseScreen } from '../../../../uiExport';

export class ForgotPasswordScreen extends BaseScreen {
  private selectors = {
    emailInput: { android: "//*[@text='Enter your email']", ios: '~inp-email' },
    submitButton: { android: "//*[@text='Submit']", ios: '~icon-next' },
    forgotPasswordHeader: { ios: '~txt-forgot-password' },
    emptyEmailFieldErrorMsg: { ios: '~txt-email-field-cannot-be-empty' },
    incorrectFormatEmailErrorMsg: { ios: '~txt-email-format-is-incorrect' },
  };

  async emailInputEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.emailInput.ios);
  }

  async submitButtonEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.submitButton.ios);
  }

  async forgotPasswordHeader(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.forgotPasswordHeader.ios);
  }

  async emailFieldEmptyErrorMsgEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.emptyEmailFieldErrorMsg.ios);
  }

  async emailIncorrectFormatErrorMsgEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.incorrectFormatEmailErrorMsg.ios);
  }

  async isForgotPasswordScreenDisplayed(): Promise<boolean> {
    const res = await this.isDisplayed(this.selectors.emailInput.ios);
    return res;
  }

  async fillForgotPasswordEmail(email: string) {
    await this.setValue(await this.emailInputEle(), email);
    await this.click(await this.submitButtonEle());
  }

  async getEmailFieldEmptyErrorMsg(): Promise<String> {
    const error = await this.emailFieldEmptyErrorMsgEle();
    return this.getText(error);
  }

  async getEmailFieldFormatErrorMsg(): Promise<String> {
    const error = await this.emailIncorrectFormatErrorMsgEle();
    return this.getText(error);
  }
}
