/**
 * @group Sanity
 */

import { Browser } from 'webdriverio';
import { expect } from 'chai';
import {
  Driver, ProfileScreenAction, RegistrationScreen, RegistrationScreenActions,
} from '../../../../uiExport';
import { invalidRegistrationDetails, registerDetailsHeader, registerUserCredential, registerUserCredentialWithInvalidEmail, registerUserCredentialWithInvalidNumber, registerUserCredentialWithMinPassword, registerUserCredentialWithPasswordMissMatch, registerUserCredentialwithSpecialCharater } from '../../../resources/Constants/constants';
import { HomeScreenUiValidationAction } from '../../../screens/userActions/HomeScreenActions/homeScreenUiValidationAction';
import OtpScreenAction from '../../../screens/userActions/ProfileScreenActions/otpScreenAction';
import { assert } from 'console';

let driver: Browser<'async'>;
// let loginActions: LoginScreenActions;
let homeScreen : HomeScreenUiValidationAction;
let profileScreen : ProfileScreenAction;
let registrationScreen :RegistrationScreenActions;
let otpScreen : OtpScreenAction;
let registrationScreen1 : RegistrationScreen

declare let reporter: any;
const specName = 'Login app validation';
describe(specName, () => {
  beforeAll(async () => {
    driver = await Driver.getDriver(specName);
    homeScreen = new HomeScreenUiValidationAction(driver);
    profileScreen = new ProfileScreenAction(driver);
    registrationScreen = new RegistrationScreenActions(driver);
    otpScreen = new OtpScreenAction(driver);
    registrationScreen1 = new RegistrationScreen(driver);

    await homeScreen.tapProfileButton();
    await profileScreen.tapOnRegisterButton();
  });

  afterEach(async () => {
    await Driver.attachScreenshots(driver, reporter);
  });

  afterAll(async () => {
    await Driver.closeDrivers([driver]);
  });


  it('Verify user cannot register without providing details ', async () => {
    try{

    await registrationScreen1.tapRegisterButton();

    expect( await registrationScreen.getFullNameError()).to.be.equal(invalidRegistrationDetails.fullNameCannotBeEmpty);
    expect( await registrationScreen.getEmailError()).to.be.equal(invalidRegistrationDetails.emailCannotBeEmpty); 
    expect( await registrationScreen.getEmptyConfirmPasswordError()).to.be.equal(invalidRegistrationDetails.confirmPasswordCannotBeEmpty);
    expect( await registrationScreen.getEmptyMobileNumberError()).to.be.equal(invalidRegistrationDetails.MobileNumberCannotBeEmpty);
    }catch (error) {
      console.error(`failed: ${error.message}`);
      expect.fail(`failed: ${error.message}`);
    }
  });

  it('Verify Registration Screen Details are displayed ', async () => {
    try{
    expect( await registrationScreen.getFullNameheader()).to.be.equal(registerDetailsHeader.fullNameHeader);
    expect( await registrationScreen.getEmailheader()).to.be.equal(registerDetailsHeader.emailHeader); 
    expect( await registrationScreen.getPasswordheader()).to.be.equal(registerDetailsHeader.passwordHeader);
    expect( await registrationScreen.getConfirmPasswordheader()).to.be.equal(registerDetailsHeader.confirmPasswordHeader);
    expect( await registrationScreen.getMobileNumberheader()).to.be.equal(registerDetailsHeader.mobileNumberHeader);
  }catch (error) {
      console.error(`failed: ${error.message}`);
      expect.fail(`failed: ${error.message}`);
    }
  });

  it('Verify error message for invalid email format', async () => {
  try{ 

    await registrationScreen.registerNewUser(registerUserCredentialWithInvalidEmail.fullName, registerUserCredentialWithInvalidEmail.email, registerUserCredentialWithInvalidEmail.password, registerUserCredentialWithInvalidEmail.confirmPassword, registerUserCredentialWithInvalidEmail.mobileNumber);
    expect( await registrationScreen.getEmailFormatInvalid()).to.be.equal(invalidRegistrationDetails.emailError);
  }catch (error) {
    console.error(`failed: ${error.message}`);
    expect.fail(`failed: ${error.message}`);
  }
 });

  it('Verify error message for mismatched passwords', async () => {
    try{

    await registrationScreen.registerNewUser(registerUserCredentialWithPasswordMissMatch.fullName,
       registerUserCredentialWithPasswordMissMatch.email, 
       registerUserCredentialWithPasswordMissMatch.password,
       registerUserCredentialWithPasswordMissMatch.confirmPassword, 
        registerUserCredentialWithPasswordMissMatch.mobileNumber);
    expect( await registrationScreen.getConfirmPasswordError()).to.be.equal(invalidRegistrationDetails.passwordMissMatch);
    }catch (error) {
      console.error(`failed: ${error.message}`);
      expect.fail(`failed: ${error.message}`);
    }
  });

  it('Verify error message for invalid mobile number', async () => {
    try{
      
    await registrationScreen.registerNewUser(registerUserCredentialWithInvalidNumber.fullName,
      registerUserCredentialWithInvalidNumber.email, 
      registerUserCredentialWithInvalidNumber.password, 
      registerUserCredentialWithInvalidNumber.confirmPassword,
      registerUserCredentialWithInvalidNumber.mobileNumber);
    expect( await registrationScreen.getMobileNumberError()).to.be.equal(invalidRegistrationDetails.invalidMobileNumber);
    }catch (error) {
      console.error(`failed: ${error.message}`);
      expect.fail(`failed: ${error.message}`);
    }
  });

  it('Verify error message for password less than 5 characters', async () => {
    try{
      
    await registrationScreen.registerNewUser(registerUserCredentialWithMinPassword.fullName,
      registerUserCredentialWithMinPassword.email,
      registerUserCredentialWithMinPassword.password,
      registerUserCredentialWithMinPassword.confirmPassword,
      registerUserCredentialWithMinPassword.mobileNumber);
    expect( await registrationScreen.getPasswordError()).to.be.equal(invalidRegistrationDetails.passwordMinError);
    }
    catch (error) {
      console.error(`failed: ${error.message}`);
      expect.fail(`failed: ${error.message}`);
    }
  });

  // it('Verify user cannot register with existing email', async () => {
    
  //   
  //   await registrationScreen.registerNewUser(registerUserCredential.fullName, registerUserCredential.email, registerUserCredential.password, registerUserCredential.confirmPassword, registerUserCredential.mobileNumber);
  //   expect( await registrationScreen.getEmailError()).to.be.equal(invalidRegistrationDetails.emailAlreadyExist);
  
  // });
  
  // it('verify Registration of user is Successful', async () => {
  //  try{
  //    
  //   await registrationScreen.registerNewUser(registerUserCredential.fullName, registerUserCredential.email, registerUserCredential.password, registerUserCredential.confirmPassword, registerUserCredential.mobileNumber);
  //   await otpScreen.fillOtp(registerUserCredential.otp);
  //  }catch (error) {
  //   console.error(`failed: ${error.message}`);
  //   expect.fail(`failed: ${error.message}`);
  // }
  // });

  // it('Verify user can register with special characters in full name', async () => {
  //   
  //   await registrationScreen.registerNewUser(registerUserCredentialwithSpecialCharater.fullName, registerUserCredentialwithSpecialCharater.email, registerUserCredentialwithSpecialCharater.password, registerUserCredentialwithSpecialCharater.confirmPassword, registerUserCredentialwithSpecialCharater.mobileNumber);
   
  // });
});
