import { Element } from 'webdriverio';
import { BaseScreen, XpathUtil } from '../../../uiExport';

export class HomeScreen extends BaseScreen {
  private selectors = {
    headerLogo: { android: "//*[@content-desc='appHeader']", ios: "//*[@name='appHeader']" },
    searchInput: { android: "//*[@content-desc='searchBar']", ios: "//*[@name='searchBar']" },
    categoryGrid: { android: "//*[@content-desc='mainProductCategories']", ios: "//*[@name='mainProductCategories']" },
    newArrivalsCarousel: { android: "//*[@content-desc='newArrivalsSection']", ios: "//*[@name='newArrivalsSection']" },
    trendingItemsCarousel: { android: "//*[@content-desc='trendingProductsSection']", ios: "//*[@name='trendingProductsSection']" },
    bottomNavBar: { android: "//*[@content-desc='navigationBar']", ios: "//*[@name='navigationBar']" },
    homeTabButton: { android: "//*[@content-desc='navHome']", ios: "//*[@name='navHome']" },
    cartTabButton: { android: "//*[@content-desc='navCart']", ios: "//*[@name='navCart']" },
    exploreTabButton: { android: "//*[@content-desc='navExplore']", ios: "//*[@name='navExplore']" },
    trackOrderTabButton: { android: "//*[@content-desc='navTrack']", ios: "//*[@name='navTrack']" },
    profileTabButton: { android: "//*[@content-desc='navProfile']", ios: "//*[@name='navProfile']" },
  };

  async headerLogoEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.headerLogo));
  }

  async searchInputEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.searchInput));
  }

  async categoryGridEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.categoryGrid));
  }

  async newArrivalsCarouselEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.newArrivalsCarousel));
  }

  async trendingItemsCarouselEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.trendingItemsCarousel));
  }

  async bottomNavBarEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.bottomNavBar));
  }

  async homeTabButtonEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.homeTabButton));
  }

  async cartTabButtonEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.cartTabButton));
  }

  async exploreTabButtonEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.exploreTabButton));
  }

  async trackOrderTabButtonEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.trackOrderTabButton));
  }

  async profileTabButtonEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.profileTabButton));
  }

  async enterSearchQuery(productName: string) {
    const searchInput = await this.searchInputEle();
    await this.waitForDisplayed(searchInput);
    await this.setValue(searchInput, productName);
    await searchInput.addValue('\n');
  }

  async selectProductCategory(categoryName: string) {
    const categories = await this.categoryGridEle();
    const category = await categories.$(`//*[@content-desc='${categoryName}']`);
    await category.click();
  }

  async tapNewArrivalItem(productName: string) {
    const newArrivals = await this.newArrivalsCarouselEle();
    const product = await newArrivals.$(`//*[@content-desc='${productName}']`);
    await product.click();
  }

  async tapTrendingItem(productName: string) {
    const trendingProducts = await this.trendingItemsCarouselEle();
    const product = await trendingProducts.$(`//*[@content-desc='${productName}']`);
    await product.click();
  }

  async goToHomeTab() {
    const homeButton = await this.homeTabButtonEle();
    await this.click(homeButton);
  }

  async goToCartTab() {
    const cartButton = await this.cartTabButtonEle();
    await this.click(cartButton);
  }

  async goToExploreTab() {
    const exploreButton = await this.exploreTabButtonEle();
    await this.click(exploreButton);
  }

  async goToTrackOrderTab() {
    const trackButton = await this.trackOrderTabButtonEle();
    await this.click(trackButton);
  }

  async goToProfileTab() {
    const profileButton = await this.profileTabButtonEle();
    await this.click(profileButton);
  }
}
