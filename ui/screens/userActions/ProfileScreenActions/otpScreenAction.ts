import { BaseScreen } from '../../../../uiExport';
import { OtpVerificationScreen } from '../../common/ProfileScreens/otpScreen';

export default class OtpScreenAction extends BaseScreen {
  otpScreen :OtpVerificationScreen;

  async fillOtp(otp: string) {
    await this.setValue(await this.otpScreen.otpInputOneEle(), otp[0]);
    await this.setValue(await this.otpScreen.otpInputTwoEle(), otp[1]);
    await this.setValue(await this.otpScreen.otpInputThreeEle(), otp[2]);
    await this.setValue(await this.otpScreen.otpInputFourEle(), otp[3]);
    await this.click(await this.otpScreen.verifyButtonEle());
  }

  async tapResendOtpLink() {
    await this.click(await this.otpScreen.resendOtpLinkEle());
  }

  async tapOnVerifyButton() {
    await this.click(await this.otpScreen.verifyButtonEle());
  }

  async tapBackButton() {
    await this.click(await this.otpScreen.backButtonEle());
  }
}
