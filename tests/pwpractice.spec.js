const{test,expect}=require('@playwright/test');

test('home page',async({page})=>{
    
    await page.goto('https://www.demoblaze.com/index.html');
    
    const pageTitle=await page.title();
    console.log('Page title is:',pageTitle);

    await expect(page).toHaveTitle('STORE')

    const pageURL=page.url();
    console.log('Page url is :',pageURL);

    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

    await page.close();
})