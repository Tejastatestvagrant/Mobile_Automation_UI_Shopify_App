import { Browser } from 'webdriverio';
import { BaseScreen, HomeScreen } from '../../../../uiExport'; // Adjust the import path as needed

export class HomeScreenUiValidationAction extends BaseScreen {
    homeScreen: HomeScreen;

    constructor(driver: Browser<'async'>) {
        super(driver);
        this.homeScreen = new HomeScreen(driver);
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

}
