import { test } from '@playwright/test';

test('testfile2 test 1', async ({ page }) => {
  console.log('testfile2test1');
  await page.waitForTimeout(5000);
});

test('testfile2 test 2', async ({ page }) => {
  console.log('testfile2test2');
  await page.waitForTimeout(5000);
});