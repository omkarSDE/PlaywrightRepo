import { test } from '@playwright/test';

test('testfile3 test 1', async ({ page }) => {
  console.log('testfile3test1');
  await page.waitForTimeout(5000);
});

test('testfile3 test 2', async ({ page }) => {
  console.log('testfile3test2');
  await page.waitForTimeout(5000);
});