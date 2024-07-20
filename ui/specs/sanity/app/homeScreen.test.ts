/**
 * @group Sanity
 */

import { Browser } from 'webdriverio';
import { expect } from 'chai';
import { Driver, HomeScreen, ExploreScreens } from '../../../../uiExport';
import { HomeScreenUiValidationAction } from '../../../screens/userActions/HomeScreenActions/homeScreenUiValidationAction';
import { HomeScreenConstants } from '../../../resources/Constants/constants';

let driver: Browser<'async'>;
let homeScreenUiValidationAction: HomeScreenUiValidationAction;
let homeScreen: HomeScreen;
let exploreScreen: ExploreScreens;

declare let reporter: any;
const specName = 'Home screen validation';
describe(specName, () => {
  beforeAll(async () => {
    driver = await Driver.getDriver(specName);
    homeScreenUiValidationAction = new HomeScreenUiValidationAction(driver);
    exploreScreen = new ExploreScreens(driver);
    homeScreen = new HomeScreen(driver);
  });

  afterEach(async () => {
    await Driver.attachScreenshots(driver, reporter);
  });

  afterAll(async () => {
    await Driver.closeDrivers([driver]);
  });

  it('verify welcomeText and logo', async () => {
    expect(await homeScreen.getWelcomeText()).to.equal('Welcome Back!!');
  });

  it('Verify user logged in on home page', async () => {
  });

  it.only('Verify clothing category on home page', async () => {
    await homeScreenUiValidationAction.tapClothingCategory();
    const text = await exploreScreen.getCategoryText();
    expect(text).to.includes(HomeScreenConstants.Clothing);
  });

  it('Verify Shoes category on home page', async () => {
    await homeScreenUiValidationAction.tapShoesCategory();
    expect(await homeScreen.isAppLogoDisplayed()).to.be.true;
  });

  it('Verify audio equipment category on home page', async () => {
    await homeScreenUiValidationAction.tapAudioEquipmentCategory();
    expect(await homeScreen.isAppLogoDisplayed()).to.be.true;
  });

  it('Verify Furniture category on home page', async () => {
    await homeScreenUiValidationAction.tapFurnitureCategory();
    expect(await homeScreen.isAppLogoDisplayed()).to.be.true;
  });

  it('Verify Books category on home page', async () => {
    await homeScreenUiValidationAction.tapBookCategory();
    expect(await homeScreen.isAppLogoDisplayed()).to.be.true;
  });

  it('Verify Toys category on home page', async () => {
    await homeScreenUiValidationAction.tapToysCategory();
    expect(await homeScreen.isAppLogoDisplayed()).to.be.true;
  });
});
