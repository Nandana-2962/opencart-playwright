# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> User login test @master @sanity @regression
- Location: tests\Login.spec.ts:41:5

# Error details

```
Error: locator.click: Unexpected token " " while parsing css selector "span : has-text("My Account")". Did you mean to CSS.escape it?
Call log:
  - waiting for span : has-text("My Account")

```

# Test source

```ts
  1  | import {Page, expect, Locator} from "@playwright/test";
  2  | 
  3  | export class HomePage{
  4  | 
  5  |     private readonly page: Page;
  6  |     //locators
  7  |     private readonly lnkMyAccount: Locator;
  8  |     private readonly lnkRegister: Locator;
  9  |     private readonly LinkLogin: Locator;
  10 |     private readonly txtSearchBox: Locator;
  11 |     private readonly btnSearch: Locator
  12 | 
  13 |     //constructor
  14 |     constructor(page: Page) {
  15 |         this.page = page;
  16 |         this.lnkMyAccount = page.locator('span : has-text("My Account")');
  17 |         this.lnkRegister = page.locator('a:has-text("Register")');
  18 |         this.LinkLogin = page.locator('a:has-text("Login")');
  19 |         this.txtSearchBox = page.locator('input[placeholder="Search"]');
  20 |         this.btnSearch = page.locator('#search button[ type= "button" ]');
  21 |     }
  22 | 
  23 |     //action methods
  24 |     //check if home page exists
  25 |     async isHomePageExists() {
  26 |         let title:string = await this.page.title();
  27 |         if(title){
  28 |             return true;
  29 |         }
  30 |         return false;
  31 |     }
  32 | 
  33 | // click on My Account link
  34 |     async clickMyAccount() {
  35 |         try {
> 36 |             await this.lnkMyAccount.click();
     |                                     ^ Error: locator.click: Unexpected token " " while parsing css selector "span : has-text("My Account")". Did you mean to CSS.escape it?
  37 |         } catch (error) {
  38 |             console.error("Error clicking on My Account link:", error);
  39 |             throw error; // Rethrow the error after logging it
  40 |         }
  41 |     }   
  42 |     async clickRegister(){
  43 |         try{
  44 |             await this.lnkRegister.click();
  45 |         }catch (error){
  46 |             console.error("Error clicking on register link:", error);
  47 |             throw error;
  48 |         }
  49 |     }
  50 |     
  51 |     async clickLogin(){
  52 |         try{
  53 |             await this.LinkLogin.click();
  54 |         }catch (error){
  55 |             console.error("Error clicking on login link:", error);
  56 |             throw error;
  57 |         }
  58 |         
  59 |     }
  60 |     //enter product name in search box
  61 |     async enterProductName(pName: string) {
  62 |         try {
  63 |             await this.txtSearchBox.fill(pName);
  64 |         } catch (error) {
  65 |             console.error("Error entering product name in search box:", error);
  66 |             throw error; // Rethrow the error after logging it
  67 |         }
  68 |     }
  69 | 
  70 |     //click on search button
  71 |     async clickSearch() {
  72 |         try {
  73 |             await this.btnSearch.click();
  74 |         } catch (error) {
  75 |             console.error("Error clicking on search button:", error);
  76 |             throw error; // Rethrow the error after logging it
  77 |         }
  78 |     }
  79 | 
  80 | 
  81 | }
```