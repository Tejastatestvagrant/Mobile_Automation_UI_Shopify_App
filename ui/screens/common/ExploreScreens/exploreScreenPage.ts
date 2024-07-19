import { Element } from 'webdriverio';
import { BaseScreen, XpathUtil } from '../../../../uiExport';

export class ExploreScreen extends BaseScreen {
  private selectors = {
    backButton: { android: "//*[@content-desc='backButton']", ios: "//*[@name='backButton']" },
    searchInput: { android: "//*[@content-desc='searchBar']", ios: "~inp-search" },
    searchIcon: { android: "//*[@content-desc='searchIcon']", ios: '//XCUIElementTypeOther[@name="icon-search"]/XCUIElementTypeOther/XCUIElementTypeOther' },
    exploreTitle: { android: "//android.widget.TextView[@text='Explore']", ios: '//XCUIElementTypeTextField[@name="inp-search"]' },
    errorPopup: { android: '', ios: '(//XCUIElementTypeOther[@name="Uh oh, something went wrong Search field cannot be empty"])[4]'},
    noProductFoundMessage: { android: '', ios: '~txt-no-products-found'},
    moreButton: { android: '', ios:'~txt-more'},
    suggestionListElement: { android:'', ios: "//*[@name='ele-auto-suggestion']"},
    suggestedProductName: { android: '', ios: '~txt-product-name'}
  };

  async backButtonEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.backButton));
  }

  async searchInputEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.searchInput));
  }

  async searchIconEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.searchIcon));
  }

  async exploreTitleEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.exploreTitle));
  }

  async tapBackButton() {
    const backButton = await this.backButtonEle();
    await this.click(backButton);
  }

  async enterSearchQuery(query: string) {
    const searchInput = await this.searchInputEle();
    await this.waitForDisplayed(searchInput);
    await this.setValue(searchInput, query);
  }

  async tapSearchIcon() {
    const searchIcon = await this.searchIconEle();
    await this.click(searchIcon);
  }

  async getExploreTitle(): Promise<string> {
    const titleElement = await this.exploreTitleEle();
    return this.getText(titleElement);
  }

  async isExploreScreenDisplayed(): Promise<boolean> {
    const titleElement = await this.exploreTitleEle();
    return this.isDisplayed(titleElement);
  }

  async searchAndVerifyQuery(query: string): Promise<void> {
    await this.enterSearchQuery(query);
    await this.tapSearchIcon();
    // Add verification logic here, e.g., checking if search results are displayed
    // This might involve waiting for a results container to appear
    // For example:
    // await this.waitForElementDisplayed(this.selectors.searchResultsContainer, 5000);
  }

  async verifyExploreScreen(): Promise<boolean> {
    const isScreenDisplayed = await this.isExploreScreenDisplayed();
    const title = await this.getExploreTitle();
    return isScreenDisplayed && title === 'Explore';
  }

  async isErrorMessageDisplayed(): Promise<boolean> {
    const errorMessage = await this.getElement(XpathUtil.getXpath(this.driver,this.selectors.errorPopup))
    return this.isDisplayed(errorMessage);
  }
  

  async isNoProductMessageDisplayed(): Promise<boolean> {
    const message = await this.getElement(this.selectors.noProductFoundMessage.ios)
    return this.isDisplayed(message);
  }

  async isMoreButtonDisplayed(): Promise<boolean> {
    const moreButton = await this.getElement(this.selectors.moreButton.ios)
    return this.isDisplayed(moreButton);
  }
  
  async tapOnMoreButton() {
    const moreButton = await this.getElement(this.selectors.moreButton.ios);
    await this.click(moreButton);
  }

  async getSuggestionListElementCount(): Promise<number> {
    const elementCount = await this.getElements(this.selectors.suggestionListElement.ios);
    return elementCount.length
  }

  async getSuggestedProductName(): Promise<string> {
    const productName = await this.getElement(this.selectors.suggestedProductName.ios);
    return this.getText(productName);
  }

}
