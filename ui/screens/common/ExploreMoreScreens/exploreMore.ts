import { Element } from 'webdriverio';
import { BaseScreen, XpathUtil } from '../../../../uiExport';

export class ExploreScreens extends BaseScreen {
  private selectors = {
    category: { android: '', ios: "(//*[@name='txt-rating-category'])[1]" },
    bookCatory: { android: '', ios: '~txt-no-products-found' },
    backBtn: { android: '', ios: "//*[@name='icon-back']" },
    exploreMoreHeading: { android: '', ios: "//*[@label='Explore More!!']" },
  };

  async backToHomeScreenBtn(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.backBtn));
  }

  async backToHomeScreen() {
    return this.click(await this.backToHomeScreenBtn());
  }

  async categoryBtn(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.category));
  }

  async categoryBookBtn(): Promise<Element<'async'>> {
    return this.getElement(this.selectors.bookCatory.ios);
  }

  async getCategoryText() {
    const categoryText = await this.categoryBtn();
    return this.getText(categoryText);
  }

  async getBookCategoryText() {
    const bookCategoryText = await this.categoryBookBtn();
    return this.getText(bookCategoryText);
  }

  async isExploreHeadingDisplayed(): Promise<boolean> {
    const exploreMoreHeading = await this.getElement(XpathUtil.getXpath(this.driver, this.selectors.exploreMoreHeading));
    return this.isDisplayed(exploreMoreHeading);
  }
}
