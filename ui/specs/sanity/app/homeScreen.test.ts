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
    expect(await homeScreen.getWelcomeText()).to.equal(HomeScreenConstants.WelcomeText);
  });

  afterEach(async () => {
    await Driver.attachScreenshots(driver, reporter);
  });

  afterAll(async () => {
    await Driver.closeDrivers([driver]);
  });

  /**
   * @group Smoke
   * @priority High
   */
  it('verify welcomeText and logo', async () => {
    expect(await homeScreen.getWelcomeText()).to.equal(HomeScreenConstants.WelcomeText);
  });

  /**
   * @group Smoke
   * @priority Medium
   */
  it('Verify search bar hint text "Search for more"', async () => {
    expect(await homeScreen.getSearchBoxHintText()).to.equal(HomeScreenConstants.SearchBoxPlaceHolderText);
  });

  /**
   * @group Sanity
   * @priority Low
   */
  it.skip('Verify user logged in on home page', async () => {
  });

  /**
   * @group Functional
   * @priority High
   */
  it('Verify clothing category on home page', async () => {
    await homeScreenUiValidationAction.tapClothingCategory();
    expect(await exploreScreen.getCategoryText()).to.includes(HomeScreenConstants.Clothing);
  });

  /**
   * @group Functional
   * @priority High
   */
  it('Verify Shoes category on home page', async () => {
    await exploreScreen.backToHomeScreen();
    await homeScreenUiValidationAction.tapShoesCategory();
    expect(await exploreScreen.getCategoryText()).to.includes(HomeScreenConstants.Shoes);
  });

  /**
   * @group Functional
   * @priority Medium
   */
  it('Verify Furniture category on home page', async () => {
    await exploreScreen.backToHomeScreen();
    await homeScreenUiValidationAction.tapFurnitureCategory();
    expect(await exploreScreen.getCategoryText()).to.includes(HomeScreenConstants.Furnitures);
  });

  /**
   * @group Functional
   * @priority Medium
   */
  it('Verify Toys category on home page', async () => {
    await exploreScreen.backToHomeScreen();
    await homeScreenUiValidationAction.tapToysCategory();
    expect(await exploreScreen.getCategoryText()).to.includes(HomeScreenConstants.Toys);
  });

  /**
   * @group Functional
   * @priority Medium
   */
  it('Verify audio equipment category on home page', async () => {
    await exploreScreen.backToHomeScreen();
    await homeScreenUiValidationAction.scrollCategoryGrid();
    await homeScreenUiValidationAction.tapAudioEquipmentCategory();
    expect(await exploreScreen.getCategoryText()).to.includes(HomeScreenConstants.Audio_Equipments);
  });

  /**
   * @group Functional
   * @priority Medium
   */
  it('Verify Books category on home page', async () => {
    await exploreScreen.backToHomeScreen();
    await homeScreenUiValidationAction.tapBookCategory();
    expect(await exploreScreen.getBookCategoryText()).to.includes(HomeScreenConstants.Books);
  });

  /**
   * @group Functional
   * @priority High
   */
  it('Verify New Arrivals section on home page', async () => {
    await exploreScreen.backToHomeScreen();
    await homeScreenUiValidationAction.tapNewArrivalArrow();
    expect(await exploreScreen.isExploreHeadingDisplayed()).to.be.true;
  });

  /**
   * @group Functional
   * @priority Medium
   */
  it('Verify if the user can scroll new Arrivals section', async () => {
    await exploreScreen.backToHomeScreen();
    await homeScreenUiValidationAction.scrollNewArrivals();
    expect(await homeScreen.isExploreMoreNewArrivalsDisplayed()).to.be.true;
  });

  /**
   * @group Functional
   * @priority High
   */
  it('Verify Trending Products section on home page', async () => {
    await homeScreenUiValidationAction.scrollTrendingItemsCarousel();
    await homeScreenUiValidationAction.tapTrendingProductsArrow();
    expect(await exploreScreen.isExploreHeadingDisplayed()).to.be.true;
  });

  /**
   * @group Functional
   * @priority Medium
   */
  it('Verify if the user can scroll trending products section', async () => {
    await exploreScreen.backToHomeScreen();
    await homeScreenUiValidationAction.scrollTrendingProducts();
    expect(await homeScreen.isExploreMoreTrendingItemsDisplayed()).to.be.true;
  });

  /**
   * @group Functional
   * @priority High
   */
  it('Verify Top rated Products section on home page', async () => {
    await homeScreenUiValidationAction.scrollTillTrendingItemsCarousel();
    await homeScreenUiValidationAction.tapTopRatedProductArrow();
    expect(await exploreScreen.isExploreHeadingDisplayed()).to.be.true;
  });

  /**
   * @group Functional
   * @priority Medium
   */
  it('Verify if the user can scroll top rated products section', async () => {
    await exploreScreen.backToHomeScreen();
    await homeScreenUiValidationAction.scrollTopRatedProducts();
    expect(await homeScreen.isExploreMoreTopRatedProductsDisplayed()).to.be.true;
  });

  /**
   * @group Functional
   * @priority High
   */
  it('Verify Best Sellers Products section on home page', async () => {
    await homeScreenUiValidationAction.scrollTillBestSellerCarousel();
    await homeScreenUiValidationAction.tapBestSellerArrow();
    expect(await exploreScreen.isExploreHeadingDisplayed()).to.be.true;
  });

  /**
   * @group Functional
   * @priority Medium
   */
  it('Verify if the user can scroll best seller products section', async () => {
    await exploreScreen.backToHomeScreen();
    await homeScreenUiValidationAction.scrollBestSellerProducts();
    expect(await homeScreen.isExploreMoreBestSellersDisplayed()).to.be.true;
  });

  /**
   * @group Functional
   * @priority Low
   */
  it('Verify if the user can scroll till top of the home page', async () => {
    await homeScreenUiValidationAction.scrollTillUp();
    expect(await homeScreen.isNewArraivalsDisplayed()).to.be.true;
  });

  /**
   * @group Functional
   * @priority Low
   */
  it('Verify if the user can scroll till end of the home page', async () => {
    await homeScreenUiValidationAction.scrollTillEnd();
    expect(await homeScreen.isFooterDisplayed()).to.be.true;
  });

  /**
   * @group Sanity
   * @priority High
   */
  it('Verify navigation to cart page with empty cart', async () => {
    await homeScreenUiValidationAction.tapCartButton();
    expect(await homeScreenUiValidationAction.getEmptyCartText()).to.be.equal(HomeScreenConstants.EmptyCartText);
  });

  /**
   * @group Sanity
   * @priority High
   */
  it('Verify navigation to track page without login', async () => {
    await homeScreenUiValidationAction.tapContinueShopping();
    await homeScreenUiValidationAction.tapTrackButton();
    expect(await homeScreenUiValidationAction.getTrackOrderWithoutLoginText()).to.be.equal(HomeScreenConstants.TrackText);
  });

  /**
   * @group Sanity
   * @priority High
   */
  it('Verify navigation to profile page without login', async () => {
    await homeScreenUiValidationAction.tapBackButton();
    await homeScreenUiValidationAction.tapProfileButton();
    expect(await homeScreen.isLoginBtnDisplayed()).to.be.true;
  });
});
