import { test, expect, Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { CoachDashboardPage } from '../pages/CoachDashBoardPage';
import { FanDashboardPage } from '../pages/FanDashBoardPage';

test.describe('Login Success Tests', () => {

    async function setupTest(page: Page) {
        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);
        await homePage.load();
        if (await homePage.cookieBanner.isVisible()) {
            await homePage.cookieBanner.acceptAllCookies();
        }
        await loginPage.navigateToLogin();
        return { homePage, loginPage };
    }

    test('Coach should login successfully with valid credentials', async ({ page }) => {
        // Arrange
        const { loginPage } = await setupTest(page);
        const coachDashboardPage = new CoachDashboardPage(page);
        const testCoachEmail = process.env.HUDL_COACH_EMAIL;
        const testCoachPassword = process.env.HUDL_COACH_PASSWORD;

        if (!testCoachEmail || !testCoachPassword) {
            throw new Error('HUDL_COACH_EMAIL or HUDL_COACH_PASSWORD environment variables are not set');
        }

        // Act
        await loginPage.login(testCoachEmail, testCoachPassword);
        await page.waitForLoadState('networkidle');

        // Assert
        const actualTitle = await loginPage.getPageTitle();
        expect(actualTitle).toEqual("Home - Hudl");
        await coachDashboardPage.verifyCoachDashboard();
    });

    test('Fan should login successfully with valid credentials', async({page}) => {
        // Arrange
        const { loginPage } = await setupTest(page);
        const fanDashboardPage = new FanDashboardPage(page);
        const testFanEmail = process.env.HUDL_FAN_EMAIL;
        const testFanPassword = process.env.HUDL_FAN_PASSWORD;

        if (!testFanEmail || !testFanPassword) {
            throw new Error('HUDL_FAN_EMAIL or HUDL_FAN_PASSWORD environment variables are not set');
        }

        // Act
        await loginPage.login(testFanEmail, testFanPassword);
        await page.waitForLoadState('networkidle');

        // Assert
        const actualTitle = await loginPage.getPageTitle();
        expect(actualTitle).toEqual("Hudl - Fan");
        await fanDashboardPage.verifyFanDashboard();
    });
    
    test.afterEach(async ({ page }) => {
        await page.waitForTimeout(1000);
    });
});