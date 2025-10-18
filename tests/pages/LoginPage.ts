import { Locator, Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    
    // Login page elements
    readonly loginLink: Locator;
    readonly hudlLoginButton: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly continueButton: Locator;


    constructor(page: Page) {
        this.page = page;
        
        this.loginLink = page.getByRole("link", { name: "Log in" });
        this.hudlLoginButton = page.getByTestId("login-hudl");
        this.emailInput = page.getByRole("textbox", { name: "Email" });
        this.passwordInput = page.getByRole("textbox", { name: "Password" });
        this.continueButton = page.getByRole("button", { name: "Continue", exact: true });
    }

    async navigateToLogin() {
        await this.loginLink.click();
        await this.hudlLoginButton.click();
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.continueButton.click();
        await this.passwordInput.fill(password);
        await this.continueButton.click();
    }

    async getPageTitle(): Promise<string> {
        return await this.page.title();
    }

};