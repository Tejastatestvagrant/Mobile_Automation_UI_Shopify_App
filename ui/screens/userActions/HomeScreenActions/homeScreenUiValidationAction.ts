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
    await this.scrollArrivalsCarousel();
    await this.scrollTrendingItemsCarousel();
    await this.scrollTopRatedProductsCarousel();
    await this.scrollBestSellerCarousel();
  }

  async tapClothingCategory() {
    const clothButton = await this.homeScreen.clothingCategoryElement();
    await this.click(clothButton);
  }

  async tapShoesCategory() {
    const clothButton = await this.homeScreen.shoesCategoryElement();
    await this.click(clothButton);
  }

  async tapFurnitureCategory() {
    const clothButton = await this.homeScreen.furnitureCategoryElement();
    await this.click(clothButton);
  }

  async tapToysCategory() {
    const clothButton = await this.homeScreen.toysCategoryElement();
    await this.click(clothButton);
  }

  async tapAudioEquipmentCategory() {
    const clothButton = await this.homeScreen.audioSetsCategoryElement();
    await this.click(clothButton);
  }

  async tapBookCategory() {
    const clothButton = await this.homeScreen.bookCategoryElement();
    await this.click(clothButton);
  }

  async tapNewArrivalArrow() {
    return this.click(await this.homeScreen.newArrivalArrow());
  }

  async tapTrendingProductsArrow() {
    return this.click(await this.homeScreen.trendingProductsArrow());
  }

  async tapTopRatedProductArrow() {
    return this.click(await this.homeScreen.topRatedProductsArrow());
  }

  async tapBestSellerArrow() {
    return this.click(await this.homeScreen.bestSellerArrow());
  }

  async scrollArrivalsCarousel() {
    await this.driver.execute('mobile: scroll', {
      element: await this.homeScreen.newArrivalsCarouselElement(),
      direction: 'down',
    });
  }

  async scrollTrendingItemsCarousel() {
    await this.driver.execute('mobile: scroll', {
      element: await this.homeScreen.trendingItemsCarouselElement(),
      direction: 'down',
    });
  }

  async scrollTopRatedProductsCarousel() {
    await this.driver.execute('mobile: scroll', {
      element: await this.homeScreen.topRatedProductsCarouselElement(),
      direction: 'down',
    });
  }

  async scrollBestSellerCarousel() {
    await this.driver.execute('mobile: scroll', {
      element: await this.homeScreen.bestSellerCarouselElement(),
      direction: 'down',
    });
  }

  async scrollTillTrendingItemsCarousel() {
    await this.driver.pause(5000);
    await this.scrollArrivalsCarousel();
    await this.scrollTrendingItemsCarousel();
  }

  async scrollTillBestSellerCarousel() {
    await this.driver.pause(5000);
    await this.scrollTrendingItemsCarousel();
    await this.scrollBestSellerCarousel();
  }

  async scrollCategoryGrid() {
    await this.driver.pause(5000);
    await this.driver.execute('mobile: scroll', {
      element: await this.homeScreen.categoryGridElement(),
      direction: 'right',
    });
  }
}
