import { Locator, Page } from "playwright/test";

export class CookieBanner {
    readonly page: Page;
    readonly banner: Locator;
    readonly policyText: Locator;
    readonly privacyLink: Locator;
    readonly byClickingText: Locator;
    readonly cookiesSettingsButton: Locator;
    readonly rejectAllButton: Locator;
    readonly acceptAllButton: Locator;
    readonly closeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.banner = page.locator('id=onetrust-banner-sdk');
        this.policyText = page.locator('id=onetrust-policy-text');
        this.privacyLink = page.getByRole('link', { 
            name: 'More information about your privacy, opens in a new tab' 
        });
        this.byClickingText = page.getByText('By clicking "Accept All"');
        this.cookiesSettingsButton = page.getByRole('button', { name: 'Cookies Settings' });
        this.rejectAllButton = page.locator('id=onetrust-reject-all-handler');
        this.acceptAllButton = page.locator('id=onetrust-accept-btn-handler');
        this.closeButton = page.getByRole('button', { name: 'Close' });
    }

    async verifyBannerElements() {
        await this.banner.isVisible();
        await this.policyText.isVisible();
        await this.privacyLink.isVisible();
        await this.byClickingText.isVisible();
        await this.cookiesSettingsButton.isVisible();
        await this.rejectAllButton.isVisible();
        await this.acceptAllButton.isVisible();
        await this.closeButton.isVisible();
    }

    async acceptAllCookies() {
        await this.acceptAllButton.focus();
        await this.acceptAllButton.click();
    }

    async rejectAllCookies() {
        await this.rejectAllButton.click();
    }

    async openCookiesSettings() {
        await this.cookiesSettingsButton.click();
    }

    async closeBanner() {
        await this.closeButton.click();
    }

    async isVisible(): Promise<boolean> {
        return await this.banner.isVisible();
    }
}