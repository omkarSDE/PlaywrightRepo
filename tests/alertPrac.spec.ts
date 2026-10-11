import {test, expect} from '@playwright/test';

test('alertPrac test 1', async ({ page }) => {
  console.log('alertPractest1');
  await page.goto('https://testautomationcentral.com/demo/alerts.html');

  //alert popup
//  page.on('dialog',async(dialog)=>{
//    console.log(dialog.message());
//     dialog.accept('Test input');

//  })
//    await page.getByRole('button', { name: 'Alert' }).click();
//     await page.getByRole('button', { name: 'Show Alert' }).click();
//     await page.waitForTimeout(5000);
    

//prompt popup
//  page.on('dialog',async(dialog)=>{
//    console.log(dialog.message());
//     dialog.accept('Test input');

//  })
//    await page.getByRole('button', { name: 'Prompt' }).click();
//     await page.getByRole('button', { name: 'Show Prompt' }).click();
//     await page.waitForTimeout(5000);
    

//confrim popup
 page.on('dialog',async(dialog)=>{
   console.log(dialog.message());
   await dialog.dismiss();

 })
   await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('button', { name: 'Show Confirm' }).click();
     console.log(await page.locator('#confirm-message').textContent());
    
});