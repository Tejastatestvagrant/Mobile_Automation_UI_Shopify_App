import { Element } from 'webdriverio';
import { BaseScreen, XpathUtil } from '../../../../uiExport';

export class ProductScreen extends BaseScreen {
    private selectors = {
        headerLogo: { android: "//*[@content-desc='appHeader']", ios: "//*[@name='assets/assets/icons/ultralesson-logo.png']" },
        searchInputBtn: { android: "//*[@content-desc='searchBar']", ios: "//*[@name='btn-search']" },
        backButton: { android: "", ios: "~btn-back" },
        productName: { android: "", ios: "~txt-product-name" },
        productPrice: { android: "", ios: "~txt-product-price" },
        productDescription: { android: "", ios: "~txt-product-description" },
        featureDropDown: { android: "", ios: "~txt-features" },
        addToCartButton: { android: "", ios: `-ios predicate string:name == "btn-cart" AND label == "Add To Cart"` },
        productRatingWithCategory: { android: "", ios: "~txt-rating-category" },
        goToCartButton: { android: "", ios: `-ios predicate string:name == ""btn-cart" AND label == "Go To Cart"` },
    };

    async addToCartButton(): Promise<Element<'async'>> {
        return this.getElement(this.selectors.addToCartButton.ios);
    }

    async productDescription(): Promise<Element<'async'>> {
        return this.getElement(this.selectors.productDescription.ios);
    }
    async ratingWithCategory(): Promise<Element<'async'>> {
        return this.getElement(this.selectors.productRatingWithCategory.ios);
    }


}
