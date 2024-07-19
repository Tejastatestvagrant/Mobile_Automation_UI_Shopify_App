/**
 * @group Sanity
 */

import { Browser } from 'webdriverio';
import { Driver, LoginScreenActions, ProfileScreen, RegistrationScreen } from '../../../../uiExport';
import { HomeScreen} from '../../../screens/common/HomePageScreens/homeScreenPage';
import { OtpVerificationScreen } from '../../../screens/common/ProfileScreens/otpScreen';
import { expect } from 'chai';
/**
 * Home Page Validation
 */
let driver: Browser<'async'>;
let loginActions: LoginScreenActions;
let homeScreen : HomeScreen;
let profileScreen : ProfileScreen;
let registerScreen : RegistrationScreen;
let otpScreen : OtpVerificationScreen

declare let reporter: any;
const specName = 'Login app validation';
describe(specName, () => {
  beforeAll(async () => {
    driver = await Driver.getDriver(specName);
    loginActions = new LoginScreenActions(driver);
    homeScreen = new HomeScreen(driver);
    profileScreen = new ProfileScreen(driver);
    registerScreen = new RegistrationScreen(driver);
    otpScreen = new OtpVerificationScreen(driver);
  });

  afterEach(async () => {
    await Driver.attachScreenshots(driver, reporter);
  });

  afterAll(async () => {
    await Driver.closeDrivers([driver]);
  });

  /**
 * it will verify login on both android and ios
 * pass os in env.properties file
 */
  it('verify ProfileScreen', async () => {

    await homeScreen.tapProfileButton()

    const welcomeText = await profileScreen.welcomeTextEle()
    expect(welcomeText).to.be.true;
    
    const appLogo = await profileScreen.isAppLogoDisplayed()
    expect(appLogo).to.be.true;

    // const registerButton = await profileScreen.registerButtonEle
    // expect(registerButton).to.be.enabled
    

  });
});
