import {Page, expect, Locator} from "@playwright/test";

export class HomePage{

    private readonly page: Page;
    //locators
    private readonly lnkMyAccount: Locator;
    private readonly lnkRegister: Locator;
    private readonly LinkLogin: Locator;
    private readonly txtSearchBox: Locator;
    private readonly btnSearch: Locator

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.lnkMyAccount = page.locator('span:has-text("My Account")');
        this.lnkRegister = page.locator('a:has-text("Register")');
        this.LinkLogin = page.locator('a:has-text("Login")');
        this.txtSearchBox = page.locator('input[placeholder="Search"]');
        this.btnSearch = page.locator('#search button[ type= "button" ]');
    }

    //action methods
    //check if home page exists
    async isHomePageExists() {
        let title:string = await this.page.title();
        if(title){
            return true;
        }
        return false;
    }

// click on My Account link
    async clickMyAccount() {
        try {
            await this.lnkMyAccount.click();
        } catch (error) {
            console.error("Error clicking on My Account link:", error);
            throw error; // Rethrow the error after logging it
        }
    }   
    async clickRegister(){
        try{
            await this.lnkRegister.click();
        }catch (error){
            console.error("Error clicking on register link:", error);
            throw error;
        }
    }
    
    async clickLogin(){
        try{
            await this.LinkLogin.click();
        }catch (error){
            console.error("Error clicking on login link:", error);
            throw error;
        }
        
    }
    //enter product name in search box
    async enterProductName(pName: string) {
        try {
            await this.txtSearchBox.fill(pName);
        } catch (error) {
            console.error("Error entering product name in search box:", error);
            throw error; // Rethrow the error after logging it
        }
    }

    //click on search button
    async clickSearch() {
        try {
            await this.btnSearch.click();
        } catch (error) {
            console.error("Error clicking on search button:", error);
            throw error; // Rethrow the error after logging it
        }
    }


}