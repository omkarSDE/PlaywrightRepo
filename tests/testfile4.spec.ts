import { test } from '@playwright/test';

test('testfile4 test 1', async ({ page }) => {
  console.log('testfile4test1');
  await page.waitForTimeout(5000);
});

test('testfile4 test 2', async ({ page }) => {
  console.log('testfile4test2');
  await page.waitForTimeout(5000);
});