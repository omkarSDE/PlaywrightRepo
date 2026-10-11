import { test } from '@playwright/test';

test('testfile5 test 1', async ({ page }) => {
  console.log('testfile5test1');
  await page.waitForTimeout(5000);
});

test('testfile5 test 2', async ({ page }) => {
  console.log('testfile5test2');
  await page.waitForTimeout(5000);
});