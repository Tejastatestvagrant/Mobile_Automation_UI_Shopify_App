import { Element } from 'webdriverio';
import { BaseScreen, XpathUtil } from '../../../../uiExport';

export class HomeScreen extends BaseScreen {
  private selectors = {
    headerLogo: { android: "//*[@content-desc='appHeader']", ios: "//*[@name='assets/assets/icons/ultralesson-logo.png']" },
    searchInputBtn: { android: "//*[@content-desc='searchBar']", ios: "//*[@name='btn-search']" },
    categoryGrid: { android: "//*[@content-desc='mainProductCategories']", ios: "(//*[@type='XCUIElementTypeScrollView'])[2]" },
    newArrivalsCarousel: { android: "//*[@content-desc='newArrivalsSection']", ios: "(//*[@type='XCUIElementTypeScrollView'])[3]" },
    trendingItemsCarousel: { android: "//*[@content-desc='trendingProductsSection']", ios: "(//*[@type='XCUIElementTypeScrollView'])[4]" },
    topRatedProductsCarousel: { android: '', ios: "(//*[@type='XCUIElementTypeScrollView'])[5]" },
    bestSellersCarousel: { android: '', ios: "(//*[@type='XCUIElementTypeScrollView'])[6]" },
    homeTabButton: { android: "//*[@content-desc='navHome']", ios: "//*[@label='Home, tab, 1 of 5']" },
    cartTabButton: { android: "//*[@content-desc='navCart']", ios: "//*[@label='Cart, tab, 2 of 5']" },
    exploreTabButton: { android: "//*[@content-desc='navExplore']", ios: "//*[@label='Explore, tab, 3 of 5']" },
    trackOrderTabButton: { android: "//*[@content-desc='navTrack']", ios: "//*[@label='Track, tab, 4 of 5" },
    profileTabButton: { android: "//*[@content-desc='navProfile']", ios: "//*[@label='Profile, tab, 5 of 5']" },
    welcomeBackText: { android: '', ios: "//*[@name='txt-welcome-back']" },
    usernameHeaderText: { android: '', ios: '#txt-username' },
    newArrivalsArrow: { android: '', ios: "(//*[@name='icon-next'])[1]" },
    trendingProjectsArrow: { android: '', ios: "(//*[@name='icon-next'])[2]" },
    topRatedProductsArrow: { android: '', ios: "(//*[@name='icon-next'])[3]" },
    bestSellerArrow: { android: '', ios: "(//*[@name='icon-next'])[4]" },
    searchBarHintText: { android: '', ios: "//*[@name='txt-search-for-more']" },
    verticalScrollBar: { android: '', ios: '~Vertical scroll bar, 3 pages' },
    clothingCatagory: { android: '', ios: "//*[@label='Clothing']" },
    furnitureCatagory: { android: '', ios: "//*[@label='Furniture']" },
    shoesCatagory: { android: '', ios: "//*[@label='Shoes']" },
    toysCatagory: { android: '', ios: "//*[@label='Toys']" },
    audioSetsCatagory: { android: '', ios: "//*[@label='Audio sets']" },
    booksCatagory: { android: '', ios: "//*[@label='Books']" },
  };

  async headerLogoElement(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.headerLogo));
  }

  async searchInputElement(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.searchInputBtn));
  }

  async categoryGridElement(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.categoryGrid));
  }

  async newArrivalsCarouselElement(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.newArrivalsCarousel));
  }

  async trendingItemsCarouselElement(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.trendingItemsCarousel));
  }

  async homeTabButtonElement(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.homeTabButton));
  }

  async cartTabButtonElement(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.cartTabButton));
  }

  async exploreTabButtonElement(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.exploreTabButton));
  }

  async trackOrderTabButtonElement(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.trackOrderTabButton));
  }

  async profileTabButtonElement(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.profileTabButton));
  }

  async getWelcomeTextElement(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.welcomeBackText));
  }

  async isAppLogoDisplayed(): Promise<boolean> {
    const appLogo = await this.headerLogoElement();
    return this.isDisplayed(appLogo);
  }

  async getWelcomeText(): Promise<string> {
    const welcomeTextElement = await this.getWelcomeTextElement();
    return this.getText(welcomeTextElement);
  }

  async topRatedProductsCarouselElement(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.topRatedProductsCarousel));
  }

  async bestSellerCarouselElement(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.bestSellersCarousel));
  }

  async verticalScrollBar(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.verticalScrollBar.ios);
  }

  async clothingCategoryElement(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.clothingCatagory.ios);
  }

  async shoesCategoryElement(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.shoesCatagory.ios);
  }

  async furnitureCategoryElement(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.furnitureCatagory.ios);
  }

  async toysCategoryElement(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.toysCatagory.ios);
  }

  async audioSetsCategoryElement(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.audioSetsCatagory.ios);
  }

  async bookCategoryElement(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.booksCatagory.ios);
  }
}
