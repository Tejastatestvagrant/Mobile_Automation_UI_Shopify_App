import { Element } from 'webdriverio';
import { BaseScreen } from '../../../../uiExport';

export class ProductScreen extends BaseScreen {
  private selectors = {
    headerLogo: { android: "//*[@content-desc='appHeader']", ios: "//*[@name='assets/assets/icons/ultralesson-logo.png']" },
    searchInputBtn: { android: "//*[@content-desc='searchBar']", ios: "//*[@name='btn-search']" },
    backButton: { android: '', ios: '~btn-back' },
    productName: { android: '', ios: '~txt-product-name' },
    productPrice: { android: '', ios: '~txt-product-price' },
    productDescription: { android: '', ios: '~txt-product-description' },
    featureDropDown: { android: '', ios: '~txt-features' },
    addToCartButton: { android: '', ios: '-ios predicate string:name == "btn-cart" AND label == "Add To Cart"' },
    productRatingWithCategory: { android: '', ios: '~txt-rating-category' },
    goToCartButton: { android: '', ios: '-ios predicate string:name == ""btn-cart" AND label == "Go To Cart"' },
    brand: { android: '', ios: '~txt-brand' },
    seller: { android: '', ios: '~txt-seller' },
  };

  async addToCartButton(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.addToCartButton.ios);
  }

  async ratingWithCategory(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.productRatingWithCategory.ios);
  }

  async getProductName(): Promise<String> {
    const productName = await this.getElement(this.selectors.productName.ios);
    return this.getText(productName);
  }

  async getProductDescription(): Promise<String> {
    const productDescription = await this.getElement(this.selectors.productDescription.ios);
    return this.getText(productDescription);
  }

  async getProductPrice(): Promise<String> {
    const productPrice = await this.getElement(this.selectors.productPrice.ios);
    return this.getText(productPrice);
  }

  async isBrandDisplayed(): Promise<boolean> {
    const brand = await this.getElement(this.selectors.brand.ios);
    return this.isDisplayed(brand);
  }

  async isSellerDisplayed(): Promise<boolean> {
    const seller = await this.getElement(this.selectors.seller.ios);
    return this.isDisplayed(seller);
  }

  async isAddToCartOptionDisplayed(): Promise<boolean> {
    const addToCartButton = await this.getElement(this.selectors.addToCartButton.ios);
    return this.isDisplayed(addToCartButton);
  }

  async addProductToCart() {
    const addToCartButton = await this.getElement(this.selectors.addToCartButton.ios);
    await this.click(addToCartButton);
  }

  async isGoToCartOptionDisplayed(): Promise<boolean> {
    const goToCartButton = await this.getElement(this.selectors.goToCartButton.ios);
    return this.isDisplayed(goToCartButton);
  }
}
