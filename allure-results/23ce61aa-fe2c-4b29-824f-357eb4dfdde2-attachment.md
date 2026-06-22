# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apitesting\post_api_Request_02_creatBooking.spec.ts >> Create Post request using json file body
- Location: tests\apitesting\post_api_Request_02_creatBooking.spec.ts:16:5

# Error details

```
Error: ENOENT: no such file or directory, open 'C:\Users\nandana.kv\Desktop\opencart-playwright\testdata\post_request_body.json'
```

# Test source

```ts
  1  | /*
  2  | Test: create booking
  3  | Request type: Post
  4  | Request body: JSON file
  5  | 
  6  | Add url to playwright.config.ts file
  7  | 	baseURL: 'https://restful-booker.herokuapp.com'
  8  |  
  9  | 
  10 | */
  11 | 
  12 | //// <reference types="node" />
  13 | import { test, expect } from "@playwright/test";
  14 | import fs from 'fs';
  15 | 
  16 | test("Create Post request using json file body", async({ request }) => {
  17 | 
  18 |     //read data from json (request body)
  19 |     const jsonFile="testdata/post_request_body.json";
> 20 |     const requestBody=JSON.parse(fs.readFileSync(jsonFile,'utf-8'));
     |                                     ^ Error: ENOENT: no such file or directory, open 'C:\Users\nandana.kv\Desktop\opencart-playwright\testdata\post_request_body.json'
  21 | 
  22 |     
  23 |     // send post request
  24 | 
  25 |     const response=await request.post("/booking",{data:requestBody});
  26 | 
  27 |     const responseBody=await response.json();  // Extractred response
  28 |     console.log(responseBody);
  29 |     
  30 |     //validate status
  31 |     expect(response.ok()).toBeTruthy();
  32 |     expect(response.status()).toBe(200);
  33 | 
  34 |     //validate response body attributes
  35 |     expect(responseBody).toHaveProperty("bookingid")
  36 |     expect(responseBody).toHaveProperty("booking")
  37 |     expect(responseBody).toHaveProperty("booking.additionalneeds")
  38 | 
  39 |     //validate booking details
  40 |     const booking=responseBody.booking;
  41 | 
  42 | 
  43 |     expect(booking).toMatchObject({
  44 |         firstname: requestBody.firstname,
  45 |         lastname: requestBody.lastname,
  46 |         totalprice: requestBody.totalprice,
  47 |         depositpaid: requestBody.depositpaid,
  48 |         additionalneeds: requestBody.additionalneeds
  49 |     });
  50 | 
  51 |     //validate booking dates (nested json object)
  52 |     expect(booking.bookingdates).toMatchObject({
  53 |             checkin: requestBody.bookingdates.checkin,
  54 |             checkout: requestBody.bookingdates.checkout,
  55 |         });
  56 | 
  57 | 
  58 | 
  59 | })
```