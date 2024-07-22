/**
 * @group Sanity
 */

import { Browser } from 'webdriverio';
import { expect } from 'chai';
import {
  Driver, ExploreScreen, ProductScreen,
} from '../../../../uiExport';
import { HomeScreenUiValidationAction } from '../../../screens/userActions/HomeScreenActions/homeScreenUiValidationAction';
// import { E2eLoginAction } from '../../../screens/userActions/ProfileScreenActions/e2eLoginAction';

let driver: Browser<'async'>;
let exploreScreen: ExploreScreen;
let productScreen: ProductScreen;
// let e2eLoginAction: E2eLoginAction;

let homeScreenUiValidationAction: HomeScreenUiValidationAction;

declare let reporter: any;
const specName = 'Product Screen test';
describe(specName, () => {
  beforeAll(async () => {
    driver = await Driver.getDriver(specName);
    exploreScreen = new ExploreScreen(driver);
    productScreen = new ProductScreen(driver);
    homeScreenUiValidationAction = new HomeScreenUiValidationAction(driver);
    // e2eLoginAction = new E2eLoginAction(driver);

    // await e2eLoginAction.login();
    await homeScreenUiValidationAction.tapExploreButton();
  });

  afterEach(async () => {
    await Driver.attachScreenshots(driver, reporter);
  });

  afterAll(async () => {
    await Driver.closeDrivers([driver]);
  });

  it('Verify Product Name, price and description displayed Correctly', async () => {
    await exploreScreen.enterSearchQuery('High-Fidelity Headphones');
    await productScreen.hideKeyboard();
    await exploreScreen.tapOnProduct('High-Fidelity Headphones');
    expect(await productScreen.getProductName()).to.be.equal('High-Fidelity Headphones');
    expect(await productScreen.getProductPrice()).to.be.equal('199.99');
    expect(await productScreen.getProductDescription()).to.be.equal('Experience unparalleled sound quality with these High-Fidelity Headphones. Designed for audiophiles, these headphones offer crisp, detailed audio reproduction and comfortable, long-wearing design.');
  });

  it('Verify brand and seller information is available', async () => {
    expect(await productScreen.isBrandDisplayed()).to.be.true;
    expect(await productScreen.isSellerDisplayed()).to.be.true;
  });

  it('Verify brand and seller information is available', async () => {
    expect(await productScreen.isBrandDisplayed()).to.be.true;
    expect(await productScreen.isSellerDisplayed()).to.be.true;
  });

  it('Verify product is added to cart', async () => {
    expect(await productScreen.isAddToCartOptionDisplayed()).to.be.true;
    await productScreen.addProductToCart();

    // expect(await productScreen.isGoToCartOptionDisplayed()).to.be.true;
  });
});
