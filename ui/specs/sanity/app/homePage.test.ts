/**
 * @group Sanity
 */

import { Browser } from 'webdriverio';
import { expect } from 'chai';
import { Driver, HomeScreen } from '../../../../uiExport';
import { HomeScreenUiValidationAction } from '../../../screens/userActions/HomeScreenActions/homeScreenUiValidationAction';

let driver: Browser<'async'>;
let homeScreenUiValidationAction: HomeScreenUiValidationAction;
let homeScreen: HomeScreen;

declare let reporter: any;
const specName = 'Home screen validation';
describe(specName, () => {
  beforeAll(async () => {
    driver = await Driver.getDriver(specName);
    homeScreenUiValidationAction = new HomeScreenUiValidationAction(driver);
    homeScreen = new HomeScreen(driver);
  });

  afterEach(async () => {
    await Driver.attachScreenshots(driver, reporter);
  });

  afterAll(async () => {
    await Driver.closeDrivers([driver]);
  });

  it('verify welcomeText and logo', async () => {
    await driver.pause(5000);
    expect(await homeScreen.getWelcomeText()).to.equal('Welcome Back!!');
    expect(await homeScreen.isAppLogoDisplayed()).to.be.true;
    await homeScreenUiValidationAction.scrollTillEnd();
  });
});
