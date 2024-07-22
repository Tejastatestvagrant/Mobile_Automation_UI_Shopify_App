import { Element } from 'webdriverio';
import { BaseScreen } from '../../../../uiExport';

export class OtpVerificationScreen extends BaseScreen {
  private selectors = {
    otpInputOne: { android: "//*[@text='Resend again']", ios: '~inp-opt-1' },
    otpInputTwo: { android: "//*[@text='Resend again']", ios: '~inp-opt-2' },
    otpInputThree: { android: "//*[@text='Resend again']", ios: '~inp-opt-3' },
    otpInputFour: { android: "//*[@text='Resend again']", ios: '~inp-opt-4' },
    resendOtpLink: { android: "//*[@text='Resend again']", ios: '~lnk-resend-otp' },
    verifyButton: { android: "//*[@text='Verify']", ios: '~btn-verify' },
    backButton: { ios: '~btn-back' },
  };

  async otpInputOneEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.otpInputOne.ios);
  }

  async otpInputTwoEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.otpInputTwo.ios);
  }

  async otpInputThreeEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.otpInputThree.ios);
  }

  async otpInputFourEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.otpInputFour.ios);
  }

  async resendOtpLinkEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.resendOtpLink.ios);
  }

  async verifyButtonEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.verifyButton.ios);
  }

  async backButtonEle(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.backButton.ios);
  }

  async isOtpScreenDisplayed(): Promise<boolean> {
    const screen = await this.otpInputFourEle();
    return this.isDisplayed(screen);
  }

  async fillOtp(otp: string) {
    const digits = otp.split('');
    await this.setValue(await this.otpInputOneEle(), '0');
    await this.setValue(await this.otpInputTwoEle(), digits[1]);
    await this.setValue(await this.otpInputThreeEle(), digits[2]);
    await this.setValue(await this.otpInputFourEle(), digits[3]);
    await this.click(await this.verifyButtonEle());
  }

  async tapOnFirstOtp() {
    await this.click(await this.otpInputOneEle());
  }

  async tapOnSecondOtp() {
    await this.click(await this.otpInputOneEle());
  }

  async tapResendOtpLink() {
    await this.click(await this.resendOtpLinkEle());
  }

  async tapBackButton() {
    await this.click(await this.backButtonEle());
  }
}
