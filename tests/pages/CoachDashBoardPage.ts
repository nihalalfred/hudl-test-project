import { Locator, Page } from "@playwright/test";

export class CoachDashboardPage {
    readonly page: Page;
    
    // Top Navigation Elements
    readonly hudlLogo: Locator;
    readonly homeLink: Locator;
    readonly watchNowLink: Locator;
    readonly uploadLink: Locator;
    readonly calendarLink: Locator;
    readonly notificationsLink: Locator;
    readonly messagesLink: Locator;
    readonly profileAvator: Locator;
    readonly profileName: Locator;

    // Menu Bar Elements
    readonly coachTeamLogo: Locator;
    readonly coachTeamName: Locator;
    readonly libraryMenu: Locator;
    readonly reportsMenu: Locator;
    readonly teamMenu: Locator;
    readonly highlightsMenu: Locator;
    readonly recruitingMenu: Locator;
    
    // Feed Elements
    readonly feedSearchTextBox : Locator;
    readonly feedTabPanel: Locator;
    readonly featuredTabPanel: Locator;
    readonly yourTeamsTabPanel: Locator;
    readonly suggestionsHeading: Locator;
    readonly moreSuggestionsLink: Locator;
    readonly firstFeedCard : Locator;
    

    
    constructor(page: Page) {
        this.page = page;

        // Top Navigation Elements
        this.hudlLogo = page.locator('.hui-globalnav__home-icon.hui-globalnav__home-logo');
        this.homeLink = page.getByRole('link', { name: 'Home' });
        this.watchNowLink = page.getByRole('link', { name: 'Watch Now' });
        this.uploadLink = page.getByRole('link', { name: 'upload Upload' });
        this.calendarLink = page.getByRole('link', { name: 'CalendarIcon' });
        this.notificationsLink = page.getByRole('link', { name: 'notifications' });
        this.messagesLink = page.getByRole('link', { name: 'messages' });
        this.profileAvator = page.locator(".hui-globaluseritem__avatar");
        this.profileName = page.locator(".hui-globaluseritem__display-name");

        // Menu Bar Elements
        this.coachTeamLogo = page.locator(".uni-avatar__img").first();
        this.coachTeamName = page.locator(".hui-primaryteamswitcher__display-name").first();
        this.libraryMenu = page.getByRole('link', {name: 'Library'});
        this.reportsMenu = page.getByRole('link', {name: 'Reports'});
        this.teamMenu =  page.getByText('Team', { exact: true });
        this.highlightsMenu = page.getByRole('link', {name: 'Highlights'});
        this.recruitingMenu = page.getByText('Recruiting');

        // Feed Elements
        this.feedSearchTextBox = page.getByRole('searchbox', { name: 'Search' });
        this.feedTabPanel = page.locator('xpath=//span[normalize-space()="Feed"]'); 
        this.featuredTabPanel = page.locator('xpath=//span[normalize-space()="Featured"]'); 
        this.yourTeamsTabPanel = page.locator('xpath=//span[normalize-space()="Your Teams"]'); 
        this.suggestionsHeading = page.getByTitle('Suggestions', {exact : true});
        this.moreSuggestionsLink = page.getByRole('button', {name: 'More Suggestions'});
        this.firstFeedCard = page.locator('.uni-card').first();


    }

    async verifyCoachDashboard() {
        // Verify top navigation elements are visible
        await this.hudlLogo.isVisible();
        await this.homeLink.isVisible();
        await this.watchNowLink.isVisible();
        await this.uploadLink.isVisible();
        await this.calendarLink.isVisible();
        await this.notificationsLink.isVisible();
        await this.messagesLink.isVisible();
        await this.profileAvator.isVisible();
        await this.profileName.isVisible();

        // Verify menu bar elements are visible
        await this.coachTeamLogo.isVisible();
        await this.coachTeamName.isVisible;
        await this.libraryMenu.isVisible();
        await this.reportsMenu.isVisible();
        await this.teamMenu.isVisible();
        await this.highlightsMenu.isVisible();
        await this.recruitingMenu.isVisible();

        // Verify Feed Elements
        await this.feedSearchTextBox.isVisible();
        await this.feedTabPanel.isVisible();
        await this.featuredTabPanel.isVisible();
        await this.yourTeamsTabPanel.isVisible();
        await this.suggestionsHeading.isVisible();
        await this.moreSuggestionsLink.isVisible();
        await this.firstFeedCard.isVisible();
    
    }

    async navigateToHome() {
        await this.homeLink.click();
    }

    async navigateToWatch() {
        await this.watchNowLink.click();
    }

    async navigateToUpload() {
        await this.uploadLink.click();
    }

    async navigateToCalendar() {
        await this.calendarLink.click();
    }

    async openNotifications() {
        await this.notificationsLink.click();
    }

    async openMessages() {
        await this.messagesLink.click();
    }

    async clickHudlLogo() {
        await this.hudlLogo.click();
    }

     async getUserProfileName(): Promise<string> {
        return await this.profileName.textContent() || '';
    }

    async clickFeedPanelTab() {
        await this.feedTabPanel.click();
    }

    async clickFeaturedPanelTab() {
        await this.featuredTabPanel.click();
    }

    async clickYourTeamsPanelTab() {
        await this.yourTeamsTabPanel.click();
    }
};