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
    expect(await homeScreen.getWelcomeText()).to.equal(HomeScreenConstants.WelcomeText);
  });

  it.skip('Verify user logged in on home page', async () => {
  });

  it('Verify clothing category on home page', async () => {
    await homeScreenUiValidationAction.tapClothingCategory();
    expect(await exploreScreen.getCategoryText()).to.includes(HomeScreenConstants.Clothing);
  });

  it('Verify Shoes category on home page', async () => {
    await exploreScreen.backToHomeScreen();
    await homeScreenUiValidationAction.tapShoesCategory();
    expect(await exploreScreen.getCategoryText()).to.includes(HomeScreenConstants.Shoes);
  });

  it('Verify Furniture category on home page', async () => {
    await exploreScreen.backToHomeScreen();
    await homeScreenUiValidationAction.tapFurnitureCategory();
    expect(await exploreScreen.getCategoryText()).to.includes(HomeScreenConstants.Furnitures);
  });

  it('Verify Toys category on home page', async () => {
    await exploreScreen.backToHomeScreen();
    await homeScreenUiValidationAction.tapToysCategory();
    expect(await exploreScreen.getCategoryText()).to.includes(HomeScreenConstants.Toys);
  });

  it('Verify audio equipment category on home page', async () => {
    await exploreScreen.backToHomeScreen();
    await homeScreenUiValidationAction.scrollCategoryGrid();
    await homeScreenUiValidationAction.tapAudioEquipmentCategory();
    expect(await exploreScreen.getCategoryText()).to.includes(HomeScreenConstants.Audio_Equipments);
  });

  it('Verify Books category on home page', async () => {
    await exploreScreen.backToHomeScreen();
    await homeScreenUiValidationAction.scrollCategoryGrid();
    await homeScreenUiValidationAction.tapBookCategory();
    expect(await exploreScreen.getBookCategoryText()).to.includes(HomeScreenConstants.Books);
  });

  it('Verify New Arrivals section on home page', async () => {
    await exploreScreen.backToHomeScreen();
    await homeScreenUiValidationAction.tapNewArrivalArrow();
    expect(await exploreScreen.isExploreHeadingDisplayed()).to.be.true;
  });

  it('Verify Trending Products section on home page', async () => {
    await exploreScreen.backToHomeScreen();
    await homeScreenUiValidationAction.tapTrendingProductsArrow();
    expect(await exploreScreen.isExploreHeadingDisplayed()).to.be.true;
  });

  it('Verify Top rated Products section on home page', async () => {
    await exploreScreen.backToHomeScreen();
    await homeScreenUiValidationAction.scrollTillTrendingItemsCarousel();
    await homeScreenUiValidationAction.tapTopRatedProductArrow();
    expect(await exploreScreen.isExploreHeadingDisplayed()).to.be.true;
  });

  it('Verify Best Sellers Products section on home page', async () => {
    await exploreScreen.backToHomeScreen();
    await homeScreenUiValidationAction.scrollTillBestSellerCarousel();
    await homeScreenUiValidationAction.tapBestSellerArrow();
    expect(await exploreScreen.isExploreHeadingDisplayed()).to.be.true;
  });
});
