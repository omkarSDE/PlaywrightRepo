import { expect, type Locator, type Page } from '@playwright/test';

/** Reusable actions and assertions for Playwright tests. */
export class Actions {
  constructor(private readonly page: Page) {}

  async click(locator: Locator, timeout?: number): Promise<void> {
    await locator.click({ timeout });
  }

  async doubleClick(locator: Locator, timeout?: number): Promise<void> {
    await locator.dblclick({ timeout });
  }

  async fill(locator: Locator, value: string, timeout?: number): Promise<void> {
    await locator.fill(value, { timeout });
  }

  async type(locator: Locator, value: string, timeout?: number): Promise<void> {
    await locator.pressSequentially(value, { timeout });
  }

  async text(locator: Locator): Promise<string> {
    return (await locator.innerText()).trim();
  }

  async selectOption(locator: Locator, value: string): Promise<void> {
    await locator.selectOption(value);
  }

  async check(locator: Locator): Promise<void> {
    await locator.check();
  }

  async uncheck(locator: Locator): Promise<void> {
    await locator.uncheck();
  }

  async waitForVisible(locator: Locator, timeout?: number): Promise<void> {
    await locator.waitFor({ state: 'visible', timeout });
  }

  async waitForHidden(locator: Locator, timeout?: number): Promise<void> {
    await locator.waitFor({ state: 'hidden', timeout });
  }

  async expectVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible();
  }

  async expectText(locator: Locator, expected: string): Promise<void> {
    await expect(locator).toHaveText(expected);
  }

  async navigate(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async reload(): Promise<void> {
    await this.page.reload();
  }

   async CreateRandomName(): Promise<string> {
     let texts:string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
     let randomName:string = '';
      for (let i = 0; i < 10; i++) {
        randomName += texts.charAt(Math.floor(Math.random() * texts.length));
      }
    return randomName;
  }
}

export default Actions;