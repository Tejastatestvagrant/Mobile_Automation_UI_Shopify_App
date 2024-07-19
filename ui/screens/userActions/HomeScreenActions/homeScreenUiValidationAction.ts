import { Browser } from 'webdriverio';
import { BaseScreen, HomeScreen } from '../../../../uiExport'; // Adjust the import path as needed
import { SwipeUtil } from '../../utils/swipeUtil';

export class HomeScreenUiValidationAction extends BaseScreen {
  homeScreen: HomeScreen;

  swipUtil: SwipeUtil;

  constructor(driver: Browser<'async'>) {
    super(driver);
    this.homeScreen = new HomeScreen(driver);
    this.swipUtil = new SwipeUtil(driver);
  }

  async tapHomeButton() {
    const homeButton = await this.homeScreen.homeTabButtonElement();
    await this.click(homeButton);
  }

  async tapCartButton() {
    const cartButton = await this.homeScreen.cartTabButtonElement();
    await this.click(cartButton);
  }

  async tapExploreButton() {
    const exploreButton = await this.homeScreen.exploreTabButtonElement();
    await this.click(exploreButton);
  }

  async tapTrackButton() {
    const trackButton = await this.homeScreen.trackOrderTabButtonElement();
    await this.click(trackButton);
  }

  async tapProfileButton() {
    const profileButton = await this.homeScreen.profileTabButtonElement();
    await this.click(profileButton);
  }

  async scrollNewArrivals() {
    await this.driver.execute('mobile: scroll', {
      element: await this.homeScreen.newArrivalsCarouselElement(),
      direction: 'right',
    });
  }

  async scrollTrendingProducts() {
    await this.driver.execute('mobile: scroll', {
      element: await this.homeScreen.trendingItemsCarouselElement(),
      direction: 'right',
    });
  }

  async scrollTopRatedProducts() {
    await this.driver.execute('mobile: scroll', {
      element: await this.homeScreen.topRatedProductsCarouselElement(),
      direction: 'right',
    });
  }

  async scrollBestSellerProducts() {
    await this.driver.execute('mobile: scroll', {
      element: await this.homeScreen.bestSellerCarouselElement(),
      direction: 'right',
    });
  }

  async scrollTillEnd() {
    await this.driver.execute('mobile: scroll', {
      element: await this.homeScreen.newArrivalsCarouselElement(),
      direction: 'down',
    });
    await this.driver.execute('mobile: scroll', {
      element: await this.homeScreen.trendingItemsCarouselElement(),
      direction: 'down',
    });
    await this.driver.execute('mobile: scroll', {
      element: await this.homeScreen.topRatedProductsCarouselElement(),
      direction: 'down',
    });
    await this.driver.execute('mobile: scroll', {
      element: await this.homeScreen.bestSellerCarouselElement(),
      direction: 'down',
    });
  }
}
