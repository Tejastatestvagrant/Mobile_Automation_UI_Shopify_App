import { Element } from 'webdriverio';
import { BaseScreen, XpathUtil } from '../../../uiExport';

export class ExploreScreen extends BaseScreen {
  private selectors = {
    backButton: { android: "//*[@content-desc='backButton']", ios: "//*[@name='backButton']" },
    searchInput: { android: "//*[@content-desc='searchBar']", ios: "//*[@name='searchBar']" },
    searchIcon: { android: "//*[@content-desc='searchIcon']", ios: "//*[@name='searchIcon']" },
    exploreTitle: { android: "//android.widget.TextView[@text='Explore']", ios: "//XCUIElementTypeStaticText[@name='Explore']" },
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
}
