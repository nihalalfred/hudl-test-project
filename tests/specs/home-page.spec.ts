import {test, expect, Browser, Page} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'
import { HomePage } from '../pages/HomePage';
import { CookieBanner } from '../pages/CookieBanner';

test.describe('Home Page Tests', () => {
let homePage: HomePage;

test.beforeEach(async({page}) => {

  //Arrange
  homePage = new HomePage(page);

});

test('should load home page successfully', async ({ page }) => {
        // Arrange
        const expectedUrl = 'https://www.hudl.com/';

        // Act
        await homePage.load();

        // Assert
        await expect(page).toHaveURL(expectedUrl);
    });

    test('should display all home page content elements', async ({ page }) => {
        // Arrange
        await homePage.load();

        // Act - Handle cookies if present
        if (await homePage.cookieBanner.isVisible()) {
            await homePage.cookieBanner.acceptAllCookies();
        }

        // Assert
        await homePage.verifyHomePageElements();
    });

    test('should properly handle cookie banner acceptance', async ({ page }) => {
        // Arrange
        await homePage.load();
        await page.waitForLoadState('networkidle');
        // Skip test if no cookie banner is not present
        if (!(await homePage.cookieBanner.isVisible())) {
            test.skip();
            return;
        }

        // Act
        await homePage.cookieBanner.acceptAllCookies();

        // Assert
        await expect(homePage.cookieBanner.banner).not.toBeVisible();
    });

    test('should display all cookie banner elements when present', async ({ page }) => {
        // Arrange
        await homePage.load();
        await page.waitForLoadState('networkidle');
        // Skip test if no cookie banner is not present
        if (!(await homePage.cookieBanner.isVisible())) {
            test.skip();
            return;
        }

        // Act & Assert (verification is the action we're testing)
        await homePage.cookieBanner.verifyBannerElements();
    });

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(1000);

});
});