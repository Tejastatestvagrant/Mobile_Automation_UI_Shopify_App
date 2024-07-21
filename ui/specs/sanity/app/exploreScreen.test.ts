/**
 * @group Sanity
 */

import { Browser } from 'webdriverio';
import { expect } from 'chai';
import { Driver, ExploreScreen } from '../../../../uiExport';
import { HomeScreenUiValidationAction } from '../../../screens/userActions/HomeScreenActions/homeScreenUiValidationAction';

let driver: Browser<'async'>;
let exploreScreen: ExploreScreen;
let homeScreenUiValidationAction: HomeScreenUiValidationAction;

declare let reporter: any;
const specName = 'Explore Screen test';
describe(specName, () => {
  beforeAll(async () => {
    driver = await Driver.getDriver(specName);
    exploreScreen = new ExploreScreen(driver);
    homeScreenUiValidationAction = new HomeScreenUiValidationAction(driver);

    await homeScreenUiValidationAction.tapExploreButton();
  });

  afterEach(async () => {
    await Driver.attachScreenshots(driver, reporter);
  });

  afterAll(async () => {
    await Driver.closeDrivers([driver]);
  });

  it('verify Verify Search with Empty Keyword', async () => {
    expect(await exploreScreen.isExploreScreenDisplayed()).to.be.true;
    await exploreScreen.enterSearchQuery('');
    await exploreScreen.tapSearchIcon();
    expect(await exploreScreen.isErrorMessageDisplayed()).to.be.true;
  });

  it('Verify Search special characters', async () => {
    await exploreScreen.enterSearchQuery('#');
    await exploreScreen.tapSearchIcon();
    expect(await exploreScreen.isNoProductMessageDisplayed()).to.be.true;
  });

  it('Verify more button in the suggestion list', async () => {
    await exploreScreen.enterSearchQuery('hi');
    expect(await exploreScreen.isMoreButtonDisplayed()).to.be.true;
    expect(await exploreScreen.getSuggestionListElementCount()).to.be.equal(3);
    await exploreScreen.tapOnMoreButton();
    expect(await exploreScreen.getSuggestionListElementCount()).to.greaterThan(3);
  });

  it('Verify product displayed with valid search query', async () => {
    await exploreScreen.enterSearchQuery('High-Fidelity Headphones');
    expect(await exploreScreen.getSuggestedProductName()).to.be.equal('High-Fidelity Headphones');
  });
});
