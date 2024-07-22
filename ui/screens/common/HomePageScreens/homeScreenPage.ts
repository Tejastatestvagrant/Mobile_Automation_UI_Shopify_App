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
    trackOrderTabButton: { android: "//*[@content-desc='navTrack']", ios: "//*[@name='Track, tab, 4 of 5']" },
    profileTabButton: { android: "//*[@content-desc='navProfile']", ios: "//*[@label='Profile, tab, 5 of 5']" },
    welcomeBackText: { android: '', ios: "//*[@name='txt-welcome-back']" },
    usernameHeaderText: { android: '', ios: '#txt-username' },
    newArrivalsArrow: { android: '', ios: "(//*[@name='icon-next'])[1]" },
    trendingProductsArrow: { android: '', ios: "(//*[@name='icon-next'])[2]" },
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
    footer: { android: '', ios: '~txt-footer' },
    searchBoxPlaceholder: { android: '', ios: '~txt-search-for-more' },
    exploreMoreNewArrivals: { android: '', ios: "(//*[@name='ele-explore-more'])[1]" },
    exploreMoreTrendingItems: { android: '', ios: "(//*[@name='ele-explore-more'])[2]" },
    exploreMoreTopRatedProducts: { android: '', ios: "(//*[@name='ele-explore-more'])[3]" },
    exploreMoreBestSellers: { android: '', ios: "(//*[@name='ele-explore-more'])[4]" },
    emptyCart: { android: '', ios: '~txt-empty-cart-message' },
    continueShoppingBtn: { android: '', ios: '~txt-continue-shopping' },
    trackOrderWithoutLogin: { android: '', ios: '~txt-track-order-login-message' },
    loginBtn: { android: '', ios: '~txt-login' },
    backBtn: { android: '', ios: '~btn-back' },
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

  async newArrivalArrow(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.newArrivalsArrow));
  }

  async trendingProductsArrow(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.trendingProductsArrow));
  }

  async topRatedProductsArrow(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.topRatedProductsArrow));
  }

  async bestSellerArrow(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.bestSellerArrow));
  }

  async isFooterDisplayed() {
    const footer = await this.getElement(this.selectors.footer.ios);
    return this.isDisplayed(footer);
  }

  async getSearchBoxHintText(): Promise<string> {
    const searchBox = await this.getElement(this.selectors.searchBoxPlaceholder.ios);
    return this.getText(searchBox);
  }

  async isExploreMoreNewArrivalsDisplayed(): Promise<boolean> {
    const exploreMoreNewArrivals = await this.getElement(XpathUtil.getXpath(this.driver, this.selectors.exploreMoreNewArrivals));
    return this.isDisplayed(exploreMoreNewArrivals);
  }

  async isExploreMoreTrendingItemsDisplayed(): Promise<boolean> {
    const exploreMoreTrendingItems = await this.getElement(XpathUtil.getXpath(this.driver, this.selectors.exploreMoreTrendingItems));
    return this.isDisplayed(exploreMoreTrendingItems);
  }

  async isExploreMoreBestSellersDisplayed(): Promise<boolean> {
    const exploreMoreBestSellers = await this.getElement(XpathUtil.getXpath(this.driver, this.selectors.exploreMoreBestSellers));
    return this.isDisplayed(exploreMoreBestSellers);
  }

  async isExploreMoreTopRatedProductsDisplayed(): Promise<boolean> {
    const exploreMoreTopRatedProducts = await this.getElement(XpathUtil.getXpath(this.driver, this.selectors.exploreMoreTopRatedProducts));
    return this.isDisplayed(exploreMoreTopRatedProducts);
  }

  async isNewArraivalsDisplayed(): Promise<boolean> {
    const newArraivals = await this.getElement(XpathUtil.getXpath(this.driver, this.selectors.newArrivalsCarousel));
    return this.isDisplayed(newArraivals);
  }

  async emptyCartElement(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.emptyCart.ios);
  }

  async continueShoppingElement(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.continueShoppingBtn.ios);
  }

  async trackOrderElement(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.trackOrderWithoutLogin.ios);
  }

  async isLoginBtnDisplayed(): Promise<boolean> {
    const loginBtn = await this.getElement(this.selectors.loginBtn.ios);
    return this.isDisplayed(loginBtn);
  }

  async backBtnElement(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.backBtn.ios);
  }
}
