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
  beforeEach(async () => {

    // if (await exploreScreen.isBackButtonDisplayed()) {
    //   await exploreScreen.backToHomeScreen();
    // } else {
    //   console.log('Gaurav');
    // }
  });

  beforeAll(async () => {
    driver = await Driver.getDriver(specName);
    homeScreenUiValidationAction = new HomeScreenUiValidationAction(driver);
    exploreScreen = new ExploreScreens(driver);
    homeScreen = new HomeScreen(driver);
    expect(await homeScreen.getWelcomeText()).to.equal(HomeScreenConstants.WelcomeText);
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

  it('Verify search bar hint text "Search for more', async () => {
    expect(await homeScreen.getSearchBoxHintText()).to.equal(HomeScreenConstants.SearchBoxPlaceHolderText);
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
    await homeScreenUiValidationAction.tapBookCategory();
    expect(await exploreScreen.getBookCategoryText()).to.includes(HomeScreenConstants.Books);
  });

  it('Verify New Arrivals section on home page', async () => {
    await exploreScreen.backToHomeScreen();
    await homeScreenUiValidationAction.tapNewArrivalArrow();
    expect(await exploreScreen.isExploreHeadingDisplayed()).to.be.true;
  });

  it('Verify if the user can scroll new Arrivals section', async () => {
    await exploreScreen.backToHomeScreen();
    await homeScreenUiValidationAction.scrollNewArrivals();
    expect(await homeScreen.isExploreMoreNewArrivalsDisplayed()).to.be.true;
  });

  it('Verify Trending Products section on home page', async () => {
    await homeScreenUiValidationAction.scrollTrendingItemsCarousel();
    await homeScreenUiValidationAction.tapTrendingProductsArrow();
    expect(await exploreScreen.isExploreHeadingDisplayed()).to.be.true;
  });

  it('Verify if the user can scroll trending products section', async () => {
    await exploreScreen.backToHomeScreen();
    await homeScreenUiValidationAction.scrollTrendingProducts();
    expect(await homeScreen.isExploreMoreTrendingItemsDisplayed()).to.be.true;
  });

  it('Verify Top rated Products section on home page', async () => {
    await homeScreenUiValidationAction.scrollTillTrendingItemsCarousel();
    await homeScreenUiValidationAction.tapTopRatedProductArrow();
    expect(await exploreScreen.isExploreHeadingDisplayed()).to.be.true;
  });

  it('Verify if the user can scroll top rated products section', async () => {
    await exploreScreen.backToHomeScreen();
    await homeScreenUiValidationAction.scrollTopRatedProducts();
    expect(await homeScreen.isExploreMoreTopRatedProductsDisplayed()).to.be.true;
  });

  it('Verify Best Sellers Products section on home page', async () => {
    await homeScreenUiValidationAction.scrollTillBestSellerCarousel();
    await homeScreenUiValidationAction.tapBestSellerArrow();
    expect(await exploreScreen.isExploreHeadingDisplayed()).to.be.true;
  });

  it('Verify if the user can scroll best seller products section', async () => {
    await exploreScreen.backToHomeScreen();
    await homeScreenUiValidationAction.scrollBestSellerProducts();
    expect(await homeScreen.isExploreMoreBestSellersDisplayed()).to.be.true;
  });

  it('Verify if the user can scroll till top of the home page ', async () => {
    await homeScreenUiValidationAction.scrollTillUp();
    expect(await homeScreen.isNewArraivalsDisplayed()).to.be.true;
  });

  it('Verify if the user can scroll till end of the home page ', async () => {
    await homeScreenUiValidationAction.scrollTillEnd();
    expect(await homeScreen.isFooterDisplayed()).to.be.true;
  });
});
