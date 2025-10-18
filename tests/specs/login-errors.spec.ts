import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Error Scenarios', () => {
    let homePage: HomePage;
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        await homePage.load();
        await loginPage.navigateToLogin();
    });

    test('should show error with invalid email', async ({ page }) => {
        // Arrange
        const invalidEmail = "invalid-email@test.com";
        const validPassword = process.env.HUDL_FAN_PASSWORD!;

        // Act
        await loginPage.emailInput.fill(invalidEmail);
        await loginPage.continueButton.click();
        await loginPage.passwordInput.fill(validPassword);
        await loginPage.continueButton.click();

        // Assert
        // Verify error message is displayed
        await expect(page.getByText("Incorrect username or password.")).toBeVisible();
        
        // Verify we're still on login page or error page
        await expect(loginPage.passwordInput).toBeVisible();
        await expect(loginPage.continueButton).toBeVisible();
    });

    test('should show error with invalid password', async ({ page }) => {
        // Arrange
        const validEmail = process.env.HUDL_FAN_EMAIL!;
        const invalidPassword = "WrongPassword123";

        // Act
        await loginPage.emailInput.fill(validEmail);
        await loginPage.continueButton.click();
        await loginPage.passwordInput.fill(invalidPassword);
        await loginPage.continueButton.click();

        // Assert
        // Verify password error message
        await expect(page.getByText("Your email or password is incorrect. Try again.")).toBeVisible();
        
        // Verify we're still on password entry page
        await expect(loginPage.passwordInput).toBeVisible();
        await expect(loginPage.continueButton).toBeVisible();
    });

    test('should show error with empty email', async ({ page }) => {
        // Arrange
        const emptyEmail = "";
        const validPassword = process.env.HUDL_FAN_PASSWORD!;

        // Act
        await loginPage.emailInput.fill(emptyEmail);
        await loginPage.continueButton.click();

        // Assert
        // Verify email required error
        await expect(page.getByText("Enter an email address")).toBeVisible();
        
        // Verify we're still on email entry page
        await expect(loginPage.emailInput).toBeVisible();
        await expect(loginPage.continueButton).toBeVisible();
    });

    test('should show error with empty password', async ({ page }) => {
        // Arrange
        const validEmail = process.env.HUDL_FAN_EMAIL!;
        const emptyPassword = "";

        // Act
        await loginPage.emailInput.fill(validEmail);
        await loginPage.continueButton.click();
        await loginPage.passwordInput.fill(emptyPassword);
        await loginPage.continueButton.click();

        // Assert
        // Verify password required error
        await expect(page.getByText("Enter your password.")).toBeVisible();
        
        // Verify we're still on password entry page
        await expect(loginPage.passwordInput).toBeVisible();
        await expect(loginPage.continueButton).toBeVisible();
    });

    test('should show error with empty credentials', async ({ page }) => {
        // Arrange
        const emptyEmail = "";
        const emptyPassword = "";

        // Act
        await loginPage.emailInput.fill(emptyEmail);
        await loginPage.continueButton.click();

        // Asseet
        // Verify email required error (since password screen won't appear without email)
        await expect(page.getByText("Enter an email address")).toBeVisible();
        
        // Verify we never reached password screen
        await expect(loginPage.passwordInput).not.toBeVisible();
    });

    test('should show error with malformed email', async ({ page }) => {
        // Arrange
        const malformedEmail = "not-an-email";
        const validPassword = process.env.HUDL_FAN_PASSWORD!;

        // Act
        await loginPage.emailInput.fill(malformedEmail);
        await loginPage.continueButton.click();

        // Assert
        // Verify email format error
        await expect(page.getByText("Enter a valid email.")).toBeVisible();
        
        // Verify we're still on email entry page
        await expect(loginPage.emailInput).toBeVisible();
        await expect(loginPage.continueButton).toBeVisible();
    });

    test.afterEach(async ({ page }) => {
    await page.waitForTimeout(1000);
    });
});