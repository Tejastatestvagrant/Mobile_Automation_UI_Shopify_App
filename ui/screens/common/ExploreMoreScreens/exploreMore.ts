import { Element } from 'webdriverio';
import { BaseScreen, XpathUtil } from '../../../../uiExport';

export class ExploreScreens extends BaseScreen {
  private selectors = {
    headerLogo: { android: "//*[@content-desc='appHeader']", ios: "//*[@name='assets/assets/icons/ultralesson-logo.png']" },
    category: { android: '', ios: "(//*[@name='txt-rating-category'])[1]" },
    bookCatory: { android: '', ios: '~txt-no-products-found' },
  };

  async backToHomeScreen(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.headerLogo));
  }

  async categoryBtn(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.category));
  }

  async getCategoryText() {
    const categoryText = await this.categoryBtn();
    return this.getText(categoryText);
  }
}
