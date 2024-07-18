import { Element } from 'webdriverio';
import { BaseScreen, XpathUtil } from '../../../uiExport';

export class HomeScreen extends BaseScreen {
  private selectors = {
    productLabel: { android: "//*[@text='PRODUCTS']", ios: "//*[@name='PRODUCTS']" },

  };

  async productLabelEle(): Promise<Element<'async'>> {
    return this.getElement(XpathUtil.getXpath(this.driver, this.selectors.productLabel));
  }
}
