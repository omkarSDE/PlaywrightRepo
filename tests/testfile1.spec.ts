import { test } from '@playwright/test';

test('testfile1 test 1', async ({ page }) => {
  console.log('testfile1test1');
  await page.waitForTimeout(2000);
});

test('testfile1 test 2', async ({ page }) => {
  console.log('testfile1test2');
  await page.waitForTimeout(2000);
  
});