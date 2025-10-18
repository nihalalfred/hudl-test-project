import { Locator, Page } from "playwright/test";
import { CookieBanner } from "./CookieBanner";

export class HomePage {
    readonly page: Page;
    readonly cookieBanner: CookieBanner;
    readonly hudlLogo : Locator;
    readonly navBarSolutions: Locator;
    readonly navBarResourcesAndSupport: Locator;
    readonly navBarCompany: Locator;
    readonly navBarLanguageSelector: Locator;
    readonly navBarSearchTeamsAndAthletes: Locator;
    readonly navBarLogin: Locator;
    readonly landingVideo: Locator;
    readonly landingTitleHeading: Locator;
    readonly landingSubTitle: Locator;
    readonly wantHudlText: Locator;
    readonly talkToOurTeamLink: Locator;
    readonly homepageHeroButtonTeams: Locator;
    readonly forCoachesAndTeamsLink: Locator;
    readonly bannerSearchTeamsAndAthletes: Locator;
    readonly homepageHeroButtonFans: Locator;
    readonly forFansAndFamiliesLink: Locator;

    constructor (page:Page) {
        this.page = page;
        this.cookieBanner = new CookieBanner(page);
        // Navigation elements
        this.hudlLogo = page.getByTestId("site-logo");
        this.navBarSolutions = page.getByRole('link', { name: 'Solutions', exact: true });
        this.navBarResourcesAndSupport = page.getByRole('link', { name: 'Resources & Support' });
        this.navBarCompany = page.getByRole('link', { name: 'Company', exact: true });
        this.navBarLanguageSelector = page.getByRole('combobox', {name: 'Language selector'}).first();
        this.navBarSearchTeamsAndAthletes = page.getByRole('link', {name: 'Search Teams & Athletes'}).first()
        this.navBarLogin = page.getByTestId("login-select");
        
        // Landing page elements
        this.landingVideo = page.locator('video');
        this.landingTitleHeading = page.getByRole('heading', { name: 'Change the Way You See the' });
        this.landingSubTitle = page.getByText('We help athletes, teams,');
        
        // Additional elements
        this.wantHudlText = page.getByText('Want Hudl for your program?');
        this.talkToOurTeamLink = page.getByRole('link', { name: 'Talk to our team' });
        this.homepageHeroButtonTeams = page.locator('id=homepage-hero_button-teams');
        this.forCoachesAndTeamsLink = page.getByRole('link', { name: 'For Coaches and Teams Search' });
        this.bannerSearchTeamsAndAthletes = page.getByRole('banner').getByRole('link', { name: 'Search Teams & Athletes' });
        this.homepageHeroButtonFans = page.locator('id=homepage-hero_button-fans');
        this.forFansAndFamiliesLink = page.getByRole('link', { name: 'For Fans and Families Watch' });
    }

    async load() {
        await this.page.goto('/');
    }

    async verifyHomePageElements(){
    // NavBar Elements
    await this.hudlLogo.isVisible();
    await this.navBarSolutions.isVisible();
    await this.navBarResourcesAndSupport.isVisible();
    await this.navBarCompany.isVisible();
    await this.navBarLanguageSelector.isVisible();
    await this.navBarSearchTeamsAndAthletes.isVisible();
    await this.navBarLogin.isVisible();
    
    // Landing Elements
    await this.landingVideo.isVisible();
    await this.landingTitleHeading.isVisible()
    await this.landingSubTitle.isVisible();
  
    // Additional elements
    await this.wantHudlText.isVisible();
    await this.talkToOurTeamLink.isVisible();
    await this.homepageHeroButtonTeams.isVisible();
    await this.forCoachesAndTeamsLink.isVisible();
    await this.bannerSearchTeamsAndAthletes.isVisible();
    await this.homepageHeroButtonFans.isVisible();
    await this.forFansAndFamiliesLink.isVisible();
    }

    async acceptCookiesAndVerifyHomePage() {
        if (await this.cookieBanner.isVisible()) {
            await this.cookieBanner.verifyBannerElements();
            await this.cookieBanner.acceptAllCookies();
        }
        await this.verifyHomePageElements();
    }
}
