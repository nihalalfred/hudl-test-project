import { Locator, Page } from "@playwright/test";

export class FanDashboardPage {
    readonly page: Page;
    readonly logo: Locator;
    readonly watchNowLink: Locator;
    readonly userDisplayName: Locator;
    readonly userAvatar: Locator;
    readonly headlineImage: Locator;
    readonly searchBar: Locator;
    readonly spotlightText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logo = page.locator('.fanWebnav_navBtnLogo__qzRRN');
        this.watchNowLink = page.locator('.fanWebnav_watchNowLink__EiIrQ');
        this.userDisplayName = page.locator('.fanWebnav_displayName__gvbGS');
        this.userAvatar = page.locator('.fanWebnav_globalUserItemAvatar__28QTM');
        this.headlineImage = page.getByTestId("headline-image");
        this.searchBar = page.getByTestId("search-bar");
        this.spotlightText = page.getByTestId("spotlight-text");
    }

    async verifyFanDashboard() {
        await this.logo.isVisible();
        await this.watchNowLink.isVisible();
        await this.userDisplayName.isVisible();
        await this.userAvatar.isVisible();
        await this.headlineImage.isVisible();
        await this.searchBar.isVisible();
        await this.spotlightText.isVisible();
    }

    async navigateToWatch() {
        await this.watchNowLink.click();
    }
}